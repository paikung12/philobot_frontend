<template>
<div>
  <v-app-bar flat color="transparent" fixed>  
        <a href="#"> <img class="h-12" src="images/logos/canabit_vector.svg" alt=""></a>
        <v-spacer></v-spacer>
        <v-btn @click="$router.push(`/home`)" text color="primary">Home</v-btn>
        <v-btn @click="$router.push(`/home/about`)" text color="primary">About</v-btn>
         <v-btn @click="$router.push(`/home/contract`)" text color="primary">Contract</v-btn>
          <v-btn  @click="$router.push(`/auth/register`)"  class="mr-2" outlined   color="primary">Register</v-btn>
           <v-btn   @click="$router.push(`/auth/login`)"  color="primary">Login</v-btn>
  </v-app-bar>
 
</div>
</template>

<script lang="ts">
export default {
   
};
</script>
