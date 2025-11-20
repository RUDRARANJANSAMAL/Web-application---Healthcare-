
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  btn && btn.addEventListener('click', () => {
    if(!nav) return;
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // Simple form prevention (demo)
  document.querySelectorAll('form').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      alert('Form submitted (demo). In production this will POST to the server.');
    });
  });
});
