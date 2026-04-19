
const movies = [
  {
    title: "Movie One",
    genre: "Action",
    release: 2001,
    rating: 7.5
  },
  {
    title: "Movie Two",
    genre: "Drama",
    release: 1998,
    rating: 8.2
  },
  {
    title: "Movie Three",
    genre: "Comedy",
    release: 2010,
    rating: 6.9
  },
  {
    title: "Movie Four",
    genre: "Action",
    release: 2005,
    rating: 7.8
  },
  {
    title: "Movie Five",
    genre: "Sci-Fi",
    release: 2018,
    rating: 8.5
  },
  {
    title: "Movie Six",
    genre: "Drama",
    release: 1995,
    rating: 7.2
  },
  {
    title: "Movie Seven",
    genre: "Comedy",
    release: 2020,
    rating: 7.0
  },
  {
    title: "Movie Eight",
    genre: "Sci-Fi",
    release: 2015,
    rating: 8.0
  }
];

let userMovies=movies.filter((mk)=>{
    return mk.genre==="Sci-Fi";
})
userMovies=movies.filter((mk)=>{
    return (mk.release >=2000 && mk.genre==="Action")
})
console.log(userMovies);
