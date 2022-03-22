<template>
<div class="container">
<header-my></header-my>

<div class="movie-list">
<li v-for="movie in movies" :key="movie">
 
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
  
  
   
 movies: [
      {title: "Matrix", year: "1999", index: "1", href: "https://www.imdb.com/title/tt0133093/"},
      {title: "ARQ", year: "2016", index: "2", href: "https://www.imdb.com/title/tt5640450/"},
      {title: "F.A.Q. about Time Travel", year: "2009", index: "3", href: "https://www.imdb.com/title/tt0910554/"},
     {title: "Train to Busan", year: "2016", index: "4", href: "https://www.imdb.com/title/tt5700672/"},
       {title: "Europa Report", year: "2013", index: "5", href: "https://www.imdb.com/title/tt2051879/"},
        {title: "Chappie", year: "2015", index: "6", href: "https://www.imdb.com/title/tt1823672/"},
       {title: "District 9", year: "2009", index: "7", href: "https://www.imdb.com/title/tt1136608/"},
       {title: "Source Code", year: "2011", index: "8", href: "https://www.imdb.com/title/tt0945513/"},
        {title: "Triangle", year: "2009", index: "9", href: "https://www.imdb.com/title/tt0434409/"},
       {title: "Time Lapse", year: "2014", index: "10", href: "https://www.imdb.com/title/tt0434409/"},  
        {title: "Palm Springs", year: "2021", index: "11", href: "https://www.imdb.com/title/tt0434409/"},
        {title: "V For Vendetta ", year: "2005", index: "12", href: "https://www.imdb.com/title/tt0434409/"},
        {title: "Moon", year: "2009", index: "13", href: "https://www.imdb.com/title/tt1182345/"},
        {title: "Eternal Sunshine of the Spotless Mind", year: "2004", index: "14", href: "https://www.imdb.com/title/tt0338013/"},
        {title: "Timecrimes", year: "2007", index: "15", href: "https://www.imdb.com/title/tt0480669/"},
        {title: "Prospect", year: "2018", index: "16", href: "https://www.imdb.com/title/tt7946422/"},
        {title: "Mr.Nobody", year: "2009", index: "17", href: "https://www.imdb.com/title/tt0485947/"},
        {title: "Gattaca", year: "1997", index: "18", href: "https://www.imdb.com/title/tt0119177/"}
     ],
    
    movie: {title: "", year: "", index: "", link: ""},
  }
},
 methods: {
 

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
  width: 90%;
   height: 20px;
font-family:'Courier New', Courier, monospace;
display: flex;
justify-content: left;
  color: #000;
padding-top: 10px;
padding-bottom: 25px;
margin-left: 5%;
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
