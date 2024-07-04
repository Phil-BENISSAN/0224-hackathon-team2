import React from "react";

export default function HeaderCard() {
  return (
    <>
      <h2 className="text-center text-5xl text-accent my-16">Pourquoi choisir Accessibil-IT ?</h2>
    <section className="flex justify-center gap-16">
      <article className="card card-compact bg-base-100 w-96 shadow-xl p-2 border border-accent">
        <figure>
        <img
            src="https://cdn.discordapp.com/attachments/1257972687305707567/1258351049090273320/Delivery_Time.png?ex=6687ba3d&is=668668bd&hm=b9a94910f90f06464bdbc5808090ad65e18cad2fb9f457e1a1b014ba8d9cadf0&"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-center text-accent">Rapidité</h2>
          <p className="px-8 text-[17px] text-center">
          Notre plateforme garantit un processus rapide et efficace, permettant d'obtenir des résultats détaillés et précis en un minimum de temps.
          </p>
        </div>
      </article>
      <article className="card card-compact bg-base-100 w-96 shadow-xl p-2 border border-accent">
        <figure>
          <img
            src="https://cdn.discordapp.com/attachments/1257972687305707567/1258351048892874762/Puzzle_Matching.png?ex=6687ba3d&is=668668bd&hm=d14c6d782d7ead7270c023460ca7c08f365544000bfca5ee67d37f6598a9bfe9&"
            alt=""
          />
        </figure>
        <div className="card-body">
        <h2 className="text-2xl text-center text-accent">Intégration</h2>
        <p className="px-8 text-[17px] text-center">
          Vous pouvez passer les tests rapidement et obtenir des résultats fiables, ce qui facilite une intégration efficace dans l'entreprise.
          </p>
        </div>
      </article>
      <article className="card card-compact bg-base-100 w-96 shadow-xl p-2 border border-accent">
        <figure>
          <img
            src="https://cdn.discordapp.com/attachments/1257972687305707567/1258351049387802654/Life_Cycle.png?ex=6687ba3d&is=668668bd&hm=ee6d153e4f428716efb214562e55ceda9a5ee34daafe4b113e95c7f1c5449c23&"
            alt=""
          />
        </figure>
        <div className="card-body ">
        <h2 className="text-2xl  text-center text-accent">Évaluation</h2>
        <p className="px-8 text-[17px] text-center">
          Nous vous aidons à progresser en identifiant rapidement vos compétences, augmentant ainsi vos chances de trouver l'entreprise qui vous convient.
          </p>
        </div>
      </article>
    </section>
    </>
  );
}
