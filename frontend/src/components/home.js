import React from 'react';
import './home.css';
import { useNavigate } from 'react-router';
function Home() {
    let navigate = useNavigate();
    function surveypage()
    {
        navigate("/survey/");

    }
  return (
    <div className='main'>
        <h1>Depression-Diagnosis App</h1>
        <br/>
        <br/>
        <button onClick={surveypage}>Take Quick Survey</button>
    </div>
  )
}

export default Home