<script>
export default {
    name: "PropertiesListItem",
    data() {
        return {

        }
    },
    props: {
        propertyObj: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
    <div class="flip-container ">
        <div class="flipper">
            <div class="card-body front">
                <img :src="`http://127.0.0.1:8000/storage/${propertyObj.thumb_url}`" class="card-img-top mb-3" alt="...">
                <h5 class="card-title px-3 mt-3">{{ propertyObj.title }} </h5>
                <p class="card-text px-3 mt-4"> {{ propertyObj.description }} </p>
                <p class="card-text px-3 mt-4"> {{ propertyObj.address }} </p>
            </div>
            <div class="card-body back">
                <img :src="`http://127.0.0.1:8000/storage/${propertyObj.thumb_url}`" class="card-img-top mb-3" alt="...">
                <p class="card-text px-3 mt-3 fw-bold">Main Info:</p>
                <p class="card-text px-3"> <i class="fa-solid fa-house"></i> Rooms: {{ propertyObj.rooms }} </p>
                <p class="card-text px-3 "> <i class="fa-solid fa-bed"></i> Beeds: {{ propertyObj.beds }} </p>
                <p class="card-text px-3 "> <i class="fa-solid fa-bath"></i> Bathrooms: {{ propertyObj.bathrooms }} </p>
                <p class="card-text px-3 "> <i class="fa-solid fa-arrows-up-down-left-right"></i> Square meters: {{ propertyObj.square_meters }} mq</p>
            </div>

        </div>
    </div>
    


    
</template>

<style scoped lang="scss">
h5 {
    cursor: pointer;
}

.card:hover .card-body>h5 {
    color: #000;
}

.card:hover .card-body>p {
    color: #000;
}

img {
    max-width: 400px;
    max-height: 210px;
}

.flip-container {   
    -webkit-perspective: 800;   
    -moz-perspective: 800;      
    -ms-perspective: 800;   
    perspective: 800;   
    margin:0 auto;  
}

.flip-container:hover .flipper,  .flip-container.hover .flipper {   
    -moz-transform: rotateY(180deg);    
    -webkit-transform: rotateY(180deg);     
    transform: rotateY(180deg);  
}

.flip-container,  .front,  .back {      
    width: 321px;   
    height: 449px;  
}

.flipper {      
    -webkit-transition: 0.6s;   
    -moz-transition: 0.6s;      
    -ms-transition: 0.6s;   
    transition: 0.6s;   
    -moz-transform-style: preserve-3d;      
    -webkit-transform-style: preserve-3d;   
    transform-style: preserve-3d;   
    position: relative;  
}    

.front,  .back {      
    -webkit-backface-visibility: hidden;    
    -moz-backface-visibility: hidden;   
    backface-visibility: hidden;    
    position: absolute;     
    top: 0;     
    left: 0;    
    background:none;  
}

.back {     
    -webkit-transform: rotateY(180deg);     
    -moz-transform: rotateY(180deg);    
    transform: rotateY(180deg);     
    box-shadow:0 0 40px rgba(0,0,0,0.2);  
}

.flip-container {   /* Rappresenta l'inclinazione prospettica, in questo caso della rotazione */    
-webkit-perspective: 800;   
-moz-perspective: 800;      
-ms-perspective: 800;   
perspective: 800;   
margin:0 auto;  
}  

/* ruota il pannello al mousehover */  
.flip-container:hover .flipper,  .flip-container.hover .flipper {     
    -moz-transform: rotateY(180deg);    
    -webkit-transform: rotateY(180deg);     
    transform: rotateY(180deg);  
}

.flip-container,  .front,  .back {      
    width: 321px;   
    height: 449px;  
}  

/* impostare velocità di transizione */  
.flipper {      
    -webkit-transition: 0.8s;   
    -moz-transition: 0.8s;      
    -ms-transition: 0.8s;   
    transition: 0.8s;   
    -moz-transform-style: preserve-3d;      
    -webkit-transform-style: preserve-3d;   
    transform-style: preserve-3d;   
    position: relative;  
}  

/* nasconde il retro durante lo swap */  
.front,  .back {   
    -webkit-backface-visibility: hidden;    
    -moz-backface-visibility: hidden;   
    backface-visibility: hidden;    
    position: absolute;     
    top: 0;     
    left: 0;    
    background:none;  
} 

 /* front pane, placed above back, quello con lo z-index + alto, anche se sta prima nel codice, finisce sopra */  
 .front {      
    z-index: 2;     
    box-shadow:0 0 50px rgba(0,0,0,0.3);  
}  

 /* back, initially hidden pane */  
 .back {     
    -webkit-transform: rotateY(180deg);     
    -moz-transform: rotateY(180deg);    
    transform: rotateY(180deg);     
    box-shadow:0 0 40px rgba(0,0,0,0.2);  
}

.card-body{
    padding: 0;
}
</style>
