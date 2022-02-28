<template>
  <Grid
    v-slot="{ column }"
    :config="config"
    :gap="gap"
    :cols="cols"
    :columns="columns"
  >
    <ContentComponent
      :label="column.label"
      :title="column.title"
      :body="column.body"
      :buttons="column.buttons"
      :headingLevel="config.headingLevel"
      :headingSize="config.headingSize"
    />
  </Grid>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { BlockConfig, GridGap, ColNumber } from '@/types'

// Components
import Grid from '@/lib-components/components/Grid/Grid.vue'
import ContentComponent from '@/lib-components/components/Content/ContentComponent.vue'

export default defineComponent({
  name: 'TextColumns',
  
  props: {
    config: {
      type: Object as PropType<BlockConfig>,
      default: () => ({
        headingLevel: '2',
        headingSize: 'xl',
      })
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
          label: 'Label',
          title: 'Column One',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem lorem, eleifend eget eros id, vulputate.',
        },
        {
          label: 'Label',
          title: 'Column Two',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem lorem, eleifend eget eros id, vulputate.',
        },
      ]
    }
  },
  
  components: { Grid, ContentComponent },
  
  setup: () => ({
    ContentComponent
  })
})
</script>
