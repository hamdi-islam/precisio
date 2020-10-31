import React from "react";
import { FormattedMessage } from "react-intl";

export default function details() {
  return (
    <div className="row details">
      <div className="col-md-8">
        <div className="ml-5 mt-5">
          <h1 className="text-white" style={{ fontSize: 42 }}>
            <FormattedMessage id="details.header" />
          </h1>
          <h3 className="text-white">
            <FormattedMessage id="details.subHeader" />
          </h3>
        </div>
        <div className="ml-5 mt-5 font-weight-bold">
          <h5 className="text-white">
            <FormattedMessage id="details.question" />
          </h5>
          <ol>
            <li className="text-white mt-5 font-weight-bold">
              <FormattedMessage id="details.answer1" />
            </li>
            <li className="text-white font-weight-bold">
              <FormattedMessage id="details.answer2" />
            </li>
          </ol>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="circle"></div>
          </div>
          <div className="w-100 mt-2">
            <p className="text-center text-white">Certifications</p>
          </div>
          <div className="col-md-12 mb-3">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
