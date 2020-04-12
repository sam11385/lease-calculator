// Iniatialize tooltip with jquery (yuck)
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
const leaseMileageAllowed = 30000;
const daysInLease = 1100;
const startingMileage = 136;
const currentMiles = 1720;
const dailyAllowance = (leaseMileageAllowed / daysInLease).toFixed(5);

// Get days for MY lease
function getDays() {
    const mileageDate = new Date(document.getElementById("mileageDate").value);
    const startDate = new Date(document.getElementById("startDate").value);
    return parseInt((mileageDate - startDate) / (24 * 3600 * 1000) + 1);
}

// Calculate Miles for MY lease
function calculateMiles() {
    if (document.getElementById("mileageDate")) {
        document.getElementById("numberOfDays").innerHTML = getDays();
        const calcMiles = getDays() * dailyAllowance + startingMileage;
        document.getElementById("calculatedMileage").innerHTML =
            calcMiles.toFixed(2) + " miles";
        document.getElementById("comparedMileage").innerHTML = (
            calcMiles - currentMiles
        ).toFixed(2);

        if (calcMiles - currentMiles > 0) {
            document.getElementById("underBy").classList.remove("hide");
        } else if (calcMiles - currentMiles < 0) {
            document.getElementById("overBy").classList.remove("hide");
        }
    }
    toggleOverUnder();
}

function toggleOverUnder() {
    const showOverUnder = document.getElementById("showOverUnder");
    showOverUnder.classList.remove("hide");
}

// Pass in my miles
document.getElementById("currentMiles").innerHTML = currentMiles + " miles";

// User input functionality
// Get days for ANY input dates
function calculateDays() {
    const userStartDate = new Date(
        document.getElementById("userSelectStartDate").value
    );
    const userEndDate = new Date(
        document.getElementById("userSelectEndDate").value
    );
    document.getElementById("totalDaysInlease").innerHTML = parseInt(
        (userEndDate - userStartDate) / (24 * 3600 * 1000) + 1
    );
    toggleDivs();
}

function enableButton() {
    if (!document.getElementById("userSelectStartDate").value ||
        !document.getElementById("userSelectEndDate").value
    ) {
        document.getElementById("calculateButtton").disabled = true;
    } else {
        document.getElementById("calculateButtton").disabled = false;
    }
}

function toggleDivs() {
    const show = document.getElementById("showMe");
    show.classList.toggle("hide");
}