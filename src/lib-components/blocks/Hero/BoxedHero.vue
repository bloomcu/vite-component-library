<template>
  <section
    class="boxed-hero bg-cover bg-center bg-no-repeat padding-y-xxl"
    :style="`background-image: url(https://d25r5txdw1c9o7.cloudfront.net/fit-in/1280x720/${image.src})`"
  >
    <div class="container max-width-adaptive-sm">
      <!-- <ContentComponent
        v-bind="{ ...$props, image: undefined }"
        class="bg bg-opacity-90% padding-md padding-lg@md"
      /> -->
      <ContentComponent
        :label="label"
        :title="title"
        :subtitle="subtitle"
        :buttons="buttons"
        :headingLevel="config.headingLevel"
        :headingSize="config.headingSize"
        class="bg bg-opacity-90% padding-md padding-lg@md"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { BlockConfig, Image } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'
import { useProps } from '@/composables/useProps'
useProps()
export default defineComponent({
  components: { ContentComponent },
  props: {
    ...useProps().group(['ContentComponent']),
    config: {
      type: Object as PropType<BlockConfig>,
      default: () => ({
        headingLevel: '1',
        headingSize: 'xxl',
      })
    },
    image: {
      type: Object as PropType<Image>,
      default: () => ({
        src: 'files/b91c769fd41d8f5091e0dc86e14e4ea4.jpg'
      })
    }
  }
})
</script>
