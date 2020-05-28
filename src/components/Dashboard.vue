<template>
  <div class="container">
    <div class="dash">
      <img src="@/assets/dashboard.png" />

      <Gauge
        class="rpm"
        :value="$store.state.dashboard.data.rpm"
        :valueMin="0"
        :valueMax="4000"
        :startDegree="-38"
        :endDegree="220"
        :pivotScale="20"
      />

      <Gauge
        class="speed"
        :value="$store.state.dashboard.data.speed"
        :valueMin="0"
        :valueMax="180"
        :startDegree="-39"
        :endDegree="220"
        :pivotScale="20"
      />

      <Gauge
        class="temp"
        :inverted="true"
        :value="$store.state.dashboard.data.engineTemperature"
        :valueMin="0"
        :valueMax="155"
        :startDegree="107"
        :endDegree="210"
        :pivotScale="27"
        :gaugeThickness="40"
      />

      <Gauge
        class="fuel"
        :value="$store.state.dashboard.data.fuel"
        :valueMin="0"
        :valueMax="100"
        :startDegree="-28"
        :endDegree="70"
        :pivotScale="27"
        :gaugeThickness="40"
      />

      <Gauge
        class="turbo"
        :value="$store.state.dashboard.data.turbo"
        :valueMin="0"
        :valueMax="100"
        :startDegree="45"
        :endDegree="137"
        :pivotScale="25"
        :gaugeThickness="40"
      />

      <Gauge
        class="oil"
        :value="$store.state.dashboard.data.oilPressure"
        :valueMin="0"
        :valueMax="100"
        :startDegree="46"
        :endDegree="137"
        :pivotScale="25"
        :gaugeThickness="40"
      />

      <Gauge
        class="throttle"
        :value="$store.state.dashboard.data.throttle"
        :valueMin="0"
        :valueMax="100"
        :startDegree="46"
        :endDegree="137"
        :pivotScale="25"
        :gaugeThickness="40"
      />

      <div class="lcd">
        <Lcd label="TIEMPO DETENIDO" color="#2cf1ff">{{$store.state.dashboard.data.stoppedTime}}</Lcd>
        <Lcd label="TIEMPO MARCHA" color="#2cf1ff">{{$store.state.dashboard.data.runningTime}}</Lcd>
        <Lcd label="CONSUMO VIAJE" color="#2cf1ff">{{$store.state.dashboard.data.tripConsumption}}</Lcd>
        <Lcd label="CONSUMO TOTAL" color="#2cf1ff">{{$store.state.dashboard.data.totalConsumption}}</Lcd>
        <Lcd label="VEL. CRUCERO" color="#2cf1ff">{{$store.state.dashboard.data.cruisingSpeed}}</Lcd>
        <Lcd label="VEL. MAXIMA" color="#2cf1ff">{{$store.state.dashboard.data.maxSpeed}}</Lcd>
      </div>

      <Lcd
        label="KM TOTALES"
        color="#ffa44b"
        class="km-total"
      >{{$store.state.dashboard.data.kmTotal}}</Lcd>
      <Lcd label="KM VIAJE" color="#ffa44b" class="km-trip">{{$store.state.dashboard.data.kmTrip}}</Lcd>

      <div class="item vehicle">
        <SVGText :canvasWidth="200" :fontWeight="700">VEHICULO</SVGText>
        <SVGText :canvasWidth="200" :fontWeight="400">{{$store.state.dashboard.data.vehicle}}</SVGText>
      </div>

      <div class="item driver">
        <SVGText :canvasWidth="200" :fontWeight="700">CHOFER</SVGText>
        <SVGText :canvasWidth="200" :fontWeight="400">{{$store.state.dashboard.data.driver}}</SVGText>
      </div>

      <div class="item plate">
        <SVGText :canvasWidth="200" :fontWeight="700">MATRICULA</SVGText>
        <SVGText :canvasWidth="200" :fontWeight="400">{{$store.state.dashboard.data.plate}}</SVGText>
      </div>

      <div class="item lat-long">
        <SVGText :canvasWidth="200" :fontWeight="700">LATITUD | LONGITUD</SVGText>
        <SVGText
          :canvasWidth="200"
          :fontWeight="400"
        >{{$store.state.dashboard.data.latitude}} | {{$store.state.dashboard.data.longitude}}</SVGText>
      </div>

      <div class="item course">
        <SVGText :canvasWidth="200" :fontWeight="700">RUMBO</SVGText>
        <SVGText
          :canvasWidth="200"
          :fontWeight="400"
        >{{$store.state.dashboard.data.course}} > VIAJE {{$store.state.dashboard.data.trip}}</SVGText>
      </div>

      <div class="item date-position">
        <SVGText :canvasWidth="200" :fontWeight="700">FECHA POSICIÓN</SVGText>
        <SVGText :canvasWidth="200" :fontWeight="400">{{$store.state.dashboard.data.datePosition}}</SVGText>
      </div>

      <div class="item street">
        <SVGText :canvasWidth="240" :fontWeight="700">GEOREFERENCIA</SVGText>
        <SVGText :canvasWidth="240" :fontWeight="400">{{$store.state.dashboard.data.street}}</SVGText>
      </div>

      <div class="item stops">
        <SVGText :canvasWidth="200" :fontWeight="700">FRENADOS</SVGText>
        <SVGText :canvasWidth="200" :fontWeight="400">{{$store.state.dashboard.data.stops}}</SVGText>
      </div>

      <div class="item lights">
        <SVGText :canvasWidth="200" :fontWeight="700">LUCES</SVGText>
        <SVGText :canvasWidth="200" :fontWeight="400">
          {{
          $store.state.dashboard.data.lights ?
          'Encendidas' : 'Apagadas'
          }}
        </SVGText>
      </div>
    </div>
  </div>
</template>

<script>
import Lcd from "./Lcd";
import Gauge from "./Gauge";
import SVGText from "./SVGText";

export default {
  name: "Dashboard",
  components: {
    Lcd,
    Gauge,
    SVGText
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
  },
  beforeCreate() {
    setInterval(() => this.$store.dispatch("dashboard/getData"), 500);
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

.fuel {
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

.item {
  position: absolute;
  display: flex;
  flex-direction: column;
  $left-x: 13%;
  $right-x: 76.6%;
  $row-1: 68.5%;
  $row-2: 79%;
  $row-3: 89.5%;

  &.vehicle {
    top: $row-1;
    left: $left-x;
    width: 15%;
    height: 6%;
  }

  &.driver {
    top: $row-2;
    left: $left-x;
    width: 15%;
  }

  &.plate {
    top: $row-3;
    left: $left-x;
    width: 15%;
  }

  &.lat-long {
    top: $row-1;
    left: $right-x;
    width: 15%;
  }

  &.course {
    top: $row-2;
    left: $right-x;
    width: 15%;
  }

  &.date-position {
    top: $row-3;
    left: $right-x;
    width: 15%;
  }

  &.stops {
    top: 63.4%;
    left: 40%;
    width: 15%;
  }

  &.lights {
    top: 63.4%;
    left: 56%;
    width: 15%;
  }

  &.street {
    top: 70.5%;
    left: 40%;
    width: 17%;
  }
}
</style>
