<template>
  <div>
    <HomePageHeroSection />
    <HomePageServices />
    <HomePageAboutSection />
    <HomePageTestimonials />
    <HomePageCTA />
  </div>
</template>

<script setup>
const postInfo = ref();
const getData = async () => {
  const { data: posts } = await useWpAPI().getPosts();
  postInfo.value = posts.value;
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped></style>
