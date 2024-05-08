<script setup>

import {computed} from "vue";

import AlmostDone from "../assets/images/almost-done.svg";
import BarelyPassed from "../assets/images/barely.svg";
import Done from "../assets/images/done.svg";
import Failed from "../assets/images/failed.svg";
import WellDne from "../assets/images/well-done.svg";


const props = defineProps({
  prom: {
      promedioFinal: {
        type: Number,
        required: true,
      }
    ,
      mejoramiento: {
        type: [Number, null],
        required: true,
      }
    ,
      pasado: {
        type: Boolean,
        required: true,
      },
  }
})
const imgUrl = computed(() => {
  if (props.prom.promedioFinal >= 6.00 && props.prom.promedioFinal <= 6.15) {
    return AlmostDone
  } else if (props.prom.promedioFinal >= 5.85 && props.prom.promedioFinal <= 5.99) {
    return BarelyPassed
  } else if (props.prom.promedioFinal > 6.15) {
    return Done
  } else if (props.prom.promedioFinal >= 9.50) {
    return WellDne
  } else {
    return Failed
  }
})

const showMessage = computed(() => {
  if (props.prom.pasado) {
    return "¡Felicitaciones" + " "
  } else {
    return "Lo siento, no aprobaste"
  }
})

const showMejoramiento = computed(() => {
  return props.prom.mejoramiento !== null
})

</script>

<template>
<div>
  <img :src="imgUrl" class="w-52 h-48 sm:w-80 sm:h-72" alt="Poli Image">
  <div class="flex flex-col items-center">
    <h1 class="font-bold sm:text-4xl text-2xl text-sky-500">{{showMessage}}</h1>
    <span class="font-bold sm:text-4xl text-2xl text-sky-500">aprobastes!</span>
  </div>
  <h2 class="text-2xl sm:text-3xl font-bold">{{props.prom.promedioFinal}}</h2>
  <h3 class="mb-5 text-smsm:text-base">Nota final</h3>
  <small class="text-base" v-if="showMejoramiento">Necesitas {{props.prom.mejoramiento}} en mejoramiento para pasar</small>
</div>
</template>

<style scoped>

</style>