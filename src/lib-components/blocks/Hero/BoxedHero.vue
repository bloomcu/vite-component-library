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
import { appendToSet } from '@/helpers'
import { BlockConfig, Button, Image } from '@/types'

// Components
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'

export default defineComponent({
  name: 'BoxedHero',
  
  props: {
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
