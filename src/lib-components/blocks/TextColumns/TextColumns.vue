<template>
  <Grid
    v-slot="{ column }"
    :cols="3"
    :columns="columns"
  >
    <ContentComponent v-bind="column" />
  </Grid>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Grid from '@/lib-components/components/Grid/Grid.vue'
import ContentComponent from '@/lib-components/blocks/Content/ContentComponent.vue'

export default defineComponent({
  name: 'TextColumns',
  components: { Grid, ContentComponent },
  props: {
    columns: {
      type: Array,
      default: () => [
        {
          label: 'Label',
          title: 'Column One',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem lorem, eleifend eget eros id, vulputate.',
          center: true
        },
        {
          label: 'Label',
          title: 'Column Two',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem lorem, eleifend eget eros id, vulputate.',
          center: true
        },
        {
          label: 'Label',
          title: 'Column Two',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem lorem, eleifend eget eros id, vulputate.',
          center: true
        },
      ]
    }
  },

  setup: () => ({
    ContentComponent
  })
})
</script>
