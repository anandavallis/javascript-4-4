
        const personJSON = JSON.stringify({
            name : "Anandavalli",
            email : "sanandavalli7@gmail.com",
            skills : ["HTML", "CSS" ,"JAVASCRIPT","REACT"]
        });
        console.log("JSON string :");
        console.log("personJSON");

        //parse the JSON string into an object
        const personObject = JSON.parse(personJSON);

        //log the values to console
        console.log("Name :" ,personObject.name);
        console.log("Email :" ,personObject.email);
        console.log("Skills :" , personObject.skills);
   
