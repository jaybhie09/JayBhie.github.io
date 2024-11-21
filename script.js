$('#home').addClass("active");

//Smooth scrolling 
      $("#home").click(function() {
           $('html, body').animate({
               scrollTop:        $("#one").offset().top-66
           }, 1000);
        return false;
       });
      
      $("#about").click(function() {
           $('html, body') .animate({
               scrollTop:        $("#two").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#projects").click(function() {
           $(' html,body') .animate({
               scrollTop:        $("#three").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#contact").click(function() {
        $(this).addClass("active");
           $('html,body ') .animate({
               scrollTop:        $("#four").offset().top-112
           }, 1000);
        return false;
       });


       $('#two').waypoint(function() {
      
        $(".container ul li").children().removeClass("active");
        $("#about").addClass("active");
        
      }, { offset: 101 });
      
      
      $('#three').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#projects").addClass("active");
      }, { offset: 101 });
      
      $('#four').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#contact").addClass("active");
      }, { offset: 101 });
      
      $('#one').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#home").addClass("active");
      }, { offset: 0 });



     
function validateForm() { 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Regex
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
    if (name.trim() === "") {
        alert("Name is required.");
        return false;  
    }
 
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;  
    }
 
    alert("Message sent!");
    return true;  
}

    

function toggleMenu() {
    // Get the navbar collapse element
    var navbarCollapse = document.getElementById("navbarNavAltMarkup");

    // Toggle the 'collapse' class to show or hide the navbar items
    navbarCollapse.classList.toggle("collapse");
}

