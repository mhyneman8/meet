// takes event Array, uses map toe create new array with only locations. Removes all duplicats by creating new array using spread operator and spreading a Set

export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    
    return locations;
};