<template>
  <div class="container">
    <div class="dash">
      <img src="@/assets/dashboard.png">
      <div class="gauge lg rpm" style="transform: rotate(141deg)"></div>
      <img src="@/assets/pivot.png" class="pivot lg">
      <div class="gauge lg speed" style="transform: rotate(-220deg)"></div>
      <img src="@/assets/pivot.png" class="pivot lg">
      <div class="gauge md gas" style="transform: rotate(-205deg)"></div>
      <img src="@/assets/pivot.png" class="pivot md">
      <div class="gauge md temp" style="transform: rotate(25deg)"></div>
      <img src="@/assets/pivot.png" class="pivot md">
      <div class="gauge sm turbo" style="transform: rotate(-132deg)"></div>
      <img src="@/assets/pivot.png" class="pivot sm">
      <div class="gauge sm oil" style="transform: rotate(-132deg)"></div>
      <img src="@/assets/pivot.png" class="pivot sm">
      <div class="gauge sm acelerator" style="transform: rotate(-132deg)"></div>
      <img src="@/assets/pivot.png" class="pivot sm">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    speed: {
      type: Number,
      default: 0,
    },
    rpm: {
      type: Number,
      default: 0,
    },
    oil: {
      type: Number,
      default: 0, //percent
    },
    turbo: {
      type: Number,
      default: 0, //percent
    },
    acelerator: {
      type: Number,
      default: 0, //percent
    },
    temperature: {
      type: Number,
      default: 0,
    },
    gas: {
      type: Number,
      default: 0, //percent
    },

  }
}
</script>

<style scoped lang="scss">
  @import "@/sass/_svg-url.scss";

  $bg-width: 1419px;
  $bg-heigth: 860px;

  $rpm-top: 38.2%;
  $rpm-left: 29.9%;

  $speed-top: 38.30%;
  $speed-left: 69.35%;

  $temp-top: 50.35%;
  $temp-left: 13.35%;

  $gas-top: 50.59%;
  $gas-left: 85.8%;

  $turbo-top: 18.8%;
  $turbo-left: 40.4%;

  $oil-top: 18.8%;
  $oil-left: 50.2%;

  $acelerator-top: 18.8%;
  $acelerator-left: 59.55%;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: calc(100% - 4vw);
    height: calc(100% - 4vh);
    max-width: 1419px;
    max-height: 860px;
  }

  .dash {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding-top: $bg-heigth / $bg-width * 100%;

    img {
      position: absolute;
      top: 0px;
      width: 100%;
    }
  }

  .gauge {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: 0% 50%;
    transition: 0.3s ease;

    &::after {
      display: block;
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-image: svg-url('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -11.853 70.508 22" preserveAspectRatio="none" class="gauge"><defs><filter id="strokeGlow" y="-10" x="-20" width="150" height="100"><feGaussianBlur in="centeredOffset" stdDeviation="2.5" result="blur3"></feGaussianBlur><feOffset dx="0" dy="0"/><feComponentTransfer><feFuncA type="linear" slope="1.4"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><linearGradient id="gauge" x1="0" x2="0" y1="0" y2="1"><stop offset="20%" stop-color="#da6f51"/><stop offset="44%" stop-color="#f47d72"/><stop offset="65%" stop-color="#f4ad9c"/></linearGradient><path fill="url(#gauge)" filter="url(#strokeGlow)" d="M1.398 1.96S0 .931 0-.731c-.001-1.663 1.398-2.98 1.398-2.98L63.22-2.293c.738.088.717 2.69 0 2.835L1.398 1.96z"/></svg>');
    }

    &.lg {
      width: 9.3%;
      height: 4.5%;
    }

    &.md {
      width: 3.6%;
      height: 3%;
    }

    &.sm {
      width: 2.9%;
      height: 2.65%;
    }
  }

  .pivot {
    display: block;
    position: absolute;
    height: auto;
    transform: translate(-50%,0%);

    &.lg {
      width: 3%;
    }

    &.md {
      width: 1.8%;
    }

    &.sm {
      width: 1.2%;
    }
  }

  .rpm {
    left: $rpm-left;
    top: $rpm-top;

    & + img {
      left: $rpm-left;
      top: $rpm-top;
    }
  }

  .speed {
    left: $speed-left;
    top: $speed-top;

    & + img {
      left: $speed-left;
      top: $speed-top;
    }
  }

  .gas {
    opacity: 1.0;
    left: 85.8%;
    top: 50.59%;
    
    & + img {
      opacity: 1.4;
      left: 85.8%;
      top: 50.59%;
    }
  }

  .temp {
    left: $temp-left;
    top: $temp-top;
    
    & + img {
      left: $temp-left;
      top: $temp-top;
    }
  }

  .turbo {
    left: $turbo-left;
    top: $turbo-top;
    
    & + img {
      left: $turbo-left;
      top: $turbo-top;
    }
  }

  .oil {
    left: $oil-left;
    top: $oil-top;
    
    & + img {
      left: $oil-left;
      top: $oil-top;
    }
  }

  .acelerator {
    left: $acelerator-left;
    top: $acelerator-top;
    
    & + img {
      left: $acelerator-left;
      top: $acelerator-top;
    }
  }

</style>
