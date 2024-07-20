class SortData{
    sortIncreasingOrder(dict) {
        let sortedObjects = Object.entries(dict);
        sortedObjects.sort((a, b) => a[1] - b[1]);
        return Object.fromEntries(sortedObjects);
    }
    sortDecreasingOrder(dict) {
        let sortedObjects = Object.entries(dict);
        sortedObjects.sort((a, b) => b[1] - a[1]);
        return Object.fromEntries(sortedObjects);
    }
}

export default new SortData();