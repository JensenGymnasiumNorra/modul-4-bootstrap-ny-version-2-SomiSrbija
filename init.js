function createHeader() {
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="index.html">My Favorites</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Movies
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="movies.html">All movies</a></li>
                <li><a class="dropdown-item" href="#">2000s</a></li>
                <li><a class="dropdown-item" href="#">1900s</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="series.html">Series</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="music.html">Music</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function createFooter() {
    return `
    <div class="container text-center py-3">
      <p class="mb-0">Bootstrap is cool</p>
    </div>
  `;
}

document.querySelector("header").innerHTML = createHeader();
document.querySelector("footer").innerHTML = createFooter();

document.querySelector("footer").classList.add("bg-dark", "text-white", "mt-5");

function toggleMovieInfo(image) {
    const cardBody = image.parentElement.querySelector('.card-body');

    if (cardBody.style.display === 'none') {
        cardBody.style.display = 'block';
    } else {
        cardBody.style.display = 'none';
    }
}