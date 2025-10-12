import React from "react";

// ✅ Use public folder paths directly
const SLIDER1 = "/assets/images/slider/slider1.jpg";
const SLIDER2 = "/assets/images/slider/slider2.jpg";
const SLIDER3 = "/assets/images/slider/slider3.jpg";

const Home: React.FC = () => {
  const services = [
    {
      icon: "fas fa-stethoscope",
      title: "Gallbladder Stone Treatment",
      description: "Safe and advanced treatment for gallbladder stones with minimal discomfort.",
    },
    {
      icon: "fas fa-user-md",
      title: "Appendix, Hernia, Piles, Prostate, Kidney Stone",
      description: "Comprehensive surgical and non-surgical care for multiple conditions.",
    },
    {
      icon: "fas fa-lungs",
      title: "Acidity, Stomach Pain, Constipation, TB/UTI, Allergy & Asthma",
      description: "Personalized care for digestive, respiratory, and urinary tract issues.",
    },
    {
      icon: "fas fa-heartbeat",
      title: "Blood Pressure, Heart Disease, Thyroid, Liver Infection, Diabetes",
      description: "Expert management of chronic and lifestyle-related conditions.",
    },
    {
      icon: "fas fa-notes-medical",
      title: "Colonoscopy, Endoscopy, Laser Treatments",
      description: "Advanced endoscopy and painless laser treatments for precise diagnosis and care.",
    },
    {
      icon: "fas fa-briefcase-medical",
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical care and quick response for critical conditions.",
    },
  ];

  return (
    <div>
      {/* Hero / Slider Section */}
      <section style={{ borderTop: "5px solid white" }}>
        <div
          id="hospitalCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#hospitalCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#hospitalCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#hospitalCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={SLIDER1}
                className="d-block w-100"
                alt="Digital Health Ecosystem"
                style={{ objectFit: "cover", height: "350px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={SLIDER2}
                className="d-block w-100"
                alt="Compassionate Care"
                style={{ objectFit: "cover", height: "350px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={SLIDER3}
                className="d-block w-100"
                alt="24x7 Emergency Services"
                style={{ objectFit: "cover", height: "350px" }}
              />
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hospitalCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hospitalCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{ padding: "60px 20px", background: "#f8f9fa" }}
      >
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
              fontWeight: "700",
              color: "#0a58ca",
            }}
          >
            Our Services
          </h2>

          <div className="row text-center g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-4">
                <div
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "30px 20px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    transition: "0.3s",
                    height: "100%",
                  }}
                  onMouseOver={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-8px)")
                  }
                  onMouseOut={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)")
                  }
                >
                  {/* Icon */}
                  <div className="mb-3">
                    <i
                      className={`${service.icon} fa-3x text-primary`}
                    ></i>
                  </div>

                  {/* Title */}
                  <h5 style={{ fontWeight: "600", marginBottom: "10px" }}>
                    {service.title}
                  </h5>

                  {/* Description */}
                  <p style={{ fontSize: "0.95rem", color: "#555" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-hospital"
        style={{
          color: "white",
          padding: "20px 10px",
          textAlign: "center",
        }}
      >
        <p style={{ marginBottom: "5px" }}>
          © 2025 Saroja Hospital. All rights reserved.
        </p>
        
      </footer>
    </div>
  );
};

export default Home;
