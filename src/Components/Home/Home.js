import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faImage,faFileImage,faFileVideo} from '@fortawesome/free-regular-svg-icons'
import {pageData} from '../../Datas/data'
import React, { useEffect, useState } from 'react'
import { Navigate } from "react-router-dom"
import ImageCard from '../Cards/ImageCard/ImageCard'
import TextCard from '../Cards/TextCard/TextCard'
import './Home.css'

function Home() {
    const [authenticated, setauthenticated] = useState(null);
    const[dataset,setDataset]=useState(pageData[0]);
    console.log(pageData[1]);
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);
    
    const handleFavourite=()=>{
        setDataset(dataset=>({
            ...dataset,
            ...pageData[0]
        })
        );
    }
    const handleImage=()=>{
        setDataset(dataset=>({
            ...dataset,
            ...pageData[1]
        })
        );
    }
    const handleDocument=()=>{
        setDataset(dataset=>({
            ...dataset,
            ...pageData[2]
        })
        );
    }
   
    const handleVideo=()=>{
        setDataset(dataset=>({
            ...dataset,
            ...pageData[3]
        })
        );
    }

    if (authenticated==false||authenticated=='') {
        return <Navigate replace to="/signin" />;
        
    } else {
        return (
            <div className='homewrap'>
                <div>
                    <div className='wrap'>
                        <form>
                            <input type="text" placeholder="Search..." />
                            <button type="submit">Search</button>
                        </form>
                        <div className="parent">
                            <button className="round-6" onClick={handleFavourite}><FontAwesomeIcon icon={faStar} size="2xl"/></button>
                            <button className="round-6" onClick={handleDocument}><FontAwesomeIcon icon={faImage} size="2xl"/></button>
                            <button className="round-6" onClick={handleImage}><FontAwesomeIcon icon={faFileImage} size="2xl" /></button>
                            <button className="round-6" onClick={handleVideo}><FontAwesomeIcon icon={faFileVideo} size="2xl"/></button>
                        </div>
                    </div>
                </div>
                
                <ImageCard dataset={dataset}  type="suggested" />
                <TextCard />
                <ImageCard dataset={dataset} type="template"/>
            </div>

        )

    }
    
    }
    
    export default Home