<template>
  <div class="flex justify-center">
    <div
        class="py-12 bg-darker bg-opacity-40 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex justify-center"
        @click="this.$emit('close')"
    ></div>
    <div
        :class="{
        'z-20 box-style border border-light-gray p-3 absolute': true,
        'w-1/3': medium,
        'w-1/2': large,
      }"
    >
      <slot name="header">
        <div class="flex justify-between">
          <div class="items-center">
            <h3>{{ label }}</h3>
          </div>
          <div>
            <button
                aria-label="close"
                class="text-2xl font-bold text-dark-purple cursor-pointer"
                @click="this.$emit('close')"
            >
              <font-awesome-icon class="text-sm" icon="times" />
            </button>
          </div>
        </div>
      </slot>
      <div class="my-3">
        <slot name="content"> </slot>
      </div>
      <slot name="footer">
        <div class="flex items-center justify-end" v-if="!no_submit">
          <button
              class="inline-block py-1 px-2.5 bg-purple rounded-full text-white text-sm hover:bg-dark-purple"
              @click="$emit('close')"
              v-if="show_cancel"
          >
            {{ cancel_btn_text }}
          </button>
          <button
              class="inline-block py-1 px-2.5 border border-purple rounded-full text-purple text-sm ml-2 hover:bg-purple hover:text-white"
              @click="this.$emit('submit', index)"
              data-cy="modal-submit"
          >
            {{ submit_btn_text }}
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  emits: ["close", "submit"],
  props: {
    label: {
      type: String,
      required: false,
      default: "",
    },
    submit_btn_text: {
      type: String,
      required: false,
      default: "Submit",
    },
    no_submit: {
      type: Boolean,
      required: false,
      default: false,
    },
    show_cancel: {
      type: Boolean,
      default: false,
    },
    cancel_btn_text: {
      type: String,
      required: false,
      default: "Cancel",
    },
    large: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
