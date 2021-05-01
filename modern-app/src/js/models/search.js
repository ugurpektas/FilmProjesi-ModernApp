export default class Search {
    constructor (keyword){
        this.keyword = keyword;
    }

    async  getResults(){
        const api_key = "3ed7513fcc57296d84a03723121d36ec";
        const base_url = "https://api.themoviedb.org/3";
    
        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
        this.data = await response.json();    
    } 
}