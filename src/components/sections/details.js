import React from "react";

export default function details() {
  return (
    <div className="row details">
      <div className="col-md-8">
        <div className="ml-5 mt-5">
          <h1 className="text-white" style={{ fontSize: 42 }}>
            Fiabilité et reproductibilité
          </h1>
          <h3 className="text-white">
            Certicat de validation du lot disponible sur simple demande.
          </h3>
        </div>
        <div className="ml-5 mt-5 font-weight-bold">
          <h5 className="text-white">Qui utilise ces tests !!!</h5>
          <ol>
            <li className="text-white mt-5 font-weight-bold">
              Validé lot par lot par le Centre National de Référence COVID.
            </li>
            <li className="text-white font-weight-bold">
              Utilisé par le Centre National de Référence COVID pour ses
              analyses de routine.
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
