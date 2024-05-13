<script setup>

import {computed} from "vue";

import AlmostDone from "../assets/images/almost-done.png";
import BarelyPassed from "../assets/images/barely.png";
import Done from "../assets/images/done.png";
import Failed from "../assets/images/failed.png";
import WellDone from "../assets/images/well-done.png";


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
    return BarelyPassed
  } else if (props.prom.promedioFinal >= 5.85 && props.prom.promedioFinal <= 5.99) {
    return AlmostDone
  } else if (props.prom.promedioFinal >= 9.50) {
    return WellDone
  } else if (props.prom.promedioFinal > 6.15) {
    return Done
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
  return props.prom.mejoramiento !== null
})

</script>

<template>
  <div class="mt-2">
    <img :src="imgUrl" class="w-28 h-28 sm:w-48 sm:h-48 md:h-60 md:w-60 lg:h-64 lg:w-64 lg:mb-2" alt="Poli Image">
    <div class="flex flex-col items-center">
      <h1 class="font-bold sm:text-2xl md:text-3xl lg:text-4xl text-[1.6rem] text-sky-500">{{ showMessage }}</h1>
    </div>
    <h2 class="text-[1.6rem] sm:text-2xl md:text-3xl font-bold">{{ props.prom.promedioFinal }}</h2>
    <h3 class="mb-1 sm:mb-3 text-sm sm:text-base md:text-base lg:text-base">Nota final</h3>
    <small class="text-sm sm:text-sm md:text-base lg:text-base" v-if="showMejoramiento">Necesitas
      {{ props.prom.mejoramiento }} en mejoramiento para pasar</small>
  </div>
</template>

<style scoped>

</style>