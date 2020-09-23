import React from "react";

export default function SearchMovies(){
  const searchmovies = async (e) => {
    e.preventDefault();

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d693ada1dd3255393b2a61dedf1fe9e3&language=en-US&query=${query}&page=1&include_adult=false`;
     

    try{
      const res = await fetch(url);
      const data  = await res.json();
      console.log(data);
  }catch(err){
      console.error(err);
  }
    }

    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}