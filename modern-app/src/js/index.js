// Api      : 3ed7513fcc57296d84a03723121d36ec
// base url : https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/search/movie?api_key=3ed7513fcc57296d84a03723121d36ec&language=en-US&page=1&include_adult=false

// model- wiew - controller


import Search from './models/Search';
import { elements } from './base';
import * as searchView from './views/searchView';

const state = {};

const searchController = async () => {
    const keyword = elements.searchInput.value;

    if (keyword) {
        state.search = new Search(keyword);     // girilen valueyi state objesinin içerisine aktarma

        await state.search.getResults();
        searchView.clearInput();
        searchView.clearResults();
        searchView.displayResults(state.search.data);
    }else {
        alert('anahtar kelime girmelisiniz.');
    }
}

elements.searchForm.addEventListener('submit',function(e){
        console.log('form submited...')
        searchController();



    e.preventDefault();
});