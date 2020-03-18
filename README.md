# v-scroll-progress

a vue directive that calls given function with scroll progress of binded element

## Installation

npm

```bash
npm install v-scroll-progress --save
```

yarn

```bash
yarn add v-scroll-progress
```

## Basic Usage

```js
import Vue from 'vue';
import scrollProgress from 'v-scroll-progress';
// use default options
Vue.use(scrollProgress);
```

```html
<template>
  <div v-scroll-progress="scrollProgress">
    an element with scrollable content
  </div>
  <div v-scroll-progress.horizontal="scrollProgress">
    an element with horizontal scrollable content
  </div>
</template>

<script>
export default {
  methods: {
    scrollProgress(progress) {
      console.log(progress);
      // prints a float value between 0-100 when the element is scrolled
    }
  }
}

</script>
```

## Example

A working example is [available here](https://tpdqp.csb.app/)

[![Edit v-scroll-progress-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/brave-germain-tpdqp?fontsize=14&hidenavigation=1&theme=dark)
