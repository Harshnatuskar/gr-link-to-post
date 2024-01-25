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
`

