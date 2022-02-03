<template>
  <AppLink
    :href="social.href"
    :target="social.target"
    :title="social.name"
  >
    <component :is="social.name" />
  </AppLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Facebook from './Facebook.vue'
import Github from './Github.vue'
import Youtube from './Youtube.vue'
import Twitter from './Twitter.vue'
import AppLink from '../../elements/Link/AppLink.vue'

export default defineComponent({
  components: { Facebook, Github, Youtube, Twitter, AppLink },
  props: {
    social: {
      type: Object as PropType<any>,
      default: () => ({
        href: '',
        target: '',
        name: ''
      })
    }
  }
})
</script>
