<template>
  <div>
    <!-- <Navbar :primaryLinks="primaryLinks" /> -->
    <!-- <Navbar :menu="menu"/> -->
    
    <!-- <AppButton text="Button" variant="style-5"/> -->

    <!-- <Accordion/> -->
    <!-- <CardRepeater/> -->
    <!-- <DetailsList/> -->
    <!-- <Feature/> -->
    <!-- <FeatureV7/> -->
    <!-- <FeatureV9/> -->
    <FeatureV11/>
    <!-- <BoxedHero/> -->
    <!-- <Hero :center="false" :fullscreen="false"/> -->
    <!-- <VideoBackgroundHero/> -->
    <!-- <Modal uuid="123" title="The modal title"/> -->
    <!-- <SubNavigation/> -->
    <!-- <Table/> -->
    <!-- <Testimonial/> -->
    <!-- <TextColumns :cols="'2'"/> -->
  </div>
</template>

<script setup lang="ts">
// Globals
// import Navbar from './lib-components/globals/Navbar/Navbar.vue'
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
import Table from './lib-components/blocks/Table/AppTable.vue'
import Testimonial from './lib-components/blocks/Testimonial/Testimonial.vue'
import TextColumns from './lib-components/blocks/TextColumns/TextColumns.vue'

// Elements
import AppButton from './lib-components/elements/AppButton/AppButton.vue'


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

<style>
/* @import './assets/base.css'; */
</style>
