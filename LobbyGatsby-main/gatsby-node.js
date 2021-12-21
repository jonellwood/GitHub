// import { graphql } from 'gatsby-image';
// import path, { resolve } from 'path';
require ('dotenv').config({ path: '.env' });

async function fetchWeatherAndTurnIntoNodes ({
    actions,
    createNodeId,
    createContectDigest,
 }) {
     // fetch list of data points
     const res = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=32.9185&lon=-80.022 &appid=process.env.GATSBY_OPENWEATHER_API');
     const weatherdata = await res.json();
     console.log(weatherdata);
 };


