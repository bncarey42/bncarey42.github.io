<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Resume from "./components/resume/Resume.vue";
// import htmlToPdf from "./compostables/htmlToPaper.js";
// import Card from "./components/base/Card.vue";
import Hero from "./components/hero.vue";
</script>
<template>
  <div class="m-4 lg:m-16 pill-scroll font-ubuntu">
    <div class="py-8 relative">
      <div class="-z-10 absolute top-0 left-0 w-full h-full">
        <div class="bg-accent-1 bg-hex h-full rounded-2xl bg-repeat-y lg:mx-10 mx-4 bg-accent-1 relative"></div>
      </div>
      <div class="">
        <hero title="Hi! I'm Ben." :msg="`I am a systems minded software engineer with a client focused mindset with ${new Date().getFullYear() - 2017} years of development and engineering experience. I am always questioning and curious
              with a focus on how big problems can be simplified in order to implement effective, maintainable solutions.
              I am lifelong student who is always looking to expand my understanding of fundamental and complex ideas.`"
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
      redirect: 'follow'
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
<style>
.bg-hex {
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='59.428' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(211, 34%, 27%, 1)'/><path d='M0 70.975V47.881m20-1.692L8.535 52.808v13.239L20 72.667l11.465-6.62V52.808zm0-32.95l11.465-6.62V-6.619L20-13.24 8.535-6.619V6.619L20 13.24m8.535 4.927v13.238L40 38.024l11.465-6.62V18.166L40 11.546zM20 36.333L0 47.88m0 0v23.094m0 0l20 11.548 20-11.548V47.88m0 0L20 36.333m0 0l20 11.549M0 11.547l-11.465 6.619v13.239L0 38.025l11.465-6.62v-13.24L0 11.548v-23.094l20-11.547 20 11.547v23.094M20 36.333V13.24'  stroke-linejoin='round' stroke-linecap='round' stroke-width='1.5' stroke='hsla(16, 100%, 74%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  background-clip: content-box;
}

.bg-hex-sm {
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='59.428' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(211, 34%, 27%, 1)'/><path d='M0 70.975V47.881m20-1.692L8.535 52.808v13.239L20 72.667l11.465-6.62V52.808zm0-32.95l11.465-6.62V-6.619L20-13.24 8.535-6.619V6.619L20 13.24m8.535 4.927v13.238L40 38.024l11.465-6.62V18.166L40 11.546zM20 36.333L0 47.88m0 0v23.094m0 0l20 11.548 20-11.548V47.88m0 0L20 36.333m0 0l20 11.549M0 11.547l-11.465 6.619v13.239L0 38.025l11.465-6.62v-13.24L0 11.548v-23.094l20-11.547 20 11.547v23.094M20 36.333V13.24'  stroke-linecap='square' stroke-width='1' stroke='hsla(16, 100%, 74%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  background-clip: content-box;
}

</style>
