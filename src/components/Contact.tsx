import React from "react";
import '../assets/styles/Contact.scss'


const ContactSection: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out through any of the following platforms!</p>
      <h2>Click on your favourite Social Media platform to see presence</h2>

      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <span>03202008602</span>
        </div>

        <div className="contact-item">
          <i className="fab fa-whatsapp"></i>
          <a href="https://wa.me/923202008602" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>

        <div className="contact-item">
          <i className="fab fa-facebook-f"></i>
          <a
            href="https://www.facebook.com/share/1ArBMZpb8i/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

        <div className="contact-item">
          <i className="fab fa-instagram"></i>
          <a
            href="https://www.instagram.com/abdul_h_a_a_d_i?igsh=OG13OG9ybnVwZG9i"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        <div className="contact-item">
          <i className="fab fa-tiktok"></i>
          <a
            href="https://www.tiktok.com/@abdul.haadi61?_t=8pf2cPW8Yky&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </div>

        <div className="contact-item">
          <i className="fab fa-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/abdul-haadi-2ba97b255"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:haadialiraj2003@gmail.com">haadialiraj2003@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
