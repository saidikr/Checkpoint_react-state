import photo from '../assets/what_is_image_Processing.avif'
import { useState,useEffect } from 'react';
import React from 'react'

export const Person = () => {
    var dif;
    var time=new Date().getTime()

    
    

    const [person, setPerson] = useState({fullName:"IKROUBERKANE Said",
    bio:"biobio",
    imgSrc:photo,
    profession:"info",
    shows:true,});
    let Personstate=person.shows;

    useEffect(() => {
    let now=new Date().getTime()
    dif=now-time
    time=now
    console.log(dif)
    }, [person]);

    return (
    <>
    {person.shows&&
        <div className="card" >
        <div className="card-body">
            <img src={person.imgSrc} alt="my image" />
            <h5 className="card-title">{person.fullName}</h5>
            <p className="card-text">{person.bio}</p>
            <p className="card-text">{person.profession}</p>
        </div>
    </div>
    }
    <button className="btn btn-primary m-5" onClick={()=>{
        Personstate=!person.shows
        setPerson({...person,shows:Personstate})}
        }>Show Person</button>

    </>
  )
}
