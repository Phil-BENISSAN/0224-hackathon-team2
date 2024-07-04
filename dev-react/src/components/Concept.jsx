import React from "react";
import { Link } from "react-router-dom";

export default function Concept() {
  return (
    <section className="flex justify-around items-center mt-12 w-screen h-screen bg-[#f8eeec]">
      <div>
        <h2 className="text-4xl my-10">Découvrez votre prochain poste</h2>
        <p className="w-[50ch] text-[18px]">
          Chez Accecibil-IT, nous révolutionnons le processus de recrutement
          pour le rendre plus équitable et axé sur les compétences. En mettant
          de côté les préjugés potentiels liés aux CV, nous permettons aux
          candidats de montrer leur véritable valeur à travers des
          questionnaires à choix multiples (QCM) et des mises en situation
          réalistes.
        </p>
        <Link className="btn btn-success text-xl  my-10">
        Commencer le test --{">"}
        </Link>
      </div>
      <img
        src="https://media.licdn.com/dms/image/D4E22AQGS02Lfn2m7tA/feedshare-shrink_2048_1536/0/1715951512447?e=1723075200&v=beta&t=9hKezk-Z0o1wn6c9ulchoARV_EGvCd5F0MBqOusTYc0"
        alt=""
        className="h-[25rem] rounded-lg "
      />
    </section>
  );
}
