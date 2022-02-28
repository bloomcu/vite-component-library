<template>
  <section 
    :class="classBinds" 
    class="testimonial position-relative z-index-1"
  >
    <div class="container max-width-adaptive-sm">
      <figure class="flex justify-center margin-bottom-md reveal-fx reveal-fx--scale">
        <img
          class="block object-cover width-xxl height-xxl radius-50% border border-bg border-2 shadow-sm"
          :src="`https://d25r5txdw1c9o7.cloudfront.net/fit-in/120x120/${image.src}`"
        >
      </figure>

      <div class="testimonial__block-wrapper margin-bottom-lg">
        <blockquote class="text-lg text-center line-height-md ">
          {{ testimonial }}
        </blockquote>

        <svg
          class="icon icon--xxl color-contrast-higher opacity-10%"
          aria-hidden="true"
          viewBox="0 0 64 64"
        ><polygon
          fill="currentColor"
          points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36"
        /><polygon
          fill="currentColor"
          points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36"
        /></svg>
      </div>

      <div class="text-center">
        <p class="text-uppercase letter-spacing-md">
          <strong>{{ title }}</strong>
        </p>
        <p class="color-contrast-medium margin-top-xxxxs">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { appendToSet } from '@/helpers'
import { BlockConfig, Image } from '@/types'

export default defineComponent({
  name: 'Testimonial',
  
  props: {
    config: {
      type: Object as PropType<BlockConfig>,
      default: () => ({
        paddingTop: 'lg',
        paddingBottom: 'lg',
        marginTop: 'none',
        marginBottom: 'none',
      })
    },
    
    testimonial: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque doloremque beatae! Doloremque perspiciatis aliquid repellat quasi praesentium, minima nobis assumenda ex?'
    },
    
    title: {
      type: String,
      default: 'Emily Ewing'
    },
    
    subtitle: {
      type: String,
      default: 'Designer at CompanyXs'
    },
    
    image: {
      type: Object as PropType<Image>,
      default: () => ({
        src: 'files/b91c769fd41d8f5091e0dc86e14e4ea4.jpg'
      })
    }
  },
  
  setup(props) {
    const classBinds = computed(() => {
      let classSet = ''
      
      if (props.config.paddingTop != 'none') {
        classSet = appendToSet(`padding-top-${props.config.paddingTop}`, classSet)
      }
      if (props.config.paddingBottom != 'none') {
        classSet = appendToSet(`padding-bottom-${props.config.paddingBottom}`, classSet)
      }
      if (props.config.marginTop != 'none') {
        classSet = appendToSet(`margin-top-${props.config.marginTop}`, classSet)
      }
      if (props.config.marginBottom != 'none') {
        classSet = appendToSet(`margin-bottom-${props.config.marginBottom}`, classSet)
      }

      return classSet
    })

    return {
      classBinds
    }
  }
})
</script>

<style lang="scss">
// @use '@/styles/base' as *;
@import '@/styles/base/mixins';

/* --------------------------------

File#: _1_testimonial
Title: Testimonial
Descr: A testimonial quote
Usage: codyhouse.co/license

-------------------------------- */

.testimonial {}

.testimonial__block-wrapper {
  position: relative;

  blockquote {
    position: relative;
    z-index: 1;
  }

  .icon {
    position: absolute;
    top: -0.5em;
    left: -0.5em;
  }
}
</style>
