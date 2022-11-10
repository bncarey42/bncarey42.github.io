<template>
  <div class="relative inline-block text-left w-full">
    <div
        class="inline-flex w-full justify-center items-center rounded-md border border-secondary bg-white px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
      <div class="flex justify-start mr-1 my-2">
        <div v-for="(selectItem, key) in selected" :key="`select_${key}`"
             class="flex justify-between items-center border border-accent-2 rounded-lg py-1 px-2 mr-1 text-accent-1 font-semibold">
          <i :class="selectItem.icon" class="mr-1"/>
          <div class="mr-1">{{ selectItem[descriptor] }}</div>
          <button @click="removeSelected(selectItem)"><i class="uil uil-times"></i></button>
        </div>
      </div>
      <input type="text"
             v-model="filter_text"
             class="border-none bg-none w-full h-full outline-none"
             id="menu-button"
             aria-expanded="true"
             aria-haspopup="true"
             @focusin="hide_options=false"
             @focusout="filterTextFocusOut()"/>
      <!-- Heroicon name: mini/chevron-down -->
      <button @click="hide_options=!hide_options"
              class="justify-end my-2">
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="secondary"
             aria-hidden="true">
          <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"/>
        </svg>
      </button>
    </div>

    <!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
    <div v-if="!hide_options"
         class="absolute shadow-xl right-0 z-10 mt-1 w-full max-h-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-x-hidden overflow-y-scroll pill-scroll focus:outline-none"
         role="menu"
         aria-orientation="vertical"
         aria-labelledby="menu-button"
         tabindex="-1">
      <div class="py-1" role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <a v-for="(option,key) in filtered_options" :key="`option_${key}`"
           role="menuitem"
           href="javascript:void(0)" :id="`option_${key}`" @click="addSelection(option)"
           class="px-4 py-2 hover:bg-primary hover:bg-opacity-30 block">
          <i :class="option.icon" class="mr-2" v-if="option.icon"></i>
          {{ option[descriptor] }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Multiselect",
  props: {
    options: {type: Array, required: true},
    descriptor: {required: false},
    modelValue: {required: true},
  },
  data() {
    return {
      hide_options: true,
      filter_text: '',
    }
  },
  methods: {
    removeSelected(selectToRemove) {
      this.selected.splice(this.selected.findIndex(s => s[this.descriptor] === selectToRemove[this.descriptor]), 1);
    },
    filterTextFocusOut() {
      setTimeout(() => {
        this.hide_options = true;
        this.filter_text = null;
      }, 300);
    },
    addSelection(opt) {
      this.selected.push(opt)
    }
  },
  computed: {
    filtered_options() {
      const opt = this.options.filter(o => !this.selected.map(s => s.title.toLowerCase()).includes(o[this.descriptor].toLowerCase()));
      return this.filter_text ? opt.filter(o => o[this.descriptor].toLowerCase().includes(this.filter_text.toLowerCase())) : opt;
    },
    selected: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style scoped>

</style>