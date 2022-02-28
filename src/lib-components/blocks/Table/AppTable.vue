<template>
  <section 
    :class="classBinds" 
    class="container max-width-adaptive-lg"
  >
    <table class="table table--loaded table--expanded table--expanded@xs position-relative z-index-1 width-100% text-unit-em text-sm js-table" aria-label="Table Example">
      <thead class="table__header">
        <tr class="table__row">
          <th
            v-for="(column, index) in columns" 
            :key="index"
            class="table__cell text-left"
            scope="col"
          >
            {{ column }}
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
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, computed } from '@vue/composition-api'
import { appendToSet } from '@/helpers'

// Types
import { BlockConfig } from '@/types'

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
    
    columns: {
      type: Array as PropType<any[]>,
      default: () => (['Product', 'Term', 'APR'])
    },
    
    rows: {
      type: Array as PropType<any[]>,
      default: () => ([
        ['New Car', '60 Months', '2.74%'],
        ['Used Car (1-3 years old)', '60 Months', '2.74%'],
        ['Used Car (4-5 years old)', '48 Months', '2.74%'],
        ['Used Car (6-7 years old)', '36 Months', '2.74%'],
        ['Used Car (8+ years old)', '36 Months', '3.74%'],
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

      return classSet
    })

    return {
      classBinds
    }
  }
})
</script>

<style lang="scss">
// @use '@/styles/base' as *;
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
