// import axios from 'axios';

// //variable
// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


// export const getPlacesData = async (sw, ne) => {
//     try {
//         const { data: { data } } = await axios.get(URL, {
//             params: {
//               bl_latitude: sw.lat,
//               tr_latitude: ne.lat,
//               bl_longitude: sw.lng,
//               tr_longitude: ne.lng,      
//             },
//             headers: {
//               'x-rapidapi-key': '0b13bd2c7amsh6232171dae2c88fp14ee7ajsn88af8f340890',
//               'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//             }
//           });
//         //request
//         return data;
//     } catch (error) {
//         console.log(error)       
//     }
// }





import React from "react";
import ReactDOM from "react-dom";

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));