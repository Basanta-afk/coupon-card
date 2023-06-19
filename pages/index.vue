<template>
  <div class="h-screen">
    <h1 class="text-2xl font-bold mb-4 px-4 text-center py-8 sm:py-10">
      Coupon App
    </h1>

    <section class="grid gap-x-4 grid-cols-12 px-10">
      <article
        v-for="coupon in coupons"
        :key="coupon.id"
        :class="[
          'bg-gradient-to-br col-span-12  w-full sm:col-span-6 md:col-span-4 lg:col-span-3',
          coupon.redeemed
            ? 'from-gray-400 to-gray-500'
            : 'from-indigo-500 to-purple-500',
          'text-white  p-4 rounded-lg shadow-md flex flex-col justify-between mb-4',
          coupon.redeemed ? 'animate-redeemed' : 'animate-not-redeemed',
        ]"
      >
        <div>
          <h2 class="text-lg font-semibold mb-2">{{ coupon.title }}</h2>
          <div class="flex flex-col">
            <div>
              <p class="text-gray-600">Code:</p>
              <p class="text-gray-800 font-bold">{{ coupon.code }}</p>
            </div>
          </div>
        </div>
        <div v-if="!coupon.redeemed">
          <button
            @click="redeemCoupon(coupon)"
            class="bg-blue-500 text-white px-3 py-1 rounded-md font-bold cursor-pointer border-none"
          >
            Redeem
          </button>
        </div>

        <div class="mt-2">
          <button
            @click="copyToClipboard(coupon.code)"
            class="bg-gray-200 text-gray-800 px-3 py-1 rounded-md font-bold cursor-pointer"
          >
            Copy Code
          </button>
        </div>
      </article>
    </section>

    <section class="flex flex-col items-center mt-4 justify-center">
      <label for="couponCode" class="mr-2">Enter Coupon Code:</label>
      <input
        type="text"
        id="couponCode"
        v-model="inputCode"
        class="border border-gray-400 rounded-md px-2 py-1 mb-2 sm:mb-0 sm:mr-2"
      />
      <div class="py-2">
        <button
          @click="checkCoupon"
          class="bg-blue-500 text-white py-1 px-4 rounded-md font-bold cursor-pointer"
        >
          Check
        </button>
      </div>
    </section>

    <Toast
      v-if="errorMessage"
      :message="errorMessage"
      :type="toastType"
      @close="errorMessage = ''"
    />
  </div>
</template>

<script>
import Toast from "@/components/common/Toast.vue";

export default {
  data() {
    return {
      coupons: [],
      inputCode: "",
      errorMessage: "",
      toastType: "",
    };
  },
  mounted() {
    this.fetchCoupons(); // Fetch coupons when the component is mounted
  },
  methods: {
    fetchCoupons() {
      setTimeout(() => {
        this.coupons = [
          {
            id: 1,
            title: "Coupon 1",
            code: "ABC123",
            redeemed: false,
          },
          {
            id: 2,
            title: "Coupon 2",
            code: "DEF456",
            redeemed: true,
          },
          {
            id: 3,
            title: "Coupon 3",
            code: "DGF456",
            redeemed: false,
          },
          {
            id: 4,
            title: "Coupon 4",
            code: "DEL456",
            redeemed: true,
          },
          {
            id: 5,
            title: "Coupon 5",
            code: "QEF456",
            redeemed: false,
          },
        ];
      }, 1000);
    },
    redeemCoupon(coupon) {
      if (!coupon.redeemed) {
        console.log("Redeem coupon:", coupon.title, "Code:", coupon.code);
        coupon.redeemed = true;
        this.showToast("Coupon redeemed successfully!", "success");
      }
    },
    checkCoupon() {
      const coupon = this.coupons.find(
        (coupon) => coupon.code === this.inputCode
      );
      if (coupon) {
        if (coupon.redeemed) {
          this.showToast("Code has been redeemed.", "info");
        } else {
          this.showToast("Code has not been redeemed yet.", "info");
        }
      } else {
        this.showToast("Invalid coupon code.", "error");
      }
      this.inputCode = "";
    },

    showToast(message, type) {
      this.errorMessage = message;
      this.toastType = type;
    },
    copyToClipboard(code) {
      navigator.clipboard.writeText(code).then(() => {
        this.showToast("Coupon code copied to clipboard!", "success");
      });
    },
  },
  components: {
    Toast,
  },
};
</script>

<style>
.animate-redeemed {
  animation: fadeOut 0.5s ease-in-out;
}

.animate-not-redeemed {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>
