<script setup>

import {computed} from "vue";

import AlmostDone from "../assets/images/almost-done.jpg";
import BarelyPassed from "../assets/images/barely-passed.svg";
import Done from "../assets/images/done.svg";
import Failed from "../assets/images/failed.svg";


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

</script>

<template>
<div>
  <img :src="imgUrl" class="w-96 h-96" alt="Poli image">
  <h1 class="font-bold text-4xl text-sky-500">{{showMessage}} </h1>
  <h2 class="text-3xl font-bold">{{props.prom.promedioFinal}}</h2>
  <h3 class="mb-5 text-base">Nota final</h3>
  <small class="text-base" v-if="props.prom.mejoramiento !== 0">Necesitas {{props.prom.mejoramiento}} en mejoramiento para pasar</small>
</div>
</template>

<style scoped>

</style>