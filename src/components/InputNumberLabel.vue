<script setup>
import {computed, ref, watch} from "vue";

const model = defineModel()

defineProps({
  placeholder: String,
  id: String,
  forId: String,
  label: String,
})

const error = ref(false);
const errorMessage = ref(null);


watch(model, () => {
  if (value.length === 0) {
    error.value = false
    errorMessage.value = null
    return
  }

  const number = parseInt(value)

  if (isNaN(number)) {
    error.value = true
    errorMessage.value = "El campo debe ser un numero"
    return
  }

  if (number < 0 || number > 100) {
    error.value = true
    errorMessage.value = "El campo debe ser un número entre 0 y 100"
    return
  }




  error.value = false
  errorMessage.value = null
})

const klass = computed(() => {
  if (error.value) {
    return {
              input: "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 p-1.5 text-sm rounded-xl sm:text-base focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-300 dark:bg-gray-700 focus:border-red-500 block w-full sm:p-2 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500",
              label: "block text-sm mt-2 sm:text-base w-full font-normal md:text-base lg:text-base text-pink-700 dark:text-white"
            }
  } else {
    return {
      input:"sm:text-base mb-0 text-sm block w-full bg-gray-100 dark:bg-gray-900 p-[6px] sm:p-2.5 md:text-base lg:text-base focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-300 rounded-2xl shadow-inner border border-slate-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      label: "block text-sm mt-2 sm:text-base w-full font-normal md:text-base lg:text-base text-gray-900 dark:text-white"
    }
  }
})
</script>

<template>
  <label :for="forId"
         :class="klass.label"
  >{{ label }}</label>
  <input
      type="number" v-model="model" :id="id" aria-describedby="helper-text-explanation"
      :class="klass.input"
      :placeholder="placeholder"
      required
  />
  <p class="text-sm font-medium text-pink-600  dark:text-pink-500" v-if="error">
    <span class="font-semibold">Error!</span>{{ errorMessage }}
  </p>
</template>

<style scoped>

</style>