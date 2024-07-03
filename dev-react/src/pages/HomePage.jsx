import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HeaderCard from "../components/HeaderCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <body>
      <main className="min-h-screen">
        <NavBar />
        <HeaderCard />
        <h2 className="text-center text-4xl font-bold m-10">
          Ils nous font confiance
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
