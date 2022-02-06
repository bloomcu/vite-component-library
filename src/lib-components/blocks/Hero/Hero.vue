<template>
  <section
    :class="classBinds"
    :style="styleBinds"
    class="hero bg position-relative padding-y-xxl"
  >
    <div class="container max-width-adaptive-lg">
      <div class="content-wrapper position-relative max-width-xs z-index-2">
        <ContentComponent
          :center="center"
          :label="label"
          :title="title"
          :subtitle="subtitle"
          :buttons="buttons"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { useProps } from '@/composables/useProps'
import { appendToSet } from '@/helpers'
import { Button, Image } from '@/types'

import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'

useProps()
export default defineComponent({
  name: 'Hero',

  props: {
     center: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'The label'
    },
    title: {
      type: String,
      default: 'The title'
    },
    subtitle: {
      type: String,
      default: 'The subtitle'
    },
    buttons: {
      type: Array as PropType<Array<Button>>,
      default: () => [
        {
          text: 'Primary Button',
          href: '/button-href',
          variant: 'primary'
        },
        {
          text: 'Accent Button',
          href: '/button-href',
          variant: 'accent'
        }
      ]
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    image: {
      type: Object as PropType<Image>,
      default: () => ({
        src: 'https://d25r5txdw1c9o7.cloudfront.net/fit-in/1280x720/files/b91c769fd41d8f5091e0dc86e14e4ea4.jpg'
      })
    }
  },

  setup (props) {
    const classBinds = computed(() => {
      let classSet = ''

      if (props.center) {
        classSet = appendToSet('hero--center', classSet)
      }
      if (props.fullscreen) {
        classSet = appendToSet('hero--full-screen', classSet)
      }
      if (props.image) {
        classSet = appendToSet('hero--background-img', classSet)
      }

      return classSet
    })

    const styleBinds = computed(() => {
      return props.image.src
        ? {
            'background-image': `url(${props.image.src})`
          }
        : {}
    })

    return {
      classBinds,
      styleBinds
    }
  },

  components: { ContentComponent }
})
</script>

<style lang="scss">
@import './style/style.scss';
</style>
