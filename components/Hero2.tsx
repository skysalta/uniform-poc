
import React from "react";

export const Hero2 = ({ component }) => {
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {component.parameters.message?.value}
    </div>
  );
};