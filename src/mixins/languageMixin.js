export const languageMixin = {
  data() {
    return {
      localeList: ['en', 'fr'],
    }
  },
  methods: {
    setI18nLanguage(lang) {
      this.$i18n.locale = lang
      this.$router.push({
        path: this.$tp(this.$route.path, lang, true),
      })
      return lang
    },
    loadLanguageAsync(lang) {
      // If the language is same as the current language
      if (this.$i18n.locale === lang) {
        return Promise.resolve()
      }

      // If the language was already loaded
      if (this.$i18n.availableLocales.includes(lang)) {
        return Promise.resolve(this.setI18nLanguage(lang))
      }

      // If the language hasn't been loaded yet
      return import(/* webpackChunkName: "lang-[request]" */ `../locales/${lang}.json`).then(
        messages => {
          this.$i18n.setLocaleMessage(lang, messages.default)
          this.$i18n.availableLocales.push(lang)
          return Promise.resolve(this.setI18nLanguage(lang))
        }
      )
    },
  },
}
