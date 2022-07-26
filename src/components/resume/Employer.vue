<template>
  <card class="grid grid-cols-1 md:grid-cols-4 gap-3 my-3">
    <div class="">
      <div class="grid grid-cols-3 gap-2 sticky top-3">
        <div class=" ">
          <div v-if="employer.icon" class="w-20 h-20">
            <div v-html="employer.icon" v-if="employer?.icon.match(/<svg .*><\/svg>/)"></div>
            <img :src="employer.icon" v-else :alt="`logo for ${employer.employer}`">
          </div>
          <div v-else>
            <div class="rounded-full w-20 h-20 bg-accent-1 default-icon"></div>
          </div>
        </div>
        <div class="col-span-2">
          <h3>{{ employer.employer }}</h3>
          <p class="font-semibold text-tertiary"> {{ employer.startDate }} - {{ employer.endDate }}</p>
        </div>
      </div>
    </div>
    <div class="col-span-3">
      <role :role="role" v-for="(role, key) in employer.roles" :key="key" class="mb-8"/>
    </div>
  </card>
</template>

<script>
import Card from "../base/Card.vue";
import Role from "./Role.vue";

export default {
  name: "Employer",
  components: {Role, Card},
  props: {
    employer: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
  .default-icon {
    background-image: url('/patternpad.svg');
    background-repeat: repeat;
    background-size: 200px;
    background-position-x: random(200);
    background-position-y: random(200);
  }
</style>