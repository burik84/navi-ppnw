// Examples from https://github.com/PostHog/posthog.com/blob/master/src/types.ts
export interface IHandle {
  handleChange: (event: any) => Promise<void>;
}
// export interface IPageData {
//   section: string;
// }
export interface IData {
  name: string;
  folder: string;
  urlBase: string;
  file: string;
  title: string;
  description: string;
  titul: string[];
  isShow: boolean;
}
export interface IAppContext {
  theme?: string;
  source?: [];
  isLoad?: boolean;
  setSource: any;
  setTheme: any;
  setIsLoad: any;
}
export interface FeaturesPageData {
  key: string;
  title: string;
  href: string;
  icon: string;
}

export interface FeatureComparisonData {
  title: string;
  posthog: boolean;
  amplitude: boolean;
  mixpanel: boolean;
  heap: boolean;
}

export interface LibraryPluginType {
  id: number;
  name: string;
  description?: string;
  url: string;
  imageLink: string;
  maintainer?: string;
}

export interface MenuProps {
  blogArticleSlug?: string;
  isHomePage?: boolean;
  activeKey: string;
}

export interface MenuQueryNodeType {
  node: {
    name: string;
    link: string;
    a: string;
  };
}

export interface MenuQueryType {
  allMenuItemsJson: {
    edges: MenuQueryNodeType[];
  };
}

export interface Contributor {
  login: string;
  name: string;
  avatar_url: string;
  profile: string;
  contributions: string[];
  level: number;
  mvpWins: number;
}

export interface AuthorsData {
  handle: string;
  image: string;
  link_type: 'twitter' | 'linkedin';
  link_url: string;
  name: string;
  role: string;
}

export interface Classes {
  // classes: Record<"root" | "list" | "dividerFullWidth" | "dividerInset" | "primary" | "secondary", string>;
  classes:{
    root:string;
    list:string;
    primary:string;
    dividerFullWidth?:string;
    secondary?:string;
    dividerInset?:string;
  }
  theme: any;
  css: () => void;
  cx: () => void;
}

