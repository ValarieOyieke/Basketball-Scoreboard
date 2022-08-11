let homePoints = 0
let guestPoints = 0
let homePointsEl = document.getElementById("home-el")
let guestPointsEl = document.getElementById("guest-el")

function addOneHome() {
    homePoints += 1
    homePointsEl.textContent = homePoints
}

function addTwoHome() {
    homePoints += 2
    homePointsEl.textContent = homePoints
}

function addThreeHome() {
    homePoints += 3
    homePointsEl.textContent = homePoints
}

function addOneGuest() {
    guestPoints += 1
    guestPointsEl.textContent = homePoints
}

function addTwoGuest() {
    guestPoints += 2
    guestPointsEl.textContent = homePoints
}

function addThreeGuest() {
    guestPoints += 3
    guestPointsEl.textContent = homePoints
}
