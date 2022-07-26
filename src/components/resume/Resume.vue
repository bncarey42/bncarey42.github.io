<template>
  <div class="" v-if="loading">LOADING</div>
  <div class="" v-else>
    <employer :employer="emp" v-for="(emp, key) in work" :key="key" class="mb-5"/>
  </div>
</template>

<script>
import Employer from "./Employer.vue";
export default {
  name: "Resume",
  components: {Employer},
  mounted() {
    this.loading=true;
    let myHeaders = new Headers({"Accept": "application/vnd.github.VERSION.raw"});

    fetch("https://api.github.com/repos/bncarey42/resume/contents/resume.json?ref=main", {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
        .then(response => response.json())
        .then(data => {
          this.work = data.work;
          this.education = data.education;
        })
        .catch(error => console.log('error', error))
        .finally(() => {
          this.loading = false;
        });
  },
  data(){
    return {
      work: null,
      education: null,
      loading: false
    }
  }
}
</script>

<style scoped>

</style>