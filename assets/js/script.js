//Detect collapsible filters and toggle icons on click
const filters = document.querySelectorAll(".collapse-title");

filters.forEach((elem) => {
    elem.addEventListener('click', toggleIcon);
});

function toggleIcon(elem) {
    const icon = elem.currentTarget.querySelector(".fas");

    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
}

// filter results on sort filter click
let sortFilter = document.querySelector(".sort-filter"); // Get the select
const elements = Array.prototype.slice.call(document.querySelectorAll("div.product"));
const elementsReversed = Array.prototype.slice.call(document.querySelectorAll("div.product")).reverse();

sortFilter.addEventListener("click", sortItems);

function sortItems(event) {

    let sortType = this.value;

    if (sortType === 'reverse') {
        document.getElementById('reverse').innerHTML = '';
        elementsReversed.forEach(function(elem) {
            document.getElementById('reverse').appendChild(elem);
        });
        document.getElementById('original').classList.add('hidden');
        document.getElementById('reverse').classList.remove('hidden');
    } else {
        document.getElementById('original').innerHTML = '';
        elements.forEach(function(elem) {
            document.getElementById('original').appendChild(elem);
        });
        document.getElementById('reverse').classList.add('hidden');
        document.getElementById('original').classList.remove('hidden');
    }

}