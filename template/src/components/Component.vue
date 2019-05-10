<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  props: ['title','description'],
}
</script>

<style lang="scss">
@import '../globals.scss';
</style>
