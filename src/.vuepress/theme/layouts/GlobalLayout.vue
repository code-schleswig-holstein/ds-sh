<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <Header/>
    <main id="main" class="SectionMain">
      <div class="u-container">
        <div class="u-limitWidth-12 u-align-center">
          <div class="GridCol2MainAside-row u-row">
            <div class="GridCol2MainAside-col-aside u-col u-stack--2">
              <SearchBox/>
            </div>
            <div class="GridCol2MainAside-col-main u-col u-stack--2">
              <transition name="fade-transform" mode="out-in">
                <component :is="layout" />
              </transition>
            </div>
          </div>

        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue';
import Footer from '@theme/components/Footer.vue';
import SearchBox from '@SearchBox'
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
    Footer,
    SearchBox
  }
}
</script>
