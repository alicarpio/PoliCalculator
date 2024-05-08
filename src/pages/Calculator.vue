<script setup>
import { ref} from "vue";
import ResultNote from "../components/ResultNote.vue";
import {useGradesStore} from "../stores/grades.js";
import InputNumberLabel from "../components/InputNumberLabel.vue";
import NavBar from "../components/NavBar.vue";

const store = useGradesStore();

let practPorcentaje = ref(0);
let practico = ref(0);
let primerParcial = ref(0);
let segundoParcial = ref(0);
let mejoramiento = ref(0);
let showResult = ref(false);

let promFinal = ref({
  promedioFinal: 0,
  mejoramiento: null,
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

  promFinal.value.promedioFinal = parseFloat((gradeInfo.grade / 10).toFixed(2));
  promFinal.value.mejoramiento = gradeInfo.missing !== null ? gradeInfo.missing.toFixed(2) : null;
  promFinal.value.pasado = gradeInfo.pass;

  showResult.value = true;
}
</script>

<template>
  <NavBar/>
  <div class="flex w-full sm:w-11/12 md:w-5/6 my-auto mx-auto h-screen justify-center items-center ">
    <ResultNote v-if="showResult" class="w-3/5 flex flex-col items-center" :prom="promFinal"/>
    <div class="w-1/2 sm:w-2/5 flex-col justify-items-end">
      <div class="form flex flex-col w-full">
        <div class="flex gap-4">
          <div class="w-36">
            <InputNumberLabel id="porcentajePract" forId="porcentajePract" v-model="practPorcentaje" placeholder="% Práctico" label="% Práctico" />
          </div>
          <div class="w-full">
            <InputNumberLabel id="pract" forId="pract" v-model="practico" placeholder="Nota práctica" label="Nota práctica"/>
          </div>
        </div>
        <InputNumberLabel  id="parcial1" forId="parcial1" v-model="primerParcial" placeholder="Parcial 1" label="Parcial 1" />

        <InputNumberLabel  id="parcial2" forId="parcial2" v-model="segundoParcial" placeholder="Parcial 2" label="Parcial 2" />

        <InputNumberLabel  id="mejora" forId="mejora" v-model="mejoramiento" placeholder="Mejoramiento" label="Mejoramiento" />

      </div>
      <button @click="calculate" class="w-full mt-2 sm:mt-3 bg-sky-500 text-white p-2 sm:p-3 rounded-2xl shadow-lg font-bold text-sm sm:text-base lg:text-base hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200">Calcular</button>

    </div>
  </div>
</template>

<style scoped>

</style>