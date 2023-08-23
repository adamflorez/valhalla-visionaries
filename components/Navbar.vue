<template>
  <div :class="` fixed z-50 w-full duration-300 right-0`">
    <nav
      class="md:flex hidden w-full h-20 bg-parchment justify-between items-center"
    >
      <div class="h-20 flex items-center justify-center">
        <nuxt-link
          to="/"
          class="px-8 h-full flex items-center justify-center hover:bg-gray-300"
          >Logo</nuxt-link
        >
      </div>
      <div class="h-20 flex items-center justify-center">
        <nuxt-link
          to="/services"
          class="px-8 h-full flex items-center justify-center hover:bg-gray-300"
          >Our Services</nuxt-link
        >
        <nuxt-link
          to="/work"
          class="px-8 h-full flex items-center justify-center hover:bg-gray-300"
          >Our Work</nuxt-link
        >
        <nuxt-link
          to="/about"
          class="px-8 h-full flex items-center justify-center hover:bg-gray-300"
          >About Us</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="px-8 h-full flex items-center justify-center hover:bg-gray-300"
          >Contact Us</nuxt-link
        >
      </div>
    </nav>
    <nav class="md:hidden z-50">
      <div
        class="h-20 flex bg-white z-50 items-center justify-between relative"
      >
        <nuxt-link
          @click="menuToggled = false"
          to="/"
          class="px-8 h-full z-50 flex items-center justify-center hover:bg-gray-300"
          >Logo</nuxt-link
        >
        <div
          @click="menuToggled = !menuToggled"
          class="px-8 h-full flex items-center justify-center hover:bg-gray-300"
        >
          <Icon class="text-4xl" name="jam:menu" />
        </div>
        <div
          :class="`bg-white flex-col absolute ${bottom} -z-50 duration-500 transition-position w-full items-center justify-center`"
        >
          <nuxt-link
            @click="menuToggled = false"
            to="/services"
            class="px-8 h-20 flex items-center justify-center hover:bg-gray-300"
            >Our Services</nuxt-link
          >
          <nuxt-link
            @click="menuToggled = false"
            to="/work"
            class="px-8 h-20 flex items-center justify-center hover:bg-gray-300"
            >Our Work</nuxt-link
          >
          <nuxt-link
            @click="menuToggled = false"
            to="/about"
            class="px-8 h-20 flex items-center justify-center hover:bg-gray-300"
            >About Us</nuxt-link
          >
          <nuxt-link
            @click="menuToggled = false"
            to="/contact"
            class="px-8 h-20 flex items-center justify-center hover:bg-gray-300"
            >Contact Us</nuxt-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const menuToggled = ref(false);
const scrollY = ref(0);
const navWidth = ref("w-1/2");
const bottom = computed(() => {
  return menuToggled.value ? `-bottom-[320px]` : "bottom-[300px]";
});

const width = (num) => {
  return num >= 819 ? "w-full" : "w-1/2";
};

onMounted(() => {
  window.addEventListener("scroll", function () {
    scrollY.value == window.scrollY;
    navWidth.value = width(window.scrollY);
  });
});
</script>

<style lang="scss" scoped></style>
