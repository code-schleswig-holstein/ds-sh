<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <Header/>
    <main id="main" class="SectionMain">
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
import SearchBox from '@SearchBox'
import Sidebar from '@parent-theme/components/Sidebar';
import { resolveSidebarItems } from '@parent-theme/util'
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
          frontmatter.navbar === false
          || themeConfig.navbar === false) {
        return false
      }
      return (
          this.$title
          || themeConfig.logo
          || themeConfig.repo
          || themeConfig.nav
          || this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
          !frontmatter.home
          && frontmatter.sidebar !== false
          && this.sidebarItems.length
      )
    },
    sidebarItems () {
      return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
      )
    },
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  },
  components: {
    Header,
    Footer,
    SearchBox,
    Sidebar
  }
}
</script>
