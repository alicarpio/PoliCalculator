<script setup>
const model = defineModel()
defineProps({
  placeholder: String,
  id: String,
  forId: String,
  label: String,
  error: Boolean,
  classAtt: String,

})
</script>

<template>
    <label :for="forId" class="block mb-1 text-md w-full font-medium text-gray-900 dark:text-white">{{label}}</label>
    <input type="number" v-model="model" :id="id" aria-describedby="helper-text-explanation" :class="classAtt" class="text-md block w-full bg-gray-100 dark:bg-gray-900 p-3 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-300 rounded-xl shadow-inner border border-slate-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholder" required />
    <p class="mt-2 text-sm font-medium text-pink-600 dark:text-pink-500" v-if="error"><span class="font-semibold">Error!</span> Solo puede ingresar numeros entre 0 y 100.</p>
</template>

<style scoped>

</style>