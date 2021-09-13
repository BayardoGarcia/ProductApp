class Product{
    constructor(name, price, year){
        this.name = name;
        this. price = price;
        this.year = year;
    }
}

class UserInterface{
    addProduct(){

    }
    
    deleteProduct(){

    }

    showMessage(){

    }
}

//Eventos del DOM
document.getElementById("product-form")
    .addEventListener("submit", function(e){
        e.preventDefault();
        console.log(document.getElementById("name").value)
})

/* document.getElementById("name").value;
document.getElementById("price").value;
document.getElementById("year").value; */