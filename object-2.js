
        const person = {
            firstName : "Ananth",
            lastName : "Valli",

            getFullName: function(){
                return this.firstName + " " + this.lastName;
            }
        };

        const fullName = person.getFullName();
       console.log("Full name:", fullName);

