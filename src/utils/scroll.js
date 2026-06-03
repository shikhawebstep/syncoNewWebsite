export const scrollToTopSmooth = (duration = 800) => {
  const start = window.scrollY || document.documentElement.scrollTop;
  const startTime = performance.now();

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const scroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, start * (1 - ease));

    if (timeElapsed < duration) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};
