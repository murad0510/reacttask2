import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import Movie from './Components/Nav/Movie/Movie';
import FeedBack from './Components/Nav/FeedBack/FeedBack';

const cinemaInformation={
  name:"CinemaPlus",
  adress:"28 May",
  rating:2.8
};

const movies=[
  {
    name:"The Godfather",
    genre:"Crime, Drama",
    imdbRating:9.2,
    description:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    finance:14
  },
  {
    name:"Mulan",
    genre:"Animation, Adventure, Comedy",
    imdbRating:7.7,
    description:"https://elestoque.org/wp-content/uploads/2020/09/71Sq2YIbNSL._AC_SL1500_-608x900.jpg",
    finance:10
  },
];

const feedBacks=[
  {
    comment:"Ela yerdir"
  },
  {
    comment:"pis yerdir"
  },
  {
    comment:"normal yerdir"
  },
];

function App() {
  return (
    <div className="App" style={{width:"50%",margin:"auto",marginTop:"2%",border:"1px solid black",backgroundColor:"#a0d2eb"}}>  
      <Navbar cinemaInformation={cinemaInformation}></Navbar>
      <hr/>
      <div style={{width:"100%",display:"flex",flexWrap:"wrap"}}>
      {
        movies.map((m)=>
          (
            <Movie movie={m}></Movie>
          )
        )
      }
      </div>
      <hr/>
     <div style={{width:"100%",display:"flex",flexWrap:"wrap"}}>
        {
           feedBacks.map((f)=>
             (
               <FeedBack feedBack={f}></FeedBack>
             )
           )
         }
      </div>
    </div>
  );
}

export default App;
