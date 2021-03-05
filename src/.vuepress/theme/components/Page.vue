<template>
  <main class="page-container">
    <slot name="top" />
    <Content class="theme-content"/>
    <PageEdit />
    <slot name="bottom" />
  </main>
</template>
<script>
import PageEdit from "@parent-theme/components/PageEdit";
export default {
  components: {
    PageEdit
  },
  props: ['sidebarItems']
}
</script>
