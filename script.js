// ========================================
// FOODIEHUB - WORLD FOOD BLOGS
// ========================================

const defaultBlogs = [

    {
        id: 1,
        title: "Hyderabadi Chicken Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c",
        category: "Indian",
        description: "Aromatic basmati rice cooked with chicken, saffron and traditional Indian spices."
    },

    {
        id: 2,
        title: "Margherita Pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
        category: "Italian",
        description: "Classic Italian pizza with tomato sauce, mozzarella cheese and fresh basil."
    },

    {
        id: 3,
        title: "Chinese Dumplings",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c",
        category: "Chinese",
        description: "Soft dumplings filled with vegetables and delicious Chinese flavours."
    },

    {
        id: 4,
        title: "Japanese Sushi",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
        category: "Japanese",
        description: "Fresh Japanese sushi prepared with rice, vegetables and seafood."
    },

    {
        id: 5,
        title: "Korean Bibimbap",
        image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7",
        category: "Korean",
        description: "A colourful Korean rice bowl with vegetables, egg and spicy sauce."
    },

    {
        id: 6,
        title: "Mexican Tacos",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
        category: "Mexican",
        description: "Crispy tacos filled with vegetables, meat and delicious Mexican flavours."
    },

    {
        id: 7,
        title: "Thai Pad Thai",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
        category: "Thai",
        description: "Popular Thai noodles cooked with vegetables, peanuts and tasty sauce."
    },

    {
        id: 8,
        title: "American Classic Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        category: "American",
        description: "Juicy burger with cheese, fresh vegetables and a soft toasted bun."
    },

    {
        id: 9,
        title: "French Croissant",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
        category: "French",
        description: "Buttery and crispy French croissant perfect for breakfast."
    },

    {
        id: 10,
        title: "Arabic Falafel",
        image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb5",
        category: "Arabic",
        description: "Crispy falafel made from chickpeas and served with fresh vegetables."
    },

    {
        id: 11,
        title: "Spanish Paella",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
        category: "Spanish",
        description: "Traditional Spanish rice dish prepared with vegetables and seafood."
    },

    {
        id: 12,
        title: "Turkish Kebab",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
        category: "Turkish",
        description: "Grilled Turkish kebab with aromatic spices and fresh vegetables."
    },

    {
        id: 13,
        title: "Greek Salad",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
        category: "Greek",
        description: "Fresh Greek salad with tomatoes, cucumber, olives and cheese."
    },

    {
        id: 14,
        title: "Chocolate Cake",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        category: "Dessert",
        description: "Rich and soft chocolate cake perfect for every sweet lover."
    },

    {
        id: 15,
        title: "Strawberry Dessert",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
        category: "Dessert",
        description: "Sweet and creamy strawberry dessert with fresh strawberries."
    },

    {
        id: 16,
        title: "Fresh Fruit Juice",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
        category: "Drinks",
        description: "Refreshing fresh fruit juice prepared with natural ingredients."
    },

    {
        id: 17,
        title: "Grilled Seafood",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
        category: "Seafood",
        description: "Delicious grilled seafood prepared with herbs and fresh ingredients."
    },

    {
        id: 18,
        title: "Healthy Vegetable Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        category: "Vegetarian",
        description: "Healthy vegetarian bowl packed with fresh vegetables and nutrients."
    }

];


// ========================================
// LOAD BLOGS
// ========================================

// New storage key prevents old Pizza/Biryani data
// from causing category problems.
let blogs = JSON.parse(
    localStorage.getItem("foodieBlogsV2")
) || defaultBlogs;


// ========================================
// BLOG CONTAINER
// ========================================

const container = document.getElementById("blogs");


// ========================================
// DISPLAY BLOGS
// ========================================

function displayBlogs(list) {

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div class="no-results">
                <h3>😔 No food found</h3>
                <p>Try another food name or category.</p>
            </div>
        `;

        return;
    }


    list.forEach(function(blog) {

        container.innerHTML += `

            <div class="card">

                <img 
                    src="${blog.image}" 
                    alt="${blog.title}"
                >

                <div class="card-content">

                    <small>${blog.category}</small>

                    <h3>${blog.title}</h3>

                    <p>
                        ${blog.description}
                    </p>

                    <button
                        onclick="deleteBlog(${blog.id})"
                    >
                        Delete
                    </button>

                </div>

            </div>

        `;

    });

}


// ========================================
// CATEGORY FILTER
// ========================================

function filter(category) {

    if (category === "All") {

        displayBlogs(blogs);

        return;
    }


    const filteredBlogs = blogs.filter(function(blog) {

        return blog.category === category;

    });


    displayBlogs(filteredBlogs);

}


// ========================================
// SEARCH FOOD
// ========================================

document
    .getElementById("search")
    .addEventListener("input", function() {

        const value = this.value
            .toLowerCase()
            .trim();


        const results = blogs.filter(function(blog) {

            return (

                blog.title
                    .toLowerCase()
                    .includes(value)

                ||

                blog.category
                    .toLowerCase()
                    .includes(value)

                ||

                blog.description
                    .toLowerCase()
                    .includes(value)

            );

        });


        displayBlogs(results);

    });


// ========================================
// ADD NEW BLOG
// ========================================

document
    .getElementById("form")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const newBlog = {

            id: Date.now(),

            title: document
                .getElementById("title")
                .value
                .trim(),

            image: document
                .getElementById("image")
                .value
                .trim(),

            category: document
                .getElementById("category")
                .value,

            description: document
                .getElementById("description")
                .value
                .trim()

        };


        blogs.push(newBlog);


        localStorage.setItem(
            "foodieBlogsV2",
            JSON.stringify(blogs)
        );


        displayBlogs(blogs);


        this.reset();


        alert(
            "Your food blog has been published! 🍕"
        );


        location.href = "#recipes";

    });


// ========================================
// DELETE BLOG
// ========================================

function deleteBlog(id) {

    blogs = blogs.filter(function(blog) {

        return blog.id !== id;

    });


    localStorage.setItem(
        "foodieBlogsV2",
        JSON.stringify(blogs)
    );


    displayBlogs(blogs);

}


// ========================================
// SHOW BLOGS WHEN PAGE OPENS
// ========================================

displayBlogs(blogs);