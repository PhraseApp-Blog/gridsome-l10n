<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import { languageMixin } from '@/mixins/languageMixin'
export default {
  mixins: [languageMixin],
  created() {
    if (process.isClient) {
      this.fetchBrowserLocale()
    }
  },
  methods: {
    fetchBrowserLocale() {
      let fetchedLocale = navigator.language.split('-')[0]
      this.loadLanguageAsync(fetchedLocale).catch(() => {
        console.log('Async language fetch failed')
      })
    },
  },
}
</script>
