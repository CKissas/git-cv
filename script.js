document.addEventListener('DOMContentLoaded', () => {
  // Get all dots, labels, and content sections
  const dots = document.querySelectorAll('.timeline-dot');
  const labels = document.querySelectorAll('.timeline-label');
  const contents = document.querySelectorAll('.content-section');

  // Function to activate a specific index
  function activateSection(index) {
    dots.forEach(d => d.classList.remove('active'));
    labels.forEach(l => l.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    dots[index].classList.add('active');
    labels[index].classList.add('active');
    contents[index].classList.add('active');
  }

  // Add click events for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => activateSection(index));
  });

  // Add click events for labels
  labels.forEach((label, index) => {
    label.addEventListener('click', () => activateSection(index));
  });

  // Initialize the first section as active
  if (dots.length > 0) activateSection(0);
});


// Generic function to load HTML content into a container
function loadContent(url, containerId) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Network response was not ok for ${url}`);
      return response.text();
    })
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
    })
    .catch(error => console.error('Error loading content:', error));
}

// Map of section IDs to their HTML files
const sections = {
  about: 'etc/text/about.html',
  experience: 'etc/text/experience.html',
  projects: 'etc/text/projects.html',
  contact: 'etc/text/contact.html'
};

// Load all sections dynamically
for (const [id, path] of Object.entries(sections)) {
  loadContent(path, id);
}
