const getF1 = async (season,round) =>{
    let res = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(res.data)
    return res.data
}

const newRow = (pos,name,nationality,sponsor,points) => {
    const html = `<div class="row"><div class="col-md-2">${pos}</div><div class="col-md-2">${name}</div><div class="col-md-2">${nationality}</div><div class="col-md-2">${sponsor}</div><div class="col-md-2">${points}</div></div>`
    document.querySelector('.table').insertAdjacentHTML("beforeend",html)
}

const form = document.querySelector('#f1-form')

form.addEventListener('submit',async (event) => {
    event.preventDefault();
    let table = document.querySelector('.table')
    table.innerHTML = `<div class="row labels">
    <div class="col-md-2">
        Position
    </div>
    <div class="col-md-2">
        Name
    </div>
    <div class="col-md-2">
        Nationality
    </div>
    <div class="col-md-2">
       Sponsor
    </div>
    <div class="col-md-2">
        Points
    </div>
</div>`
    let season = document.querySelector('#sea').value
    let round = document.querySelector('#rou').value

    
    let res = await getF1(season,round)
    console.log(res)
    if (res.MRData.StandingsTable.StandingsLists.length > 0){
        for (let i = 0; i < 7; i++) {
            const resList = res.MRData.StandingsTable.StandingsLists[0].DriverStandings
            console.log(resList)
            let element = resList[i]
            let pos = element["position"]
            let name = element["Driver"]["givenName"] + " " +element["Driver"]["familyName"]
            let nationality = element["Driver"]["nationality"]
            let sponsor = element["Constructors"][0]["name"]
            let points = element["points"]
            newRow(pos,name,nationality,sponsor,points)
        };
    } else {
        alert("No Data! Check your Form again")
    }
});
