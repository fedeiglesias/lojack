<template>
  <div 
    class="proportion" 
    :style="{background: debugging ? 'rgba(255,0,0,0.3)' : 'transparent'}">

    <div class="container">
      <svg 
        class="gauge"
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 -11.853 64 22"
        preserveAspectRatio="none"
        :style="{
          height: gaugeThickness + '%',
          transform: `
            translate(0%, -50%)
            rotate(${this.valueToDegree}deg)`
        }">
        <defs>
          <filter 
            :id="id + '_glow'"
            y="-10" x="-20"
            width="150" height="100">
            <feGaussianBlur 
              in="centeredOffset" 
              stdDeviation="2.5" 
              result="blur3">
            </feGaussianBlur>

            <feOffset dx="0" dy="0"/>
            
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.4"/>
            </feComponentTransfer>
            
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
          
        <linearGradient 
          :id="id + '_gauge'"
          x1="0" y1="0"
          x2="0" y2="1">
          <stop offset="45%" :stop-color="colors.gauge.primary"/>
          <stop offset="55%" :stop-color="colors.gauge.secondary"/>
        </linearGradient>
        
        <path
          :fill="`url(#${id}_gauge)`"
          :filter="`url(#${id}_glow)`"
          d="M1.398 1.96S0 .931 0-.731c-.001-1.663 1.398-2.98 1.398-2.98L63.22-2.293c.738.088.717 2.69 0 2.835L1.398 1.96z"/>
      </svg>

      <img 
        class="pivot"
        :style="{
          width: pivotScale + '%',
          height: pivotScale + '%'
        }"
        src="@/assets/pivot.png"
      />
    </div>
  </div>
</template>

<script>
//import { saturate } from "polished"; #f4ad9c
import chroma from "chroma-js";

export default {
  name: "Gauge",
  data() {
    return {
      id: null,
      gaugeDegCorrection: -180,
      colors: {
        gauge: {
          primary: chroma(this.gaugeColor).saturate(1),
          secondary: chroma(this.gaugeColor).saturate(1).brighten(1),
        }
      }
    }
  },
  props: {
    debugging: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number
    },
    valueMin: {
      type: Number
    },
    valueMax: {
      type: Number
    },
    startDegree: {
      type: Number,
      default: 0
    },
    endDegree: {
      type: Number,
      default: 360
    },
    inverted: {
      type: Boolean,
      default: false
    },
    pivotScale: {
      type: Number,
      default: 20
    },
    gaugeThickness: {
      type: Number,
      default: 20
    },
    gaugeColor: {
      type: String,
      default: '#f47d72'
    }
  },
  computed: {
    valueToDegree() {
      let degree = (this.absRange * this.valueToPercent) + this.startDegree + this.gaugeDegCorrection
      if(this.debugging) console.log('valueToDegree: ', degree)
      return degree
    },
    valueToPercent() {
      let percent = (this.value - this.valueMin) / (this.valueMax - this.valueMin)
      if(this.inverted) percent = 1 - percent
      if(this.debugging) console.log('valueToPercent: ', percent)
      return percent
    },
    absRange() {
      let absRange = Math.abs(this.startDegree - this.endDegree)
      if(this.debugging) console.log('absRange: ', absRange)
      return absRange
    }
  },
  mounted () {
    this.id = this._uid
  }
};
</script>

<style scoped lang="scss">
  
  .proportion {
    position: relative;
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: visible;
    border-radius: 50%;

    &::before {
      position: relative;
      display: block;
      content: "";
      padding-top: 100%;
    }
  }

  .container {
    position: absolute;
    overflow: visible;
    margin-top: -100%;
    width: 100%;
    height: 100%;
  }

  .gauge {
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform-origin: 0px center;
    transition: 0.3s ease;
    overflow: visible;
  }

  .pivot {
    position: absolute;
    width: 20%;
    height: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
</style>
