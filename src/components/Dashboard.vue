<template>
  <div class="container">
    <div class="dash">
      <img src="@/assets/dashboard.png">
      <div class="gauge lg rpm" style="transform: rotate(39deg)"></div>
      <div class="gauge lg speed" style="transform: rotate(-218deg)"></div>
      <div class="gauge md gas" style="transform: rotate(-150deg)"></div>
      <div class="gauge md temp" style="transform: rotate(27deg)"></div>
      <div class="gauge sm turbo" style="transform: rotate(-90deg)"></div>
      <div class="gauge sm oil" style="transform: rotate(-90deg)"></div>
      <div class="gauge sm acelerator" style="transform: rotate(-90deg)"></div>
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
    transform-origin: 5% 50%;
    transition: 0.3s ease;


    /* TODO: Gauge Glow */
    &::before {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      /*
      background-image: svg-url('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="3.516 0 63.766 5.67" preserveAspectRatio="none" class="gauge"><linearGradient id="gauge" x1="0" x2="0" y1="0" y2="1"><stop offset="20%" stop-color="#da6f51"/><stop offset="44%" stop-color="#f47d72"/><stop offset="65%" stop-color="#f4ad9c"/></linearGradient><path fill="url(#gauge)" d="M4.915 5.671S3.517 4.642 3.517 2.98C3.516 1.317 4.915 0 4.915 0l61.823 1.418c.738.088.716 2.69 0 2.835L4.915 5.671z"/></svg>');
      */
    }

    &::after {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: svg-url('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="3.516 0 63.766 5.67" preserveAspectRatio="none" class="gauge"><linearGradient id="gauge" x1="0" x2="0" y1="0" y2="1"><stop offset="20%" stop-color="#da6f51"/><stop offset="44%" stop-color="#f47d72"/><stop offset="65%" stop-color="#f4ad9c"/></linearGradient><path fill="url(#gauge)" d="M4.915 5.671S3.517 4.642 3.517 2.98C3.516 1.317 4.915 0 4.915 0l61.823 1.418c.738.088.716 2.69 0 2.835L4.915 5.671z"/></svg>');
    }

    &.lg {
      width: 8.5%;
      height: 1.2%;
    }

    &.md {
      width: 3.8%;
      height: 1%;
    }

    &.sm {
      width: 2.7%;
      height: 0.9%;
    }
  }

  .rpm {
    left: 29.5%;
    top: 40%;
  }

  .speed {
    right: 22%;
    top: 40%;
  }

  .gas {
    right: 10.4%;
    top: 51.3%;
  }

  .temp {
    left: 13%;
    top: 51.3%;
  }

  .turbo {
    left: 40.26%;
    top: 19.2%;
  }

  .oil {
    left: 50.1%;
    top: 19.2%;
  }

  .acelerator {
    left: 59.4%;
    top: 19.2%;
  }

</style>
