import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


export default Github
export const githubInfoLoader = async ()=>{
   const response =  await fetch('https://api.github.com/users/Akshat-iitk') ;
   return response.json() ;
} ;
function Github() {
    const data = useLoaderData()
    // useEffect(() => {
    //     const dataFetch = async ()=>{
    //            await fetch('https://api.github.com/users/Akshat-iitk')
    //            .then((response)=>{return response.json()})
    //            .then((data)=>{
    //                    console.log(data) ;
    //                    Setdata(data) ;
    //                })
    //             }
    //             dataFetch() ;
    //             }, [])
                return (
                    <div className='font-semibold text-lg'>
          Github followers: {data.public_repos}
          <div className='flex items-center justify-center mt-5 mb-2'>
            <img className='rounded-lg' src={data.avatar_url} alt="Github image" width={200} />
          </div>
        </div>
      )
      
    }
    