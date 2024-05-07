<script setup>
import { ref} from "vue";
import InputNumber from "../components/InputNumber.vue";
import ResultNote from "../components/ResultNote.vue";
import {useGradesStore} from "../stores/grades.js";

const store = useGradesStore();



let practPorcentaje = ref(0);
let practico = ref(0);
let primerParcial = ref(0);
let segundoParcial = ref(0);
let mejoramiento = ref(0);

let promFinal = ref({
  promedioFinal: 0,
  mejoramiento: 0,
  pasado: false
});

async function calculate() {
  const data = {
    primer_parcial: primerParcial.value,
    segundo_parcial: segundoParcial.value,
    mejoramiento: mejoramiento.value,
    practico: practico.value,
    porcentaje_practico: practPorcentaje.value
  }


  const gradeInfo = await store.calculateGrade(data);
  promFinal.value.promedioFinal = (gradeInfo.grade / 10).toFixed(2);
  promFinal.value.mejoramiento = (gradeInfo?.missing).toFixed(2) ;
  promFinal.value.pasado = gradeInfo.pass;
}





</script>

<template>

  <div class="flex w-2/3 justify-between my-auto mx-auto h-screen items-center">
    <ResultNote class="w-3/5 flex flex-col items-center" :prom="promFinal"/>
    <div class="w-2/5 flex-col">
      <div class="form flex flex-col w-full">
        <div class="flex mb-4 w-full gap-4">
          <div class="w-36">
            <label for="porcentajePractico" class="mr-3">% Práctico</label>
            <InputNumber id="porcentajePractico" class="w-full"
                       v-model="practPorcentaje"/>
<!--            <span class="mt-2 invisible text-pink-600">-->
<!--              Solo puedes ingresar números del 0 al 100-->
<!--            </span>-->
          </div>
          {{practPorcentaje}}
          <div class="">
            <label for="pract" class="mr-3">Nota práctica</label>
            <InputNumber id="pract" class="w-full" v-model="practico"/>
          </div>
        </div>
        {{practico}}
        <label for="parcial1">Primer Parcial</label>
        <InputNumber id="parcial1" class="mb-4" v-model="primerParcial"/>

        <label for="parcial2">Segundo Parcial</label>
        <InputNumber id="parcial2" class="mb-4" v-model="segundoParcial" />

        <label for="mejora">Mejoramiento</label>
        <InputNumber id="mejora" class="mb-4" v-model="mejoramiento"/>

      </div>

      <button @click="calculate" class="w-full bg-sky-500 text-white p-3 rounded-xl shadow-inner">Calcular</button>
<!--      <Button label="Calcular" class="w-full" severity="success" raised/>-->

    </div>

{{promFinal}}
  </div>
</template>

<style scoped>

</style>