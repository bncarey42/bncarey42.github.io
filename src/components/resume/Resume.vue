<template>
  <employer :employer="emp" v-for="(emp, key) in work" :key="key" class="mb-5" v-if="resume"/>
</template>

<script>
import Employer from "./Employer.vue";
import Card from "../base/Card.vue";

export default {
  name: "Resume",
  components: {Card, Employer},
  props: {
    resume: {type: Object, required: true}
  },
  data() {
    return {
      work: [],
      education: []
    }
  },
  mounted() {
    this.work = this.resume.work;
    this.education = this.resume.education;
  },
  computed: {
    technologies() {
      let tech = []
      this.work.forEach(emp => {
        emp.roles.forEach(role => {
          if (role.technologies) {
            tech = [...tech, ...role.technologies.map(t=>t.title)]
          }
          if(role.projects) {
            role.projects.forEach(proj => {
              if (proj.technologies) {
                tech = [...tech, ...proj.technologies.map(t=>t.title)]
              }
            })
          }
        })
      })
      tech = new Set(tech)
      console.log(tech)
      return tech;
    }
  }
}
</script>

<style scoped>

</style>