<template>
  <v-container id="wrap"  fill-height fluid mt-0 mx-0>
    <v-layout wrap row class="text-center d-flex" justify-center>
      <v-flex xs12 class="first-section" >
        <h3 >About</h3>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about1 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon id="icon1">mdi-lightbulb</v-icon>
         <p>I like to code things from scratch, and enjoy bringing ideas to life in browser.</p>
         </v-flex>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about2 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon class="icon2">mdi-send</v-icon>
         <p>More and more people are using all kinds of devices to access internet and websites these days. I create almost every website as responsive and good looking on all devices.</p>
         </v-flex>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about3 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon class="icon3">mdi-code-tags</v-icon>
         <p>I tend to write efficient and readable code, making it to easier to debug.</p>
         </v-flex>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about4 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon class="icon4">mdi-basketball</v-icon>
         <p>I find basketball most interesting sport and I am enjoying it whenever i can. </p>
         </v-flex>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about6 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon class="icon6">mdi-music</v-icon>
         <p class="mb-0">Listening to music is enhancing my creativity and physical performance. </p>
         </v-flex>
      </v-flex>
      <v-flex xs12 class="second-section">
        <h3>Projects</h3>
        <v-card class="project1" data-aos="fade-left">
          <v-card-title>MeetApp</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/meetup-vue-screenshot.png"
          >
          </v-img>
          <v-card-content >MeetApp enables organisation of events for registered users. Users that don't own registered profile have access to information but can't access functionalities of web app such as creation and registration for events/meetups. </v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/MeetApp"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://meetup-vue.netlify.app/"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
        <v-card class="project1" data-aos="fade-right">
          <v-card-title>Inform-nation</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/Inform-nation-screenshot.png"
          >
          </v-img>
          <v-card-content >Inform-nation is imagined to be a blog-like web site. Using this site you can share your stories with other users. For a user to publish his story its required to have a registred profile. There is one more step before publishing a story, administrator of the website needs to approve user's story first. Creation of administrator account is let for user's will to choose between regular or admin account within account registration form. Logic regarding this matter is created for testing purpose.</v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/My-app"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://inform-nation.herokuapp.com/"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
        <v-card class="project1" data-aos="fade-right">
          <v-card-title>rock-paper-scissors</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/rock-paper-scissors.png"
          >
          </v-img>
          <v-card-content >Rock, paper, scissors is a game played between user and computer. User has three shapes to choose between, each shape beats one of two remaining shapes. Rules are predetermined by original creator of the game. The main focus was on following given designe, I used Vue.js and vuex to manage all the application's data in one place.</v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/web-chat"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://elated-mcnulty-b9c4d2.netlify.app/"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
         <v-card class="project1" data-aos="fade-left">
          <v-card-title>Chat app</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/Screenshot from webChat.png"
          >
          </v-img>
          <v-card-content >Web chat is simple chat application developed with Vue.js, bootstrap and firebase as backend service. User has to create account to be able to access to chat section. For now it is only posible to chat to one person, but I am planning to create functionality of more chat rooms. </v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/MeetApp"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://cha-tapp.netlify.app"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
         <v-card class="project1" data-aos="fade-right">
          <v-card-title>Infite scroll gallery</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/Screenshot from infinite scroll app.png"
          >
          </v-img>
          <v-card-content >Infinite scroll gallery is an app that uses API as data provider, and it is developed in React. As soon as you approach the bottom of list of pictures during scroll action, app loads another set of pictures. There are three options in navigation menu: blur effect option, grayscale effect opetion and normal option which loads pictures without special effects. </v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/Corussoft-task01"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://infinite-scroll-gall3ry.netlify.app/"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
        <v-card class="project1" data-aos="fade-left">
          <v-card-title>IP Address Tracker</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/Ip-address-tracker-screenshot.png"
          >
          </v-img>
          <v-card-content >IP Address Tracker is a web app that allows user to enter IP address in the input field and get it's geolocation pointed with marker.on the map.</v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/IP-adress-tracker"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://ip-address-tracker0.netlify.app/ "><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
        <v-card class="project1" data-aos="fade-left" >
          <v-card-title>Room-homepage</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/desktop-design-slide-1.jpg"
          >
          </v-img>
          <v-card-content >Room-homepage is recreation of given design. I chose to develope this project in purpose to pratice my skills in this matter. Home page is responsive and it fits desktop: 1291px and mobile: 375px.</v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/room-homepage"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://gracious-jennings-f7b29d.netlify.app/ "><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
        <v-card class="project1" data-aos="fade-left">
          <v-card-title>Joke generator</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/Joke-generator-screenshot.png"
          >
          </v-img>
          <v-card-content >Joke generator is a simple website that generates Chuck Norris jokes. Displaying jokes are fetched from API.</v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/Chuck-Norris-joke-generator"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://generate-random-joke.netlify.app"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
        <v-card class="project1" data-aos="fade-right">
          <v-card-title>QuizApp</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/Quiz-screenshot.png"
          >
          </v-img>
          <v-card-content >Simple quiz app which offers 4 answers for each question. There is 10 questions and you can navigate through them by answering to given questions and clicking the button 'next'. Web app also displays total number of correct answers. All data used is fetched from public API.</v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/QuizApp"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://quizappp.netlify.app"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Wrapper',
    data: () => ({
      
    }),
  }
