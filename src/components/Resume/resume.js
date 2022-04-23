import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <div className="allResume">
          <h1>Resume</h1>
          <h3>
          <a href="https://docs.google.com/document/d/1vQMCjw9w_M-rwZhCUCfPWKmV6hYcc5ucvww9RfUCYZ4/edit?usp=sharing">Click here to download!</a>
          </h3>
        <h2 className="resume">Front-End Proficiences</h2>
          <div className="front">
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
            <ul>jQuery</ul>
            <ul>React</ul>
            <ul>Bootstrap</ul>
            <ul>Bulma</ul>
          </div>
        <h2 className="resume">Back-End Proficiences</h2>
          <div className="back">
            <ul>APIs</ul>
            <ul>Node</ul>
            <ul>Express</ul>
            <ul>MySql, Sequelize</ul>
            <ul>MonogoDB, Mongoose</ul>
            <ul>REST</ul>
          </div>
        <h2 className="resume">Other Proficiences</h2>
          <div className="other">
            <ul>Gitbash</ul>
            <ul>Heroku</ul>
            <ul>Github</ul>
          </div>
      </div>
    </section>
  );
}

export default Resume;
