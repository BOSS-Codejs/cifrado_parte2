import React from "react";
import "./Header-footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Sección de redes sociales
          <div className="footer-section social-media">
            <h4>Síguenos</h4>
            <ul>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
            </ul>
          </div>
          */}

          {/* Sección de descripción */}
          <div className="footer-section description">
            <p>&copy; 2024 MiEmpresa. Todos los derechos reservados.</p>
            <p>Alexander Bautista Hernandez.</p>
          </div>

          {/* Sección de contacto */}
          <div className="footer-section contact">
            <h4>Contacto</h4>
            <p>Email: 20210647@utth.edu.mx</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
