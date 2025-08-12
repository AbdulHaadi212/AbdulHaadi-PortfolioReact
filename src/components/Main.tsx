import React from "react";
import "../assets/styles/Main.scss"; // Adjust path if needed
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/AI1.jpg";
import image8 from "../assets/images/AI2.jpg";
import image9 from "../assets/images/AI3.jpg";
import image10 from "../assets/images/AI4.jpg";
import image11 from "../assets/images/AI5.jpg";
import image12 from "../assets/images/AI6.jpg";
import image13 from "../assets/images/Chat1.jpg";
import image14 from "../assets/images/Chat2.jpg";
import image15 from "../assets/images/Chat3.jpg";
import image16 from "../assets/images/Cricket1.jpg";
import image17 from "../assets/images/Cricket2.jpg";
import image18 from "../assets/images/Cricket3.jpg";
import image19 from "../assets/images/Movie1.png";
import image20 from "../assets/images/Movie2.png";
import image21 from "../assets/images/movie4.png";
import image22 from "../assets/images/Insta1.png";
import image23 from "../assets/images/Insta2.png";
import image24 from "../assets/images/Insta3.png";




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
              <img src={image7} alt="Project Image 1" className="image-left" />
              <img src={image8} alt="Project Image 2" className="image-center" />
              <img src={image9} alt="Project Image 3" className="image-right" />
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
              <img src={image10} alt="Project Image 1" className="image-left" />
              <img src={image11} alt="Project Image 2" className="image-center" />
              <img src={image12} alt="Project Image 3" className="image-right" />
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
              <img src={image13} alt="Project Image 1" className="image-left" />
              <img src={image14} alt="Project Image 2" className="image-center" />
              <img src={image15} alt="Project Image 3" className="image-right" />
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
              <img src={image16} alt="Project Image 1" className="image-left" />
              <img src={image17} alt="Project Image 2" className="image-center" />
              <img src={image18} alt="Project Image 3" className="image-right" />
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
              <img src={image22} alt="Project Image 1" className="image-left" />
              <img src={image23} alt="Project Image 2" className="image-center" />
              <img src={image24} alt="Project Image 3" className="image-right" />
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
              <img src={image19} alt="Project Image 1" className="image-left" />
              <img src={image20} alt="Project Image 2" className="image-center" />
              <img src={image21} alt="Project Image 3" className="image-right" />
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
              <img src={image1} alt="Project Image 1" className="image-left" />
              <img src={image2} alt="Project Image 2" className="image-center" />
              <img src={image3} alt="Project Image 3" className="image-right" />
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
              <img src={image4} alt="Project Image 4" />
              <img src={image5} alt="Project Image 5" />
              <img src={image6} alt="Project Image 6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
