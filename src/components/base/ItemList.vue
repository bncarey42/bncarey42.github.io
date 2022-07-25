<template>
<ul class="border border-gray-500 rounded">
  <li class="px-2 py-3 even:bg-slate-300 border-b border-gray-500 first:rounded-t last:rounded-b last:border-b-0 hover:bg-slate-400 hover:bg-opacity-30" v-for="item in items">{{item}}</li>
</ul>

</template>

<script>
export default {
  name: "ItemList",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>