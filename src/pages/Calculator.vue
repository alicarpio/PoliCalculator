<script setup>
import { ref} from "vue";
import InputNumber from "../components/InputNumber.vue";
import ResultNote from "../components/ResultNote.vue";
import {useGradesStore} from "../stores/grades.js";
import InputNumberLabel from "../components/InputNumberLabel.vue";

const store = useGradesStore();

let practPorcentaje = ref(0);
let practico = ref(0);
let primerParcial = ref(0);
let segundoParcial = ref(0);
let mejoramiento = ref(0);
let showResult = ref(false);
let showError = ref(false);

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

function validateInput(){

  console.log(showError.value);
}

</script>

<template>

  <div class="flex w-2/3 my-auto mx-auto h-screen items-center">
    <ResultNote  v-if="showResult" class="w-3/5 flex flex-col items-center" :prom="promFinal"/>
    <div class="w-2/5 flex-col justify-items-end">
      <div class="form flex flex-col w-full">
        <div class="flex mb-4 w-full gap-4">
          <div class="w-36">
            <InputNumberLabel id="porcentajePract" forId="porcentajePract" v-model="practPorcentaje" placeholder="% Práctico" label="% Práctico" :error=showError />
          </div>
          <div>
            <InputNumberLabel id="pract" forId="pract" v-model="practico" placeholder="Nota práctica" label="Nota práctica" :error=showError />
          </div>
        </div>
        <InputNumberLabel classAtt="mb-2" id="parcial1" forId="parcial1" v-model="primerParcial" placeholder="Parcial 1" label="Parcial 1" :error=showError />

        <InputNumberLabel classAtt="mb-2" id="parcial2" forId="parcial2" v-model="segundoParcial" placeholder="Parcial 2" label="Parcial 2" :error=showError />

        <InputNumberLabel classAtt="mb-2" id="mejora" forId="mejora" v-model="mejoramiento" placeholder="Mejoramiento" label="Mejoramiento" :error=showError />

      </div>
      <button @click="calculate" class="w-full bg-sky-500 text-white p-3 rounded-xl shadow-cyan-500/50 font-bold text-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-200">Calcular</button>

    </div>
  </div>
</template>

<style scoped>

</style>