<script setup>
import InputText from 'primevue/inputtext';
import {ref} from "vue";
import Button from 'primevue/button';

const practPorcentaje = ref();
const practico = ref();
const primerParcial = ref();
const segundoParcial = ref();
const mejoramiento = ref();
</script>

<template>
  <div class="flex w-11/12 justify-end my-auto h-screen items-center">
    <div class="w-1/2 flex-col self -center">
      <div class="form flex flex-col">
        <div class="flex mb-4 w-full">
          <div class="w-1/3">
            <label for="porcentajePractico" class="mr-3">% Práctico</label>
            <InputText id="porcentajePractico" class="myTailwindInput" type="text"
                       v-model="practPorcentaje"/>
          </div>
          <div class="">
            <label for="pract" class="mr-3">Nota práctica</label>
            <InputText id="pract" type="text" v-model="practico"/>
          </div>
        </div>

        <label for="parcial1">Primer Parcial</label>
        <InputText id="parcial1" type="text" v-model="primerParcial"/>

        <label for="parcial2">Segundo Parcial</label>
        <InputText id="parcial2" type="text" v-model="segundoParcial"/>

        <label for="mejora">Mejoramiento</label>
        <InputText id="mejora" type="text" v-model="mejoramiento"/>

      </div>

      <Button label="Calcular" severity="success" raised/>
    </div>


  </div>
</template>

<style scoped>
.myTailwindInput {
  @apply bg-gray-100 dark:bg-gray-900 p-3 w-2/4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent;
}

</style>