const API_URL = 'http://localhost:3000/api/portfolio';

// Fetch and display portfolio items
async function loadPortfolio() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayPortfolio(data);
    } catch (error) {
        console.error('Error loading portfolio:', error);
    }
}

// Display portfolio items on the page
function displayPortfolio(items) {
    const container = document.getElementById('portfolio-items');
    
    if (!container) return;
    
    if (items.length === 0) {
        container.innerHTML = '<p>No portfolio items yet.</p>';
        return;
    }
    
    container.innerHTML = items.map(item => `
        <div class="portfolio-card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}

// Add new portfolio item
async function addPortfolio(event) {
    event.preventDefault();
    
    const title = document.getElementById('portfolio-title').value;
    const description = document.getElementById('portfolio-desc').value;
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });
        
        const data = await response.json();
        console.log('Added:', data);
        
        // Reload portfolio items
        loadPortfolio();
        
        // Clear form
        document.getElementById('portfolio-form').reset();
    } catch (error) {
        console.error('Error adding portfolio:', error);
    }
}

// Load portfolio when page loads
window.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
    
    const form = document.getElementById('portfolio-form');
    if (form) {
        form.addEventListener('submit', addPortfolio);
    }
});