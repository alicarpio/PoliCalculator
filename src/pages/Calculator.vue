<script setup>
import {ref} from "vue";
import InputNumber from "../components/InputNumber.vue";
import ResultNote from "../components/ResultNote.vue";


const practPorcentaje = ref();
const practico = ref();
const primerParcial = ref();
const segundoParcial = ref();
const mejoramiento = ref();
</script>

<template>

  <div class="flex w-1/2 justify-between my-auto mx-auto h-screen items-center">
    <ResultNote class="w-3/5 flex flex-col items-center"/>
    <div class="w-2/5 flex-col">
      <div class="form flex flex-col w-full">
        <div class="flex mb-4 w-full gap-4">
          <div class="w-36">
            <label for="porcentajePractico" class="mr-3">% Práctico</label>
            <InputNumber id="porcentajePractico" class="w-full" type="text"
                       v-model="practPorcentaje"/>
<!--            <span class="mt-2 invisible text-pink-600">-->
<!--              Solo puedes ingresar números del 0 al 100-->
<!--            </span>-->
          </div>
          <div class="">
            <label for="pract" class="mr-3">Nota práctica</label>
            <InputNumber id="pract" class="w-full" type="text" v-model="practico"/>
          </div>
        </div>

        <label for="parcial1">Primer Parcial</label>
        <InputNumber id="parcial1"  class="mb-4" type="text" v-model="primerParcial"/>

        <label for="parcial2">Segundo Parcial</label>
        <InputNumber id="parcial2" class="mb-4" type="text" v-model="segundoParcial"/>

        <label for="mejora">Mejoramiento</label>
        <InputNumber id="mejora" class="mb-4" type="text" v-model="mejoramiento"/>

      </div>

<!--      <Button label="Calcular" class="w-full" severity="success" raised/>-->


    </div>


  </div>
</template>

<style scoped>

</style>