class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');

        const element = document.createElement('div');

        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                        <strong class="card-title">Product Name</strong>: ${product.name}
                    <div class="card-text">
                        <p>Product Price: ${product.price}</p>
                    </div>
                    <div class="card-text">
                        <p>Product Year: ${product.year}</p>
                    </div>
                </div>
            </div>
        `;

        productList.appendChild(element);
        this.resetForm();
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct() {

    }

    showMessage() {

    }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, year);

        const ui = new UI();
        // Method
        ui.addProduct(product);

        e.preventDefault();
})