import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const StaticURL = (page:string) => {
  const location = useLocation();

  const path=location.pathname
  let result=""

  useEffect(() => {
    console.log(`Current location ${page} is `, path);
  }, [path]);

  if (path.includes(".html")) {
    result=path
  }
  return result;
};

export const GetStaticURL = (page:string) => {
  const location = useLocation();

  const path=location.pathname
  let result="/main"

  useEffect(() => {
    console.log(`Current location ${page} is `, path);
  }, [path]);

  if (path.includes(".html")) {
    result=`${path}#/`
    console.log(result);
  }
  return result;
};

