<template>
  <card class="grid grid-cols-1 gap-3 items-center">
    <div class="">
      <label for="tech_filter" class="">
        Technologies
      </label>
      <multiselect v-model="filter.technology" :options="technologies" descriptor="title"
      />

    </div>
    <div class="flex justify-end"><button class="bg-secondary rounded px-2 py-1 hover:bg-opacity-80">Reset Filters</button></div>
  </card>
  <employer :employer="emp" v-for="(emp, key) in filtered_employers" :key="key" class="mb-5" v-if="resume"/>
</template>

<script>
import Employer from "./Employer.vue";
import Card from "../base/Card.vue";
import Btn from "../base/Bnt.vue";
import Multiselect from '../base/Multiselect.vue'

export default {
  name: "Resume",
  components: {Btn, Card, Employer, Multiselect},
  props: {
    resume: {type: Object, required: true}
  },
  data() {
    return {
      work: [],
      education: [],
      filter: {
        employer: '',
        title: '',
        technology: []
      }
    }
  },
  mounted() {
    this.work = this.resume.work;
    this.education = this.resume.education;
  },
  computed: {
    filtered_employers() {
      return this.work.filter(employer => {
        let filter = [];
        if(this.filter.employer && this.filter.employer.includes(employer.employer)) {
          filter.push(true);
        }
        employer.roles.forEach(role => {

        })
        return filter.every(entry => entry);
      });
    },
    technologies() {
      let employer_techs = []
      this.work.forEach(emp => {
        emp.roles.forEach(role => {
          let role_tech = []
          if (role.technologies) {
            role.technologies.forEach(t=> role_tech.push(t))
          }
          if(role.projects) {
            role.projects.forEach(proj => {
              if (proj.technologies) {
                proj.technologies.forEach(t=>role_tech.push(t))
              }
            })
          }
          employer_techs = [...employer_techs, ...role_tech.reduce((arr, t)=>{
            let idx = employer_techs.findIndex(tech=>tech.title === t.title)
            if(idx < 0) {
              arr.push(t)
            }
            return arr
          }, [])];
        })
      })
      return employer_techs.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}
</script>

<style scoped>

</style>