<template>
  <section
    :class="classBinds"
    class="boxed-hero bg-cover bg-center bg-no-repeat"
    :style="`background-image: url(https://d25r5txdw1c9o7.cloudfront.net/fit-in/1280x720/${image.src})`"
  >
    <div class="container max-width-adaptive-sm">
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
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { useProps } from '@/composables/useProps'
import { appendToSet } from '@/helpers'
import { BlockConfig, Image } from '@/types'

// Components
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'

useProps()
export default defineComponent({
  name: 'BoxedHero',
  
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
  },
  
  components: { ContentComponent }
})
</script>
