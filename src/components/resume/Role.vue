<script>
export default {
  name: "Role",
  props: {
    role: {
      type: Object,
      required: true
    },
    project: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    console.log(this.role)
  }
}
</script>

<template>
  <div class="mb-3">
    <div class="mb-3">
      <h3>{{ role.title }}</h3>
      <p class="font-semibold text-tertiary"> {{ role.startDate }} - {{ role.endDate }}</p>
      <p><span class="font-semibold mr-1" v-if="role.description">{{
          `${project ? "Project" : "Role"} Description:`
        }}</span>{{ role.description }}</p>
    </div>
    <div v-if="role.technologies?.length" class="mb-3">
      <h4>Technologies:</h4>
      <div class="mx-auto">
        <ul class="">
          <li class="inline-grid mr-3 text-center" v-for="(tech, key) in role.technologies" :key="key">
            <div>
              <i :class="tech.icon" class="w-20 mr-3 last:mr-0"/>
              <p>{{ tech.title }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="role.duties?.length" class="mb-3">
      <h4>Responsibilities:</h4>
      <div class="pl-3">
        <ul>
          <li class="list-disc" v-for="(duty, key) in role.duties" :key="key">{{ duty }}</li>
        </ul>
      </div>
    </div>
    <div v-if="role.projects?.length" class="mb-3">
      <h4>Projects:</h4>
      <div class="pl-3">
        <role :role="project" project v-for="(project, idx) in role.projects" :key="idx"/>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>