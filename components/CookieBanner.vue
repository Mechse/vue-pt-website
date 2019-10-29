<template>
  <div>
    <link rel="stylesheet" type="text/css" href="//wpcc.io/lib/1.0.2/cookieconsent.min.css" />
    <script src="https://wpcc.io/lib/1.0.2/cookieconsent.min.js"></script>
  </div>
</template>

<script>
export default {
  name: 'CookieBanner',
  mounted() {
    if (process.client) {
      window.addEventListener('load', function() {
        window.wpcc.init({
          border: 'thin',
          corners: 'small',
          colors: {
            popup: {
              background: '#4F6272',
              text: '#ffffff',
              border: '#4DCCBD'
            },
            button: {
              background: '#4DCCBD',
              text: '#ffffff'
            }
          },
          position: 'bottom-right',
          content: {
            message:
              'Diese Seite verwendet Cookies, um dir das bestmögliche Erlebnis zu gewährleisten. Surfst du weiterhin auf unserer Seite, stimmst du unserer Cookie-Nutzung und unserer Datenschutzrichtlinie zu.',
            button: 'Ja, das ist okay!',
            link: 'Datenschutzrichtlinie'
          }
        })
      })
    }
  }
}
</script>

<style>
</style>