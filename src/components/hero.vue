<script setup>
import Btn from "./base/Bnt.vue";

defineProps({
  title: {type: String, required: false},
  msg: {type: String, required: true},
  imgUrl: {type: String, required: false},
  imgAlt: {type: String, required: false},
  callToAction: {type: Function, required: false},
  callToActionMsg: {type: String, required: false}
})
</script>

<template>

  <card class="grid grid-cols-2 gap-1 items-center w-full py-32 px-24">
    <div>
      <img :src="imgUrl" class="rounded-full w-80 h-80 border border-8 border-secondary" :alt="imgAlt" v-if="imgUrl">
    </div>
    <div class="">
      <h1>{{ title }}</h1>
      <p>{{ msg }}</p>
      <div class="justfiy-end">
      <btn color="primary" @click="callToAction" :text="callToActionMsg" v-if="callToAction"/>
      </div>
    </div>
  </card>

</template>

<style scoped>
</style>
