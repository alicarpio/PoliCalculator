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
    return "¡Felicitaciones aprobaste!"
  } else {
    return "Lo siento, no aprobaste"
  }
})

const showMejoramiento = computed(() => {
  console.log(parseFloat(props.prom.mejoramiento))
  return props.prom.mejoramiento !== null
})

</script>

<template>
<div class="mt-3">
  <img :src="imgUrl" class="w-24 h-20 sm:w-52 sm:h-48 md:h-48 md:w-52 lg:h-52 lg:w-56 lg:mb-2" alt="Poli Image">
  <div class="flex flex-col items-center">
    <h1 class="font-bold sm:text-2xl md:text-2xl lg:text-4xl text-base text-sky-500">{{showMessage}}</h1>
<!--    <span class="font-bold sm:text-2xl md:text-3xl text-base text-sky-500">{{ showMessage[1]}}</span>-->
  </div>
  <h2 class="text-sm sm:text-2xl md:text-2xl font-bold">{{props.prom.promedioFinal}}</h2>
  <h3 class="mb-1 sm:mb-5 text-xs sm:text-base md:text-base lg:text-base">Nota final</h3>
  <small class="text-xs sm:text-xs md:text-base lg:text-base"v-if="showMejoramiento">Necesitas {{props.prom.mejoramiento}} en mejoramiento para pasar</small>
</div>
</template>

<style scoped>

</style>