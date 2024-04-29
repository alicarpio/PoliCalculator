<script setup>
import InputText from 'primevue/inputtext';
import {ref} from "vue";

const practPorcentaje = ref();
</script>

<template>
  <label for="porcentajePractico">% Práctico</label>
  <InputText id="porcentajePractico"  type="text" v-model="practPorcentaje"/>
  <div>Hi</div>
  <RouterView/>
</template>

<style scoped>

</style>