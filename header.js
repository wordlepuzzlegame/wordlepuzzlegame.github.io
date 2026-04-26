(function buildHeader() {
  const header = document.getElementById('site-header');
  header.innerHTML = `
    <div class="header-inner">
      <a href="/" class="logo" aria-label="WordlePuzzle Home">
        <div class="logo-tiles">
          <div class="logo-tile lt-g">W</div>
          <div class="logo-tile lt-y">P</div>
          <div class="logo-tile lt-b">Z</div>
        </div>
        WordlePuzzle
      </a>
      <nav id="main-nav" role="navigation" aria-label="Main Navigation">
        <ul>
          <li><a href="#how-to-play">How to Play</a></li>
          <li><a href="#about-wordle">About</a></li>
          <li><a href="#tips">Tips</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#play-game" class="nav-cta">Play Free ▶</a></li>
        </ul>
      </nav>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Smooth nav links
  header.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      const nav = document.getElementById('main-nav');
      if (nav.classList.contains('open')) nav.classList.remove('open');
    });
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('open');
    this.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
})();
