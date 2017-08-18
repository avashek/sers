const searchQuery = function(value){
    fetch('https://api.cdnjs.com/libraries?search='+value)
        .then(res => res.json())
        .then(json => {return json;});
}

export default searchQuery;