// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    takeOff = document.getElementById('takeoff');
    flightStatus = document.getElementById('flightStatus')
    shuttleBackground = document.getElementById('shuttleBackground')
    spaceShuttleHeight = document.getElementById('spaceShuttleHeight')
    landing = document.getElementById('landing')
    missionAbort = document.getElementById('missionAbort')
    up = document.getElementById('up')
    down = document.getElementById('down')
    right = document.getElementById('right')
    left = document.getElementById('left')
    rocket = document.getElementById('rocket')

    takeOff.addEventListener('click', function(event){
        if (confirm('Confirm that the shuttle is ready for takeoff.')) {
            flightStatus.innerHTML = 'Shuttle in flight.'
            shuttleBackground.setAttribute("style", "background-color: blue;")
            spaceShuttleHeight.innerHTML = 10000
        }     
    })

    landing.addEventListener('click', function(event){
        alert('The shuttle is landing. Landing gear engaged.')
        flightStatus.innerHTML = 'The shuttle has landed.'
        shuttleBackground.setAttribute("style", "background-color: green;")
        spaceShuttleHeight.innerHTML = 0
    })

    missionAbort.addEventListener('click', function(event){
        if (confirm('Confirm that you want to abort the mission.')) {
            flightStatus.innerHTML = 'Mission aborted.'
            shuttleBackground.setAttribute("style", "background-color: green;")
            spaceShuttleHeight.innerHTML = 0
        }     
    })

    let horizonal = 0;
    let vertical = 0;

    up.addEventListener('click', function(event){
        horizonal -= 10
        rocket.style.top = horizonal + 'px'
        
        let newScore = document.getElementById("spaceShuttleHeight").innerHTML;
        let value = parseInt(newScore, 0) + 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = value;
    })

    down.addEventListener('click', function(event){
        horizonal += 10
        rocket.style.top = horizonal + 'px'

        let newScore = document.getElementById("spaceShuttleHeight").innerHTML;
        let value = parseInt(newScore, 0) - 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = value;
    })

    right.addEventListener('click', function(event){
        vertical += 10
        rocket.style.left = vertical + 'px'
    })

    left.addEventListener('click', function(event){
        vertical -= 10
        rocket.style.left = vertical + 'px'
    })

}

window.onload = init;