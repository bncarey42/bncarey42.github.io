<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Resume from "./components/resume/Resume.vue";
import Hero from "./components/hero.vue";
</script>
<script>
export default {
  methods: {
    scrollTo() {
      this.$refs.resume.focus()
    }
  }
}
</script>

<template>
  <div class="m-10">
    <div class="rounded-2xl py-8 relative">
      <div class="bg-accent-1 h-full rounded-2xl -z-10 bg-repeat-y mx-8 w-full h-full bg-accent-1 absolute top-0 left-0" id="content"></div>
      <div class="">
        <div>
          <div class="flex justify-between center">
            <hero title="Hi! I'm Ben." msg="I am a systems minded developer with a client focused mindset (I want to know my code is helping you). I am
            always questioning and curious with a focus on how big problems can be simplified and solutions implemented.
            I am lifelong student looking to expand my understanding of fundamental and complex ideas."
                  img-url="https://avatars.githubusercontent.com/u/11987913?v=4"/>
          </div>
        </div>
        <resume/>
      </div>
    </div>
  </div>
</template>

<style scoped>
#content {
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='59.428' patternTransform='scale(3) rotate(120)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(211, 34%, 27%, 1)'/><path d='M0 70.975V47.881m20-1.692L8.535 52.808v13.239L20 72.667l11.465-6.62V52.808zm0-32.95l11.465-6.62V-6.619L20-13.24 8.535-6.619V6.619L20 13.24m8.535 4.927v13.238L40 38.024l11.465-6.62V18.166L40 11.546zM20 36.333L0 47.88m0 0v23.094m0 0l20 11.548 20-11.548V47.88m0 0L20 36.333m0 0l20 11.549M0 11.547l-11.465 6.619v13.239L0 38.025l11.465-6.62v-13.24L0 11.548v-23.094l20-11.547 20 11.547v23.094M20 36.333V13.24'  stroke-linejoin='round' stroke-linecap='round' stroke-width='1.5' stroke='hsla(16, 100%, 74%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
}

</style>
