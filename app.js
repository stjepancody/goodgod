document.querySelectorAll('.colapse').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    
    // Smooth animation
    const content = button.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});