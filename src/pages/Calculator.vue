<script setup>
import { ref} from "vue";
import ResultNote from "../components/ResultNote.vue";
import {useGradesStore} from "../stores/grades.js";
import InputNumberLabel from "../components/InputNumberLabel.vue";
import NavBar from "../components/NavBar.vue";
import ErrorToast from "../components/ErrorToast.vue";
import Footer from "../components/Footer.vue";

const store = useGradesStore();

let practPorcentaje = ref(0);
let practico = ref(0);
let primerParcial = ref(0);
let segundoParcial = ref(0);
let mejoramiento = ref(0);
let showResult = ref(false);
let showToast = ref(false);

let promFinal = ref({
  promedioFinal: 0,
  mejoramiento: null,
  pasado: false
});
async function calculate() {
  const data = {
    primer_parcial: parseInt(primerParcial.value),
    segundo_parcial: parseInt(segundoParcial.value),
    mejoramiento: parseInt(mejoramiento.value),
    practico: parseInt(practico.value),
    porcentaje_practico: parseInt(practPorcentaje.value)
  }

  const gradeInfo = await store.calculateGrade(data);

  gradeInfo === null ? showToast.value = true : showToast.value = false;

  promFinal.value.promedioFinal = parseFloat((gradeInfo.grade / 10).toFixed(2));
  promFinal.value.mejoramiento = gradeInfo.missing !== null ? gradeInfo.missing.toFixed(2) : null;
  promFinal.value.pasado = gradeInfo.pass;

  showResult.value = true;
}
</script>

<template>
  <NavBar/>
  <ErrorToast v-if="showToast"/>
  <div class="relative flex flex-col-reverse sm:flex sm:flex-row md:flex md:flex-row w-full h-full md:items-center sm:w-11/12 md:w-11/12 mx-auto justify-center items-center ">
    <ResultNote v-if="showResult" class="w-9/12 md:w-1/2 flex flex-col items-center" :prom="promFinal"/>
    <div class="w-9/12 md:w-1/2 lg:w-2/5 flex-col content-center sm:justify-items-end">
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
      <button @click="calculate" class="w-full mt-3 sm:mt-3 md:mt-4 bg-sky-500 text-white p-2 sm:p-3 md:text-base rounded-2xl shadow-lg font-bold text-sm sm:text-sm lg:text-base hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200">Calcular</button>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>

</style>