<template>
  <v-container id="wrap" fluid fill-height mt-0>
    <v-layout wrap row class="text-center d-flex" justify-center>
      <v-flex xs12 class="first-section" >
        <h3 >About</h3>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about1 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon id="icon1">mdi-lightbulb</v-icon> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, in sed assumenda, fugit et consequatur delectus eligendi ipsa reprehenderit eveniet blanditiis omnis, ad pariatur ipsum enim aspernatur! Commodi, voluptas earum.</p></v-flex>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about2 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon class="icon2">mdi-send</v-icon> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, in sed assumenda, fugit et consequatur delectus eligendi ipsa reprehenderit eveniet blanditiis omnis, ad pariatur ipsum enim aspernatur! Commodi, voluptas earum.</p></v-flex>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about3 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon class="icon3">mdi-code-tags</v-icon> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, in sed assumenda, fugit et consequatur delectus eligendi ipsa reprehenderit eveniet blanditiis omnis, ad pariatur ipsum enim aspernatur! Commodi, voluptas earum.</p></v-flex>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about4 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon class="icon4">mdi-basketball</v-icon> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, in sed assumenda, fugit et consequatur delectus eligendi ipsa reprehenderit eveniet blanditiis omnis, ad pariatur ipsum enim aspernatur! Commodi, voluptas earum.</p></v-flex>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about5 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon class="icon5">mdi-palette</v-icon> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, in sed assumenda, fugit et consequatur delectus eligendi ipsa reprehenderit eveniet blanditiis omnis, ad pariatur ipsum enim aspernatur! Commodi, voluptas earum.</p></v-flex>
        <v-flex data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="150" class="about6 mt-5 pl-3 pr-3" md6 offset-md-3 ><v-icon class="icon6">mdi-music</v-icon> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, in sed assumenda, fugit et consequatur delectus eligendi ipsa reprehenderit eveniet blanditiis omnis, ad pariatur ipsum enim aspernatur! Commodi, voluptas earum.</p></v-flex>
      </v-flex>
      <v-flex xs12 class="second-section" >
        <h3>Projects</h3>
        <v-card class="project1">
          <v-card-title>Meetup Dev</v-card-title>
          <v-card-content >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit perspiciatis debitis! Iure cum optio mollitia esse exercitationem eos obcaecati dignissimos vel impedit id, dicta quaerat harum sequi itaque aperiam.</v-card-content>
          <v-btn>Live</v-btn> <v-spacer></v-spacer> <v-btn>Git</v-btn>
        </v-card>
        <v-card class="project2">
          <v-card-title>Perfect Squad</v-card-title>
          <v-card-content >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit perspiciatis debitis! Iure cum optio mollitia esse exercitationem eos obcaecati dignissimos vel impedit id, dicta quaerat harum sequi itaque aperiam.</v-card-content>
        </v-card>
        <v-card class="project3">
          <v-card-title>Inform-nation</v-card-title>
          <v-card-content >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit perspiciatis debitis! Iure cum optio mollitia esse exercitationem eos obcaecati dignissimos vel impedit id, dicta quaerat harum sequi itaque aperiam.</v-card-content>
        </v-card>
        <v-card class="project4">
          <v-card-title>Joke generator</v-card-title>
          <v-card-content >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit perspiciatis debitis! Iure cum optio mollitia esse exercitationem eos obcaecati dignissimos vel impedit id, dicta quaerat harum sequi itaque aperiam.</v-card-content>
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
  margin-bottom:-20%;
  padding-bottom:0
}

.first-section h3{
  margin: 5% 0%
}

.first-section h3{
  font-family:Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  font-size:25px
}

.v-sheet.v-card:not(.v-sheet--outlined){
  border-left:3px solid rgba(150, 29,29);
}

.mdi-lightbulb::before,
.mdi-send::before,
.mdi-code-tags::before,
.mdi-basketball::before,
.mdi-palette::before,
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

.about5:hover > .mdi-palette::before{
  animation:coloring 3s linear infinite;
}

.about6:hover > .mdi-music::before{
  animation:music 3s linear infinite;
  transform: scale(1.5) 
}


.project1{
  background:linear-gradient(360deg, rgb(104, 102, 102), rgb(92, 81, 81),rgb(90, 50, 50), #660404)
}

.project2{
  background:linear-gradient(360deg, rgb(148, 143, 143), rgb(230, 231, 174), rgb(245, 229, 85))
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

@keyframes coloring {
  0%{
    color:orange;
    transform:scale(1.2)
  }
  30%{
    color:purple;
    transform:scale(1)
  }
  60%{
    color:brown;
    transform:scale(1.2)
  }
  80%{
    color:blue;
    transform:scale(1)
  }
  100%{
    color:black;
    transform:scale(0.9)
  }
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
