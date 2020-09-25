<template>
  <v-app>
    <Header/>
    <v-app-bar
      app
      dark
    >
    <v-spacer></v-spacer>
    <input type="checkbox" id="hiddenInput"  @click="drawer= !drawer">
    <label class="ToBe" for="hiddenInput">
      <div></div>
    </label>
    <v-navigation-drawer 
      id="drawerContent"
      v-model="drawer" 
      temporary 
      right 
      clipped 
      height="100vh" 
      width="100%" 
      absolute>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    <v-container fill-height fluid>
      <v-layout wrap row align-center >
        <v-flex class="mt-n15 xs-12" d-flex  justify-center> 
          <v-list class="unorderedList" light >
              <v-list-item  @click="$vuetify.goTo('.first-section',2,'easeOutQuint')"><label for="hiddenInput" @click="this.drawer = false">About</label></v-list-item>
              <v-list-item  @click="$vuetify.goTo('.second-section',22,'easeOutQuint')"><label for="hiddenInput" @click="this.drawer = false">Projects</label></v-list-item>
              <v-list-item  @click="$vuetify.goTo('#contact-header',22,'easeOutQuint')"><label for="hiddenInput" @click="this.drawer = false">Contact</label></v-list-item>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
    </v-navigation-drawer>
    </v-app-bar>

    <v-main class="pt-0">
      <Wrapper/>
      <Contact/>
    </v-main>
  </v-app>
</template>

<script>
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Contact from './components/Contact'

export default {
  name: 'App',

  components: {
    Wrapper,
    Header,
    Contact
  },

  data: () => ({
    drawer:false
  }),
};
</script>

<style scoped>

#hiddenInput{
  position:relative;
  z-index: 12;
  width:40px;
  height:30px;
  visibility: hidden;
}

.ToBe{
  width:35px;
  position:absolute;
  top: 50%;
  right: 10%;
  transform: translate(-50%, -50%);
  z-index:10
}

.ToBe::after,
.ToBe::before,
.ToBe div{
  background-color: rgb(237, 240, 235);
  border-radius: 3px;
  content:'';
  display:block;
  height:5px;
  margin: 7px 0;
  transition: .5s ease-in-out;
}

#hiddenInput:checked + .ToBe::before{
  transform: translateY(12px) rotate(-130deg)
}

#hiddenInput:checked + .ToBe::after{
  transform: translateY(-12px) rotate(130deg)
}

#hiddenInput:checked + .ToBe div{
  transform: scale(0) translateX(-200px) rotate(360deg);
  transition: 1.3s ease-out
}

#drawerContent{
  height:100vh;
  top:0;
  background: linear-gradient(10deg,rgb(113, 212, 68), rgb(87, 85, 85));
  overflow:hidden
}

.unorderedList .v-list-item label{
  font-size: 30px;
  line-height: 105px;
  font-family:monospace;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 2px solid black
}

.box div{
  position:absolute;
  width:7px;
  height:7px;
  background-color:transparent;
  border: 4px solid rgba(255, 255, 255, 0.8)
}

.box div:nth-child(1){
  top:12%;
  left:42%;
  animation:animate 4s linear infinite
}

.box div:nth-child(2){
  top:70%;
  left:50%;
  animation:animate 7s linear infinite
}

.box div:nth-child(3){
  top:17%;
  left:6%;
  animation:animate 9s linear infinite
}

.box div:nth-child(4){
  top:20%;
  left:60%;
  animation:animate 8s linear infinite
}

.box div:nth-child(5){
  top:67%;
  left:10%;
  animation:animate 6s linear infinite
}

.box div:nth-child(6){
  top:80%;
  left:70%;
  animation:animate 16s linear infinite
}

.box div:nth-child(7){
  top:60%;
  left:80%;
  border: 10px solid rgb(255, 255, 255);
  border-radius:40px;
  animation:animate 12s linear infinite
}

.box div:nth-child(8){
  top:32%;
  left:25%;
  animation:animate 5s linear infinite
}

.box div:nth-child(9){
  top:90%;
  left:25%;
  animation:animate 9s linear infinite
}

.box div:nth-child(10){
  top:20%;
  left:80%;
  animation:animate 10s linear infinite
}

.box div:nth-child(11){
  top:50%;
  left:10%;
  animation:animate 6s linear infinite
}

@keyframes animate{
  0%{
    transform:scale(0) translateY(0) rotate(50deg);
    opacity:1;
  }
  100%{
    transform:scale(1.3) translateY(-90) rotate(360deg);
    opacity:0;
    right:0.8px
  }
}

</style>
