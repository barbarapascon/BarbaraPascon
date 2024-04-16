/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/3651728.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
"I am a software engineer with solid experience in designing architectures that integrate legacy systems with modern technologies at renowned places like Banco do Brasil and IBM. My work involves transforming technical complexities into elegant solutions, using tools such as Java, Node.js, Angular, and TypeScript. Driven by innovation and accessibility, I dedicate myself to creating frameworks that not only meet operational needs but also make technology accessible to everyone.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Integration of legacy systems with modern APIs",
  "Java for backend API maintenance",
  "Frontend development with Angular and TypeScript",
  "Automated testing with Jenkins",
  "ChatBot development using IBM Watson",
  "Scalable architecture enhancement with Node.js",
  "Database management customization with MongoDB",
  "Machine learning application for decision-making",
  "Development of user interfaces for mobile and web",
  "Social network platform maintenance with React and GraphQL"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
"I am dedicated to enhancing system efficiencies and user experiences through innovative solutions, aiming to create a better world through technology. With a strong background in software engineering and full-stack development, I focus on integrating legacy systems with modern APIs to improve operational workflows. My extensive experience with Java, Node.js, and frontend technologies like Angular and TypeScript enables me to build robust and intuitive applications. Committed to leveraging my skills in machine learning and data science, I continually seek ways to make technology more intuitive and accessible, ensuring that the solutions I develop not only meet diverse user needs but also contribute positively to society.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
