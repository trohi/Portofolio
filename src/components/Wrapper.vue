<template>
  <v-container id="wrap"  fill-height fluid mt-0 mx-0>
    <v-layout wrap row class="text-center d-flex" justify-center>
      <v-flex xs12 class="first-section" >
        <h3 >About</h3>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about1 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon id="icon1">mdi-lightbulb</v-icon>
         <p>I find coding as usable art. I like to code things from scratch, and enjoy bringing ideas to life in browser.</p>
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
          <v-card-content >MeetApp enables organisation of events for registered users. Users that doesn't own registered profile has access to informations but cant access functionalitys of web app like creation and registration for events/meetups. </v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/MeetApp"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://meetup-vue.netlify.app/"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
        <v-card class="project3" data-aos="fade-right">
          <v-card-title>Inform-nation</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/Inform-nation-screenshot.png"
          >
          </v-img>
          <v-card-content >Inform-nation is imagined to be blog like web site. Using this site you can share your story with other users. For user to publish his story its required to have registred profile. There is one more step before publishing story, administrator of website needs to approve your story at first. Creation of administrator account is let for user's will to choose between regular or admin account within account registration form. Logic regarding this metter is created for testing purpose.</v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/My-app"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://inform-nation.herokuapp.com/"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
        <v-card class="project4" data-aos="fade-left">
          <v-card-title>Joke generator</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/Joke-generator-screenshot.png"
          >
          </v-img>
          <v-card-content >Joke generator is simple website that generates Chuck Norris jokes. Displaying jokes are fetched from API.</v-card-content>
          <v-card-actions class="actions"> <v-spacer></v-spacer> <v-btn light text class="ml-2 mr-3" href="https://github.com/trohi/Chuck-Norris-joke-generator"><v-icon class="gitIcon">mdi-github</v-icon></v-btn>  <v-btn light text class="ml-3 mr-2" href="https://generate-random-joke.netlify.app"><v-icon class="liveIcon">mdi-web</v-icon></v-btn> <v-spacer></v-spacer> </v-card-actions> 
        </v-card>
        <v-card class="project5" data-aos="fade-right">
          <v-card-title>QuizApp</v-card-title>
          <v-img
          class="ml-auto mr-auto mb-5" 
          width="450"
          src="../assets/Quiz-screenshot.png"
          >
          </v-img>
          <v-card-content >Simple quiz app which offers 4 answers for each question. There is 10 question and you can navigate through by answaring to given question and clicking next button. Web app also displays counter of correct answered question/total answered questions. All data used is fatched from public API.</v-card-content>
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
  background: linear-gradient(65deg, rgb(154, 236, 154), rgba(152, 226, 222, 0.4), rgba(241, 239, 117, 0.4), #ffffff)
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
  border-left:3px solid rgba(150, 29,29);
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
  background:linear-gradient(360deg,  rgb(207, 211, 216),rgb(142, 151, 228), #4a75ff)
}


.project3{
  background:linear-gradient(360deg, rgb(214, 209, 209), rgb(84, 148, 65), rgb(40, 182, 5))
}

.project4{
  background:linear-gradient(360deg, rgb(214, 209, 209), rgb(226, 151, 132), rgb(245, 140, 55))
}

.project5{
  background:linear-gradient(360deg, rgb(214, 209, 209), rgb(226, 132, 155), rgb(245, 55, 55));
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
