<template>
  <div v-if="blocks">
    <!-- <Navbar :primaryLinks="primaryLinks" /> -->
    <!-- <Navbar :menu="menu"/> -->
    
    <!-- <AppButton text="Button" variant="style-5"/> -->

    <!-- <Accordion/> -->
    <!-- <CardRepeater/> -->
    <!-- <DetailsList/> -->
    <!-- <Feature flip="horizontal"/> -->
    <!-- <Feature flip="horizontal"/> -->
    <!-- <FeatureV7/> -->
    <!-- <FeatureV9/> -->
    <!-- <FeatureV11/> -->
    <!-- <BoxedHero/> -->
    <!-- <Hero :config="{ headingLevel: '3', headingSize: 'xl' }"/> -->
    <!-- <VideoBackgroundHero/> -->
    <!-- <Modal uuid="123" title="The modal title"/> -->
    <!-- <SubNavigation/> -->
    <!-- <AppTable/> -->
    <!-- <Testimonial/> -->
    <!-- <TextColumns :cols="'2'"/> -->
    
    <component
      v-for="(block, index) in blocks"
      v-bind="block.data"
      :is="block.component"
      :key="index"
    />
    
    <pre>{{ blocks[0] }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from '@vue/composition-api'

const blocks = ref()

onMounted(() => {
  fetch('http://cms.test/api/public/1/posts?path=homepage')
    .then((response) => response.json())
    .then((data) => (blocks.value = data.data.blocks))
    
  // console.log(blocks)
})

const menu = {
  title: 'Main Navigation',
  location: 'header',
  component: 'navbar',
  children: [
    {
      id: 1,
      title: 'Homepage',
      component: 'navbar-link',
      href: '/',
      trigger: '',
    },
    {
      id: 2,
      title: 'Accounts',
      component: 'navbar-link',
      href: '/checking',
      trigger: '',
    },
    {
      id: 3,
      title: 'Loans',
      component: 'navbar-link',
      href: '/loans',
      trigger: '',
    }
  ],
  secondary: [
    {
      id: 4,
      title: 'Get Started',
      component: 'navbar-button',
      href: '/get-started',
    },
  ]
}
</script>

<script>
// Globals
import Navbar from './lib-components/globals/Header/Navbar.vue'

// Blocks
import Accordion from './lib-components/blocks/Accordion/Accordion.vue'
import CardRepeater from './lib-components/blocks/CardRepeater/CardRepeater.vue'
import DetailsList from './lib-components/blocks/DetailsList/DetailsList.vue'
import Feature from './lib-components/blocks/Feature/Feature.vue'
import FeatureV7 from './lib-components/blocks/Feature/FeatureV7.vue'
import FeatureV9 from './lib-components/blocks/Feature/FeatureV9.vue'
import FeatureV11 from './lib-components/blocks/Feature/FeatureV11.vue'
import BoxedHero from './lib-components/blocks/Hero/BoxedHero.vue'
import Hero from './lib-components/blocks/Hero/Hero.vue'
import VideoBackgroundHero from './lib-components/blocks/Hero/VideoBackgroundHero.vue'
import Modal from './lib-components/blocks/Modal/Modal.vue'
import SubNavigation from './lib-components/blocks/Navigation/SubNavigation.vue'
import AppTable from './lib-components/blocks/Table/AppTable.vue'
import Testimonial from './lib-components/blocks/Testimonial/Testimonial.vue'
import TextColumns from './lib-components/blocks/TextColumns/TextColumns.vue'

// Elements
import AppButton from './lib-components/elements/AppButton/AppButton.vue'

export default {
    components: {
      Navbar,
      Accordion,
      CardRepeater,
      DetailsList,
      Feature,
      FeatureV7,
      FeatureV9,
      FeatureV11,
      BoxedHero,
      Hero,
      VideoBackgroundHero,
      Modal,
      SubNavigation,
      AppTable,
      Testimonial,
      TextColumns,
    }
}
</script>

<style>
/* @import './assets/base.css'; */
</style>
