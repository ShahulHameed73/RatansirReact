import MovieCard from "./MovieCard";

function MovieGrid()
{
 const movies=[{name:"kalki",hero:"prabash",director:"nagAswin"},
               {name:"GameChanger",hero:"RamCharan",director:"Naresh"},
               {name:"Devara",hero:"jr.ntr",director:"K.siva"},
               {name:"Okkadu",hero:"MaheshBabu",director:"Pavan"},
               {name:"Puspa",hero:"AlluArjun",director:"Sukumar"}
            ]

      const res=movies.map((movie,index)=>(<li key={index}><h2>moviename:{movie.name}</h2><br></br>hero:{movie.hero}<br></br>director:{movie.director}</li>))

return(
    <>
         <hr></hr>
         <hr></hr>
         <hr></hr>
         <MovieCard movieObj={res} />
         <hr></hr>
         <hr></hr>
         <hr></hr>

     </>
)

}
export default MovieGrid;