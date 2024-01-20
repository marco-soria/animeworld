/*navbar*/
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});


function toggleView(view) {
    let signupCard = document.getElementById("signupCard");
    let forgotPasswordContainer = document.getElementById("forgotPasswordContainer");
    let subscribeContainer = document.getElementById("subscribeContainer");
  
    if (view === 'signin') {
      signupCard.querySelector('img').src = "./img/signin/momosignin.jpg";
      forgotPasswordContainer.classList.remove('d-none');
      subscribeContainer.classList.add('d-none');
    } else if (view === 'signup') {
      signupCard.querySelector('img').src = "./img/signin/momosignup.webp";
      forgotPasswordContainer.classList.add('d-none');
      subscribeContainer.classList.remove('d-none');
    }
}
  

/* function toggleView(view) {
  var signupCard = document.getElementById("signupCard");
  var signupForm = document.getElementById("signupForm");
  var forgotPasswordContainer = document.getElementById("forgotPasswordContainer");
  var subscribeContainer = document.getElementById("subscribeContainer");

  if (view === 'signin') {
      signupCard.innerHTML = `
      <div class="card-body formbg">
          <img src="./img/signin/momosignin.jpg" class="img-fluid" alt="Signup Image">
          <form id="signupForm">
              <div class="mb-3 mt-3">
                  <input type="text" class="form-control" placeholder="Email">
              </div>
              <div class="mb-3">
                  <input type="password" class="form-control" placeholder="Password">
              </div>
              <div class="mb-3" id="forgotPasswordContainer">
                  <a href="#" id="forgotPasswordLink" class="lasthover">Forgot your password?</a>
              </div>
              <div class="mb-3 d-flex justify-content-evenly">
                  <button type="button" class="btn btn-secondary signinbutton" onclick="toggleView('signin')">Sign In</button>
                  <button type="button" class="btn btn-secondary signupbutton" onclick="toggleView('signup')">Sign Up</button>
              </div>
          </form>
      </div>
      `;

      subscribeContainer.style.display = 'none';
      forgotPasswordContainer.style.display = 'block';
  } else if (view === 'signup') {
      signupCard.innerHTML = `
      <div class="card-body formbg">
          <img src="./img/signin/momosignup.webp" class="img-fluid" alt="Signup Image">
          <form id="signupForm">
              <div class="mb-3 mt-3">
                  <input type="text" class="form-control" placeholder="Email">
              </div>
              <div class="mb-3">
                  <input type="password" class="form-control" placeholder="Password">
              </div>
              <div class="mb-3" id="subscribeContainer">
                  <input type="checkbox" class="form-check-input" id="subscribeCheckbox">
                  <label class="form-check-label" for="subscribeCheckbox" style="color:lightblue">Subscribe to this website</label>
              </div>
              <div class="mb-3 d-flex justify-content-evenly">
                  <button type="button" class="btn btn-secondary signinbutton" onclick="toggleView('signin')">Sign In</button>
                  <button type="button" class="btn btn-secondary signupbutton" onclick="toggleView('signup')">Sign Up</button>
              </div>
          </form>
      </div>
      `;

      subscribeContainer.style.display = 'block';
      forgotPasswordContainer.style.display = 'none';
  }
}
 */