import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faImage,faFileImage,faFileVideo} from '@fortawesome/free-regular-svg-icons'
import {stockData}  from '../../data.js'
import React, { useEffect, useState } from 'react'
import { Navigate } from "react-router-dom"
import ImageCard from '../Cards/ImageCard/ImageCard'
import TextCard from '../Cards/TextCard/TextCard'
import './Home.css'

function Home() {
    const [authenticated, setauthenticated] = useState(null);
    const[dataset,setDataset]=useState([]);
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);
    
    const myFav=()=>{
        setDataset(...dataset,stockData[0].fav)
    };
 

    if (authenticated==false||authenticated=='') {
        return <Navigate replace to="/signin" />;
        
    } else {
        return (
            <>
                <div>
                    <div className='wrap'>
                        <form>
                            <input type="text" placeholder="Search..." />
                            <button type="submit">Search</button>
                        </form>
                        <div className="parent">
                            <button className="round-6" onClick={myFav}><FontAwesomeIcon icon={faStar} size="2xl"/></button>
                            <button className="round-6"><FontAwesomeIcon icon={faImage} size="2xl"/></button>
                            <button className="round-6"><FontAwesomeIcon icon={faFileImage} size="2xl" /></button>
                            <button className="round-6"><FontAwesomeIcon icon={faFileVideo} size="2xl"/></button>
                        </div>
                    </div>
                </div>
                
                <ImageCard dataset={dataset} />
                <TextCard />
                {/* <ImageCard/> */}
            </>

        )

    }
    
    }
    
    export default Home