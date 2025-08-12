import React from "react";
import "../assets/styles/Main.scss"; // Adjust path if needed
import bgLight1 from "../assets/images/image1.png";
import bgLight2 from "../assets/images/image2.png";
import bgLight3 from "../assets/images/image3.png";
import bgLight4 from "../assets/images/image4.png";
import bgLight5 from "../assets/images/image5.png";
import bgLight6 from "../assets/images/image6.png";
import bgLight7 from "../assets/images/AI1.jpg";
import bgLight8 from "../assets/images/AI2.jpg";
import bgLight9 from "../assets/images/AI3.jpg";
import bgLight10 from "../assets/images/AI4.jpg";
import bgLight11 from "../assets/images/AI5.jpg";
import bgLight12 from "../assets/images/AI6.jpg";
import bgLight13 from "../assets/images/Chat1.jpg";
import bgLight14 from "../assets/images/Chat2.jpg";
import bgLight15 from "../assets/images/Chat3.jpg";
import bgLight16 from "../assets/images/Cricket1.jpg";
import bgLight17 from "../assets/images/Cricket2.jpg";
import bgLight18 from "../assets/images/Cricket3.jpg";
import bgLight19 from "../assets/images/Movie1.png";
import bgLight20 from "../assets/images/Movie2.png";
import bgLight21 from "../assets/images/movie4.png";
import bgLight22 from "../assets/images/Insta1.png";
import bgLight23 from "../assets/images/Insta2.png";
import bgLight24 from "../assets/images/Insta3.png";




const App: React.FC = () => {
  return (
    <div>
      {/* Home Section */}
      <section id="home">
        <div className="cover-photo">{/* Cover background in CSS */}</div>
        <div className="profile-picture"></div>
        <div className="home-content">
          <h1>Abdul Haadi</h1>
          <p>Web Developer | Software Developer</p>
        </div>
      </section>

      {/* Multimedia Section 1 */}
      <section id="multimedia">
        <h2>AI Youtube Sentiment Comments Analyzer</h2>
        <div className="media-container">
          <div className="media-item">
            <h3>Project Gallery</h3>
            <div className="image-row">
              <img src={bgLight7} alt="Project Image 1" className="image-left" />
              <img src={bgLight8} alt="Project Image 2" className="image-center" />
              <img src={bgLight9} alt="Project Image 3" className="image-right" />
            </div>

          </div>
        </div>
      </section>

      {/* Multimedia Section 1 */}
      <section id="multimedia">
        <h2>AI Quran Verse Viewer</h2>
        <div className="media-container">
          <div className="media-item">
            <h3>Project Gallery</h3>
            <div className="image-row">
              <img src={bgLight10} alt="Project Image 1" className="image-left" />
              <img src={bgLight11} alt="Project Image 2" className="image-center" />
              <img src={bgLight12} alt="Project Image 3" className="image-right" />
            </div>

          </div>
        </div>
      </section>

      {/* Multimedia Section 1 */}
      <section id="multimedia">
        <h2>Codexa-Chatroom</h2>
        <div className="media-container">
          <div className="media-item">
            <h3>Project Gallery</h3>
            <div className="image-row">
              <img src={bgLight13} alt="Project Image 1" className="image-left" />
              <img src={bgLight14} alt="Project Image 2" className="image-center" />
              <img src={bgLight15} alt="Project Image 3" className="image-right" />
            </div>

          </div>
        </div>
      </section>

      {/* Multimedia Section 1 */}
      <section id="multimedia">
        <h2>Cricket Manager</h2>
        <div className="media-container">
          <div className="media-item">
            <h3>Project Gallery</h3>
            <div className="image-row">
              <img src={bgLight16} alt="Project Image 1" className="image-left" />
              <img src={bgLight17} alt="Project Image 2" className="image-center" />
              <img src={bgLight18} alt="Project Image 3" className="image-right" />
            </div>

          </div>
        </div>
      </section>

      {/* Multimedia Section 1 */}
      <section id="multimedia">
        <h2>AI Insta-Reach Predictor</h2>
        <div className="media-container">
          <div className="media-item">
            <h3>Project Gallery</h3>
            <div className="image-row">
              <img src={bgLight22} alt="Project Image 1" className="image-left" />
              <img src={bgLight23} alt="Project Image 2" className="image-center" />
              <img src={bgLight24} alt="Project Image 3" className="image-right" />
            </div>

          </div>
        </div>
      </section>

      {/* Multimedia Section 1 */}
      <section id="multimedia">
        <h2>Movies Ticket Online</h2>
        <div className="media-container">
          <div className="media-item">
            <h3>Project Gallery</h3>
            <div className="image-row">
              <img src={bgLight19} alt="Project Image 1" className="image-left" />
              <img src={bgLight20} alt="Project Image 2" className="image-center" />
              <img src={bgLight21} alt="Project Image 3" className="image-right" />
            </div>

          </div>
        </div>
      </section>







      {/* Multimedia Section 1 */}
      <section id="multimedia">
        <h2>E-Retail Brand 1st Project</h2>
        <div className="media-container">
          <div className="media-item">
            <h3>Project Gallery</h3>
            <div className="image-row">
              <img src={bgLight1} alt="Project Image 1" className="image-left" />
              <img src={bgLight2} alt="Project Image 2" className="image-center" />
              <img src={bgLight3} alt="Project Image 3" className="image-right" />
            </div>

          </div>
        </div>
      </section>

      {/* Multimedia Section 2 */}
      <section id="multimedia">
        <h2>Portfolio Website for Skillship Competition</h2>
        <div className="media-container">
          <div className="media-item">
            <h3>Project Gallery</h3>
            <div className="image-row">
              <img src={bgLight4} alt="Project Image 4" />
              <img src={bgLight5} alt="Project Image 5" />
              <img src={bgLight6} alt="Project Image 6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
