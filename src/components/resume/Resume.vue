<template>
  <employer :employer="emp" v-for="(emp, key) in work" :key="key" class="mb-5" v-if="resume"/>
</template>

<script>
import Employer from "./Employer.vue";

export default {
  name: "Resume",
  components: {Employer},
  props: {
    resume: {type: Object, required: true}
  },
  data() {
    return {
      work: {},
      education: {}
    }
  },
  mounted() {
    this.work = this.resume.work;
    this.education = this.resume.education;
  }
}
</script>

<style scoped>

</style>