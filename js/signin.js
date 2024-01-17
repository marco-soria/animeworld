/*navbar*/
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

function toggleView(view) {
  var signupCard = document.getElementById("signupCard");
  var signupForm = document.getElementById("signupForm");
  var forgotPasswordContainer = document.getElementById("forgotPasswordContainer");
  var subscribeContainer = document.getElementById("subscribeContainer");

  if (view === 'signin') {
      signupCard.innerHTML = `
      <div class="card-body">
          <img src="./img/signin/momosignin.jpg" class="img-fluid" alt="Signup Image">
          <form id="signupForm">
              <div class="mb-3 mt-3">
                  <input type="text" class="form-control" placeholder="Email">
              </div>
              <div class="mb-3">
                  <input type="password" class="form-control" placeholder="Password">
              </div>
              <div class="mb-3" id="forgotPasswordContainer">
                  <a href="#" id="forgotPasswordLink">Forgot your password?</a>
              </div>
              <div class="mb-3 d-flex justify-content-center">
                  <button type="button" class="btn btn-primary me-5" onclick="toggleView('signin')">Sign In</button>
                  <button type="button" class="btn btn-secondary ms-5" onclick="toggleView('signup')">Sign Up</button>
              </div>
          </form>
      </div>
      `;

      subscribeContainer.style.display = 'none';
      forgotPasswordContainer.style.display = 'block';
  } else if (view === 'signup') {
      signupCard.innerHTML = `
      <div class="card-body">
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
                  <label class="form-check-label" for="subscribeCheckbox">Subscribe to this website</label>
              </div>
              <div class="mb-3 d-flex justify-content-center">
                  <button type="button" class="btn btn-primary me-5" onclick="toggleView('signin')">Sign In</button>
                  <button type="button" class="btn btn-secondary ms-5" onclick="toggleView('signup')">Sign Up</button>
              </div>
          </form>
      </div>
      `;

      subscribeContainer.style.display = 'block';
      forgotPasswordContainer.style.display = 'none';
  }
}
