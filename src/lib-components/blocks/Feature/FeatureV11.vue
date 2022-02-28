<template>
  <section class="position-relative z-index-1 padding-y-xl bg-dark">
    <div class="container max-width-adaptive-lg position-relative">
      <div 
        class="grid padding-x-md padding-x-0@md"
        :class="orientation == 'right' ? 'justify-end' : ''"
      >
        <!-- Column: Content -->
        <div class="position-relative z-index-2 col-6@md col-5@lg">
          <div class="text-component bg padding-md padding-lg@md inner-glow shadow-sm line-height-md margin-y-xxl">
            <ContentComponent
              :label="label"
              :title="title"
              :subtitle="subtitle"
              :buttons="buttons"
              :headingLevel="config.headingLevel"
              :headingSize="config.headingSize"
            />
          </div>
        </div>
        
        <!-- Column: Image -->
        <figure 
          class="position-absolute z-index-1 top-0 height-100% width-100% col-10@md"
          :class="orientation == 'left' ? 'right-0' : 'left-0'"
        >
          <img 
            class="block width-100% height-100% object-cover" 
            :src="`https://d25r5txdw1c9o7.cloudfront.net/fit-in/1200x900/${image.src}`"
            alt="Image description"
          >
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

// Components
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'

// Types
import { BlockConfig, Orientation, Button, Image } from '@/types'

export default defineComponent({
  name: 'FeatureV11',

  props: {
    config: {
      type: Object as PropType<BlockConfig>,
      default: () => ({
        headingLevel: '1',
        headingSize: 'xxl',
      })
    },
    orientation: {
      type: String as PropType<Orientation>
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
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo.'
    },
    buttons: {
      type: Array as PropType<Array<Button>>,
      default: () => [
        {
          text: 'Button Text',
          href: '/button-href',
          variant: 'primary'
        },
        {
          text: 'Link Text',
          href: '/button-href',
          variant: 'accent'
        }
      ]
    },
    image: {
      type: Object as PropType<Image>,
      default: () => ({
        src: 'files/b91c769fd41d8f5091e0dc86e14e4ea4.jpg'
      })
    }
  },

  components: { ContentComponent }
})
</script>

<style lang="scss"></style>
