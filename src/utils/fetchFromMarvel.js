//import { MD5 } from "crypto-js";

//I imported MD5 from crypto-js because the Marvel website provided a private API key as well as a public one.
//Comment out the private API key and hash,

//const API_URL = process.env.REACT_APP_BASE_URL;

// const getHash = (ts, privateKey, publicKey) => {
//     return MD5(ts + privateKey + publicKey).toString()
// }

// const fetchHero = async (name) => {
//   let heroUrl = `${API_URL}/v1/public/characters`;

//   let ts = Date.now().toString();
//   let apiKey = process.env.REACT_APP_API_KEY;
//   let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  //let hash = getHash(ts, privateKey, apiKey);
//   let url = `${heroUrl}&apikey=${apiKey}&nameStartsWith=${name}`;

//   try {
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
//         return data;
//   } catch (err) {
//     console.error(err);
//     return;
//   }
// };

// const fetchHeroes = async (id) => {
//     let baseUrl = `${API_URL}/v1/public/characters/${id}`

//     let ts = Date.now().toString();
//     let apiKey = process.env.REACT_APP_API_KEY;
//     let privateKey = process.env.REACT_APP_PRIVATE_KEY;
//     let hash = getHash(ts, privateKey, apiKey);

//     let url =`${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`

//     try {
//         let response = await fetch(url)
//         let data = await response.json()
//         console.log(data.data.results);
//         return data.data.results;
//     } catch (err) {
//         console.error(err)
//         return
//     }
// }



// export {fetchHero}