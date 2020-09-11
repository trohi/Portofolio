<template>
    <v-container class="top-header" align-center fluid>
        <v-layout class="d-flex text-center" id="flexWraper" justify-center>
            <v-flex>
                <h1 class="firstLine">Hello, my name is Dženan</h1>
                <h1 class="secondLine">I am frontend developer</h1>
            </v-flex>
        </v-layout>
        <v-layout class="text-center" id="flexWraper2">
            <v-flex >
                <v-icon id="arrowIcon" class="white--text mb-10" @click="$vuetify.goTo('.first-section', 28, 'easeOutQuad')">mdi-chevron-double-down</v-icon>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name:'Header'
}
</script>


<style >
.top-header{
    height:100vh;
    background-color:#272727;
    margin:0;
    top:0
}

#flexWraper{
    margin-top:35vh
}

#flexWraper2{
    margin-top:35vh
}

#arrowIcon{
    opacity:0;
    scale: 2;
    animation: arrowDrop 2s ease-out forwards
}

.firstLine{
    color:white;
    animation:enlarge 2s linear 1 forwards
}

.secondLine{
    color: rgb(150, 29, 29);
    animation: shrink 2s linear 1 forwards
}



@keyframes enlarge{
    0%{
        scale:1
    }
    100%{
        scale:1.1;
        color:rgba(150,29,29);
        text-shadow:0.1px 0.1px black;
    }
}

@keyframes shrink{
    0%{
        scale:1;
    }
    100%{
        scale:0.9;
        color:white
    }
}

@keyframes arrowDrop {
    0%{
        scale:0.2;
        margin-top:-190%;
    }
    100%{
        opacity:1;
        scale:1.5;
        margin-top:0
    }
}
</style>
