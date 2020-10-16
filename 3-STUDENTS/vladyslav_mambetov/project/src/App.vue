<template>
  <div>
      <strong>hello</strong>
      <test-comp extData="Some static text" />
      <test-comp :extData="dinText" />
      <test-comp :extData="number" />
      <test-comp />
  </div>
</template>

<script>
import TestComp from './components/test.vue'

export default {
    components: { TestComp },
    data() {
        return {
            dinText: 'Some dynamic text',
            number: 4400
        }
    }
}
</script>

<style>

</style>