import React from "react";
const LOGO = "/assets/Hospital_Logo.png";

const HeaderPublic: React.FC = () => {
  return (
    <nav
      className="bg-hospital"
      style={{
        padding: "12px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Logo / Brand */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "white",
            textDecoration: "none",
            letterSpacing: "1px",
          }}
        >
          <img
            src={LOGO}
            alt="Saroja Hospital Logo"
            style={{ height: "40px", width: "40px", objectFit: "contain" }}
          />
          <span>Saroja Hospital</span>
        </a>

        {/* Menu Items */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "30px",
            margin: 0,
            padding: 0,
          }}
        >
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "#services" },
            // { label: "Hospital Module", href: "#hospital-module" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="menu-link"
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "0.3s",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Login Button */}
          <li>
            <a
              href="/login"
              className="login-btn"
              style={{
                background: "white",
                color: "#0d6efd",
                padding: "6px 16px",
                borderRadius: "25px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "0.3s",
              }}
            >
              Login
            </a>
          </li>
        </ul>
      </div>

      {/* Inline CSS hover effect can be replaced with CSS */}
      <style>
        {`
          .menu-link:hover {
            color: #ffd700;
          }
          .login-btn:hover {
            background: #ffd700;
            color: #000;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            nav ul {
              flex-direction: column;
              gap: 15px;
              align-items: flex-start;
              margin-top: 10px;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default HeaderPublic;
