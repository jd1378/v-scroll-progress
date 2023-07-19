const inserted = (el, binding) => {
  if (typeof binding.value !== "function") {
    return;
  }

  const isHorizontal = !!binding.modifiers.horizontal;
  const f = function (e) {
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

  el.addEventListener("scroll", f, {
    passive: true,
  });
};

const unbind = (el, binding) => {
  if (el._scrollProgress) {
    el.removeEventListener("scroll", el._scrollProgress);
  }
};

const directive = {
  inserted,
  mounted: inserted, // vue 3 "inserted"
  unbind,
  unmounted: unbind, // vue 3 "unbind"
}

const install = function installVScrollThreshold(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.directive("scroll-progress", directive);
};

directive.install = install;

export default directive;
