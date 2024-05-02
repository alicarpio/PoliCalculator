<script setup>
import {ref} from "vue";
import InputText from "../components/InputText.vue";


const practPorcentaje = ref();
const practico = ref();
const primerParcial = ref();
const segundoParcial = ref();
const mejoramiento = ref();
</script>

<template>
  <div class="flex w-11/12 justify-end my-auto h-screen items-center">
    <div class="w-2/5 flex-col">
      <div class="form flex flex-col w-full">
        <div class="flex mb-4 w-full gap-4">
          <div class="w-1/5">
<!--            <label for="porcentajePractico" class="mr-3">% Práctico</label>-->
<!--            <InputText id="porcentajePractico" class="w-full" type="text"-->
<!--                       v-model="practPorcentaje"/>-->
          </div>
          <div class="w-4/5">
<!--            <label for="pract" class="mr-3">Nota práctica</label>-->
<!--            <InputText id="pract" class="w-full" type="text" v-model="practico"/>-->
          </div>
        </div>

        <InputText/>

<!--        <label for="parcial1">Primer Parcial</label>-->
<!--        <InputText id="parcial1"  class="mb-4" type="text" v-model="primerParcial"/>-->

<!--        <label for="parcial2">Segundo Parcial</label>-->
<!--        <InputText id="parcial2" class="mb-4" type="text" v-model="segundoParcial"/>-->

<!--        <label for="mejora">Mejoramiento</label>-->
<!--        <InputText id="mejora" class="mb-4" type="text" v-model="mejoramiento"/>-->

      </div>

<!--      <Button label="Calcular" class="w-full" severity="success" raised/>-->
    </div>


  </div>
</template>

<style scoped>

</style>