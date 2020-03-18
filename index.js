
const plugin = {
  install(Vue, options) {

    Vue.directive('scroll-progress', {
      inserted(el, binding) {
        if (typeof binding.value !== 'function') {
          return;
        }

        const isHorizontal = !!binding.modifiers.horizontal;
        const f = function(e) {
          let progress;
          if (isHorizontal) {
            const currentScroll = el.scrollLeft;
            const width = el.scrollWidth - el.clientWidth;
            progress = (currentScroll / width) * 100;
          } else {
            const currentScroll = el.scrollTop;
            const height = el.scrollHeight - el.clientHeight;
            progress = (currentScroll / height) * 100;
          }
          if (isNaN(progress)) {
            return;
          }
          binding.value(progress);
        };

        el._scrollProgress = f;

        el.addEventListener(
          'scroll',
          f,
          {
            passive: true
          }
        );
      },
      unbind(el, binding) {
        if (el._scrollProgress) {
          el.removeEventListener('scroll', el._scrollProgress);
        }
      }
    });

  }
};

export default plugin;
