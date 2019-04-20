const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
    const minQuery = Artist
    .find({})
    .sort({ yearActive: 1 })
    .limit(1)
    .then(artists => artists[0].yearActive);

const maxQuery = Artist
    .find({})
    .sort({ yearActive: -1 })
    .limit(1)
    .then(artists => artists[0].yearActive);

    return Promise.all([minQuery,maxQuery])
    .then((result)=>{
        return {min : result[0],max:result[1]}
    });
};
