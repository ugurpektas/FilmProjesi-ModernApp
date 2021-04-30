// Api      : 3ed7513fcc57296d84a03723121d36ec
// base url : https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/search/movie?api_key=3ed7513fcc57296d84a03723121d36ec&language=en-US&page=1&include_adult=false

// model- wiew - controller

import Search from './models/Search';

const search = new Search('abc');

console.log(search);
search.getResult();