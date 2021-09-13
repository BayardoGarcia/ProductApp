class Product{
    constructor(name, price, year){
        this.name = name;
        this. price = price;
        this.year = year;
    }
}

class UserInterface{
    addProduct(product){
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        /* Insertar elementos en el DOM mediante el innerHTML y las tildes(`) de JavaScript */
        element.innerHTML = `
        <div class="card mb-3">
            <div class="card-body">
                <strong>Product</strong>: ${product.name} -
                <strong>Price</strong>: ${product.price} - 
                <strong>Year</strong>: ${product.year}
            </div>
            <div class="card-body pt-0">
                 <a href="#" class="btn btn-secondary" id="delete">Eliminar</a>
            </div>
        </div>
        `;
        productList.appendChild(element);
    }

    resetForm(){
        document.getElementById("product-form").reset();
    }
    
    deleteProduct(element){
        if(element.id === "delete"){
            element.parentElement.parentElement.parentElement.remove();
        }
    }
}

//Eventos del DOM
document.getElementById("product-form").addEventListener("submit", getProduct);
document.getElementById("product-list").addEventListener("click", deleteProduct );

function getProduct(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value; 

    const product = (new Product(name, price, year));

    const ui = new UserInterface();
    ui.addProduct(product);
    ui.resetForm();
}


function deleteProduct(e){
    const ui = new UserInterface();
    ui.deleteProduct(e.target);
}