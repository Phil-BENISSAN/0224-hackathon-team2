export default function AboutUs() {
  return (
    <main>
      <h1 className="text-6xl text-center font-bold text-accent m-10 mt-16 mb-4">
        Bienvenue chez Accessibil IT !
      </h1>
      <p className="mx-56 text-center mb-16">
        Nous sommes ravis de vous présenter Accessibil IT, une plateforme de
        recrutement spécialisée dans le domaine I.T. Notre mission est d'aider
        les jeunes diplômés, les participants aux bootcamps et les étudiants
        fraîchement sortis de l'école à trouver leur première opportunité
        professionnelle dans le secteur de l'IT, même sans expérience préalable.
      </p>
      <section className="flex justify-center items-center gap-16 pb-20">
        <article className="card card-compact bg-base-100 w-96 h-[30rem] shadow-xl p-2 border border-accent">
          <figure>
            <img
              src="https://cdn.discordapp.com/attachments/1257972687305707567/1258351048892874762/Puzzle_Matching.png?ex=6687ba3d&is=668668bd&hm=d14c6d782d7ead7270c023460ca7c08f365544000bfca5ee67d37f6598a9bfe9&"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl text-center text-accent">
              Pour les candidats :
            </h2>
            <p className="px-8 text-[17px] text-center">
              Chez Accessibil IT, nous croyons que chaque talent mérite une
              chance de prouver sa valeur, même sans expérience formelle. Nous
              offrons aux candidats la possibilité de passer un test complet qui
              évalue leurs compétences techniques et leurs soft-skills à travers
              une série de questions techniques et de mises en situation. Ce
              test est conçu pour mettre en lumière leur potentiel et leurs
              aptitudes, au-delà de leur simple expérience professionnelle.
            </p>
          </div>
        </article>
        <article className="card card-compact bg-base-100 w-96 h-[35rem] shadow-xl p-2 border border-accent">
          <figure>
            <img
              src="https://cdn.discordapp.com/attachments/1257972687305707567/1258351048892874762/Puzzle_Matching.png?ex=6687ba3d&is=668668bd&hm=d14c6d782d7ead7270c023460ca7c08f365544000bfca5ee67d37f6598a9bfe9&"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl text-center text-accent">
              Pour les entreprises :
            </h2>
            <p className="px-8 text-[17px] text-center">
              Nous collaborons étroitement avec les entreprises pour proposer
              des candidats répondant à leurs attentes spécifiques, en se basant
              sur les résultats des tests de compétences techniques et humaines.
              Les entreprises accèdent uniquement aux résultats des candidats
              retenus, évitant ainsi les biais. Les informations personnelles ne
              sont révélées qu'au moment de l'entretien, ce qui réduit l'impact
              des préjugés et favorise une sélection basée sur les compétences.
            </p>
          </div>
        </article>
        <article className="card card-compact bg-base-100 w-96 h-[30rem] shadow-xl p-2 border border-accent">
          <figure>
            <img
              src="https://cdn.discordapp.com/attachments/1257972687305707567/1258351048892874762/Puzzle_Matching.png?ex=6687ba3d&is=668668bd&hm=d14c6d782d7ead7270c023460ca7c08f365544000bfca5ee67d37f6598a9bfe9&"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl text-center text-accent">
              Notre objectif :
            </h2>
            <p className="px-8 text-[17px] text-center">
              En offrant une plateforme qui met en avant les compétences et les
              aptitudes, Accessibil IT s'engage à ouvrir des portes pour les
              jeunes talents et à faciliter leur intégration sur le marché du
              travail. Nous croyons fermement qu'avec le bon soutien, chaque
              candidat peut réussir et apporter une valeur ajoutée à l'industrie
              de l'IT.
            </p>
          </div>
        </article>
      </section>
      <section className="bg-[#f8eeec] pt-8">
        <h2 className="text-center text-5xl text-accent my-16 ">
          Notre équipe
        </h2>
        <section className="flex flex-wrap justify-center gap-10 gap-y-18 w-[80%] mx-auto">
          <article className="">
            <div className="">
              <img
                src="https://randomuser.me/api/portraits/men/49.jpg"
                alt=""
                className="rounded-full w-80"
              />
              <h2 className="text-center text-[20px] font-bold">Teodora Tache</h2>
              <p className="text-center text">UX/UI Designer</p>
            </div>
          </article>
          <article className="">
            <div className="">
              <img
                src="https://randomuser.me/api/portraits/men/49.jpg"
                alt=""
                className="rounded-full w-80"
              />
              <h2 className="text-center text-[20px] font-bold">Anthony Robert</h2>
              <p className="text-center text">Data analyst</p>
            </div>
          </article>
          <article className="">
            <div className="">
              <img
                src="https://randomuser.me/api/portraits/men/49.jpg"
                alt=""
                className="rounded-full w-80"
              />
              <h2 className="text-center text-[20px] font-bold">Quentin Tru Tran Huu</h2>
              <p className="text-center text">Data analyst</p>
            </div>
          </article>
          <article className="">
            <div className="">
              <img
                src="https://randomuser.me/api/portraits/men/49.jpg"
                alt=""
                className="rounded-full w-80"
              />
              <h2 className="text-center text-[20px] font-bold">Fabien Rollet</h2>
              <p className="text-center text">Développeur WEB Full Stack</p>
            </div>
          </article>
          <article className="">
            <div className="">
              <img
                src="https://randomuser.me/api/portraits/men/49.jpg"
                alt=""
                className="rounded-full w-80"
              />
              <h2 className="text-center text-[20px] font-bold">Alexendre Moro</h2>
              <p className="text-center text">Développeur WEB Full Stack</p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
