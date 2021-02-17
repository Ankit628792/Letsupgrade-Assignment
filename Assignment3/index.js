var products = [

    {
        id: 1,
        name: "Apple",
        price: 30,
        category: "Fruits",
        color: "red",
        quantity: 45
},
    {
        id: 2,
        name: "Tomato",
        price: 87,
        category: "Veggies",
        color: "Red & Green",
        quantity: 75
},
    {
        id: 3,
        name: "Ginger",
        price: 16,
        category: "Veggies",
        color: "Brown",
        quantity: 10
},
    {
        id: 4,
        name: "Chicken",
        price: 200,
        category: "Non-veg",
        color: "Brown",
        quantity: 34
},
    {
        id: 5,
        name: "Mango",
        price: 60,
        category: "Fruits",
        color: "Yellow & Green",
        quantity: 25
},

];

function display(array) {
    var rows = "";
    for (var i = 0; i < array.length; i++) {
        name = array[i].name;
        price = array[i].price;
        category = array[i].category;
        color = array[i].color;
        quantity = array[i].quantity;

        rows = rows + `<tr><td>${i+1}</td><td>${name}</td><td>${price}</td><td>${category}</td><td>${color}</td><td>${quantity}</td></tr>`;
    }

    var tbody = document.getElementById("tab-data");

    tbody.innerHTML = rows;

}

display(products);


function searchByName() {
    var searchName = document.getElementById("searchName");
    var searchValue = searchName.value;
    console.log(searchValue);

    var newProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toUpperCase().includes(searchValue.toUpperCase()) === true) {
            newProducts.push(products[i]);
        }
    }

    display(newProducts);
}


function searchByCategory() {
    var searchCategory = document.getElementById("searchCategory");
    var searchValue = searchCategory.value;
    console.log(searchValue);

    var newProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].category.toUpperCase().includes(searchValue.toUpperCase()) === true) {
            newProducts.push(products[i]);
        }
    }

    display(newProducts);
}
