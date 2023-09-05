document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const movieList = document.getElementById("movie-list");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // Handle user registration (send data to the server).
        console.log(`Registered with email: ${email}`);
        registrationForm.reset();
    });

    // Simulated movie data
    const movies = [
        { title: "Movie 1", year: 2023 },
        { title: "Movie 2", year: 2022 },
        { title: "Movie 3", year: 2023 },
    ];

    // Display movie listings
    movies.forEach((movie) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${movie.title} (${movie.year})`;
        movieList.appendChild(listItem);
    });
});
