
(function buildFooter() {
  const footer = document.getElementById('site-footer');
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo" aria-label="WordlePuzzle">
            <div class="logo-tiles">
              <div class="logo-tile lt-g">W</div>
              <div class="logo-tile lt-y">P</div>
              <div class="logo-tile lt-b">Z</div>
            </div>
            WordlePuzzle
          </a>
          <p>The best free daily wordle puzzle game online. Guess the 5-letter word in 6 tries, every single day — completely free, no sign-up needed.</p>
        </div>
        <div class="footer-col">
          <h4>Play</h4>
          <ul>
            <li><a href="#play-game">Daily Wordle Puzzle</a></li>
            <li><a href="#play-game">Free Wordle Online</a></li>
            <li><a href="#how-to-play">Wordle Rules</a></li>
            <li><a href="#tips">Wordle Tips</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Learn</h4>
          <ul>
            <li><a href="#how-to-play">How to Play</a></li>
            <li><a href="#about-wordle">About Wordle</a></li>
            <li><a href="#educational">Benefits</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="privacy">Privacy Policy</a></li>
            <li><a href="terms">Terms of Service</a></li>
            <li><a href="contact">Contact Us</a></li>
            <li><a href="about">About</a></li>
            <li><a href="disclaimer">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} WordlePuzzle.github.io — Free Daily Wordle Puzzle Game Online. All rights reserved.</p>
        <div class="footer-badges">
          <span class="footer-badge">🆓 Free to Play</span>
          <span class="footer-badge">📱 Mobile Ready</span>
          <span class="footer-badge">🎓 Educational</span>
        </div>
      </div>
    </div>
  `;
})();

