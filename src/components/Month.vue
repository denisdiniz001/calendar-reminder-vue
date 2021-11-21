<template>
  <div class="hello">
    <h1>Month</h1>
   
  </div>
</template>

<script>
export default {
    name: 'Month',
    props: {
        days: Object
    },
    mounted() {
        console.log(this.days)
    }
}
</script>

<style lang="scss" scoped>

</style>