export default function AboutUs() {
  return (
    <main>
      <h1 className="text-4xl font-semibold text-center m-8">Notre Equipe</h1>
      <section className="flex flex-wrap justify-around gap-4">
        <article className="card bg-base-100 w-80 shadow-xl">
          <div className=" card-body">
            <img
              src="https://randomuser.me/api/portraits/men/49.jpg"
              alt=""
              className="rounded-full w-24"
            />
            <div className="relative top-[-5rem] left-[8rem] mb-[-3em]">
              <h2 className="card-title text-sm">Teodora Tache</h2>
              <p className="text-xs">UX/UI Designer</p>
            </div>
            <p className="text-sm my-4">
              "Après avoir passé les tests de compétences sur cette plateforme,
              j'ai reçu plusieurs offres d'emploi de la part d'entreprises
              intéressées par mon profil de UX/UI designer. J'ai décidé de
              rejoindre une entreprise créative où je peux continuer à
              développer des interfaces utilisateur intuitives et esthétiques.
              Cette plateforme a joué un rôle déterminant dans ma quête d'un
              emploi en design UX/UI." "
            </p>
          </div>
        </article>
        <article className="card bg-base-100 w-80 shadow-xl">
          <div className=" card-body">
            <img
              src="https://randomuser.me/api/portraits/men/49.jpg"
              alt=""
              className="rounded-full w-24"
            />
            <div className="relative top-[-5rem] left-[8rem] mb-[-3em]">
              <h2 className="card-title text-sm">Anthony Robert</h2>
              <p className="text-xs">Data analyst</p>
            </div>
            <p className="text-sm my-4">
              "Après avoir passé les tests sur cette plateforme, j'ai été
              contacté par plusieurs employeurs intéressés par mon profil. J'ai
              finalement accepté une offre dans une entreprise dynamique où je
              peux continuer à évoluer professionnellement. Le site a joué un
              rôle clé dans ma recherche d'emploi en IT."
            </p>
          </div>
        </article>
        <article className="card bg-base-100 w-80 shadow-xl">
          <div className=" card-body">
            <img
              src="https://randomuser.me/api/portraits/men/49.jpg"
              alt=""
              className="rounded-full w-24"
            />
            <div className="relative top-[-5rem] left-[8rem] mb-[-3em]">
              <h2 className="card-title text-sm">Fabien Rollet</h2>
              <p className="text-xs">Developper Full Stack</p>
            </div>
            <p className="text-sm my-4">
              "Grâce aux tests passés sur cette plateforme, j'ai rapidement été
              sollicité par plusieurs entreprises cherchant des développeurs
              full stack. J'ai choisi de rejoindre une start-up innovante où je
              peux mettre en pratique mes compétences en développement web et
              back-end. Cette plateforme a été essentielle pour ma recherche
              d'emploi dans le domaine du développement full stack."
            </p>
          </div>
        </article>
        <article className="card bg-base-100 w-80 shadow-xl">
          <div className=" card-body">
            <img
              src="https://randomuser.me/api/portraits/men/49.jpg"
              alt=""
              className="rounded-full w-24"
            />
            <div className="relative top-[-5rem] left-[8rem] mb-[-3em]">
              <h2 className="card-title text-sm">Quentin Tri Tran Huu</h2>
              <p className="text-xs">Data Analist</p>
            </div>
            <p className="text-sm my-4">
              "Suite aux tests de compétences effectués sur cette plateforme,
              plusieurs entreprises ont manifesté de l'intérêt pour mon profil
              de data analyst. J'ai accepté une offre d'une entreprise innovante
              où je peux exploiter et analyser de grandes quantités de données
              pour fournir des insights précieux. Cette plateforme a été
              essentielle pour ma recherche d'emploi dans le domaine de
              l'analyse de données."
            </p>
          </div>
        </article>
        <article className="card bg-base-100 w-80 shadow-xl">
          <div className=" card-body">
            <img
              src="https://randomuser.me/api/portraits/men/49.jpg"
              alt=""
              className="rounded-full w-24"
            />
            <div className="relative top-[-5rem] left-[8rem] mb-[-3em]">
              <h2 className="card-title text-sm">Alexandre Moro</h2>
              <p className="text-xs">Developper Full Stack</p>
            </div>
            <p className="text-sm my-4">
              "Après avoir effectué les tests techniques sur cette plateforme,
              plusieurs recruteurs ont manifesté de l'intérêt pour mon profil de
              développeur full stack. J'ai accepté une proposition dans une
              société en pleine croissance, où j'ai la possibilité de travailler
              sur des projets variés et stimulants. La plateforme m'a
              considérablement aidé à trouver un emploi qui correspond
              parfaitement à mes aspirations professionnelles."
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
