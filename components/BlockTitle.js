import React from "react";

const BlockTitle = (props) => {
  return (
    <div className={`block-title text-${props.textAlign} `}>
      <p>{props.paraText}</p>
      <h1>{props.titleText}</h1>
    </div>
  );
};

export default BlockTitle;
