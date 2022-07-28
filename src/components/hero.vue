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
  <div class="w-full lg:py-32 lg:px-24 px-10 py-16">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-1 items-center">
      <div class="mb-5 lg:mb-0 w-full">
        <img src="https://avatars.githubusercontent.com/u/11987913?v=4"
             class="rounded-full w-40 h-40 lg:w-80 lg:h-80 border border-8 border-secondary m-auto lg:ml-1/4"
             alt="Profile Avatar for Ben Carey">
      </div>
      <div class="">
        <div class="w-full p-3 shadow-lg rounded-lg bg-white bg-opacity-70">
          <h1>Hi! I'm Ben.</h1>
          <div class="px-3">
            <p>{{ msg }}</p>
          </div>
<!--          <div class="flex justify-end gap-3">-->
<!--            <button @click="callToAction()">{{ callToActionMsg }}</button>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
