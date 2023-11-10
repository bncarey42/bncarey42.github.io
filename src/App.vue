<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Resume from "./components/resume/Resume.vue";
// import htmlToPdf from "./compostables/htmlToPaper.js";
import Card from "./components/base/Card.vue";
import Hero from "./components/hero.vue";
</script>
<template>
  <div class="m-4 lg:m-24 pill-scroll font-ubuntu">
    <div class="py-8 relative">
      <div class="-z-10 absolute top-0 left-0 w-full h-full">
        <div class="bg-hex bg-repeat-y h-full rounded-2xl lg:mx-10 mx-4 relative"></div>
      </div>
      <div class="">
        <hero title="Hello there! I'm Ben." :msg="`I am a systems-minded software engineer with a client-focused mindset with ${new Date().getFullYear() - 2017} years of development and engineering experience. I am questioning and curious, focusing on simplifying big problems to implement effective and maintainable solutions.
        I am a lifelong learner searching for ways to expand my understanding of fundamental and complex ideas.`"
              :links="sites"
        />
        <card class="flex justify-center" v-if="loading">
          <h5>LOADING</h5>
        </card>

        <resume :resume="resume" v-else/>
      </div>
    </div>
  </div>
</template>
<script>
// const loading = ref(true);
export default {
 




  data() {
    return {
      resume: {work: []},
      sites: [
        {
          icon: "uil uil-github",
          title: "github.com/bncarey42",
          link: "https://github.com/bncarey42",
        },
        {
          icon: "uil uil-linkedin",
          title: "linkedin.com/in/benjamintcarey",
          link: "https://www.linkedin.com/in/benjamintcarey/",
        },
      ],
      loading: true
    }
  },
  created() {
    fetch("https://api.github.com/repos/bncarey42/resume/contents/resume.json?ref=main", {
      method: 'GET',
      headers: new Headers({"Accept": "application/vnd.github.VERSION.raw"}),

    })
        .then(response => response.json())
        .then(data => {
          this.resume = data;
        })
        .catch(error => console.error('error', error))
        .finally(() => {
          this.loading = false;
        });

  }
}
</script>
<style></style>
