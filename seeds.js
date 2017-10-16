var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment")

var data = [
    {
        name: "Other Image",
        image: "https://i.ytimg.com/vi/N5qLVlSzaQ0/maxresdefault.jpg",
        description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
        name: "Clouds rest",
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/19159709/extra_large_6f6e38dd13d8499be5b31fb6bc1bfde3.jpg",
        description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.", 
    },
    {
        name: "Other Image 1",
        image: "https://i.ytimg.com/vi/N5qLVlSzaQ0/maxresdefault.jpg",
        description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    }
    
]

function seedDB() {
    //Remove campgrounds
    Campground.remove({}, function(err) {
    if(err) {
        console.log("Something went wrong")
    } 
        console.log("Removed campgrounds!")
    data.forEach(function(seed) {
        Campground.create(seed, function(err, campground) {
            if(err) {
                console.log(err);
            } else {
              console.log("Added a campground"); 
              //create a comment
              Comment.create(
                  {
                    text: "This place is great but I wish there was internet",
                    author: "Homer"
                  }, function(err, comment) {
                      if(err) {
                          console.log(err)
                      } else {
                      campground.comments.push(comment)
                      campground.save();
                      console.log("Created new comment")
                      }
                  });
              };
            });
        
        });
    });
};
    //Add campgrounds

module.exports = seedDB;


    
