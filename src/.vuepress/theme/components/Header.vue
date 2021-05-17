<template>
  <header id="header" class="SectionHeader-container u-container u-print-hide">
    <div class="SectionHeader u-limitWidth-12 u-align-center">
      <div class="SectionHeader-metaSection ">
        <div href="/" class="SectionHeader-logoSection">
          <img class="SectionHeader-logo SectionHeader-logo--large" :src="$withBase('/img/logo-lg.svg')" alt="ITVSH Design System" width="437" height="40"/>
        </div>
      </div>

      <div class="SectionHeader-menuSection" id="primarynavigation" aria-label="Primär">
        <a href="/" class="SectionHeader-logoSection" tabindex="-1">
          <img class="SectionHeader-logo SectionHeader-logo--small" :src="$withBase('/img/logo-sm.svg')" alt="ITVSH Design System" width="49" height="40"/>
          <span class="u-visuallyHidden">ITVSH Design System Dokumentation</span>
        </a>
        <a href="/">
          <p class="Base-h1 u-textTransform--upper">Dokumentation</p>
        </a>
        <div class="SectionHeader-backLink u-linkWrap">
          <a href="https://www.design-system.sh/" class="Base-link" title="Zur Design System Informations Webseite">
            <span class="SectionHeader-backLink-text">zum <span class="u-textTransform--upper">&nbsp;Digital Design System</span></span>
            <span class="SectionHeader-backLink-icon">
              <svg class="u-scalingInlineSVG" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" preserveAspectRatio="xMidYMin slice" style="padding-bottom: 100%;">
                <path d="M290.132 34l-34.06 34.06 163.722 163.72H0v48.175h419.794L256.072 443.677l34.06 34.06L512 255.868z"/>
              </svg>
            </span>
          </a>
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
