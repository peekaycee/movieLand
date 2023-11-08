// API Key ===>   d6d70208
import { useEffect } from "react";
import "./App.css"
import Header from "./Header" 
import Moviecard from "./Moviecard"



const API_URL = "https://www.omdbapi.com?apikey=d6d70208";

const searchMovies = async (title) => {     // fetches the movie taking some time...
        const response = await fetch(`${API_URL}&s=${title}`);  // calls the api....
        const data = await response.json();  // gets the data of the movies 

        console.log(data);
}

const App = () => {

  useEffect(()=> {

    searchMovies('Superman');

  }, []);
  return (
    <div className="app">
      <Header />
      <Moviecard />
    </div>
  )
}

export default App;
