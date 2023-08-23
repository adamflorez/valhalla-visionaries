<template>
  <div :class="`bg-viking-blue`">
    <h2 class="text-center text-4xl font-bold">{{ data[0].acf.title }}</h2>
    <p>{{ data[0].acf.description }}</p>
    <p v-for="feature in data[0].acf.features_list.split(',')" class="px-3 my-3">
       <Icon name="uid:checkbox"/> {{ feature }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  package: {
    value: String,
  },
  color: {
    value: String,
  },
});

const { data } = await useWpAPI().getPost(`${props.package}-package`);
</script>

<style lang="scss" scoped></style>
