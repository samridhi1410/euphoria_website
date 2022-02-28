const navbar=()=>{
    let nav=document.querySelector('.navbar');
    nav.innerHTML=` <div class="nav">
    <img src="logo1.jpg" class="logo" alt="LOGO" />
    <div class="nav-items">
      <div class="search">
        <input
          type="search"
          class="search-logo"
          placeholder="search your outfit"
        />
        <button class="search-button">search</button>
        <img src="user1.jfif" class="user" alt="User" />
        <img src="cart.png" class="cart" alt="Cart" />
      </div>
    </div>
  </div>
  <ul class="link-container">
      <li class="link-item"> <a href="#"class="link"> Home</a></li>
      <li class="link-item"> <a href="#"class="link"> women</a></li>
      <li class="link-item"> <a href="#"class="link"> men</a></li>
      <li class="link-item"> <a href="#"class="link"> accessories</a></li>
      <li class="link-item"> <a href="#"class="link"> kids</a></li>
    
  </ul>
  <p class="line">.</p>`
};
navbar();
