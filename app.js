const form = document.getElementById('dateForm');
const dateInput = document.getElementById('date');
const result = document.getElementById('result')
const resultPar = document.getElementById('resultPar')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(dateInput.value);

    const now = new Date();
    const birthDate = new Date(dateInput.value + " 00:00");


    const timeDiffernce = now.getTime() - birthDate.getTime();
    console.log(timeDiffernce);

    
    const ageInYears = timeDiffernce / (1000*60*60*24*365)
    resultPar.style.display = 'block';
    result.style.display = 'block'
    result.innerHTML = `You Are ${Math.floor(ageInYears)} Years old`;

})