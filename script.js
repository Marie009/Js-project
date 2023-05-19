// Масив з продуктами (телефонами)
const products = [
    {
      title: 'iPhone 12',
      image: 'iphone12.jpg',
      price: 999
    },
    {
      title: 'Samsung Galaxy S21',
      image: 'galaxys21.jpg',
      price: 899
    },
    {
      title: 'Google Pixel 5',
      image: 'pixel5.jpg',
      price: 699
    }
   ];
   
   // Функція для відображення продуктів на сторінці
   function displayProducts() {
    const container = document.getElementById('products-container');
   
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
   
      const image = document.createElement('img');
      image.src = product.image;
      productDiv.appendChild(image);
   
      const title = document.createElement('h2');
      title.className = 'product-title';
      title.textContent = product.title;
      productDiv.appendChild(title);
   
      const price = document.createElement('p');
      price.className = 'product-price';
      price.textContent = '$' + product.price;
      productDiv.appendChild(price);
   
      container.appendChild(productDiv);
    });
   }
   
   // Виклик функції для відображення продуктів
   displayProducts();
   
   