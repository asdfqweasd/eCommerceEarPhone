declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module "*.{jpeg,png,gif}" {
  const value: any;
  const src: string;
  export default src;
}
declare module "*.jpg";
declare module "*.png";

declare module "body-scroll-lock";
