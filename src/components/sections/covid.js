import React from "react";
import { FormattedMessage } from "react-intl";
function covid() {
  return (
    <div className="row covid">
      <div className="col-md-10">
        <h1 className="ml-5" style={{ color: "#7E327E", fontSize: 64 }}>
          <FormattedMessage id="covid.header" />
        </h1>
      </div>
      <div className="col-md-8">
        <h2 className="ml-5" style={{ color: "#AD7DAD" }}>
          <FormattedMessage id="covid.subHeader" />
        </h2>
        <p className="ml-5">
          <FormattedMessage id="covid.details" />
        </p>
        <p className="ml-5 font-italic" style={{ color: "#AD7DAD" }}>
          <FormattedMessage id="covid.note" />
        </p>
      </div>
      <div className="col-md-4">
        <div className="circle"></div>
      </div>
      <div className="col-md-4">
        <div className="circle mt-5 mb-5"></div>
      </div>
      <div className="col-md-8 my-auto">
        <h2 className="mt-5 mr-5" style={{ color: "#AD7DAD" }}>
          <FormattedMessage id="covid.header2" />
        </h2>
        <p className="mr-5">
          <FormattedMessage id="covid.details2" />
        </p>
      </div>
    </div>
  );
}

export default covid;
