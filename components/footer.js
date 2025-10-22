class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          color: white;
          padding: 3rem 2rem 2rem;
          margin-top: auto;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-section h3 {
          color: #f2750b;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }
        
        .footer-section p {
          color: #cbd5e0;
          line-height: 1.6;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: #cbd5e0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #f2750b;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          color: #cbd5e0;
          transition: color 0.3s ease;
        }
        
        .social-links a:hover {
          color: #f2750b;
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 2rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid #4a5568;
          text-align: center;
          color: #a0aec0;
        }
        
        @media (max-width: 768px) {
          footer {
            padding: 2rem 1rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      </style>
      
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Eva Milaf Voyages</h3>
            <p>Voyages d'exception où l'élégance rencontre l'aventure. Nous vous accompagnons dans la création de souvenirs inoubliables.</p>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Liens Rapides</h3>
            <ul class="footer-links">
              <li><a href="index.html">Accueil</a></li>
              <li><a href="about.html">Qui Sommes-Nous</a></li>
              <li><a href="offers.html">Offres & Voyages</a></li>
              <li><a href="contact.html">Contactez-Nous</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Contact</h3>
            <p><i data-feather="phone"></i>(+213)0770.28.31.73<br>(+213)0561.28.78.02</p>
            <p><i data-feather="mail"></i> evamilaf@gmail.com</p>
            <p><i data-feather="map-pin"></i>Relizane, Cité Dallas</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Eva Milaf Agence de Voyages. Tous droits réservés.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
