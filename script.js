// Shared JavaScript across all pages
console.log('Eva Milaf Voyages - Chargé avec succès');

// Theme management
function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Form validation
function validateForm(formData) {
    const errors = {};
    
    if (!formData.name?.trim()) {
        errors.name = 'Le nom est requis';
    }
    
    if (!formData.email?.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email invalide';
    }
    
    if (!formData.phone?.trim() || formData.phone.length < 8) {
        errors.phone = 'Numéro de téléphone invalide';
    }
    
    return errors;
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading states to buttons
    document.querySelectorAll('button[type="submit"]').forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="loading-dots">Chargement</span>';
            this.disabled = true;
            
            // Reset after 3 seconds (simulate loading)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 3000);
        });
    });
});

// Language management (placeholder for future implementation)
const languageConfig = {
    current: 'fr',
    available: ['fr', 'en', 'ar'],
    strings: {
        // Will be implemented when backend is ready
    }
};

// Utility function for API calls
async function apiCall(endpoint, options = {}) {
    try {
        const response = await fetch(endpoint, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}
