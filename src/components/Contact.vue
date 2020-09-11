<template>

    <v-container fluid justify-center class="p-0 m-0">
        <svg data-aos="flip-up" data-aos-duration="3000" id="curvature" xmlns="http://www.w3.org/2000/svg" viewBox="80 76 1240 325"><path fill="rgba(50,50,50)" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,256C480,245,600,203,720,170.7C840,139,960,117,1080,128C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <v-layout row wrap class="d-grid mt-n15" justify-center>
            <h1 id="contact-header" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in" >Contact</h1>
            <br>
            <v-flex xs11 md10 class="ml-15 mr-15" id="formWraper" data-aos="fade-right" data-aos-duration="1500" >
                <v-form id="form" data-aos="fade-left" data-aos-duration="2500" >
                    <label for="nm" class="nmLabel">Name</label>
                    <v-text-field
                    required
                    id="nm"
                    class="secondary--text mt-n5 mb-2"
                    >
                    </v-text-field>
                    <label for="email" class="emailLabel">E-mail</label>
                    <v-text-field
                    required
                    id="email"
                    class="secondary--text mt-n5 mb-2"
                    >
                    </v-text-field>
                    <label for="msg" class="msgLabel">Message</label>
                    <v-textarea
                    id="msg"
                    required
                    class="secondary--text mt-n5 mb-2"
                    >   
                    </v-textarea>
                    <v-btn text id="submitBtn" class="white--text float-right">Submit</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
        <v-icon class="scrollUpIcon" @click="$vuetify.goTo('.top-header',40, 'ease-out')">mdi-arrow-up-thick</v-icon>
    </v-container>
</template>

<script>
export default {
    name:'Contact',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
#curvature{
    margin-top:-17%;
    width:104%;
    display:block;
    margin-left:-15px
}

.container{
    background:linear-gradient(20deg, rgb(73, 72, 72), rgb(50,50,50) 50%)
}
#submitBtn{
    background-color:rgba(150, 29, 29)
}

#contact-header{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:55px;
    color:rgba(150,29,29);
    text-shadow:0.1px 0.1px black;
    margin-top:-50px
}

#form{
   width:70%;
   margin-left:auto;
   margin-right:auto;
   justify-content: center
}

#formWraper{
    padding-top:30px;
    padding-bottom:22px;
    border:1px solid grey
}

.v-label:active{
    color:green
}

.v-text-field .v-label{
    background-color:red
}

.nmLabel, .emailLabel, .msgLabel{
    color:#b0bec5;
    font-size:20px;
}

.scrollUpIcon{
    color:white;
    font-size:35px;
    margin-left:94%;
    margin-top:-25%;
    animation:scrollUp 1.5s infinite
}

@keyframes scrollUp {
    0%{
        transform: translateY(0px);
        opacity:.5;
        color:rgba(150, 29, 29)
    }
    50%{
        opacity:1
    }
    100%{
        transform:translateY(-20px);
        opacity:0.4;
        background:transparent
    }
}

</style>
