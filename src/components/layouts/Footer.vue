<template>
  <div class="container text-center footer-container mb-3">
  </div>
  <button @click="handleUpdate">Update</button>
</template>

<script>
export default {
  name: 'Footer',
  props: ['title'],
  emits: ['response'],
  setup(props, { emit }) {
    // setup() receives props as the first argument.
    console.log(props.title);

    const handleUpdate = () => {
      emit("response", "Hello World, Vue 3 & Tailwind Boilerplate");
    };

    return { handleUpdate };
  }
}
</script>

<!-- <script setup lang = "ts">
import { defineProps } from "vue";
const props = defineProps({ title: String });
const handleUpdate = () => {
  // emit("response", "Hello World, Vue 3 & Tailwind Boilerplate");
  console.log(props)
};
</script> -->