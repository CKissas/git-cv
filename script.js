const items = document.querySelectorAll('.timeline-item');
const sections = document.querySelectorAll('.content-section');

items.forEach(item => {
  item.addEventListener('click', () => {
    // remove active states
    items.forEach(i => i.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // activate selected
    item.classList.add('active');
    const sectionId = item.dataset.section;
    document.getElementById(sectionId).classList.add('active');
  });
});
