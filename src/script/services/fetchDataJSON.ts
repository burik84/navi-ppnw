//TODO: this block dosen't use beacuse CORS
export const getData = async () => {
  const rawResponse = await fetch('../public/source.json', {
    method: 'GET',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log('Something went wrong', error.message);
    });

  // const data = await rawResponse.json();
  return rawResponse;
};

function arrayBufferToString(arrayBuffer: any, decoderType = 'utf-8') {
  const decoder = new TextDecoder(decoderType);
  return decoder.decode(arrayBuffer);
}

const getObj = (str: string | ArrayBuffer) => {
  const strNew = String(str).replace(/\s+/g, ' ');

  const data = JSON.parse(strNew);
  return data;
};

export const getDataFromFile = async (event: any) => {
  // const pathFile = event.target.value;
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  const result = await new Promise((res, rej) => {
    reader.onload = function (event) {
      if (event.target && file.name === 'source.json') {
        const content = event.target.result || '';
        const data = getObj(content);
        res(data);
      }
    };
    reader.onerror = function () {
      console.log('Something went wrong', reader.error);
      rej(reader.error);
    };
  });
  return result;
};
