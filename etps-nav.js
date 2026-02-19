/* ═══════════════════════════════════════════════
   ETPS — Global Nav + Footer Script
   Include this on EVERY page with:
   <script src="etps-nav.js"></script>
   
   To update nav links site-wide → edit this file only.
═══════════════════════════════════════════════ */

(function () {
  // ── Inject Nav HTML
  const navHTML = `
  <div class="mob-menu" id="mobMenu">
    <button class="mob-close" onclick="etpsMenuClose()">CLOSE ✕</button>
    <a href="index.html" onclick="etpsMenuClose()">Home</a>
    <a href="shop.html" onclick="etpsMenuClose()">Shop</a>
    <a href="shop.html?type=digital" onclick="etpsMenuClose()">Digital Downloads</a>
    <a href="shop.html?type=print" onclick="etpsMenuClose()">Print on Demand</a>
    <a href="about.html" onclick="etpsMenuClose()">About</a>
    <div class="mob-bottom">
      <a href="https://instagram.com" target="_blank">Instagram</a>
      <a href="https://tiktok.com" target="_blank">TikTok</a>
      <a href="https://pinterest.com" target="_blank">Pinterest</a>
    </div>
  </div>

  <nav>
    <a href="index.html" class="nav-logo">
      <span class="logo-exit">EXIT&nbsp;</span>
      <span class="logo-rest">The Print Shop</span>
      <span class="logo-mobile">ETPS</span>
    </a>
    <ul class="nav-links">
      <li><a href="shop.html">Shop</a></li>
      <li><a href="shop.html?type=digital">Digital Downloads</a></li>
      <li><a href="shop.html?type=print">Print on Demand</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
    <div class="nav-right">
      <a href="shop.html" class="nav-bag btn">Shop Now</a>
      <button class="hamburger" onclick="etpsMenuOpen()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // ── Inject Footer HTML
  const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div>
        <a href="index.html" class="f-logo">EXIT The Print Shop</a>
        <p class="f-tagline">Art for walls that<br>refuse to be ignored.</p>
      </div>
      <div class="f-col">
        <div class="f-col-title">Shop</div>
        <ul>
          <li><a href="shop.html">All Art</a></li>
          <li><a href="shop.html?type=digital">Digital Downloads</a></li>
          <li><a href="shop.html?type=print">Print on Demand</a></li>
          <li><a href="shop.html?sort=new">New Drops</a></li>
        </ul>
      </div>
      <div class="f-col">
        <div class="f-col-title">Info</div>
        <ul>
          <li><a href="about.html">About ETPS</a></li>
          <li><a href="about.html#faq">FAQ</a></li>
          <li><a href="about.html#shipping">Shipping & Returns</a></li>
          <li><a href="mailto:hello@exittheprintshop.com">Contact</a></li>
        </ul>
      </div>
      <div class="f-col">
        <div class="f-col-title">Follow</div>
        <ul>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://tiktok.com" target="_blank">TikTok</a></li>
          <li><a href="https://pinterest.com" target="_blank">Pinterest</a></li>
        </ul>
      </div>
    </div>
    <div class="f-bottom">
      <span class="f-copy">© 2025 Exit The Print Shop</span>
      <div class="f-socials">
        <a href="https://instagram.com" target="_blank">Instagram</a>
        <a href="https://tiktok.com" target="_blank">TikTok</a>
        <a href="https://pinterest.com" target="_blank">Pinterest</a>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // ── Highlight active nav link
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // ── Scroll reveal observer — works on all pages
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

  // ── Mobile menu functions (global)
  window.etpsMenuOpen = function () { document.getElementById('mobMenu').classList.add('open'); };
  window.etpsMenuClose = function () { document.getElementById('mobMenu').classList.remove('open'); };

  // ── Newsletter submit (global)
  window.nlSubmit = function (e) {
    e.preventDefault();
    const btn = e.target.querySelector('.nl-btn');
    btn.textContent = "You're in ✓";
    btn.style.background = '#444440';
    btn.style.color = '#f5f5f3';
    setTimeout(() => { btn.textContent = 'Join →'; btn.style.background = ''; btn.style.color = ''; }, 3000);
  };
})();
