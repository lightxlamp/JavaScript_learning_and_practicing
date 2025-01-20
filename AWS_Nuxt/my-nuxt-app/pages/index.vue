<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      script: [
        {
          src: 'https://www.localdealslink.com/pmr_integration_prepop_w_country_1signal.js',
          async: true,
          type: 'text/javascript',
          id: 'ax-integration-script'
        }
      ]
    };
  },
}
</script>
