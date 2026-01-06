var mycards=[
    {
        "image":"http://127.0.0.1:5500/Javascript/cards.html",
        "price":1200,
        "brand":"flipkart"
    },
    {
        "image":"http://127.0.0.1:5500/Javascript/cards.html",
        "price":1200,
        "brand":"flipkart"
    }
]

var cards=mycards.map((ele)=>{
    return (`<div class="card">
      <div class="image-section">
        <img src=${ele.image} alt="">
      </div>
      <div class="info-section">
        <div class="price">Price:${ele.price}</div>
        <div class="brand">Brand:${ele.brand} </div>
      </div>`)
})
