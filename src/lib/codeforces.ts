export const fetchCodeforcesStats = async (handle: string) => {
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    const data = await res.json();
    if (data.status !== 'OK') throw new Error('Invalid handle');

    const user = data.result[0];
    return {
        currentRating: user.rating || 0,
        maxRating: user.maxRating || 0,
    };
};


//
// import axios from 'axios';

// export async function fetchCodeforcesUserInfo(handle: string) {
//     try {
//         const response = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
//         // status, result
//         if (response.data === 'OK' && response.data?.length > 0) {
//             const user = response.data[0];
//             return {
//                 // rating, maxRating
//                 currentRating: user || 0,
//                 maxRating: user || 0
//             };
//         }
//         return null;
//     } catch (error) {
//         console.error('Error fetching Codeforces data:', error);
//         return null;
//     }
// }