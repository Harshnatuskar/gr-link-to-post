import './style.css'  

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="top-container">
    <input type="url" placeholder="Enter Product URL" spellcheck="false" />
    <a href="https://gumroad.com" target="_blank">
      <button class="btn" id="btn1">Submit</button>
      <button class="btn" id="btn2"></button>
      <button class="btn" id="btn3"></button>
    </a>
  </div>
`

