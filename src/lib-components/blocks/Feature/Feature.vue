<template>
  <section 
    :class="classBinds" 
    class="position-relative"
  >
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
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { appendToSet } from '@/helpers'

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
        headingLevel: '2',
        headingSize: 'xl',
        paddingTop: 'lg',
        paddingBottom: 'lg',
        marginTop: 'none',
        marginBottom: 'none',
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

<style lang="scss"></style>
