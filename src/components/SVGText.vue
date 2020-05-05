<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="'0 0 ' +canvasWidth+ ' ' + size * 1.25"
    width="100%">
    <text
      x="0%" y="50%"
      dominant-baseline="central"
      :fill="color"
      :style="{
        fontSize: size+'px',
        fontFamily: fontFamily,
        fontWeight: fontWeight
      }">
      <slot name="default" />
    </text>
  </svg>
</template>

<script>
// import chroma from "chroma-js";

export default {
  name: "SVGText",
  props: {
    color: {
      type: String,
      default: 'black'
    },
    canvasWidth: {
      type: Number,
      default: 100
    },
    size: {
      type: Number,
      default: 16
    },
    fontFamily: {
      type: String,
      default: 'Open Sans'
    },
    fontWeight: {
      type: Number,
      default: 400
    }
  }
};
</script>

<style scoped lang="scss">

</style>
