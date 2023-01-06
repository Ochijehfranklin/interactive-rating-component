
//to select the buttons
const points = document.querySelectorAll("li");

let selectedRating; 

//function I want to occur when you rate my work (click)
function selectRating (e) {
    if (selectedRating !== undefined) {
        points[selectedRating - 1].classList.remove("active");
    }
    //to make the button come out as a number
    selectedRating = Number(e.target.innerText);
     //to add the newly added li with active class
    e.target.classList.add("active");
}


function submitRating ()
{if (selectedRating) {
    document.getElementById("firstPage").classList.add("hide");
    document.getElementById("secondPage").classList.remove("hide");
    document.getElementById("selected-rating").innerText = selectedRating;
}
}
//to allow you pick any of the buttons in the list and rate
points.forEach(function (elem){
    elem.addeEventListener("click", 
    selectRating);
});

//to submit and display second page
document.querySelector("button").addEventListener('click', submitRating);