document.getElementById('spinner').style.display = 'block';

setTimeout(function() {
    document.getElementById('spinner').style.display = 'none';
    //APIS
    let url = "https://randomuser.me/api/"


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






    let button = document.getElementById("button")
    let enter = document.getElementById("SearchWorker")

    
    const array1 =[]
    const array2 =[]

    
    button.addEventListener("click", function () {
        let gender = enter.value; 

        if (gender === "male" || gender === "masculino") {
            // proceso mediante el cual la api busca persona del sexo masculino
            console.log("male")
        } else if (gender === "female" || gender === "femenino") {
            // proceso mediante el cual se busca persona femenina en la api
            console.log("female")
        } else {
            Swal.fire ({
            icon: "error",
            title: "Wow...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
            });
        }
    })
    //FUNCTIONS




} , 1000)
