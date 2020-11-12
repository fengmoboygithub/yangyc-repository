<template>
  <div>
    <svg-icon icon-class="question" @click="goto"/>
  </div>
</template>

<script>
export default {
  name: 'AmsDoc',
  data() {
    return {
      url: '/doc/preview/amsDoc.html'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>