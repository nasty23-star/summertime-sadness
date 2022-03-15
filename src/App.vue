<template>
<div class="container">

<h>My favorite fantastic movies</h>
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



</div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

//export default defineComponent({
 // setup() {
    
 // },
//})
//import { ref } from 'vue';
export default {
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
background-color: #ffffff;
padding-top: 20px;
padding-bottom: 20px;
}
.container {
width: 90%;
padding-top: 20px;
padding-bottom: 20px;
  background-color: rgb(8, 3, 3);
  color: rgb(255, 255, 255);

}
h {
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-style: italic;
  padding-bottom: 20px;
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
button {
  text-align: center;
  margin: 40px auto;
   margin: 20px;
  outline: none;
   position: relative;
  color: rgb(8, 1, 1);
  z-index: 2;
  line-height: 40px;
  padding: 0;
    background: #fff;
  line-height: 42px;
  padding: 0;
  border: 1px solid rgb(255, 255, 255);
  width: 200px;
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
button:before,
button:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #000;
  transition:500ms ease all;
}
button:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
button:hover:before,
button:hover:after{
  width:100%;
  transition:800ms ease all;
}


h1 {
  color: white; 
}
@media screen and (max-width: 1200px){
  *{
    padding: 0;
    margin: 0;
  }
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
</style>
