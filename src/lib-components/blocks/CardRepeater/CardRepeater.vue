<template>
  <Grid
    v-slot="{ column }"
    :cols="3"
    :columns="columns"
  >
    <component
      :is="variant"
      v-bind="column"
    />
  </Grid>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Grid from '@/lib-components/components/Grid/Grid.vue'
import ContentComponent from '@/lib-components/blocks/Content/ContentComponent.vue'
import Card from '@/lib-components/elements/Card/Card.vue'

export default defineComponent({
  components: { Grid, ContentComponent, Card },
  props: {
    variant: {
      type: String,
      default: 'Card'
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
