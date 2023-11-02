<template>
  <div>
   <NavigationBar></NavigationBar>
  </div>
  <RouterView />
</template>
<script>
import NavigationBar from './components/NavigationBar.vue';

export default{
  data() {
    return {
      
    }
  },

  components:{
    NavigationBar
  }
}

</script>