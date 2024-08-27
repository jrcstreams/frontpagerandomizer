// LAUNCH EDITION BUTTON FUNCTION //

function combinedGo() {

    const yearVal = document.getElementById("years").value;
    const monthVal = document.getElementById("months").value;
    const links = "links";

    const yearMonthCombo = links + yearVal + monthVal;

    console.log(yearMonthCombo);

    var i = Math.floor(Math.random() * window[yearMonthCombo].length);

    window.open(window[yearMonthCombo][i], '_blank').focus();

    return false

};


// TEXT LOADED FUNCTIONS //

function monthChange() {

    const changedMonth = document.getElementById("months").value;

    console.log(changedMonth)

    document.getElementById("changedMonthText").innerHTML = changedMonth

    document.getElementById("changedText").innerHTML = 'You are about to load a random edition of The New York Times from:'


}

function yearChange() {

    const changedYear = document.getElementById("years").value;

    console.log(changedYear)

    document.getElementById("changedYearText").innerHTML = changedYear

    document.getElementById("changedText").innerHTML = 'You are about to load a random edition of The New York Times from:'

}

// SELECT BY YEAR BUTTONS //

function yearGo(value) {

    const byYearVal = value
    const links = "links";

    const typeValCombo = links + byYearVal;

    console.log(typeValCombo)

    var i = Math.floor(Math.random() * window[typeValCombo].length);

    window.open(window[typeValCombo][i], '_blank').focus();

    return false

};



// SELECT BY ERA BUTTONS //



