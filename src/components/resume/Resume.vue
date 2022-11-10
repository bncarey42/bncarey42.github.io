<template>
<!--  <card class="grid grid-cols-1 gap-3 items-center">-->
<!--    <div class="">-->
<!--      <label for="tech_filter" class="">-->
<!--        Technologies-->
<!--      </label>-->
<!--      <multiselect v-model="filter.technology" :options="technologies" descriptor="title"/>-->
<!--    </div>-->
<!--    <div class="flex justify-end"><button class="bg-secondary rounded px-2 py-1 hover:bg-opacity-80">Reset Filters</button></div>-->
<!--  </card>-->
  <employer :employer="emp" :filter="filter" v-for="(emp, key) in work" :key="key" class="mb-5" v-if="resume"/>
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
  methods: {
    reduceRoleTech(roles, existingList = []) {
      return roles.reduce((arr, role) => {
        if (role.technologies) {
          role.technologies.forEach(t => {
            if (arr.findIndex(tech => tech.title === t.title) < 0) {
              arr.push(t)
            }
          })
        }
        if (role.projects) {
          arr = this.reduceRoleTech(role.projects, arr)
        }
        return arr
      }, existingList);
    }
  },
  computed: {
    filtered_employers() {
      return this.work.filter(employer => {
        let filter = [];
        if(this.filter.employer) {
          if (employer.employer.includes(this.filter.employer)) {
            console.log(employer)
            filter.push(true);
          }
          console.log(filter)
          return filter.length > 0 ? filter.every(e=>e===true): false
        }
        return true

      });
    },
    technologies() {
      let employer_techs = []

      this.work.forEach(emp => {
        employer_techs.push(...this.reduceRoleTech(emp.roles));
      })
      return employer_techs.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}
</script>

<style scoped>

</style>