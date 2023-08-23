<template>
  <div class="container p-8 lg:p-20 mx-auto content" v-html="privacyPolicy"></div>
</template>

<script setup>
const privacyPolicy = ref();
const { data: ppSection } = await useWpAPI().getPage("privacy-policy");
console.log(ppSection.value);
privacyPolicy.value = ppSection.value[0].content.rendered;
</script>

<style lang="scss" scoped>
.content :deep(h2) {
  font-size: 32px;
  line-height:1.1;
  margin-bottom: 1rem;
}
.content :deep(p) {
  margin-bottom: 2rem;
}
</style>
