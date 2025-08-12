import React from "react";

type EducationItem = {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  details?: string;
};

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Sir Syed University of Engineering & Technology (SSUET)",
    startYear: "Oct 2022",
    endYear: "Jul 2026",
    details: "Undergraduate Software Engineer (SSUET'26)",
  },
  {
    degree: "Fsc, Pre-Engineering",
    institution: "NCR-CET College",
    startYear: "Jul 2020",
    endYear: "Jun 2022",
    details: "Intermediate",
  },
  {
    degree: "Ssc, Computer Science",
    institution: "Al Badr Higher Secondary School",
    startYear: "Apr 2014",
    endYear: "Jul 2020",
    details: "Matriculation",
  },
  {
    degree: "Hifz ul Quran",
    institution: "Mahd Zaid Bin Sabit",
    startYear: "Feb 2012",
    endYear: "Feb 2014",
    details: "Wifaq ul Madaris AlArabia",
  },
  // Add more education items here...
];

const Education: React.FC = () => {
  return (
    <section id="project" style={{ padding: "60px 20px", backgroundColor: "#f5f7fa" }}>
      <h2 style={{
        textAlign: "center",
        fontSize: "2.5rem",
        marginBottom: "40px",
        color: "#34495e",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "2px",
      }}>
        Education
      </h2>

      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        position: "relative",
        paddingLeft: "30px",
        borderLeft: "4px solid #3498db",
      }}>
        {educationData.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              marginBottom: "40px",
              paddingLeft: "20px",
              animation: `fadeInUp 0.6s ease forwards`,
              animationDelay: `${index * 0.2}s`,
              opacity: 0,
            }}
          >
            {/* Circle marker */}
            <div style={{
              position: "absolute",
              left: "-14px",
              top: "5px",
              width: "20px",
              height: "20px",
              backgroundColor: "#3498db",
              borderRadius: "50%",
              border: "4px solid #fff",
              boxShadow: "0 0 8px rgba(52, 152, 219, 0.6)",
            }} />

            <h3 style={{ margin: "0 0 5px 0", color: "#2c3e50" }}>{item.degree}</h3>
            <h4 style={{ margin: "0 0 5px 0", color: "#7f8c8d", fontWeight: "600" }}>{item.institution}</h4>
            <span style={{ fontSize: "0.9rem", color: "#95a5a6" }}>
              {item.startYear} — {item.endYear}
            </span>
            {item.details && (
              <p style={{ marginTop: "10px", color: "#34495e", lineHeight: "1.5" }}>
                {item.details}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Simple fadeInUp animation */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          section#education {
            padding: 40px 10px;
          }
          div[style*="border-left"] {
            padding-left: 20px !important;
            border-left-width: 3px !important;
          }
          div[style*="width: 20px"] {
            width: 15px !important;
            height: 15px !important;
            left: -11px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
