let productList = []
const getProducts = async () => {
    const data = await axios ({
        method:'GET',
        url: 'https://63f0c2155b7cf4107e264157.mockapi.io/JSI16-Products'
    });
    productList = [... data.data ]
    return data.data;
}

getProducts ().then((results)=>{
   console.log (results.data)
})

let addToCart = (id) =>{
    console.log('Xin Chào', id)
}

// để từ id của sự kiện click hãy tìm ra sản phẩm{} tương ứng với id đó trong productList
//hint : filter=>find
//console.log(thong tin sản pham tu id)

const renderProductList = () => {
    const htmlString = productList.reduce((accHTML,product) => {
        return accHTML + `
        <div id="product_list" class="d-flex flex-wrap container">
        <div class="product card shadow-sm " >
            <img src='${product.img}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.salePrice}$</a>
              <button class = "btn-primary" onclick"addToCart(${product.id})>+</button>
            </div>
          </div>
        `
    },`` )
    document.getElementById('product_list').innerHTML = htmlString
}
getProducts().then((results) => {
    console.log(results);
    renderProductList ()
}) 
const object = productList.find(x => x.id === 10);
console.log(object)