<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 36">
    <text x="100%" y="15" text-anchor="end" :fill="labelColor">{{label}}</text>
    <text x="99%" y="30" text-anchor="end" :fill="valueColor">
      <slot name="default" />
    </text>
  </svg>
</template>

<script>
import chroma from "chroma-js";

export default {
  name: "Lcd",
  props: {
    label: {
      type: String
    },
    value: {
      type: String
    },
    color: {
      type: String
    }
  },
  computed: {
    valueColor() {
      return chroma(this.color).saturate(5);
    },
    labelColor() {
      return chroma(this.color)
        .desaturate(2)
        .brighten(1)
        .alpha(0.5);
    }
  }
};
</script>

<style scoped lang="scss">
svg {
  width: 100%;
  text {
    &:nth-child(1) {
      font-size: 11px;
      font-family: "EHS";
    }
    &:nth-child(2) {
      font-size: 15px;
      font-family: "LEDDotMatrix";
    }
  }
}
</style>
