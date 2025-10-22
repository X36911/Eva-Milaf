class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        nav {
          background: linear-gradient(135deg, rgba(242, 117, 11, 0.95) 0%, rgba(14, 165, 233, 0.95) 100%);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .nav-links a.active {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, rgba(242, 117, 11, 0.98) 0%, rgba(14, 165, 233, 0.98) 100%);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            display: none;
          }
          
          .nav-links.mobile-open {
            display: flex;
          }
        }
      </style>
      
      <nav>
        <div class="logo">
          <i data-feather="compass"></i>
          Eva Milaf
        </div>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        
        <ul class="nav-links">
          <li><a href="index.html" class="active">Accueil</a></li>
          <li><a href="about.html">Qui Sommes-Nous</a></li>
          <li><a href="offers.html">Offres & Voyages</a></li>
          <li><a href="contact.html">Contactez-Nous</a></li>
        </ul>
      </nav>
    `;
    
    // Add mobile menu functionality
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    
    // Update active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = this.shadowRoot.querySelectorAll('a');
    
    links.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
