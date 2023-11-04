<template>
  <div>
   <NavigationBar></NavigationBar>
  </div>
  <RouterView />
  <footerSection></footerSection>
</template>
<script>
import NavigationBar from './components/NavigationBar.vue';
import footerSection from './components/footerSection.vue';


export default{
  data() {
    return {
      
    }
  },

  components:{
    NavigationBar,
    footerSection
  }
}

</script>