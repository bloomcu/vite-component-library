<template>
  <section 
  :class="classBinds"
    class="hero-video-bg position-relative"
  >
    <div class="container max-width-adaptive-sm">
      <div class="position-relative z-index-2 text-center">
        <ContentComponent
          align="center"
          :label="label"
          :title="title"
          :subtitle="subtitle"
          :buttons="buttons"
          :headingLevel="config.headingLevel"
          :headingSize="config.headingSize"
        />
      </div>
    </div>

    <figure class="hero-video-bg__video" aria-hidden="true">
      <img 
        :src="`https://d25r5txdw1c9o7.cloudfront.net/fit-in/1280x720/${image.src}`"
        :alt="image.alt"
      />
      <video autoplay loop muted playsinline v-bind="video" />
    </figure>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { useProps } from '@/composables/useProps'
import { appendToSet } from '@/helpers'
import { BlockConfig, Button, Image, Video } from '@/types'

// Components
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'

export default defineComponent({
  name: 'VideoBackgroundHero',
  
  props: {
    ...useProps().group(['ContentComponent']),
    
    config: {
      type: Object as PropType<BlockConfig>,
      default: () => ({
        headingLevel: '1',
        headingSize: 'xxl',
        paddingTop: 'xxl',
        paddingBottom: 'xxl',
        marginTop: 'none',
        marginBottom: 'none',
      })
    },
    
    image: {
      type: Object as PropType<Image>,
      default: () => ({
        src: 'files/b91c769fd41d8f5091e0dc86e14e4ea4.jpg',
        alt: 'img'
      })
    },
    
    video: {
      type: Object as PropType<Video>,
      default: () => ({
        src: 'https://player.vimeo.com/external/417260615.sd.mp4?s=dfae4a81398d89ed47def5d09b7730cb037f1692'
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
  },
  
  components: { ContentComponent },
})
</script>

<style lang="scss">
// @use '@/styles/base' as *;
@import '@/styles/base/mixins';

/* --------------------------------

File#: _3_hero-video-bg
Title: Hero Background Video
Descr: Hero section variation w/ background video
Usage: codyhouse.co/license

-------------------------------- */

.hero-video-bg {
}

.hero-video-bg__video {
  // bg video container
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;

  video {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    min-height: 100%;
    min-width: 100%;
    height: auto;
    width: auto;
    max-width: none;

    @supports (object-fit: cover) {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    @supports (object-fit: cover) and (-ms-ime-align: auto) {
      // fix issue on Edge - object-fit not working for video elements
      height: auto;
      width: auto;
    }
  }

  img {
    // video fallback - visible if Reduced Motion is enabled
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    // do not play background video if Reduced Motion is enabled - show fallback image
    video {
      visibility: hidden;
    }

    img {
      display: block;
      position: absolute;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}

.hero-video-bg__play-btn {
  --btn-size: 80px;
  width: var(--btn-size);
  height: var(--btn-size);
  display: inline-flex;
  background-color: alpha(var(--color-contrast-higher), 0.85);
  border-radius: 50%;
  cursor: pointer;

  transition: background-color 0.3s;

  .icon {
    display: block;
    margin: auto;

    color: var(--color-bg); // icon color
    font-size: 32px; // icon size

    transition: transform 0.3s var(--ease-out-back);
  }

  &:hover {
    background-color: alpha(var(--color-contrast-higher), 1);

    .icon {
      transform: scale(1.2);
    }
  }
}
</style>
