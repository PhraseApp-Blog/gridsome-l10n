<template>
  <div>
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    <locale-switcher></locale-switcher>
    <h1>{{ $t('welcome') }}</h1>
    <br /><br />
    <p>{{ $tc('apple', 10, { count: 10 }) }}</p>
    <p>{{ $tc('apple', 10) }}</p>
    <p>{{ $tc('apple') }}</p>
    <p>{{ $tc('apple', 0) }}</p>

    <p>{{ $tc('banana') }}</p>
    <p>{{ $tc('banana', 0) }}</p>
    <p>{{ $tc('banana', 1, { n: 1 }) }}</p>
    <p>{{ $tc('banana', 1) }}</p>
    <p>{{ $tc('banana', 100, { n: 'too many' }) }}</p>
    <br /><br />
    <p>{{ $n(1000000, 'currency') }}</p>
    <p>{{ $n(7000000, 'currency', 'en-IN') }}</p>
    <p>{{ $n(7000000, 'currency', 'fr') }}</p>
    <br /><br />
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $d(new Date(), 'long', 'en-IN') }}</p>
  </div>
</template>
<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
export default {
  components: {
    LocaleSwitcher,
  },
}
</script>
