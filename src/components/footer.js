import React from "react";

function footer() {
  return (
    <div className="row footer">
      <div className="col-md-12">
        <div className="mt-5 ml-5 mb-5">
          <img src="images/logo.png" alt="logo" className="logo"></img>
        </div>
      </div>
      <div className="col-md-4 mx-auto border-right text-center">
        <p className="font-weight-bold text-white">Laboratoires Salem</p>
        <p className="text-muted">Nos engagements</p>
        <p className="text-muted">Nos savoir-faire</p>
        <p className="text-muted">Nos évolutions</p>
      </div>
      <div className="col-md-4 mx-auto border-light border-right text-center">
        <p className="font-weight-bold text-white">A propos</p>
        <p className="text-muted">Actualité</p>
        <p className="text-muted">Contact</p>
        <p className="text-muted">Presse</p>
        <p className="text-muted">Mentions légales</p>
      </div>
      <div className="col-md-4 mx-auto text-center">
        <p className="font-weight-bold text-white">Espace professionnel</p>
        <p className="text-muted">Accès direct</p>
      </div>

      <div className="col-md-4 mt-5 mx-auto border-right text-center">
        <p className="font-weight-bold text-white">Votre santé</p>
        <p className="text-muted">Nos médicaments</p>
        <p className="text-muted">Pharmacovigilance</p>
        <p className="text-muted">Dossier santé</p>
      </div>
      <div className="col-md-4 mt-5 mx-auto border-light border-right text-center">
        <p className="font-weight-bold text-white">Médias sociaux</p>
        <a class="btn-floating btn-lg btn-tw" type="button" role="button">
          <i class="fa fa-twitter"></i>
        </a>
        <a class="btn-floating btn-lg btn-tw" type="button" role="button">
          <i class="fa fa-facebook"></i>
        </a>
        <a class="btn-floating btn-lg btn-tw" type="button" role="button">
          <i class="fa fa-linkedin"></i>
        </a>
        <a class="btn-floating btn-lg btn-tw" type="button" role="button">
          <i class="fa fa-youtube"></i>
        </a>
      </div>
      <div className="col-md-4 mt-5 mx-auto text-center">
        <p className="font-weight-bold text-white">Nos Services</p>
        <p className="text-muted">www</p>
        <p className="text-muted">www</p>
        <p className="text-muted">www</p>
      </div>
    </div>
  );
}

export default footer;
