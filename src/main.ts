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
    <img id="product-image" placeholder="image" src="https://images.unsplash.com/photo-1516663713099-37eb6d60c825?ixid=M3wzMDQ2Njh8MHwxfHNlYXJjaHwxMnx8YmxhY2t8ZW58MHwwfHx8MTcwNjEwMTUwNXww&ixlib=rb-4.0.3&w=1005&fit=crop" alt="Product Image">
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

