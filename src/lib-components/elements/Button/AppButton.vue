<template>
  <component
    :is="$attrs.href ? 'a' : 'button'"
    class="btn"
    :class="classBinds"
    @click="toggle(trigger)"
  >{{ text }}</component>
</template>

<script lang="ts" setup>
import { appendToSet } from '@/helpers'
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { ButtonVariant, ButtonSize } from '@/types'
import useToggle from '@/composables/useToggle'

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'accent'
  },
  text: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: ''
  },
  trigger: {
    type: String,
    default: ''
  },
  icon: Boolean
})
const { toggle } = useToggle()
const classBinds = computed(() => {
  let classSet = ''
  // to check if the appended class needs to be spaced or not

  if (props.variant) {
    classSet = appendToSet(`btn--${props.variant}`, classSet)
  }
  if (props.size) {
    classSet = appendToSet(`btn--${props.size}`, classSet)
  }
  if (props.icon) {
    classSet = appendToSet('btn--icon', classSet)
  }
  return classSet
})
</script>

<style>
</style>
