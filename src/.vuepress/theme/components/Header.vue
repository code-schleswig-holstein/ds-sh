<template>
  <header id="header" class="SectionHeader-container u-container u-print-hide">
    <div class="SectionHeader u-limitWidth-12 u-align-center">
      <div class="SectionHeader-metaSection ">
        <a href="#" class="SectionHeader-logoSection">
          <img class="SectionHeader-logo SectionHeader-logo--large" :src="$withBase('img/logo-lg.svg')" alt="ITVSH Design System" width="437" height="40"/>
        </a>
      </div>

      <div class="SectionHeader-menuSection" id="primarynavigation" aria-label="Primär">
        <a href="#" class="SectionHeader-logoSection" tabindex="-1">
          <img class="SectionHeader-logo SectionHeader-logo--small" :src="$withBase('img/logo-sm.svg')" alt="ITVSH Design System" width="49" height="40"/>
        </a>
        <div id="headermainmenu" class="SectionHeader-menuPanel">
          zum Digital DEsign System
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>
