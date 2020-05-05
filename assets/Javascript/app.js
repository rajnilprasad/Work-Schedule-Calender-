
$(document).ready(function () {

   

    // on page load
    doInit();

    function doInit () {
        getCurrentDay();
        pastPresentFuture();
        retrieveDescriptions();
    }

    // button clicks all here
    $(".save-btn").on("click", function () {

        // get time id from description tag
        const timeId = $(this).siblings(".description").attr("data-time");

        // get the text of whatever user input
        const userInput = $(this).siblings(".description").val();

        // set that baby in local storage 
        localStorage.setItem(timeId, userInput);
    })



    // all functions below here

    function retrieveDescriptions() {

        // get array of our description elements 
        const descritpions = $(".description");
        
        $(descritpions).each(function(i, element) {

            // get time ID so we can retrieve data from local storage 
            const timeId = $(element).attr("data-time");

            // get unique description per element 
            const descritpion = localStorage.getItem(timeId);

            // set the text
            $(element).text(descritpion); 
        })

    }

    function pastPresentFuture( {
        // get current hour
        const currentHour = moment().hours();

        // target our descritpion tag
        const descritpion = $(".description");

        $(descritpions).each(function (index, element) {
            // get the current time that is stored on the descriptioin block
        const currentTimeOfBlock = parseInt($(element).attr("data-time"));


        if(currentTimeOfBlock < currentHour) {
            $(element).addClass("past");
        }
        else if (currentTimeOfBlock === currentHour){
            $(element).addClass("present");
        }
        else {
            $(element).addClass("future");
        }
        })

    }

    function getCurrentDay () {

        // get the current day formatted
        const currentDay = moment().format("dddd, MMMM Do");
        
        // set the text of current day formatted
        $("#currentDay").text(currentDay);
    }
})


