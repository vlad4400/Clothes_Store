<template>
  <div>
        <h1>hello {{ extData }}</h1>
        <p>{{ number }}</p>
        <button 
            @click="number++" 
            class="test-class" 
            :class="{'some-class': forClass}"
        >+</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            number: 100500,
            forClass: true
        }
    },
    // props: ['extData']
    props: {
        extData: {
            type: String,
            default: 'Some default text'
        }
    }
}
</script>

<style scoped>

</style>