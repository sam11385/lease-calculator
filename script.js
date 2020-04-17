// const dailyAllowance = (leaseMileageAllowed / daysInLease).toFixed(5);

// Calculate Miles TODO: Cleanup
// function calculateMiles() {
//     if (document.getElementById("mileageDate")) {
//         document.getElementById("currentMileage").innerHTML = startingMileage + ;

//         document.getElementById("numberOfDays").innerHTML = getDays();
//         const calcMiles = getDays() * dailyAllowance + startingMileage;
//         document.getElementById("calculatedMileage").innerHTML =
//             calcMiles.toFixed(2) + " miles";
//         document.getElementById("comparedMileage").innerHTML = (
//             calcMiles - document.getElementById("enterCurrentMileage").value
//         ).toFixed(2);

//         if (calcMiles - document.getElementById("enterCurrentMileage").value > 0) {
//             document.getElementById("underBy").classList.remove("hide");
//         } else if (
//             calcMiles - document.getElementById("enterCurrentMileage").value <
//             0
//         ) {
//             document.getElementById("overBy").classList.remove("hide");
//         }
//     }
// }

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
    showDaysDisplay();
}

function calculateMiles() {
    const startedWith = parseInt(
        document.getElementById("userMilesStartedWith").value
    );
    const milesNow = parseInt(document.getElementById("userMilesNow").value);

    document.getElementById("currentMileage").innerHTML = startedWith + milesNow;

    const today = new Date();

    const userEndDate = new Date(
        document.getElementById("userSelectEndDate").value
    );

    document.getElementById("daysCalculation").innerHTML = parseInt(
        (userEndDate - today) / (24 * 3600 * 1000)
    );

    if (document.getElementById("mileageDate")) {
        document.getElementById("numberOfDays").innerHTML = getDays();
        const calcMiles = getDays() * dailyAllowance + startingMileage;
        document.getElementById("calculatedMileage").innerHTML =
            calcMiles.toFixed(2) + " miles";
        document.getElementById("comparedMileage").innerHTML = (
            calcMiles - document.getElementById("enterCurrentMileage").value
        ).toFixed(2);
    }
    showCardDisplay();
}

function enableButton() {
    if (!document.getElementById("userSelectStartDate").value ||
        !document.getElementById("userSelectEndDate").value
    ) {
        document.getElementById("calculateButtton").disabled = true;
    } else {
        document.getElementById("calculateButtton").disabled = false;
    }

    if (!document.getElementById("userMilesAllowed").value ||
        !document.getElementById("userMilesStartedWith").value ||
        !document.getElementById("userMilesNow").value
    ) {
        document.getElementById("runNumbersButton").disabled = true;
    } else {
        document.getElementById("runNumbersButton").disabled = false;
    }
}

function showDaysDisplay() {
    const showDays = document.getElementById("showDays");
    showDays.classList.toggle("hide");
}

function showCardDisplay() {
    const showCards = document.getElementById("showCards");
    showCards.classList.toggle("hide");
}