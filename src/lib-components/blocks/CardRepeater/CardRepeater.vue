<template>
  <Grid
    v-slot="{ column }"
    :cols="cols"
    :columns="columns"
  >
    <component
      :is="variant"
      v-bind="column"
    />
  </Grid>
</template>

<script lang="ts">
import { defineComponent , PropType} from '@vue/composition-api'
import { GridGap, ColNumber } from '@/types'
import Grid from '@/lib-components/components/Grid/Grid.vue'
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'
import Card from '@/lib-components/elements/Card/Card.vue'

export default defineComponent({
  components: { Grid, ContentComponent, Card },
  props: {
    variant: {
      type: String,
      default: 'Card'
    },
    gap: {
      type: String as PropType<GridGap>,
      default: 'xl'
    },
    cols: {
      type: [Number, String] as PropType<ColNumber>,
      default: 2
    },
    columns: {
      type: Array,
      default: () => [
        {
          title: 'Card One',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem lorem, eleifend eget eros.'
        },
        {
          title: 'Card Two',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem lorem, eleifend eget eros.'
        },
        {
          title: 'Card Three',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem lorem, eleifend eget eros.'
        }
      ]
    }
  },

  setup: () => ({
    ContentComponent,
    Card
  })
})
</script>
