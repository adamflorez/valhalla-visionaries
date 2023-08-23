<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="p-4 sm:p-6 lg:p-10">
      <h2 class="text-center text-3xl sm:text-4xl lg:text-5xl mb-8">
        Services
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="service in ss"
          :key="service"
          :class="`shadow text-center p-8 bg-${service.color}-300`"
        >
          <Icon :name="service.icon" class="text-4xl sm:text-5xl mb-4" />
          <p class="mb-4 text-lg">{{ service.description }}</p>
          <nuxt-link :to="service.cta_button">Learn More</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const ss = ref();
const { data: heroSection } = await useWpAPI().getPost("services");
ss.value = heroSection.value[0].acf;
</script>

<style lang="scss" scoped>
p {
  text-wrap: balance;
}
</style>
