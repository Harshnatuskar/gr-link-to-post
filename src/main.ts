import './style.css'  

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="top-container">
    <input type="url" placeholder="Enter Product URL" spellcheck="false" />
    <div class="gr-button">
      <button class="btn" id="btn1">Submit</button>
      <button class="btn" id="btn2"></button>
      <button class="btn" id="btn3"></button>
    </div>
  </div>
  <div class="post">
    <p id="product-image">image</p>
    <p id="product-name">Product name:</p>
    <p id="product-price">Product price:</p>
    <p id="logo">gumroad svg</p>
  </div>
  <div class="gr-button gr-button-small">
      <button class="btn" id="btn1">D</button>
      <button class="btn" id="btn2"></button>
      <button class="btn" id="btn3"></button>
    </div>
`

