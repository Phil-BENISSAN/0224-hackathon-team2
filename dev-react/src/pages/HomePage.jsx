import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HeaderCard from "../components/HeaderCard";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Concept from "../components/Concept";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <body className="overflow-hidden">
      <main className="min-h-screen">
        <div className="flex flex-col items-center justify-center h-[37vw] bg-[url('https://cdn.discordapp.com/attachments/1257972687305707567/1258351513240211476/Frame_309.png?ex=6687baab&is=6686692b&hm=06371486cf7caf551b818aba7f0e9066b2b383b2de035f355c970f1f0de041b4&')] bg-center bg-cover h-[25rem] mb-16 ">
          <h1 className="text-6xl font-bold text-accent m-10 mt-16 mb-4">
            Trouvez votre place dans le monde IT
          </h1>
          <p className="mb-5 text-accent text-xl">
            Votre plateforme de recrutement inclusif, basée uniquement sur vos compétences
            réelles.
          </p>
          <Link className="btn btn-primary mx-auto text-xl px-8 mb-20">
            Se connecter
          </Link>
        </div>
        <HeaderCard />
        <h2 className="text-center text-5xl text-accent my-16 mt-48">
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
        <Review/>
        <Concept/>
      </main>
      <Footer />
    </body>
  );
}
