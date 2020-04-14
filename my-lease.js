// Iniatialize tooltip with jquery (yuck)
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
const leaseMileageAllowed = 30000;
const daysInLease = 1100;
const startingMileage = 136;
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
            calcMiles - document.getElementById("enterCurrentMileage").value
        ).toFixed(2);

        if (calcMiles - document.getElementById("enterCurrentMileage").value > 0) {
            document.getElementById("underBy").classList.remove("hide");
        } else if (
            calcMiles - document.getElementById("enterCurrentMileage").value <
            0
        ) {
            document.getElementById("overBy").classList.remove("hide");
        }
    }
    toggleMileageOverUnder();
}

function updateCurrentMileage() {
    document.getElementById("currentMiles").innerHTML = document.getElementById(
        "enterCurrentMileage"
    ).value;

    document.getElementById("showMyCalculations").classList.remove("hide");
}

function toggleMileageOverUnder() {
    const showLeaseMileageOverUnder = document.getElementById(
        "showLeaseMileageOverUnder"
    );
    showLeaseMileageOverUnder.classList.remove("hide");
}

function enableButton() {
    if (!document.getElementById("enterCurrentMileage").value) {
        document.getElementById("saveCurrentMileage").disabled = true;
    } else {
        document.getElementById("saveCurrentMileage").disabled = false;
    }
}