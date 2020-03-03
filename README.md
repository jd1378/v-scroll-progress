# v-scroll-progress
a vue directive that calls given function with scroll progress of binded element

## Installation
npm
```
npm install v-scroll-progress --save
```
yarn
```
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