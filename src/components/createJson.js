var fs = require("fs");
var sampleObject = {
    myIdeas:[
        {
            "id":1,
            "comment":"Ready for sponsor's review",
            "date":"26th April 2019",
            "mainline":"HPE Pitch for the Design of Future Computers",
            "category":"Healthcare"},
            
        {
            "id":2,
            "comment":"Ready for Shark Tank #1",
            "date":"26th April 2019",
            "mainline":"C&M Pitch for Digital",
            "category":"Deloitte"},
        
         {
            "id":3,
            "comment":"Ready for Shark Tank #1",
            "date":"26th April 2019",
            "mainline":"C&M Pitch for Digital",
            "category":"Deloitte"},
        {
            "id":4,
            "comment":"Ready for sponsor's review",
            "date":"26th April 2019",
            "mainline":"HPE Pitch for the Design of Future Computers",
            "category":"Healthcare"},
    
        {
             "id":5,
            "comment":"Ready for sponsor's review",
            "date":"26th April 2019",
             "mainline":"HPE Pitch for the Design of Future Computers",
            "category":"Healthcare"}
    ],
    myAssets:[
        {
            "id":1,
            "comment":"Ready for sponsor's review",
            "date":"26th April 2019",
            "mainline":"HPE Pitch for the Design of Future Computers",
            "category":"Healthcare"},
            
        {
            "id":2,
            "comment":"Ready for Shark Tank #1",
            "date":"26th April 2019",
            "mainline":"C&M Pitch for Digital",
            "category":"Deloitte"},
        
         {
            "id":3,
            "comment":"Ready for Shark Tank #1",
            "date":"26th April 2019",
            "mainline":"C&M Pitch for Digital",
            "category":"Deloitte"},
        {
            "id":4,
            "comment":"Ready for sponsor's review",
            "date":"26th April 2019",
            "mainline":"HPE Pitch for the Design of Future Computers",
            "category":"Healthcare"},
    
        {
             "id":5,
            "comment":"Ready for sponsor's review",
            "date":"26th April 2019",
             "mainline":"HPE Pitch for the Design of Future Computers",
            "category":"Healthcare"}    
        
    ]
   
};

fs.writeFile("./object.json", JSON.stringify(sampleObject), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
