<template>
  <section 
    :class="classBinds" 
    class="app-table"
  >
    <div class="container max-width-adaptive-lg">
      <div class="content-wrapper position-relative max-width-sm margin-bottom-lg z-index-2">
        <ContentComponent
          :align="align"
          :label="label"
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

@import '@/styles/base/mixins';
@import '@/styles/base/breakpoints';

/* --------------------------------

File#: _1_table
Title: Table
Descr: Data tables used to organize and display information in rows and columns
Usage: codyhouse.co/license

-------------------------------- */

// >>> style affecting all (block + expanded) versions 👇
.table {
  position: relative;
  z-index: 1;
}
// <<< end style affecting all versions

// >>> block version only (mobile) 👇
.table:not(.table--expanded) {
  border-collapse: separate;
  border-spacing: 0 var(--space-md); // row gap
  margin-top: calc(-2 * var(--space-md)); // set spacing variable = row gap ☝️

  .table__header {
    // hide table header - but keep it accessible to SR
    @include srHide;
  }

  .table__row {
    .table__cell:first-child {
      border-radius: var(--radius-md) var(--radius-md) 0 0;
    }

    .table__cell:last-child {
      border-radius: 0 0 var(--radius-md) var(--radius-md);

      &::after {
        // hide border bottom
        display: none;
      }
    }
  }

  .table__cell {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: right;
    padding: var(--space-md);
    background-color: var(--color-bg-light);

    &::after {
      // border bottom
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--space-md);
      width: calc(100% - (2 * var(--space-md)));
      height: 1px;
      background-color: var(--color-contrast-lower);
    }
  }

  .table__label {
    // inline labels -> visible when table header is hidden
    font-weight: bold;
    text-align: left;
    color: var(--color-contrast-higher);
    margin-right: var(--space-md);
  }
}
// <<< end block version

// >>> expanded version only (desktop) 👇 -> show standard rows and cols
.table--expanded {
  border-bottom: 1px solid var(--color-contrast-lower); // table border bottom

  .table__header {
    .table__cell {
      // header cell style
      position: relative;
      z-index: 10;
      background-color: var(--color-bg);
      border-bottom: 1px solid var(--color-contrast-lower); // header border bottom
      font-weight: bold;
      color: var(--color-contrast-higher);
    }
  }

  .table__body {
    .table__row {
      &:nth-child(odd) {
        background-color: alpha(var(--color-bg-dark), 0.85);
      }
    }
  }

  .table__cell {
    padding: var(--space-sm);
  }

  .table__label {
    // hide inline labels
    display: none;
  }

  // --header-sticky
  .table__header--sticky {
    .table__cell {
      // header cell style
      position: sticky;
      top: 0;
    }
  }
}
// <<< end expanded version

.js {
  .table {
    opacity: 0; // hide table while it is initialized in JS
  }

  .table--loaded {
    opacity: 1;
  }
}

// detect when the table needs to switch from the mobile layout to an expanded one - used in JS
[class*="table--expanded"]::before {
  display: none;
}

@each $breakpoint, $value in $breakpoints {
  .table--expanded\@#{$breakpoint}::before {
    content: "collapsed";
    @include breakpoint(#{$breakpoint}) {
      content: "expanded";
    }
  }
}
</style>
