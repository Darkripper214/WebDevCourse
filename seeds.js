var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Cloud's Rest",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBUO2ng7ReNyoa0apylWYtN3oDZFg6qBo1aul_h67ZwaC5BSM",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {    
        name:"Desert Mesa",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhF0aA7Z_oRURIXDGJlC8zT6eAx6kgkbQd5d7BITMYjmrjc5wH",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {    
        name:"Canyon Floor",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuKaMrWEKAPyX8M_IX6YgU9fMlTE-8X9XU6CYshVEPJ-mVEAuXQ",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."        
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("campgrounds removed!");
        
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("campground added");
                    //create a comment
                    Comment.create(
                    {
                        text:"This place is great, but there is no wifi",
                        author:"Homer"
                    },function(err,comment){
                        if(err){
                            console.log(err);
                        } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created");
                            }
                        });
                }
            });
        });
    }); 
}

module.exports = seedDB;