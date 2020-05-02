<template>
  <div class="container">
    <div class="dash">
      <img src="@/assets/dashboard.png" />

      <Gauge
        class="rpm"
        :value="0"
        :valueMin="0"
        :valueMax="4000"
        :startDegree="-38"
        :endDegree="220"
        :pivotScale="20"
      />

      <Gauge
        class="speed"
        :value="0"
        :valueMin="0"
        :valueMax="180"
        :startDegree="-39"
        :endDegree="220"
        :pivotScale="20"
      />

      <Gauge
        class="temp"
        :inverted="true"
        :value="0"
        :valueMin="0"
        :valueMax="155"
        :startDegree="107"
        :endDegree="210"
        :pivotScale="27"
        :gaugeThickness="40"
      />

      <Gauge
        class="gas"
        :value="0"
        :valueMin="0"
        :valueMax="100"
        :startDegree="-28"
        :endDegree="70"
        :pivotScale="27"
        :gaugeThickness="40"
      />

      <Gauge
        class="turbo"
        :value="0"
        :valueMin="0"
        :valueMax="100"
        :startDegree="45"
        :endDegree="137"
        :pivotScale="25"
        :gaugeThickness="40"
      />

      <Gauge
        class="oil"
        :value="0"
        :valueMin="0"
        :valueMax="100"
        :startDegree="46"
        :endDegree="137"
        :pivotScale="25"
        :gaugeThickness="40"
      />

      <Gauge
        class="throttle"
        :value="0"
        :valueMin="0"
        :valueMax="100"
        :startDegree="46"
        :endDegree="137"
        :pivotScale="25"
        :gaugeThickness="40"
      />

      <div class="lcd">
        <Lcd label="TIEMPO DETENIDO" color="#2cf1ff">123456</Lcd>
        <Lcd label="TIEMPO MARCHA" color="#2cf1ff">123456</Lcd>
        <Lcd label="CONSUMO VIAJE" color="#2cf1ff">123456</Lcd>
        <Lcd label="CONSUMO TOTAL" color="#2cf1ff">123456</Lcd>
        <Lcd label="VEL. CRUCERO" color="#2cf1ff">123456</Lcd>
        <Lcd label="USO CRUCERO" color="#2cf1ff">123456</Lcd>
      </div>

      <Lcd label="KM TOTALES" color="#ffa44b" class="km-total">356000</Lcd>
      <Lcd label="KM VIAJE" color="#ffa44b" class="km-trip">750</Lcd>
    </div>
  </div>
</template>

<script>
import Lcd from "./Lcd";
import Gauge from "./Gauge";

export default {
  name: "Dashboard",
  components: {
    Lcd,
    Gauge
  },
  props: {
    speed: {
      type: Number,
      default: 0
    },
    rpm: {
      type: Number,
      default: 0
    },
    oil: {
      type: Number,
      default: 0 //percent
    },
    turbo: {
      type: Number,
      default: 0 //percent
    },
    acelerator: {
      type: Number,
      default: 0 //percent
    },
    temperature: {
      type: Number,
      default: 0
    },
    gas: {
      type: Number,
      default: 0 //percent
    }
  }
};
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

.rpm {
  position: absolute;
  top: 40.5%;
  left: 29.8%;
  width: 17.5%;
  transform: translate(-50%, -50%);
}

.speed {
  position: absolute;
  top: 40.5%;
  left: 69.5%;
  width: 17.2%;
  transform: translate(-50%, -50%);
}

.temp {
  position: absolute;
  top: 51.6%;
  left: 13.6%;
  width: 6.7%;
  transform: translate(-50%, -50%);
}

.gas {
  position: absolute;
  top: 51.9%;
  left: 85.8%;
  width: 6.7%;
  transform: translate(-50%, -50%);
}

.turbo {
  position: absolute;
  top: 20%;
  left: 40.4%;
  width: 5.5%;
  transform: translate(-50%, -50%);
}

.oil {
  position: absolute;
  top: 20%;
  left: 50.2%;
  width: 5.5%;
  transform: translate(-50%, -50%);
}

.throttle {
  position: absolute;
  top: 20%;
  left: 59.5%;
  width: 5.5%;
  transform: translate(-50%, -50%);
}

.lcd {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 28.3%;
  left: 44.7%;
  width: 10.2%;
  height: 25%;
  padding: 0 0.5%;
  box-sizing: border-box;
}

.km-total {
  position: absolute;
  top: 49%;
  left: 23%;
  width: 10%;
}

.km-trip {
  position: absolute;
  top: 49%;
  left: 62.65%;
  width: 10%;
}
</style>