</script>

<style >
#wrap{
  background: linear-gradient(rgb(77, 99, 133), rgb(79, 101, 134))
  /*background:linear-gradient( white)*/
}

.first-section{
  margin-top:5%;
  padding-bottom:0
}

 h3{
  margin: 5% 0%
}

h3{
  font-size:25px;
}

.second-section{
  margin-top:-33vh;
  margin-bottom:-15vh
}

.second-section .v-card{
  width:80%;
  margin-left:auto;
  margin-right:auto;
}

.v-sheet.v-card:not(.v-sheet--outlined){
  border-left:3px solid rgba(50,50,50);
}

.v-image{
  border:2px solid rgba(50,50,50);
  border-radius:10px
}

.mdi-lightbulb::before,
.mdi-send::before,
.mdi-code-tags::before,
.mdi-basketball::before,
.mdi-music::before{
  color:rgba(150, 29,29)
}

.about1:hover > .mdi-lightbulb::before{
  transform: scale(1.5) translateY(-10px);
  color: orange;
  transition: .5s linear
}

.about2:hover > .mdi-send::before{
  animation: airplane 5s linear infinite;
  color:royalblue
}

.about3:hover > .mdi-code-tags::before{
  transform:scale(1.5);
  transition: 3s linear;
  color:black
}

.about4:hover > .mdi-basketball::before{
  animation: ball 1.3s ease-out 1;
  color:rgb(233, 117, 8);
  animation-delay:0.5
}


.about6:hover > .mdi-music::before{
  animation:music 3s linear infinite;
  transform: scale(1.5) 
}

.project1{
  background:linear-gradient(#9faddd,rgb(232, 234, 238))
 /* background:linear-gradient(90deg,#555454,  #b8b3b3)*/
}

.project1:hover{
  background:linear-gradient(90deg, rgb(31, 102, 235), 1px, #dad8c6);
  transition: 55s ease-out
}

.actions{
  margin-left:auto;
  margin-right:auto
}

.gitIcon, .liveIcon{
  transform: scale(1.5)
}


.v-card{
  margin:5% 3%;
  padding:3% 3%
}

@keyframes airplane{
  0%{
    transform: scale(1.1) translateX(-120px);
    transition: .8s linear ;
  }
  100%{
    transform: scale(1.4) translateX(120px);
    transition: .8s linear ;
  }
}

@keyframes ball{
  0%{
    transform: translateX(-150px) translateY(-26px) rotate(180deg);
    transition: 1551ms step-start
  }
  20%{
    transform: translateX(-120px) translateY(-26px) rotate(260deg);
    transition: 2222ms step-start
  }
  40%{
    transform: translateX(-80px) translateY(10px) rotate(10deg);
    transition: 2900ms step-start
  }
  50%{
    transform: translateX(-75px) translateY(-10px) rotate(100deg);
    transition:1100ms ease-out
  }
  60%{
    transform: translateX(-65px) translateY(-25px) rotate(360deg);
    transition: 1850ms linear
  }
  70%{
    transform: translateX(-45px) translateY(0px) rotate(-150deg);
    transition: 200ms linear
  }
  80%{
     transform: translateX(-25px) translateY(-16px) rotate(-50deg);
     transition: 200ms linear
  }
  100%{
      transform: translateX(0px) translateY(0px);
      transition: 200ms linear
  };
}

@keyframes music {
  0%{
    transform: translateX(1px) rotate(60deg) translateY(-10px)
  }
  50%{
    transform: translateX(2px) rotate(-60deg) translateY(-8px)
  }
  100%{
    transform: translateX(0) rotate(60deg) translateY(-10px)
  }
}
</style>
