import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const questions = [
  {
    section: "Extraversion vs. Introversion",
    questions: [
      {
        text: "Quand vous êtes dans une fête, que préférez-vous faire ?",
        options: [
          { text: "Parler avec beaucoup de gens différents", value: "a" },
          {
            text: "Avoir des discussions profondes avec quelques personnes",
            value: "b",
          },
          { text: "Observer les gens sans interagir beaucoup", value: "c" },
        ],
      },
      {
        text: "Comment rechargez-vous vos batteries après une longue semaine ?",
        options: [
          { text: "Sortir avec des amis", value: "a" },
          { text: "Lire un bon livre ou regarder un film seul(e)", value: "b" },
          {
            text: "Faire une activité créative comme dessiner ou écrire",
            value: "c",
          },
        ],
      },
    ],
  },
  {
    section: "Sensation vs. Intuition",
    questions: [
      {
        text: "Quand vous devez prendre une décision importante, comment procédez-vous ?",
        options: [
          {
            text: "Je fais une liste des avantages et des inconvénients",
            value: "a",
          },
          { text: "Je fais confiance à mon instinct", value: "b" },
          { text: "Je demande l'avis de plusieurs personnes", value: "c" },
        ],
      },
      {
        text: "Quel type d'activité préférez-vous ?",
        options: [
          { text: "Des activités pratiques et concrètes", value: "a" },
          { text: "Des activités créatives et imaginatives", value: "b" },
          {
            text: "Des activités qui impliquent la réflexion et la planification",
            value: "c",
          },
        ],
      },
    ],
  },
  {
    section: "Pensée vs. Sentiment",
    questions: [
      {
        text: "Lorsque vous recevez une critique, comment réagissez-vous ?",
        options: [
          {
            text: "J'analyse la critique pour voir si elle est fondée",
            value: "a",
          },
          {
            text: "Je la prends à cœur et elle me touche personnellement",
            value: "b",
          },
          {
            text: "Je l'ignore si elle ne me semble pas constructive",
            value: "c",
          },
        ],
      },
      {
        text: "Comment gérez-vous les conflits ?",
        options: [
          {
            text: "J'essaie de résoudre le problème de manière logique et rationnelle",
            value: "a",
          },
          {
            text: "Je cherche à comprendre les sentiments de l'autre personne",
            value: "b",
          },
          { text: "J'évite les conflits autant que possible", value: "c" },
        ],
      },
    ],
  },
  {
    section: "Jugement vs. Perception",
    questions: [
      {
        text: "Comment planifiez-vous vos vacances ?",
        options: [
          { text: "Je planifie tout à l'avance", value: "a" },
          { text: "Je laisse de la place pour l'improvisation", value: "b" },
          { text: "Je pars sans plan précis", value: "c" },
        ],
      },
      {
        text: "Comment gérez-vous votre emploi du temps ?",
        options: [
          { text: "Je fais des listes et des plannings", value: "a" },
          { text: "Je m'adapte au fur et à mesure", value: "b" },
          { text: "Je préfère ne pas me fixer de contraintes", value: "c" },
        ],
      },
    ],
  },
];

const allQuestions = questions.flatMap((section) => section.questions);
console.log(allQuestions);

export default function Question() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleNext = () => {
    setQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, allQuestions.length - 1)
    );
  };

  const handlePrevious = () => {
    setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted", answers);
    navigate("/");
  };

  const currentQuestion = allQuestions[questionIndex];
  const currentAnswer = answers[`q${questionIndex + 1}`];

  return (
    <main>
      <h1 className="text-4xl">Question</h1>
      <form className="space-y-4 m-8" onSubmit={handleSubmit}>
        <legend className="text-lg font-bold">
          {
            questions.find((section) =>
              section.questions.includes(currentQuestion)
            ).section
          }
        </legend>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">{currentQuestion.text}</span>
          </label>
          {currentQuestion.options.map((option, optionIndex) => (
            <label key={optionIndex} className="label cursor-pointer">
              <span className="label-text">{option.text}</span>
              <input
                type="radio"
                name={`q${questionIndex + 1}`}
                value={option.value}
                className="radio checked:bg-red-500"
                onChange={handleAnswerChange}
                checked={answers[`q${questionIndex + 1}`] === option.value}
              />
            </label>
          ))}
        </div>
        <div className="flex justify-around">
          <Link to="/">Accueil</Link>
          {questionIndex > 0 && (
            <button type="button" onClick={handlePrevious} className="btn">
              Précédent
            </button>
          )}
          {questionIndex < allQuestions.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn"
              disabled={!currentAnswer}
            >
              Suivant
            </button>
          ) : (
            <button type="submit" className="btn" disabled={!currentAnswer}>
              Submit
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
