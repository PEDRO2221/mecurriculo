(function () {
  const sections = [...document.querySelectorAll('section, header.container')];
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  function reveal(section) {
    section.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('revealed');
    });
    section.querySelectorAll('.bar-fill').forEach((el) => {
      el.classList.add('bar-filled');
    });
  }

  function reset(section) {
    section.querySelectorAll('.reveal').forEach((el) => {
      el.classList.remove('revealed');
    });
    section.querySelectorAll('.bar-fill').forEach((el) => {
      el.classList.remove('bar-filled');
    });
  }

  function sync(section) {
    if (section.classList.contains('active')) {
      requestAnimationFrame(() => reveal(section));
    } else if (!reduceMotion) {
      reset(section);
    }
  }

  if (reduceMotion) {
    sections.forEach(reveal);
    return;
  }

  const observer = new MutationObserver((records) => {
    records.forEach((record) => sync(record.target));
  });

  sections.forEach((section) => {
    observer.observe(section, {
      attributes: true,
      attributeFilter: ['class'],
    });
    sync(section);
  });
})();
