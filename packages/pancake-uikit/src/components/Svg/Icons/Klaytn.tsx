import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 2000 1975.1" {...props}>
      <path fill="#4F473B" d="M1047.4,982.5l683.3,678.3c359.1-380.9,359.1-975.7,0-1356.6" />
      <path fill="#4F473B" d="M997.5,1027.4l-673.3,668.3l673.3,279.3l673.3-279.3" />
      <path fill="#4F473B" d="M972.6,957.6l698.3-693.3L1027.4,0L389,1541.2L972.6,957.6z" />
      <path fill="#4F473B" d="M0,982.5c-0.5,252.3,95.9,495.1,269.3,678.3l668.3-1611" />
    </Svg>
  );
};

export default Icon;
