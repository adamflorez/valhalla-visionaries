<template>
  <div
    class="flex flex-col md:flex-row items-center justify-center h-screen relative overflow-hidden"
  >
    <!-- Background Image -->
    <div
      class="w-full h-screen absolute md:relative md:w-1/2 md:h-full shadow-md inset-0 bg-black bg-cover bg-center"
      v-bind:style="{ backgroundImage: `url('${hs.background}')` }"
      aria-label="Hero background image"
    ></div>
    <!-- Enhanced the opacity for better readability -->
    <div
      class="md:hidden absolute h-screen w-screen bg-black bg-opacity-[.6]"
    ></div>
    <!-- Content Container -->
    <div
      class="container text-white md:text-black z-10 relative px-4 sm:px-6 lg:px-8 flex justify-center flex-col w-full md:w-1/2"
    >
      <h1
        class="text-sm text-viking-blue md:text-md md:mb-12 my-4 uppercase font-medium tracking-widest"
      >
        {{ hs.heading }}
      </h1>
      <h2
        class="text-4xl font-grotesque md:text-5xl lg:text-6xl font-semibold mb-8 leading-snug"
      >
        <span class="text-visionary-purple"> Valhalla Visionaries: </span>
        <br />
        {{ hs.sub_heading }}
      </h2>
      <p class="text-base md:text-xl mb-8">{{ hs.description }}</p>
      <nuxt-link
        :to="hs.cta_link"
        class="inline-block md:w-2/3 text-center bg-viking-blue hover:bg-viking-blue-600 text-white font-semibold text-xl rounded-full px-8 py-4 transition-colors duration-300 transform"
        >See Our Services</nuxt-link
      >
    </div>
  </div>
</template>

<script setup>
const hs = ref();
const { data: heroSection } = await useWpAPI().getPost("hero-section");
hs.value = heroSection.value[0].acf;
</script>

<style lang="scss" scoped>
p {
  text-wrap: balance;
  line-height: 1.5;
}
* {
  line-height: 1.2;
}
</style>
