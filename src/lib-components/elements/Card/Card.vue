<template>
  <div class="card">
    <figure class="card__img">
      <img :src="`https://d25r5txdw1c9o7.cloudfront.net/fit-in/640x480/${image.src}`">
    </figure>

    <div class="card__content">
      <div class="text-component">
        <h4>{{ title }}</h4>
        <p class="text-sm color-contrast-medium">
          {{ description }}
        </p>
      </div>

      <div class="margin-top-sm">
        <AppButton v-bind="button" :icon="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Button, Image } from '@/types'
import { defineComponent, PropType } from '@vue/composition-api'
import AppButton from '@/lib-components/elements/AppButton/AppButton.vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'This is a title'
    },
    description: {
      type: String,
      default: 'This is a description'
    },
    button: {
      type: Object as PropType<Button>,
      default: () => ({
        text: 'Link Text',
        href: '/link-href',
        target: '__blank'
      })
    },
    image: {
      type: Object as PropType<Image>,
      default: () => ({
        src: 'files/b91c769fd41d8f5091e0dc86e14e4ea4.jpg'
      })
    }
  },
  components: { AppButton }
})
</script>
