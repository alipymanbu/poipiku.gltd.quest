window.SITE_LINKS = {
  download: 'https://pan.quark.cn/s/611897c014af'
};
(function () {
  var url = window.SITE_LINKS.download;
  document.querySelectorAll('a[data-link="download"]').forEach(function (a) {
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
})();
