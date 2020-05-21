const FoodMenu = [
  {
    id: 1,
    category: "starter",
    items: [
      {
        id: 1,
        name: "Tacos with Lime",
        cuisine: "Mexican",
        imageUrl:
          "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "taco-lime",
        price: 250,
        rating: 4.3
      },
      {
        id: 2,
        name: "Drums of Heaven",
        cuisine: "Chinese",
        imageUrl:
          "https://b.zmtcdn.com/data/dish_photos/c30/7dd9a6f8c893dbbf42fe6fc8d15d3c30.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        alt: "drum-of-heaven",
        price: 410,
        rating: 4.7
      },
      {
        id: 3,
        name: "Fruit Salad",
        cuisine: "Mexican",
        imageUrl:
          "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "fruit-salad",
        price: 250,
        rating: 3.5
      },
      {
        id: 4,
        name: "Pasta",
        cuisine: "Chinese",
        imageUrl:
          "https://images.unsplash.com/photo-1579349443343-73da56a71a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "pasta",
        price: 410,
        rating: 4.2
      },
      {
        id: 5,
        name: "Brown Bread",
        cuisine: "Mexican",
        imageUrl:
          "https://images.unsplash.com/photo-1580302499247-b933c03eaca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "brown-bread",
        price: 250,
        rating: 3.9
      },
      {
        id: 6,
        name: "Chicken Majestic",
        cuisine: "Chinese",
        imageUrl: "https://i.ytimg.com/vi/EpR4Ie0DR3I/maxresdefault.jpg",
        alt: "chicken majestic",
        price: 410,
        rating: 4.9
      },
      {
        id: 7,
        name: "Chicken Lollypop",
        cuisine: "Mexican",
        imageUrl:
          "https://i.pinimg.com/236x/ae/0e/61/ae0e6110c8bf5bdac0ab42ea1a9bf9f5--veg-recipes-indian-recipes.jpg",
        alt: "chicken-lolipop",
        price: 250,
        rating: 4.2
      },
      {
        id: 8,
        name: "Chicken Kabab",
        cuisine: "Chinese",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJcta_GTZrGPdTY9PpJAglWuiJsGdtr7cf_KVIg5RmVqZq6bxQ",
        alt: "chicken kebab",
        price: 210,
        rating: 2.6
      },
      {
        id: 9,
        name: "Deep Crispy Fish",
        cuisine: "Mexican",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaOXDfhQt9z0sixb9nyElKxeKdPfWS4uCHT0Izmo1Iduk4AZ-2",
        alt: "deep-fried-fish",
        price: 250,
        rating: 4.3
      },
      {
        id: 10,
        name: "Veg Kabab",
        cuisine: "Chinese",
        imageUrl:
          "https://i.pinimg.com/236x/68/2d/4e/682d4ef46af5cc911471fff0d5ca713c--indian-food-menu-indian-foods.jpg",
        alt: "chicken drum",
        price: 275,
        rating: 2.9
      }
    ]
  },
  {
    id: 2,
    category: "main course",
    items: [
      {
        id: 11,
        name: " Fried Chicken Chilly",
        cuisine: "Asian",
        imageUrl:
          "https://b.zmtcdn.com/data/dish_photos/e4d/f75b91054084ff103fefd5d0950a1e4d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        alt: "chicken chilly",
        price: 550,
        rating: 4.4
      },
      {
        id: 12,
        name: "Stir Fried Fish",
        cuisine: "Asian",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560__340.jpg",
        alt: "stir fried chicken",
        price: 485,
        rating: 4.8
      },
      {
        id: 13,
        name: "Chicken curry",
        cuisine: "Asian",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/06/27/20/24/goulash-3502510__340.jpg",
        alt: "chicken urry",
        price: 485,
        rating: 4.7,
        category: "Maincourse"
      },
      {
        id: 14,
        name: "Cheese potato",
        cuisine: "Asian",
        count: 1,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/11/06/23/24/broccoli-1804446__340.jpg",
        alt: "chicken chilly",
        price: 485,
        rating: 4.7,
        category: "Maincourse"
      },
      {
        id: 15,
        name: "Meat curry",
        cuisine: "Asian",
        count: 1,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/10/20/17/45/goulash-2872112__340.jpg",
        alt: "chicken chilly",
        price: 485,
        rating: 4.7,
        category: "Maincourse"
      },
      {
        id: 16,
        name: "Veg Noodles",
        cuisine: "Asian",
        count: 1,
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/07/23/18/55/noodles-3557592__340.jpg",
        alt: "chicken chilly",
        price: 485,
        rating: 4.7,
        category: "Maincourse"
      },
      {
        id: 17,
        name: "Potato curry",
        cuisine: "Asian",
        count: 1,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/02/14/22/10/stew-2067152__340.jpg",
        alt: "chicken chilly",
        price: 485,
        rating: 4.7,
        category: "Maincourse"
      },
      {
        id: 18,
        name: "Veg mix",
        cuisine: "Asian",
        count: 1,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6TP8pDIE-8kKB8e_UR54shY8rWXflBSJDnrJatJSsTR0nWtjR",
        alt: "chicken chilly",
        price: 485,
        rating: 4.7,
        category: "Maincourse"
      },
      {
        id: 19,
        name: "Soya curry",
        cuisine: "Asian",
        count: 1,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7I0OST0dpdviZD5T3Y3tW0NTBXOqmZSRSLZiTGmd_6wcGgR_2",
        alt: "chicken chilly",
        price: 485,
        rating: 4.7,
        category: "Maincourse"
      },
      {
        id: 20,
        name: "Veg cheshew fry",
        cuisine: "Asian",
        count: 1,
        imageUrl:
          "https://www.tasteofhome.com/wp-content/uploads/0001/01/Veggie-Cashew-Stir-Fry_EXPS_THFM19_133126_E09_28_7b.jpg",
        alt: "chicken chilly",
        price: 485,
        rating: 4.7,
        category: "Maincourse"
      }
    ]
  },
  {
    id: 3,
    category: "desserts",
    items: [
      {
        id: 21,
        name: "DBC Sundae",
        count: 1,
        imageUrl:
          "https://b.zmtcdn.com/data/dish_photos/d03/bdd41b05d51de36c3e7dae11fd776d03.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      },
      {
        id: 22,
        name: "White ice cream",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      },
      {
        id: 23,
        name: "Oreo Cookie",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      },
      {
        id: 24,
        name: "Doughnut Toppings",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60A",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      },
      {
        id: 25,
        name: "Ice cream with strawberries",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1543255006-d6395b6f1171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      },
      {
        id: 26,
        name: "baked cupcake",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      },
      {
        id: 27,
        name: "Death By Chocolate Sundae",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      },
      {
        id: 28,
        name: "sandwich with strawberry",
        count: 1,
        imageUrl:
          "https://b.zmtcdn.com/data/dish_photos/d03/bdd41b05d51de36c3e7dae11fd776d03.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      },
      {
        id: 29,
        name: "baked cookies",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      },
      {
        id: 30,
        name: "purple ice pops",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Dessert"
      }
    ]
  },
  {
    id: 4,
    category: "drinks",
    items: [
      {
        id: 31,
        name: "Orange juice",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      },
      {
        id: 32,
        name: "Lime water",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      },
      {
        id: 33,
        name: "Pomegranate juice",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1549127554-0cf3baf6e45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      },
      {
        id: 34,
        name: "Green lime",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/flagged/photo-1557753478-b9fb74f39eb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      },
      {
        id: 35,
        name: "Mango juice",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      },
      {
        id: 36,
        name: "Strawberry juice",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1507120366498-4656eaece7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      },
      {
        id: 37,
        name: "citrus juice",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1548148210-bdd9aa423ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      },
      {
        id: 38,
        name: "Oreo shake",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1549349455-f0c97ecf5552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      },
      {
        id: 39,
        name: "chocolate cookie frappe",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      },
      {
        id: 40,
        name: "Cold milk tea",
        count: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1575080424619-0f203e09e6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "DBC",
        price: 198,
        rating: 3.6,
        category: "Drinks"
      }
    ]
  }
];

export default FoodMenu;
