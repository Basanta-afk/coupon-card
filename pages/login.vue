<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-64">
      <h2 class="text-2xl font-bold mb-4">Coupon Redeem</h2>
      <form @submit="login" class="space-y-4">
        <div>
          <label for="username" class="block mb-1">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label for="password" class="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const validUsername = "admin";
      const validPassword = "password";

      if (this.username === validUsername && this.password === validPassword) {
        console.log("Login successful");
        this.$router.push("/");
      } else {
        console.log("Invalid username or password");
      }
    },
  },
};
</script>
