
import './App.css';
import Result from './components/result';
import Head from './components/head';
import imag1 from "./components/icons8-search-64.png";
import { useEffect, useState } from 'react';

 const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
 const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {

const [movies,setMovies]= useState([1,2,5])
const [search,setSearch]=useState("")

const changeTheSearch=(event)=>{
  console.log(event.target.value)
  setSearch(event.target.value)
}


const getAllMovie=()=>{
  fetch(APIURL)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data.results)
    setMovies(data.results)
  })
  .catch(
    (error)=>{
      console.log(error)
    }
  );
}

const getSearchMovies=()=>{
  const sear=SEARCHAPI+search
  fetch(sear)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data.results)
    setMovies(data.results)
  })
  .catch(
    (error)=>{
      console.log(error)
    }
  );
}



useEffect(
  ()=>{
      setMovies([]);
      if (search===""){
        getAllMovie();
      }
      else{
         getSearchMovies();
      }
  },
  [search]

);

  
  return (
    
    <div className='max-w-[1240px] shadow-xl min-h-[400px] mx-auto  bg-slate-200 bg-blend-lighten'>
      <div className='bg-blue-500 p-4'>
        <Head/>
        <div className='w-full  text-center flex justify-end'>
        
            {/* <p className=' text-center  text-xl '>search here</p>  */}
            <input value={search} on onChange={changeTheSearch}className='h-full border border-black rounded p-2 text-slate-500'/>
            <img src={imag1} className='w-[40px]'/>
            </div>
      </div>
      {
        movies.length ===0
        ?
        <div className='text 3xl text-center mt-2'> loading....</div>
        :
      <Result movies={movies}/>
      }
    </div>
  )
}


export default App;
