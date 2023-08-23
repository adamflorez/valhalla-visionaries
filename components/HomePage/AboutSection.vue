<template>
  <section class="flex flex-wrap md:flex-nowrap p-8 items-center bg-mystic-fog">
    <div class="w-full md:w-1/2 md:pr-8">
      <img
        :src="as.image"
        alt="Viking-inspired imagery"
        class="w-full h-auto rounded"
      />
    </div>

    <div class="w-full md:w-1/2 mt-6 md:mt-0">
      <h2 class="text-2xl font-bold">
        {{ as.heading }}
      </h2>
      <p class="text-lg mt-4">
        {{ as.intro_text }}
      </p>
      <p class="text-lg mt-4">
        {{ as.our_mission }}
      </p>
      <nuxt-link
        :to="as.link"
        class="block text-center text-white bg-viking-blue-600 p-3 rounded mt-6 w-max"
        >Discover Our Journey</nuxt-link
      >
    </div>
  </section>
</template>

<script setup>
const as = ref();
const { data: heroSection } = await useWpAPI().getPost("about-section");
as.value = heroSection.value[0].acf;
</script>

<style lang="scss" scoped></style>
