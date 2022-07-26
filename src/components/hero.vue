<script setup>
import Btn from "./base/Bnt.vue";
import Card from "./base/Card.vue";

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
  <div class="w-full md:py-32 md:px-24 px-20 py-24">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-1 items-center">
      <div class="mb-5 md:mb-0 w-full">
        <img :src="imgUrl" class="rounded-full w-40 h-40 md:w-80 md:h-80 border border-8 border-secondary" :alt="imgAlt" v-if="imgUrl">
      </div>
      <div class="">
        <card>
          <h1>{{ title }}</h1>
          <p>{{ msg }}</p>
          <div class="justfiy-end">
            <btn color="primary" @click="callToAction" :text="callToActionMsg" v-if="callToAction"/>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
