var fs = require("fs");
var sampleObject = {
    first:{
        comment:"Ready for sponsor's review",
        date:"26th April 2019",
        mainline:"HPE Pitch for the Design of Future Computers",
        category:"Healthcare",
    },
    second:{
        comment:"Ready for Shark Tank #1",
        date:"26th April 2019",
        mainline:"C&M Pitch for Digital",
        category:"Deloitte",
    },
    
   
};

fs.writeFile("./object.json", JSON.stringify(sampleObject), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
