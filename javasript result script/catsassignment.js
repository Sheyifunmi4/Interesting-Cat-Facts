
const button= document.querySelector("button");
button.addEventListener("click" , catApi);

    let factsbox= document.querySelector("p");
    
let apiUrl= "https://catfact.ninja/fact";
async function catApi() {
    event.preventDefault;
        try {
            const request = await fetch(apiUrl);
            let response = await request.text();

            let newResponse = response.substring(0, response.indexOf(','));
            factsbox.innerHTML= newResponse;
            
            
        } catch (error) {
            console.log( "There is an error",error);
        }
    
        }

        
        catApi()
        

