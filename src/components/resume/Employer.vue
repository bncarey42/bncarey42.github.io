<template>
  <card class="grid grid-cols-1 lg:grid-cols-4 gap-3 my-3">
    <div class="">
      <div class="grid grid-cols-3 gap-3 sticky top-3">
        <div class="">
          <div v-if="employer.icon" class="w-full">
            <div v-html="employer.icon" v-if="employer?.icon.match(/<svg .*><\/svg>/)" class="mx-auto w-24 lg:w-32"></div>
            <img :src="employer.icon" v-else :alt="`logo for ${employer.employer}`" class="mx-auto w-24 lg:w-32">
            <div class="text-[8px] text-secondary text-right mt-1">&trade; {{employer.employer}}</div>
          </div>
          <div v-else>
            <div class="rounded-full bg-accent-1 bg-hex-sm w-24 h-24 lg:w-32 lg:h-32 mx-auto"></div>
          </div>

        </div>
        <div class="col-span-2">
          <h3>{{ employer.employer }}</h3>
          <p class="font-semibold text-primary"> {{ employer.startDate }} - {{ employer.endDate }}</p>
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