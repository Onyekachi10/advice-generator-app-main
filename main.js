

(function () {
    const qouteNumber = document.querySelector("#adviceid")
    const qoutePara = document.querySelector("#advice__para")
    const nxtQuotepara = document.querySelector('#photo')
    const source = "https://api.adviceslip.com/advice"

    function addQuote () {
        fetch(source) 
        .then((response) => {
            if (!response.ok) {
              console.error("error");
            }
            return response.json();
         })

         .then((data) => {
            qouteNumber.textContent = `#${data.slip.id}`
            qoutePara.textContent = `"${data.slip.advice}"`
        })
        .catch((error) => {
            console.error("Error:", error)
        })
        }
      addQuote() 
      nxtQuotepara.addEventListener('click', addQuote)

        }
    )
    ()




    



