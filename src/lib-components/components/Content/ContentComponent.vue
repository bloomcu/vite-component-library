<template>
  <div
    class="content-component"
    :class="align == 'center' ? 'text-center' : ''"
  >
    <div
      v-if="label"
      class="text-sm opacity-60% margin-bottom-xxs"
    >
      {{ label }}
    </div>

    <div class="text-component margin-bottom-sm">
      <Heading 
        :text="title" 
        :level="headingLevel" 
        :size="headingSize"
      />
      <p v-if="subtitle">
        {{ subtitle }}
      </p>
    </div>
    
    <div v-if="body" v-html="body"></div>

    <div
      v-if="buttons.length"
      class="flex flex-wrap items-center gap-sm"
      :class="align == 'center' ? 'flex-center' : ''"
    >
      <AppButton
        v-for="(button, index) in buttons"
        :key="index"
        :text="button.text"
        :href="button.href"
        v-bind="button"
        :icon="false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

// Components
import Heading from '@/lib-components/elements/Heading/Heading.vue'
import AppButton from '@/lib-components/elements/AppButton/AppButton.vue'

// Types
import { Align, TextSize, HeadingLevel, Button } from '@/types'

export default defineComponent({
  props: {
    headingLevel: {
      type: String as PropType<HeadingLevel>
    },
    headingSize: {
      type: String as PropType<TextSize>
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
    },
    body: {
      type: String,
    },
    buttons: {
      type: Array as PropType<Array<Button>>,
      default: () => []
    }
  },

  components: { Heading, AppButton }
})
</script>
