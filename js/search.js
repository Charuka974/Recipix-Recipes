// document.addEventListener("DOMContentLoaded", function () {
//     const searchBar = document.getElementById("search-bar");
//     const searchButton = document.getElementById("search-button");
//     const recipeCards = document.querySelectorAll(".search-item-card");

//     // Function to filter recipe cards based on search input
//     function filterRecipes() {
//         const query = searchBar.value.toLowerCase();

//         recipeCards.forEach(card => {
//             const recipeName = card.querySelector("span").innerText.toLowerCase();

//             if (recipeName.includes(query)) {
//                 card.style.display = "block"; // Show matching recipes
//             } else {
//                 card.style.display = "none"; // Hide non-matching recipes
//             }
//         });
//     }

//     // Initially hide all recipe cards
//     recipeCards.forEach(card => card.style.display = "none");

//     // Trigger search when typing in the search bar
//     searchBar.addEventListener("input", filterRecipes);

//     // Trigger search when clicking the search button
//     searchButton.addEventListener("click", filterRecipes);

//     // Trigger search when pressing Enter
//     searchBar.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             event.preventDefault();
//             filterRecipes();
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");
    const recipeCards = document.querySelectorAll(".search-item-card");

    // Function to filter recipe cards based on search input
    function filterRecipes() {
        const query = searchBar.value.trim().toLowerCase();

        if (query === "") {
            // Hide all recipe cards when search bar is empty
            recipeCards.forEach(card => card.style.display = "none");
        } else {
            recipeCards.forEach(card => {
                const recipeName = card.querySelector("span").innerText.toLowerCase();

                if (recipeName.includes(query)) {
                    card.style.display = "block"; // Show matching recipes
                } else {
                    card.style.display = "none"; // Hide non-matching recipes
                }
            });
        }
    }

    // Initially hide all recipe cards
    recipeCards.forEach(card => card.style.display = "none");

    // Trigger search when typing in the search bar
    searchBar.addEventListener("input", filterRecipes);

    // Trigger search when clicking the search button
    searchButton.addEventListener("click", filterRecipes);

    // Trigger search when pressing Enter
    searchBar.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            filterRecipes();
        }
    });
});
