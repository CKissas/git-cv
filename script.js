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
