document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");
    const recipeCards = document.querySelectorAll(".recipe-card");

    // Predefined list of recipes
    const recipes = [
        { name: "chocolate chip cookies", link: "/pages/recipe-pages/chocolate-chip-cookies.html" },
        { name: "chocolate cake", link: "/pages/recipe-pages/chocolate-cake.html" },
        { name: "margherita pizza", link: "/pages/recipe-pages/margherita-pizza.html" },
        { name: "fried rice", link: "/pages/recipe-pages/fried-rice.html" },
        { name: "homemade ramen", link: "/pages/recipe-pages/ramen.html" },
        { name: "fried chicken", link: "/pages/recipe-pages/fried-chicken.html" },
        { name: "bubble tea", link: "/pages/recipe-pages/bubble-tea.html" },
        { name: "apple pie", link: "/pages/recipe-pages/apple-pie.html" },
        { name: "spaghetti carbonara", link: "/pages/recipe-pages/spaghetti-carbonara.html" },
        { name: "vegetable salad", link: "/pages/recipe-pages/vegetable-salad.html" },
        { name: "pancakes", link: "/pages/recipe-pages/pancakes.html" }
    ];

    // Extract additional recipes from recipe cards on the page
    recipeCards.forEach(recipe => {
        const name = recipe.querySelector("h3").innerText.toLowerCase();
        const link = recipe.querySelector("a").getAttribute("href");

        // Check for duplicates before adding
        if (!recipes.some(r => r.name === name)) {
            recipes.push({ name, link });
        }
    });

    // Function to perform search
    function searchRecipe() {
        const query = searchBar.value.toLowerCase();
        const foundRecipe = recipes.find(recipe => recipe.name.includes(query));

        if (foundRecipe) {
            window.location.href = foundRecipe.link; // Navigate to the recipe page
        } else {
            alert("Recipe Not Found. Please try another search.");
        }
    }

    // Trigger search when pressing Enter
    searchBar.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchRecipe();
        }
    });

    // Trigger search when clicking the button
    searchButton.addEventListener("click", function () {
        searchRecipe();
    });
});
