document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Example of adding functionality for soil test submission
if (document.getElementById('soil-test-form')) {
    document.getElementById('soil-test-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('location').value;
        // Fetch results based on location, this is where the database interaction would happen
        document.getElementById('soil-results').innerText = `Results for ${location} will be displayed here.`;
    });
}

