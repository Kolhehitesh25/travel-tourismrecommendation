// import axios from "axios";

// export const getPlacesData = async (type, sw, ne) => {
//     try {
//         const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
//             params: {
//                 bl_latitude: sw.lat,
//                 tr_latitude: ne.lat,
//                 bl_longitude: sw.lng,
//                 tr_longitude: ne.lng,
//             },
//             headers: {
//                 'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//                 'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY
//             }
//         });
//         return data?.filter((place) => (place.name && place.num_reviews > 0));
//     }
//     catch (error) {
//         console.error(error);
//     }
// };

// export const getWeatherData = async (lat, lng) => {
//     try {
//         const { data } = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather`, {
//             params: {
//                 lat: lat,
//                 lon: lng
//             },
//             headers: {
//                 'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//                 'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY
//             }
//         });
//         return data;
//     }
//     catch (error) {
//         console.error(error);
//     }
// };
// import axios from "axios";


// export const getPlacesData = async (type, sw, ne) => {
//     try {
//         // const { data } = await axios.get(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete`, {
            
//         const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

//             params: {
//                 bl_latitude: sw.lat,
//                 tr_latitude: ne.lat,
//                 bl_longitude: sw.lng,
//                 tr_longitude: ne.lng,
//             },
//             headers: {
//                 'x-rapidapi-key': 'dc689888eamsh70b2462bd99d738p1ede89jsnf70b01244bd5',
//                 'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//               
//             }
//         });

//         return data?.data?.filter((place) => (place.name && place.num_reviews > 0));
//     } catch (error) {
//         console.error('Error fetching places data:', error.response?.status);
//         throw error; // Rethrow the error for the calling code to handle
//     }
// };


// export const getWeatherData = async (lat, lng) => {
//     try {
//         // const response = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather`, {
//             const { response} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
//             params: {
//                 lat: lat,
//                 lon: lng
//             },
//             headers: {
//                 'x-rapidapi-key': 'dc689888eamsh70b2462bd99d738p1ede89jsnf70b01244bd5',
//                 'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//               },
//         });

//         if (response.data) {
//             return response.data;
//         } else {
//             throw new Error('Invalid response format');
//         }
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         throw error; // Rethrow the error for the calling code to handle
//     }
// };



import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': 'dc689888eamsh70b2462bd99d738p1ede89jsnf70b01244bd5',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    // console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': 'dc689888eamsh70b2462bd99d738p1ede89jsnf70b01244bd5',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};