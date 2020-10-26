import React from "react";

function covid() {
  return (
    <div className="row covid">
      <div className="col-md-10">
        <h1 className="ml-5" style={{ color: "#7E327E", fontSize: 64 }}>
          Application de rendu de résultat SARS-CoV-2
        </h1>
      </div>
      <div className="col-md-8">
        <h2 className="ml-5" style={{ color: "#AD7DAD" }}>
          Plateforme de dépistage épidémiologique anonyme de la Covid-19 en
          Algérie.
        </h2>
        <p className="ml-5">
          Les laboratoires SALEM mettent à votre disposition un outil digital
          pour enregistrer de façon anonyme les tests Covid-19 de vos patients
          an de suivre la propagation du virus SARS-CoV-2 dans notre pays. Vous
          pouvez consulter les résultats de vos patients et toutes les données
          enregistrés par vos confrères.
        </p>
        <p className="ml-5 font-italic" style={{ color: "#AD7DAD" }}>
          Précisio est une marque des Laboratoires SALEM, filiale Diagnostics.
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
          Gardez vos tests enregistrés et consultez les résultats des autres
          médecins
        </h2>
        <p className="mr-5">
          l'ajout de tests vous aide en tant que médecin à gérer votre
          historique de tests et aide la communauté de la santé à voir où le
          virus se propage.
        </p>
      </div>
    </div>
  );
}

export default covid;
