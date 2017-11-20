/*
jquery to to enable smooth scrolling
upon click on a reference link, scroll into view of the selected element, smoothly
one for each link
*/

$(document).ready(function (){
    $("#link-one").on("click", function(event) {
          event.preventDefault();
          document.querySelector("#welcome").scrollIntoView({
            behavior: 'smooth'
        });
    });

    $("#link-two").on("click", function(event) {
          event.preventDefault();
          document.querySelector("#projects").scrollIntoView({
            behavior: 'smooth'
        });
    });

    $("#link-three").on("click", function(event) {
          event.preventDefault();
          document.querySelector("#about").scrollIntoView({
            behavior: 'smooth'
        });
    });

});
