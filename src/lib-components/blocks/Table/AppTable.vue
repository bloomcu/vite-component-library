<template>
  <section 
    :class="classBinds" 
    class="app-table"
  >
    <div class="container max-width-adaptive-lg">
      <div class="content-wrapper position-relative max-width-sm margin-bottom-lg z-index-2">
        <ContentComponent
          :align="align"
          :title="title"
          :subtitle="subtitle"
          :headingLevel="config.headingLevel"
          :headingSize="config.headingSize"
        />
      </div>
      <table class="table table--loaded table--expanded table--expanded@xs position-relative z-index-1 width-100% text-unit-em text-sm js-table" aria-label="Table Example">
        <thead class="table__header">
          <tr class="table__row">
            <th
              v-for="(column, index) in columns" 
              :key="index"
              class="table__cell text-left"
              scope="col"
            >
              {{ column.content }}
            </th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr 
            v-for="(row, index) in rows"
            :key="index"
            class="table__row"
          >
            <td 
              v-for="(cell, index) in row"
              :key="index"
              class="table__cell" 
              role="cell"
            >
              <span class="table__label" aria-hidden="true">{{ columns[index] }}:</span> 
              {{ cell.content }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, computed } from '@vue/composition-api'
import { appendToSet } from '@/helpers'

// Components
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'

// Types
import { BlockConfig, Align } from '@/types'

export default defineComponent({
  name: 'AppTable',
  
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
    
    align: {
      type: String as PropType<Align>,
      default: 'left'
    },
    
    title: {
      type: String,
      default: 'The title'
    },
    
    subtitle: {
      type: String,
      default: 'The subtitle'
    },
    
    columns: {
      type: Array as PropType<any[]>,
      default: () => ([
        { content: 'Product', key: 'ja719dr71' },
        { content: 'Term', key: '8gn510jxj' },
        { content: 'APR', key: '41gwnrv6f' },
      ])
    },
    
    rows: {
      type: Array as PropType<any[]>,
      default: () => ([
        [
          { content: 'New Car', key: '7knlp9vcv' },
          { content: '60 Months', key: '29z8p8blu' },
          { content: '2.74%', key: '8iuvscfxr' },
        ],
        [
          { content: 'Used Car (1-3 years old)', key: '7en6x6s2y' },
          { content: '60 Months', key: 'ozbaxkvqf' },
          { content: '3.74%', key: 'yvwccp9u4' },
        ],
        [
          { content: 'Used Car (4-5 years old)', key: 'mw17nlg21' },
          { content: '48 Months', key: 'bd885bkck' },
          { content: '4.74%', key: 'jyfjhehxx' },
        ],
        [
          { content: 'Used Car (6-7 years old)', key: 'oq1v525dv' },
          { content: '36 Months', key: 'a3lmn7cs0' },
          { content: '5.74%', key: 'rd7yx3haj' },
        ],
      ])
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
      if (props.align) {
        classSet = appendToSet(`app-table--${props.align}`, classSet)
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

<style lang="scss">
@import './style/style.scss';
</style>
