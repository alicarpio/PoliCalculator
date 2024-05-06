<script setup>

import {computed} from "vue";

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
  console.log(props.prom.promedioFinal)
  if (props.prom.promedioFinal >= 6.00 && props.prom.promedioFinal <= 6.15) {
    return "../assets/images/barely-passed.svg"
  } else if (props.prom.promedioFinal >= 5.85 && props.prom.promedioFinal <= 5.99) {
    return "../assets/images/almost-done.svg"
  } else if (props.prom.promedioFinal > 6.15) {
    return "../assets/images/done.svg"
  } else {
    return "../assets/images/failed.svg"
  }
})

const showMessage = computed(() => {
  if (props.prom.pasado) {
    return "¡Felicitaciones aprovastes!"
  } else {
    return "Lo siento, no aprovastes"
  }
})

</script>

<template>
<div>
  <img :src="imgUrl" alt="Poli image">
  <h1 class="font-bold text-4xl">{{showMessage}} </h1>
  <h2>{{props.prom.promedioFinal}}</h2>
  <h3>Nota final</h3>
  <small>Necesitas {{props.prom.mejoramiento}} en mejoramiento para pasar.</small>
</div>
</template>

<style scoped>

</style>