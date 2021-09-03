
var elements =  Array.prototype.slice.call(document.querySelectorAll("div.product"));
var elementsReversed =  Array.prototype.slice.call(document.querySelectorAll("div.product")).reverse();

function sortItems(event){
    let sortType = event.target.getAttribute('data-sort');
    if (sortType==='reverse'){
        document.getElementById('reverse').innerHTML = '';
        elementsReversed.forEach(function(elem) {
            document.getElementById('reverse').appendChild(elem);
        });
        document.getElementById('original').classList.add('hidden');
        document.getElementById('reverse').classList.remove('hidden');
    }
    else{
        document.getElementById('original').innerHTML = '';
        elements.forEach(function(elem) {
            document.getElementById('original').appendChild(elem);
        });
        document.getElementById('reverse').classList.add('hidden');
        document.getElementById('original').classList.remove('hidden');
    }

    console.log('Sorting...' + event.target.getAttribute('data-sort'));
}

let sortArray = document.querySelectorAll("a.dropdown-item");

sortArray.forEach(function(elem) {
    elem.addEventListener("click", sortItems);
});