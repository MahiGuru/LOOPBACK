var assert = require('assert');
var async = require('async');
var _ = require("lodash");

module.exports = function(app) {
    var mongoDs = app.dataSources.DBMongo;
    var customerModel = app.models.Customer;
    var venuesModel = app.models.Venues;
    var restaurantModel = app.models.Restaurants;
    var sectionsModel = app.models.Sections;
    var categoryModel = app.models.Categories;
    var itemModel = app.models.Items;
    var ratingModel = app.models.Ratings;
    var imgModel = app.models.Images;
    var myItemsModel = app.models.MyItems;


    //Hotel Names
    var RestNames = ["Bluefox", "Paradise", "Green Bawarchi", "Cafe Bahar", "BBQ nation", "ABS"];
    //Sections
    var sectionsArr = ["STARTERS", "SOUPS", "SALADS", "MAIN COURSE", "DESERTS"];
    //SECTION CODE
    var sectionCode = ["STARTER", "SOUP", "SALAD", "MAIN", "DESERT"];
    //Prefernces
    var hotPrefernces = ["Spicy", "Less", "With"];


    //category
    var categoryArr = ["Veg", "NonVeg", "Eggiterian"];
    //CategoryCODE
    var categoryCode = ["VEG", "NONVEG", "EGGIE"];

    //VEG STARTER Items
    var vegStarterItems = ["Veg manchurian", "Gobi 65", "Aloo Smash", "Veg 65", "Pinapple Fry"];
    //NON VEG STARTER Items
    var nonvegStarterItems = ["Chicken 65", "chicken 95", "Chicken drumsticks", "Chicken lollipop", "Thandoori Chicken", "Roasted Chicken"];
    //VEG SOUPS Items
    var vegSoupsItems = ["Hot n Sour Veg", "Crispy Corn Soup", "Sweet corn Soup", "Aloo Soup"];
    //NON-VEG SOUPS Items
    var nonvegSoupsItems = ["Hot n Sour Chicken", "Chicken Soup", "Sweet Mix Soup", "Mutton Hot n Sour Soup"];
    //VEG SALAD Items
    var vegSaladsItems = ["Fresh Broccoli Salad", "Cucumber-Carrot Salad", "Lemon Pea Salad"];
    //NON-VEG SALAD Items
    var nonvegSaladItems = ["Asian Sesame Chicken Salad", "Pasta Salad with Asparagus Dressing", "Breakfast Salad", "Roast Chicken, Potato Mash and Black Tomato Salad"];
    //VEG Main Course 
    var vegMainCourseItems = ["Bisi bele bath", "Biryani", "Mashroom Biryani", "Paneer Masala", "Allo Curry", "Mashroom Masala"]
        //NON-VEG Main Course 
    var nonvegMainCourseItems = ["Chicken Biryani", "Fish Masala", "Pot Biryani", "Mutton Fry", "Kadai Chicken", "Spicy Gongura Chicken"]
        //DESERTS 
    var desertItems = ["Strawberry Ice cream", "Mixed Icecream", "Pan Ice Cream", "Kulfi", "Kheer Sweet", "Double ka Meeta"];


    // create all models 
    async.series([
        function(callback) {
            //clearing the exxisting collection..

            customerModel.remove();
            customerModel.create([
                { "id": "cust_01", "firstname": "Mahipal", "lastName": "Gurjala", "mobileNo": 9441076540, "email": "mahi6535@gmail.com", "password": "mahi6535" },
                { "id": "cust_02", "firstname": "Lucky", "lastName": "Gurjala", "mobileNo": 9441076540, "email": "lucky6535@gmail.com", "password": "mahi6535" },
                { "id": "cust_03", "firstname": "Kutty", "lastName": "Gurjala", "mobileNo": 9441076540, "email": "kutty6535@gmail.com", "password": "mahi6535" }
            ], callback);
        },
        function(callback) {
            //clearing the exxisting collection..
            venuesModel.remove();
            venuesModel.create([
                { "id": "venue_01", "venueName": "Ameerpet", "status": true },
                { "id": "venue_02", "venueName": "Koti", "status": true },
                { "id": "venue_03", "venueName": "UPPAL", "status": true },
                { "id": "venue_04", "venueName": "Madhapur", "status": true },
                { "id": "venue_05", "venueName": "Dilsukh Nagar", "status": true },
            ], callback);
        },
        function(callback) {
            //clearing the exxisting collection..
            restaurantModel.remove();
            venuesModel.find({}, function(err, venues) {
                _.forEach(venues, function(venue, index) {
                    _.forEach(RestNames, function(restaurant, key) {
                        restaurantModel.create([
                            { "id": "rest_0" + (index + 1), "restaurantID": "RES_ID_0" + (index), "restaurantName": restaurant, "displaySections": true, "venuesId": (venue.id).valueOf() },
                        ]);
                    });
                });
                callback();
            });
        },
        function(callback) {
            //clearing the exxisting collection..
            sectionsModel.remove();
            restaurantModel.find({}, function(err, restarants) {
                _.forEach(sectionsArr, function(sectionName, key) {
                    _.forEach(restarants, function(restaurant, index) {
                        sectionsModel.create([
                            { "id": "sect_0" + (key + 1) + "_" + (index + 1), "sectionID": sectionCode[key], "name": sectionName, "displayOrder": true, "restaurantsId": restaurant.id }
                        ]);
                    });
                });
                callback();
            });
        },
        function(callback) {
            //clearing the exxisting collection..
            categoryModel.remove();
            sectionsModel.find({}, function(err, sections) {
                _.forEach(categoryArr, function(catName, key) {
                    _.forEach(sections, function(section, index) {
                        categoryModel.create([{
                            "id": "sect_0" + (key + 1) + "_" + (index + 1),
                            "categoryID": categoryCode[key],
                            "name": catName,
                            "displayItems": true,
                            "sectionCode": section.sectionID,
                            "sectionsId": section.id,
                            "restaurantsId": section.restaurantsId
                        }, ]);
                    });
                });
                callback();
            });
        },
        function(callback) {
            //clearing the exxisting collection..
            itemModel.remove();
            categoryModel.find({}, function(err, categorys) {
                _.forEach(categorys, function(category, index) {
                    if (category.sectionCode == "STARTER" && category.categoryID == "VEG") {
                        //VEG STARTER ITEMS
                        _.forEach(vegStarterItems, function(vegStarter, key) {
                            itemModel.create([
                                { "itemID": "CATE_ITEM_" + category.categoryID + "_0" + index, "name": vegStarter, "description": vegStarter, "price": 120, "categoriesId": category.id, status: "0" }
                            ]);
                        });
                    } else if (category.sectionCode == "STARTER" && category.categoryID == "NONVEG") {
                        //VEG NON VEG STARTER ITEMS
                        _.forEach(nonvegStarterItems, function(nonvegStarter, key) {
                            itemModel.create([
                                { "itemID": "CATE_ITEM_" + category.categoryID + "_0" + index, "name": nonvegStarter, "description": nonvegStarter, "price": 120, "categoriesId": category.id, status: "0" }
                            ]);
                        });
                    } else if (category.sectionCode == "SOUP" && category.categoryID == "VEG") {
                        //VEG SOUPS ITEMS
                        _.forEach(vegSoupsItems, function(vegSoup, key) {
                            itemModel.create([
                                { "itemID": "CATE_ITEM_" + category.categoryID + "_0" + index, "name": vegSoup, "description": vegSoup, "price": 120, "categoriesId": category.id, status: "0" }
                            ]);
                        });
                    } else if (category.sectionCode == "SOUP" && category.categoryID == "NONVEG") {
                        //NON-VEG SOUPS ITEMS
                        _.forEach(nonvegSoupsItems, function(nonvegSoup, key) {
                            itemModel.create([
                                { "itemID": "CATE_ITEM_" + category.categoryID + "_0" + index, "name": nonvegSoup, "description": nonvegSoup, "price": 120, "categoriesId": category.id, status: "0" }
                            ]);
                        });
                    } else if (category.sectionCode == "SALAD" && category.categoryID == "VEG") {
                        //VEG SALAD ITEMS
                        _.forEach(vegSaladsItems, function(vegSalad, key) {
                            itemModel.create([
                                { "itemID": "CATE_ITEM_" + category.categoryID + "_0" + index, "name": vegSalad, "description": vegSalad, "price": 120, "categoriesId": category.id, status: "0" }
                            ]);
                        });
                    } else if (category.sectionCode == "SALAD" && category.categoryID == "NONVEG") {
                        //VEG NON VEG SALAD ITEMS
                        _.forEach(nonvegSaladItems, function(nonVegSalad, key) {
                            itemModel.create([
                                { "itemID": "CATE_ITEM_" + category.categoryID + "_0" + index, "name": nonVegSalad, "description": nonVegSalad, "price": 120, "categoriesId": category.id, status : "0" }
                            ]);
                        });
                    } else if (category.sectionCode == "MAIN" && category.categoryID == "VEG") {
                        //VEG MAIN COURSE ITEMS
                        _.forEach(vegMainCourseItems, function(vegMain, key) {
                            itemModel.create([
                                { "itemID": "CATE_ITEM_" + category.categoryID + "_0" + index, "name": vegMain, "description": vegMain, "price": 120, "categoriesId": category.id, status : "0" }
                            ]);
                        });
                    } else if (category.sectionCode == "MAIN" && category.categoryID == "NONVEG") {
                        //VEG MAIN COURSE ITEMS
                        _.forEach(nonvegMainCourseItems, function(nonvegMain, key) {
                            itemModel.create([
                                { "itemID": "CATE_ITEM_" + category.categoryID + "_0" + index, "name": nonvegMain, "description": nonvegMain, "price": 120, "categoriesId": category.id, status : "0" }
                            ]);
                        });
                    }

                });
                callback();
            });
        },
        function(callback) {
            //clearing the exxisting collection..
            ratingModel.remove();
            itemModel.find({}, function(err, items) {
                _.forEach(items, function(item, index) {
                    ratingModel.create([{
                        "rating": 4,
                        "comment": "EXCELLENT Service",
                        "title": "Worth for money",
                        "itemsId": item.id
                    }]);
                });
                callback();
            });
        },
        function(callback) {
            //clearing the exxisting collection..
            myItemsModel.remove();
            imgModel.remove();
            itemModel.find({}, function(err, items) {
                _.forEach(items, function(item, index) {
                    imgModel.create([{
                        "img_url": "http://www.google.co.in",
                        "is_primary": 1,
                        "itemsId": item.id
                    }]);
                });
                callback();
            });
        },
        function(callback) {
            itemModel.find({ include: ['images'] }, function(err, items) {});
        }
    ]);

};