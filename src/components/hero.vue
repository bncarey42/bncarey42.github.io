<script setup>
import Card from "./base/Card.vue";
defineProps({
  title: {type: String, required: false},
  msg: {type: String, required: true},
  imgUrl: {type: String, required: false},
  imgAlt: {type: String, required: false},
  callToAction: {type: Function, required: false},
  callToActionMsg: {type: String, required: false},
  links: {type: String, required: false}
})
</script>

<template>
  <div class="w-full lg:py-32 lg:px-24 px-10 py-3">
      <card class="grid lg:grid-cols-2 grid-cols-1 gap-1 items-center bg-opacity-90 py-16">
          <div class="mb-5 lg:mb-0 w-full">
            <img src="https://avatars.githubusercontent.com/u/11987913?v=4"
                 class="rounded-full w-40 h-40 lg:w-80 lg:h-80 border border-4 border-secondary m-auto lg:ml-1/4 shadow"
                 alt="Profile Avatar for Ben Carey">
          </div>
          <div class="">
            <div class="w-full p-3 rounded-lg">
              <h1>{{title}}</h1>
              <div class="px-3">
                <p>{{ msg }}</p>
              </div>
              <div class="flex justify-center lg:justify-end gap-3 items-center text-xl">
                <p>Contact me at:</p>
                <a v-for="(site, key) in links" :key="key"
                   :href="site.link" target="_blank"
                   :class="{'cursor-pointer':site.link , '':true}">
                  <i :class="site.icon" :title="site.title"/>
                </a>
              </div>
            </div>
          </div>
    </card>
  </div>
</template>

<style scoped>
</style>
