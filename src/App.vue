<template>
  <div>
    <NavigationBar></NavigationBar>
    <RouterView />
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  components: {
    NavigationBar,
    FooterSection,
  },
};
</script>