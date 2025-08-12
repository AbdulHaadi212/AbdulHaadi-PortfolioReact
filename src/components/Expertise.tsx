import React from "react";
import "../assets/styles/Expertise.scss";

const About: React.FC = () => {
  return (
    <section className="about-section" id="expertise">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m Abdul Haadi, a passionate full-stack developer who turns ideas into fast, responsive, and visually stunning digital experiences.

            I thrive on crafting modern web applications that don’t just work flawlessly but also feel intuitive and engaging to use. From pixel-perfect front-end designs to efficient back-end architectures, I love blending creativity with clean, scalable code.

            When I’m not coding, you’ll find me exploring emerging tech trends, experimenting with new frameworks, or fine-tuning my skills to stay ahead in the ever-evolving world of development.

            If you’re looking for innovation, reliability, and a dash of creativity, let’s make something amazing together!


          </p>
          <a href="#contact" className="cta-btn">
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
