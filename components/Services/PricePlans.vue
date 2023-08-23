<template>
  <section class="py-12 bg-gray-100">
    <h2 class="text-3xl font-bold text-center mb-8">
      Transparent Pricing for Every Need
    </h2>

    <!-- Web Design Pricing -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3">
      <div v-for="p in packages">
        <RepeatsPackage :package="p" />
      </div>
    </div>

    <!-- Similar pricing sections for Web Development and SEO -->
  </section>
</template>

<script setup>
const packages = ref(["basic", "premium", "vip"]);
</script>

<style lang="scss" scoped></style>
