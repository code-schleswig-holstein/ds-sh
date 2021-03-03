<template>
  <div class="theme-container">
    <slot class="theme-content" />
    <PageEdit />
  </div>
</template>
<script>
import PageEdit from "@theme/components/PageEdit";
export default {
  components: {
    PageEdit
  }
}
</script>
