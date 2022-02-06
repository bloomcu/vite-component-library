<template>
  <div>
    <Accordion/>
    <CardRepeater/>
    <DetailsList/>
    <Feature/>
    <FeatureV7/>
    <FeatureV9/>
    <BoxedHero/>
    <Hero/>
    <VideoBackgroundHero/>
    <Modal uuid="123" title="The modal title"/>
    <AppButton text="Trigger Modal" trigger="123"/>
    <!-- <SubNavigation/> -->
    <!-- <Table/> -->
    <Testimonial/>
    <TextColumns/>
  </div>
</template>

<script setup lang="ts">
// import { Hero } from 'vite-codytest'

// Blocks
import Accordion from './lib-components/blocks/Accordion/Accordion.vue'
import CardRepeater from './lib-components/blocks/CardRepeater/CardRepeater.vue'
import DetailsList from './lib-components/blocks/DetailsList/DetailsList.vue'
import Feature from './lib-components/blocks/Feature/Feature.vue'
import FeatureV7 from './lib-components/blocks/Feature/FeatureV7.vue'
import FeatureV9 from './lib-components/blocks/Feature/FeatureV9.vue'
import BoxedHero from './lib-components/blocks/Hero/BoxedHero.vue'
import Hero from './lib-components/blocks/Hero/Hero.vue'
import VideoBackgroundHero from './lib-components/blocks/Hero/VideoBackgroundHero.vue'
import Modal from './lib-components/blocks/Modal/Modal.vue'
import SubNavigation from './lib-components/blocks/Navigation/SubNavigation.vue'
import Table from './lib-components/blocks/Table/AppTable.vue'
import Testimonial from './lib-components/blocks/Testimonial/Testimonial.vue'
import TextColumns from './lib-components/blocks/TextColumns/TextColumns.vue'

// Elements
import AppButton from './lib-components/elements/AppButton/AppButton.vue'
</script>

<style>
/* @import './assets/base.css'; */

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
} */
</style>
