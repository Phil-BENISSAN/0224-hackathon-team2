import React from "react";

export default function Review() {
  return (
    <>
      <h2 className=" text-center text-5xl text-accent my-16 mt-48 mb-0">
        Voir ce que les autres ont à dire
      </h2>
      <p className=" text-center w-[40ch] mx-auto m-10 text-[17px]">
        Nos utilisateurs apprécient l'efficacité des tests ainsi que la qualité
        des retours reçus. Voici ce qu'ils disent de leur expérience.
      </p>
      <section className="flex justify-center gap-16">
        <article className="card bg-base-100 w-96 shadow-xl border border-accent">
          <div className=" card-body">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt=""
              className="rounded-full w-24"
            />
            <div className="relative top-[-5rem] left-[8rem] mb-[-3em]">
              <h2 className="card-title">Megan Montmery</h2>
              <p>Data analyst</p>
            </div>
            <p>
              "Après avoir passé les tests sur cette plateforme, j'ai été
              contacté par plusieurs employeurs intéressés par mon profil. J'ai
              finalement accepté une offre dans une entreprise dynamique où je
              peux continuer à évoluer professionnellement. Le site a joué un
              rôle clé dans ma recherche d'emploi en IT."
            </p>
          </div>
        </article>
        <article className="card bg-base-100 w-96 shadow-xl border border-accent">
          <div className=" card-body">
            <img
              src="https://randomuser.me/api/portraits/men/49.jpg"
              alt=""
              className="rounded-full w-24"
            />
            <div className="relative top-[-5rem] left-[8rem] mb-[-3em]">
              <h2 className="card-title">Joe Hill</h2>
              <p>Developpeur WEB</p>
            </div>
            <p>
              "Grâce à cette plateforme, j'ai pu démontrer mes compétences et
              obtenir un poste en tant que développeur chez une entreprise de
              renom. Les tests sont bien conçus et reflètent parfaitement les
              compétences recherchées par les employeurs. Je recommande vivement
              ce site à tous ceux qui cherchent un emploi dans le secteur IT."
            </p>
          </div>
        </article>
        <article className="card bg-base-100 w-96 shadow-xl border border-accent">
          <div className=" card-body">
            <img
              src="https://randomuser.me/api/portraits/women/73.jpg"
              alt=""
              className="rounded-full w-24"
            />
            <div className="relative top-[-5rem] left-[8rem] mb-[-3em]">
              <h2 className="card-title">Lesa Carlson</h2>
              <p>UI designer</p>
            </div>
            <p>
              "Le site m'a permis de mettre en valeur mes compétences techniques
              et de trouver un emploi rapidement en sortie de formation. Les
              tests étaient à la fois stimulants et pertinents, et le processus
              de candidature était simple et efficace. Je suis très
              reconnaissante pour cette opportunité."
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
