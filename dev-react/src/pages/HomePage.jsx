import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HeaderCard from "../components/HeaderCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Review from "../components/Review";

export default function HomePage() {
  return (
    <body>
      <main className="min-h-screen">
        <NavBar />
        <div className="flex flex-col items-center bg-[url('https://i.kym-cdn.com/photos/images/newsfeed/001/871/712/85e.jpg')] bg-center h-[25rem] mb-16 ">
          <h1 className="text-4xl font-bold m-10 mb-4">
            Trouvez votre place dans le monde IT
          </h1>
          <p className="mb-5">
            Votre plateforme de recrutement inclusif, basée sur vos compétences
            réelles.
          </p>
          <Link className="btn btn-primary mx-auto px-8 mb-20">
            Se connecter
          </Link>
        </div>
        <HeaderCard />
        <h2 className="text-center text-4xl font-bold m-10">
          Nos clients sont notre meilleure garantie
        </h2>
        <ul className="flex flex-wrap justify-evenly">
          <li>
            <img src="" alt="" />
            <p>BNP Paribas</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>Hermes</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>Danone</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>Orange</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>L’ORÉAL</p>
          </li>
        </ul>
        <h2 className=" text-center text-4xl">Voir ce que les autres ont à dire</h2>
        <p className=" text-center">Nos utilisateurs apprécient l'efficacité des tests ainsi que la qualité des retours reçus. Voici ce qu'ils disent de leur expérience.</p>
        <Review/>
        <h2 className=" text-center text-4xl font-bold m-10">Le concept</h2>
        <div className="flex items-center">
          <p className="w-[30%] mx-[10%]">
            Chez Accecibil-IT, nous révolutionnons le processus de recrutement
            pour le rendre plus équitable et axé sur les compétences. En mettant
            de côté les préjugés potentiels liés aux CV, nous permettons aux
            candidats de montrer leur véritable valeur à travers des
            questionnaires à choix multiples (QCM) et des mises en situation
            réalistes.
          </p>
          <img
            src="https://unlck.fr/wp-content/uploads/2022/05/creer-cv-optimiser-redaction-750x325.jpg"
            alt=""
            className="w-[40%]"
          />
        </div>
        <h2 className=" text-center text-4xl font-bold m-10">
          Découvrez votre prochain poste
        </h2>
        <button className="btn block w-[50%] mx-auto text-xl btn-outline mb-[10rem]">
          Commencer le test --{">"}
        </button>
        <Link to="/question">Question</Link>
      </main>
      <Footer />
    </body>
  );
}
