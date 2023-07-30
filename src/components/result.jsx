import React from 'react';




export default function Result(props) {
        const boxes= props.movies.map(
            (item,index)=>{
               return  <Box
               key={index} 
               image={item.poster_path}
               title={item.title}
               rating={item.vote_average}
               date={item.release_date}
               /> 
            }
        
        )
        return (
            <div className='w-full grid grid-cols-4 gap-5'> 
                {boxes}
            </div>
        )
    } 
const  Box=(props)=>{
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className=' min-h-[200px]  rounded m-3'>
            <img src={IMGPATH + props.image}  alt="loading" className='w-full rounded-[20px]'/>
            
                <span >{props.title}</span>
                
                <div className='flex justify-between p-1'>
                    <span className=' text-slate-500'>{props.date}</span>
                    <span >⦿</span>
                    <span className=' text-yellow-600'>{props.rating}</span>
                </div>
                
            
        </div>
    )
}