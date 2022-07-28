<template>
  <button :disabled="disabled"
          v-on="$emit"
          :class="[
              'cursor-pointer px-3 py-2 rounded-full flex items-center justify-center font-semibold hover:border-opacity-80 hover:bg-opacity-80 disabled:border-opacity-30 disabled:bg-opacity-30',
              outline ? `bg-white border-2 border-${color ? color : 'tertiary'} text-${color ? color : 'tertiary'}` : `bg-${color ? color : 'tertiary'} text-white`
          ]">
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script>
import {colorValid} from "../../compostables/sharedValidators.js";

export default {
  name: "Btn",
  props: {
    text: {
      type: String
    },
    color: {
      type: String,
      required: false,
      validator: (val) => colorValid(val)
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    outline: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>