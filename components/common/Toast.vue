<template>
  <div :class="['fixed', 'bottom-4', 'right-4', toastClass]">
    <div class="flex items-center justify-between">
      <span class="mr-2">{{ message }}</span>
      <button @click="closeToast" class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M14.12 12l4.95-4.95a.5.5 0 0 0-.35-.85H3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h16.22a.5.5 0 0 0 .35-.85L14.12 12z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "type"],
  computed: {
    toastClass() {
      if (this.type === "success") {
        return "bg-green-500 text-white px-4 py-2 rounded-md";
      } else if (this.type === "error") {
        return "bg-red-500 text-white px-4 py-2 rounded-md";
      } else if (this.type === "info") {
        return "bg-blue-500 text-black px-4 py-2 rounded-md";
      } else {
        return ""; // Default class if no type is specified
      }
    },
  },
  methods: {
    closeToast() {
      this.$emit("close");
    },
  },
};
</script>
