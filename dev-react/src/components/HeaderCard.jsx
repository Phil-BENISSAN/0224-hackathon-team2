import React from "react";

export default function HeaderCard() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold m-10">Home Page</h1>
    <section className="flex justify-center gap-16">
      <article className="card card-compact bg-base-100 w-64 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p>
            Soyez vous-même et répondez en toute sincérité pour découvrir si une
            entreprise vous correspont
          </p>
        </div>
      </article>
      <article className="card card-compact bg-base-100 w-64 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p>
            Soyez vous-même et répondez en toute sincérité pour découvrir si une
            entreprise vous correspont
          </p>
        </div>
      </article>
      <article className="card card-compact bg-base-100 w-64 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p>
            Soyez vous-même et répondez en toute sincérité pour découvrir si une
            entreprise vous correspont
          </p>
        </div>
      </article>
    </section>
    </>
  );
}
