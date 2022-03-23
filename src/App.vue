<template>
<div class="container">
<header-my></header-my>

<div class="movie-list">
<li v-for="(movie, index) in $store.state.movies" :key="index">
 
<div>
  <p>Number: {{movie.index}}</p>
  <p>Title: {{movie.title}}</p>
  <p>Year: {{movie.year}}</p>
  <p>Link:
  <a target="blank" :href="`${movie.href}`">more</a>
  </p>

</div>

</li>

</div>

<InputAdd />


<h2>Guest movie list</h2>
<div class="show-wrap">
<button class="show" @click="showList()">show list</button>
</div>
<div class="guest-list">
<TransitionGroup name="list">
  <li v-for="guest in guests" :key="guest">
  
      Title: {{guest.title}}
     
    </li>
</TransitionGroup>
</div>
</div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

//export default defineComponent({
 // setup() {
    
 // },
//})
//import { ref } from 'vue';
import HeaderMy from '@/components/HeaderMy.vue'
import InputAdd from '@/components/InputAdd.vue'

export default {
  components: {
    HeaderMy,
    InputAdd
   
    },
name: 'app',
data() {
  return {
  movies: [],
 movie: {title: "", year: "", index: "", link: ""},
  
   guests: []
 
  }
},
 methods: {
 showList() {
   fetch("https://pros-e5cee-default-rtdb.asia-southeast1.firebasedatabase.app/guests.json").then((response) => {
if (response.ok) {
 return response.json();
}
   }).then((data) => {
    const guests = []
    for (const id in data) {
      guests.push({id: id, title: data[id].title});
    }
    this.guests = guests
   })
 }

 }
}
</script>

<style>
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  min-height: 200px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 background-color: rgb(8, 3, 3);
padding-top: 20px;
padding-bottom: 20px;
color: white;
}
.container {
width: 90%;
padding-top: 20px;
padding-bottom: 20px;
  background-color: rgb(8, 3, 3);
  color: rgb(255, 255, 255);

}
.movie-list {
  padding-top: 20px;
  display: grid;
   grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  list-style: none;
  align-items: start;
  padding-left: 15px;
  padding-right: 15px;
}

.movie-list div {
  height: 120px;
  padding: 5px;
  border: 1px dashed white; 
  text-align: center;
  align-items: center;
  
}
.movie-likes {
  float: left;
 
}
.movie-list div:hover {
  background: transparent;
  color: #ffffff;
   box-shadow:
   -7px -7px 5px 5px #fff9,
   4px 4px 7px 7px #fff9,
   7px 7px 7px 7px #0002,
   4px 4px 7px 7px #0001;
}
@media screen and (max-width: 1200px){
.movie-list div {
    height: 140px;
    
  }
  .movie-list div p {
    padding-top: 5px;
  }
}
@media screen and (max-width: 800px) {
  .movie-list div {
    height: 180px;
  }
}

h2 {
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  padding-bottom: 15px;

}
h2:hover {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  transition: 3s ease;
}
.guest-list {
  display: grid;
   grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
    background-color: white;
    color: black;
   
  
}
.guest-list li {

  display: flex;
  justify-content: left;
  width: 90%;
   height: 30px;
font-family:'Courier New', Courier, monospace;
display: flex;
justify-content: left;
  color: #000;
padding-top: 10px;
padding-bottom: 25px;
margin-left: 5%;
 overflow: auto;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.7s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.guest-list li:hover {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  transition: 3s ease;
}
.show-wrap {
 margin: 0 auto;
 padding-top: 20px;
 padding-bottom: 20px;
 position: relative;
}
.show {
   background: #000;
  color: #fff;
  z-index: 1;
  margin: 20px;
  outline: none;
  height: 40px;
  width: 200px;
}
.show:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
   background: #e0e5ec;
  transition: all 1s ease;
}
.show:hover {
  color: #000;
}
.show:hover:after {
  top: 0;
  height: 100%;
}
.show:active {
  top: 2px;
}




h1 {
  color: white; 
}
@media screen and (max-width: 1200px){
  *{
    padding: 0;
    margin: 0;
  }
  
}

</style>
