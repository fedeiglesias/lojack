<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 36">
    <text x="100%" y="15" text-anchor="end" :fill="labelColor">
      {{label}}
      </text>
    <text x="99%" y="30" text-anchor="end" :fill="valueColor">
      <slot name="default"/>
    </text>
  </svg>
</template>

<script>
import { lighten, desaturate, saturate, transparentize } from 'polished'

export default {
  name: 'Dashboard',
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
      return saturate(1, this.color)
    },
    labelColor() {
      let color = saturate(1, this.color)
      color = desaturate(0.2, this.color)
      color = lighten(0.4, color)
      color = transparentize(0.4, color)
      return color
    }
  }
}
</script>

<style scoped lang="scss">
 svg {
    width: 100%;
    text {
      &:nth-child(1) {
        font-size: 11px;
        font-family: 'EHS';
      }
      &:nth-child(2) {
        font-size: 15px;
        font-family: 'LEDDotMatrix';
      }
    }
  }
</style>
