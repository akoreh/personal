import React from "react";

const SVGIcon = ({ src, name, className, style }) => (
  <img className={className} style={style} src={src} alt={name} />
);

export default SVGIcon;
