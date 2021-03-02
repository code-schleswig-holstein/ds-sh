<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <Header/>
    <main id="main">
      <transition name="fade-transform" mode="out-in">
        <component :is="layout" />
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue';
import Footer from '@theme/components/Footer.vue';
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
