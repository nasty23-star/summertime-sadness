import { createStore } from 'vuex'

export default createStore({
  state: {
    
    movies: [
      {title: "Matrix", year: "1999", index: "1", href: "https://www.imdb.com/title/tt0133093/"},
      {title: "ARQ", year: "2016", index: "2", href: "https://www.imdb.com/title/tt5640450/"},
      {title: "F.A.Q. about Time Travel", year: "2009", index: "3", href: "https://www.imdb.com/title/tt0910554/"},
     {title: "Train to Busan", year: "2016", index: "4", href: "https://www.imdb.com/title/tt5700672/"},
       {title: "Europa Report", year: "2013", index: "5", href: "https://www.imdb.com/title/tt2051879/"},
        {title: "Chappie", year: "2015", index: "6", href: "https://www.imdb.com/title/tt1823672/"},
       {title: "District 9", year: "2009", index: "7", href: "https://www.imdb.com/title/tt1136608/"},
       {title: "Source Code", year: "2011", index: "8", href: "https://www.imdb.com/title/tt0945513/"},
        {title: "Triangle", year: "2009", index: "9", href: "https://www.imdb.com/title/tt1187064/"},
       {title: "Time Lapse", year: "2014", index: "10", href: "https://www.imdb.com/title/tt2669336/"},  
        {title: "Palm Springs", year: "2021", index: "11", href: "https://www.imdb.com/title/tt9484998/"},
        {title: "V For Vendetta ", year: "2005", index: "12", href: "https://www.imdb.com/title/tt0434409/"},
        {title: "Moon", year: "2009", index: "13", href: "https://www.imdb.com/title/tt1182345/"},
        {title: "Eternal Sunshine of the Spotless Mind", year: "2004", index: "14", href: "https://www.imdb.com/title/tt0338013/"},
        {title: "Timecrimes", year: "2007", index: "15", href: "https://www.imdb.com/title/tt0480669/"},
        {title: "Prospect", year: "2018", index: "16", href: "https://www.imdb.com/title/tt7946422/"},
        {title: "Mr.Nobody", year: "2009", index: "17", href: "https://www.imdb.com/title/tt0485947/"},
        {title: "Gattaca", year: "1997", index: "18", href: "https://www.imdb.com/title/tt0119177/"}
     ],
    
    movie: {title: "", year: "", index: "", link: ""},
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
