import React from "react";
import { MathComponent } from "mathjax-react";
function MathJax() {
  return (
    <div className="content-wrapper">
      <h1 className="bg-blue p-3">
        Actual Formulae using MathJax, These are not the images{" "}
      </h1>
      <div className="ml-4 p-3 bg-light border border-secondary">
        <label htmlFor=""> The Inegration Representation</label>
        <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />
      </div>
    </div>
  );
}

export default MathJax;
