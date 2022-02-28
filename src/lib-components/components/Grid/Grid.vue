<template>
  <section 
    :class="classBinds" 
    class="position-relative z-index-1 padding-y-xxl"
  >
    <div class="container max-width-adaptive-lg">
      <div
        class="grid"
        :class="`gap-${gap}`"
      >
        <div
          v-for="(column, index) in columns"
          :key="index"
          :class="determineGridCount"
        >
          <slot
            :index="index"
            :column="column"
          >
            Col: {{ index }}
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { appendToSet } from '@/helpers'
import { BlockConfig, BreakPointBlock, GridGap, ColNumber } from '@/types'

// Components
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'

export default defineComponent({
  name: 'Grid',
  
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
    
    gap: {
      type: String as PropType<GridGap>,
      default: 'xl'
    },
    
    cols: {
      type: [Number, String] as PropType<ColNumber>,
      default: 4
    },
    
    columns: {
      type: Array as PropType<any[]>,
      default: () => [
        {
          label: 'Label',
          title: 'Label',
          subtitle: 'Label'
        },
        {
          label: 'Label',
          title: 'Label',
          subtitle: 'Label',
          center: true
        }
      ]
    }
  },
  
  setup (props) {
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
    
    const createColClass = ([key, value]: [string, number | string]) => {
      return `col-${value}@${key}`
    }
    
    const determineGridCount = computed(() => {
      const defineGridBlock: BreakPointBlock = {
        xs: 12,
        md: 6,
        lg: 12 / props.cols
      }
      
      let classGen = ''
      
      const gridBlockEntries = Object.entries(defineGridBlock)
      
      gridBlockEntries.forEach((entry) => {
        classGen = appendToSet(createColClass(entry), classGen)
      })
      
      return classGen
    })
    
    return {
      classBinds,
      determineGridCount,
      createColClass
    }
  },
  
  components: { ContentComponent }
})
</script>
