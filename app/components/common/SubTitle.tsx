/** @format */

import React from "react";
interface Props {
  fTitle: string;
  sTitle: string;
  subTitle: string;
}
function SubTitle({ fTitle, sTitle, subTitle }: Props) {
  return (
    <div className="text-center mb-12 max-w-4xl mx-auto">
      <h2 className="text-xl mt-10 md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
       {fTitle} 
        <br />
        {sTitle}
      </h2>
      <p className="text-gray-600 text-lg">
        {subTitle}
      </p>
    </div>
  );
}

export default SubTitle;
