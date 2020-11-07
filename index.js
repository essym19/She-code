/**
 An array containing a catalogue of items
 */
const catalogue = [{
        "sku" : "01",
        "name": "apple",
        "price": 1200,
        "availability": "available"
    },
    {
        "sku" : "02",
        "name": "pineapple",
        "price": 1300,
        "availability": "available"
    },
    {
        "sku" : "03",
        "name": "orange",
        "price": 1900,
        "availability": "unavailable"
    },
    {
        "sku" : "04",
        "name": "mango",
        "price": 2300,
        "availability": "available"
    },
    {
        "sku" : "05",
        "name": "passion",
        "price": 1500,
        "availability": "unavailable"
    },
    {
        "sku" : "06",
        "name": "strawberry",
        "price": 1800,
        "availability": "available"
    },
    {
        "sku" : "07",
        "name": "blueberry",
        "price": 1000,
        "availability": "available"
    },
    {
        "sku" : "08",
        "name": "lime",
        "price": 1300,
        "availability": "unavailable"
    },
    {
        "sku" : "09",
        "name": "lemon",
        "price": 1300,
        "availability": "available"
    },
    {
        "sku" : "10",
        "name": "pawpaw",
        "price": 2000,
        "availability": "unavailable"
    }

]

/**
 * Creates a new shopping item
 * 
 * @param {String} sku Unique identifier for shopping item
 * @param {String} name The name of the shopping item
 * @param {Number} price The price of the current item
 * @param {Boolean} availability The availability of the current item
 * 
 * @returns {Object} A new item to be added to the catalogue
 */
function createNewItem(sku, name, price, availability) {
    var item={};
    item[0]= catalogue.sku;
    item[1]= catalogue.name;
    item[2]= catalogue.price;
    item[3]=catalogue.availability;
    //object.values
 return catalogue.push(item)
}

/**
 * Toggles the availability of an item
 * 
 * @param {Object} item An item in the catalogue
 * 
 * @returns null
 */
function setAvailability(item) {
  
    //document.querySelectorAll('#item').forEach(function(a){
        //a.classList.toggle("mystyle");
     //})
     
    var elem=document.getElementById('item');
    elem.classList.toggle("mystyle");
   
}

//the availability is either available or unavailable

/**
 * Maps over all the items in the catalogue and stores them in a div
 * 
 * @returns {HTMLDivElement} Catalogue
 */
function App() {   
    var div=document.createElement('div');
    div.id="Availability";
    for (var i=0; i<catalogue.length; i++){
    div.innerHTML +='<div id="item">'+ "Item " + catalogue[i].sku + ": " 
    + catalogue[i].name + "-" +catalogue[i].price  + "  "+ '<button id="button"  onclick=setAvailability(this)>Toggle Button</button>'+
     '<br> <br>';
    }   
    
    return div;    
}
 


// Your code goes here, all the best ;)
//createNewItem("11", "n", 122, "q");

const rootElement = document.getElementById('app');
rootElement.appendChild(App());