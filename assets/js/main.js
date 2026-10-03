(function () {
  // 移动端折叠导航
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 返回顶部
  var topBtn = document.querySelector('.fab-top');
  if (topBtn) {
    var sync = function () {
      var show = window.scrollY > 400;
      topBtn.classList.toggle('is-visible', show);
    };
    window.addEventListener('scroll', sync, { passive: true });
    sync();
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
