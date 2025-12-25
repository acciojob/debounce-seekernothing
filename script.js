function debounce(callback, delay, immediate = false) {
  let timer = null;

  return function (...args) {
    const context = this;

    if (timer) {
      clearTimeout(timer);
    }

    if (immediate && !timer) {
      callback.apply(context, args);
    }

    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
}

module.exports = debounce;
