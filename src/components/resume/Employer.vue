<template>
  <card class="grid grid-cols-1 lg:grid-cols-4 gap-3 my-3">
    <div class="">
      <div class="grid grid-cols-3 gap-3 sticky top-3">
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