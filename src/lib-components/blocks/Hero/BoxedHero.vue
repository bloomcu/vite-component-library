<template>
  <section
    class="bg-cover bg-center bg-no-repeat padding-y-xxl"
    :style="`background-image: url(${image.src})`"
  >
    <div class="container max-width-adaptive-sm">
      <ContentComponent
        v-bind="{ ...$props, image: undefined }"
        class="bg bg-opacity-90% padding-md padding-lg@md"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Image } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'
import { useProps } from '@/composables/useProps'
useProps()
export default defineComponent({
  components: { ContentComponent },
  props: {
    ...useProps().group(['ContentComponent']),
    image: {
      type: Object as PropType<Image>,
      default: () => ({
        src: 'https://d25r5txdw1c9o7.cloudfront.net/fit-in/1280x720/files/b91c769fd41d8f5091e0dc86e14e4ea4.jpg'
      })
    }
  }
})
</script>
