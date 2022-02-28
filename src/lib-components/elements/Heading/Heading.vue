<template>
  <component :is="`h${level}`" :class="`text-${size}`">
    {{ text }}
  </component>
</template>

<script lang="ts">
import { HeadingLevel, TextSize } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
    },
    level: {
      type: String as PropType<HeadingLevel>,
    },
    size: {
      type: String as PropType<TextSize>,
    },
  }
})
</script>
