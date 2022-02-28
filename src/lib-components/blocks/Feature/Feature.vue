<template>
  <section class="position-relative">
    <div class="container max-width-adaptive-lg">
      <div class="grid gap-md items-center">
        <!-- Column: Content -->
        <div
          class="col-6@md"
          :class="orientation == 'right' ? 'order-2@md' : ''"
        >
          <ContentComponent
            :label="label"
            :title="title"
            :subtitle="subtitle"
            :buttons="buttons"
            :headingLevel="config.headingLevel"
            :headingSize="config.headingSize"
          />
        </div>

        <!-- Column: Image -->
        <div class="col-6@md">
          <figure>
            <img
              class="block width-100%"
              :src="`https://d25r5txdw1c9o7.cloudfront.net/fit-in/650x450/${image.src}`"
            >
          </figure>
        </div>
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
  name: 'Feature',

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
    // flip: {
    //   type: Object as PropType<Flip>,
    //   default: () => ({
    //     horizontal: false,
    //     vertical: false
    //   })
    // },
    // invert: {
    //   type: Boolean,
    //   default: false
    // },
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
