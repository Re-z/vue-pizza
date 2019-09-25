export default 
    async function getDataFromFirebase(url) {
        let data = await fetch(url);
        let dataJson = await data.json();
        return dataJson;
    }   
