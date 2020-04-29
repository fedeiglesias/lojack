<template>
    <router-view/>
</template>

<style lang="scss">

@font-face {
  font-family: 'LEDDotMatrix';
  src: url('~@/fonts/LEDDotMatrix/LEDDotMatrix.eot'); /* IE9 Compat Modes */
  src: url('~@/fonts/LEDDotMatrix/LEDDotMatrix.woff2') format('woff2'), /* Super Modern Browsers */
       url('~@/fonts/LEDDotMatrix/LEDDotMatrix.woff') format('woff'), /* Pretty Modern Browsers */
       url('~@/fonts/LEDDotMatrix/LEDDotMatrix.ttf')  format('truetype'), /* Safari, Android, iOS */
}

@font-face {
  font-family: 'EHS';
  src: url('~@/fonts/EHS/EHSMB.eot'); /* IE9 Compat Modes */
  src: url('~@/fonts/EHS/EHSMB.woff2') format('woff2'), /* Super Modern Browsers */
       url('~@/fonts/EHS/EHSMB.woff') format('woff'), /* Pretty Modern Browsers */
       url('~@/fonts/EHS/EHSMB.ttf')  format('truetype'), /* Safari, Android, iOS */
}

html {
  height: 100%;
}

body {
  background-image: url('./assets/background.jpg');
  display: flex;
  height: 100%;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
