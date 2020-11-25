function checkFieldsAndSubmit(){

          let email = document.forms["form1"]["email"].value;

          let phone = document.forms["form1"]["phone"].value;

          let occupation = document.forms["form1"]["occupation"].value;

          if(email !== "" && phone !== "" && occupation !== ""){

            alert("Successfully Applied");

            return;

          }

          alert("Please fill out all the required fields!")

        }

