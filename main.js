document.getElementById('spinner').style.display = 'block';

    let button = document.getElementById("button")
    let enter = document.getElementById("SearchWorker")
    let resultContainer = document.getElementById("result")

setTimeout(function() {
    document.getElementById('spinner').style.display = 'none';

    //APIS
    let url = "https://randomuser.me/api/"

    


        button.addEventListener("click", function () {
        let sex = ["male", "female"]

        let gender = enter.value.toLowerCase()

        let apiUrl

        if (sex.includes(gender)) {
            apiUrl = `https://randomuser.me/api/?gender=${gender}`

            fetch(apiUrl)
            
            .then(response => response.json())
            .then(data => {
                resultContainer.innerHTML =
                `
                <img src="${data.results[0].picture.medium}" alt="Usuario">
                <p>Nombre: ${data.results[0].name.first}</p>
                <p>Apellido: ${data.results[0].name.last}</p>
                `
            })
            .catch(error => console.log(error));
        }
        
        else {
            Swal.fire ({
            icon: "error",
            title: "Wow...",
            text: "Something went wrong! please try whit male or female",
            footer: '<a href="#">Why do I have this issue?</a>',
            });
            return;
        }
    })
        

    //RELOJ
    function updateClock() {
        const updateClock = document.getElementById('clock')
        const now = new Date()
    
        const hours = now.getHours()
        const mins = now.getMinutes()
        const seconds = now.getSeconds()

        const resetHour = `${plusCero(hours)}:${plusCero(mins)}:${plusCero(seconds)}`

        updateClock.textContent = resetHour
    }

    function plusCero(number) {
    
        return number < 10 ? '0' + number : number
    }

    setInterval(updateClock, 1000)

    updateClock()





    
    
    
    
    //FUNCTIONS




} , 1000)
