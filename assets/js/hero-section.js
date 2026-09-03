(function () {
  var heroSection = document.querySelector(".hero-section");
  if (!heroSection) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("hero-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  var animTargets = heroSection.querySelectorAll(
    ".logo-container, .secondary-heading, .hero-section p, .call-to-action-buttons"
  );

  animTargets.forEach(function (el) {
    el.classList.add("hero-animate");
    observer.observe(el);
  });
})();
