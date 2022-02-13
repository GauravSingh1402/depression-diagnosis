import React from 'react'
import {Typography} from '@mui/material'
import './Selfhelp.css'
export default function Selfhelp() {
    const qoutes=["Nothing is impossible. The word itself says \'I\'m possible!","The bad news is time flies. The good news is you\re the pilot.","Spread love everywhere you go","It is during our darkest moments that we must focus to see the light","Try to be a rainbow in someone\'s cloud","Nobody built like you, you design yourself","Out of the mountain of despair, a stone of hope","You are never too old to set another goal or to dream a new dream.","Embrace the glorious mess that you are.","Never bend your head. Always hold it high. Look the world straight in the eye"]
     console.log(qoutes.length)
  return (
   
    <div className="container">
            <h1 className="title">SELF-HELP</h1>
            <ul type="none">
                <li className="litem">Share your problems with family or close friends</li>
                <li className="litem">Start practicing meditation and yoga</li>
                <li className="litem">Eat to  your hearts content</li>
                <li className="litem">Explore new hobbies</li>
                <li className="litem">Go for walks regularly as it is relaxing</li>
                <li className="litem">Start loving yourself </li>
                <li className="litem">Do not try to overthink matters and DO NOT DOUBT YOURSELF</li>
                <li className="litem">Buy or Adopt a pet as they can show u the love u may be searching for</li>
                <li className="litem">Look at old photos from trips or happy memories</li>
            </ul>
        s
    </div>
  )
}
