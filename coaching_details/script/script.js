$(document).ready(function(){

    $(document).ready(function() {
      $("#see").click(function() {
        var elem = $("#see").text();
        if (elem == "See More") {
          //Stuff to do when btn is in the read more state
          $("#see").text("See Less");
          $("#text").slideDown();
        } else {
          //Stuff to do when btn is in the read less state
          $("#see").text("See More");
          $("#text").slideUp();
        }
      });
    });
    $("#popup").hide().fadeIn(1000);

    //close the POPUP if the button with id="close" is clicked
    $("#close").on("click", function (e) {
        e.preventDefault();
        $("#popup").fadeOut(1000);
    });

  var time=0;
	var r= 0;
  var k=0;
var time2=0;
    $("#notification").click(function(){
      if (k==1){
          $(".jobpopup").animate({opacity: "0"},500);
          $(".jobpopup").css("display", "none");
          $(".container-fluid").removeAttr('id');
        k=0;
       }
      if (r == 0) {
        $(".popuptext").css("display", "block");
        $(".popuptext").animate({opacity: "1"},500);
        $(".container-fluid").attr('id', 'blurred');
        $(".above-cover").css("display","none");
        time2=0;
        r=1;
       }else{
          $(".popuptext").animate({opacity: "0"},500);
          $(".popuptext").css("display", "none");
          $(".container-fluid").removeAttr('id');
        r=0;
       }
  });
  $("#job").click(function(){
      if (r==1) {
          $(".popuptext").animate({opacity: "0"},500);
          $(".popuptext").css("display", "none");
          $(".container-fluid").removeAttr('id');
        r=0;
        time2=0;
       }

      if (k == 0) {
        
        $(".jobpopup").css("display", "block");
        $(".jobpopup").animate({opacity: "1"},500);
        $(".container-fluid").attr('id', 'blurred');
        time=0;
        k=1;
       }else{
          time=0;
          $(".jobpopup").animate({opacity: "0"},500);
          $(".jobpopup").css("display", "none");
          $(".container-fluid").removeAttr('id');
        k=0;
       }
  });

  $(document).click(function(e){
    if ($(e.target).closest(".jobpopup").length == 0 && k==1 && time>0) {
        // .closest can help you determine if the element 
        // or one of its ancestors is #menuscontainer

        time=0;
          $(".jobpopup").animate({opacity: "0"},500);
          $(".jobpopup").css("display", "none");
          $(".container-fluid").removeAttr('id');
        k=0;
       

    }else{
      time++;
    }
});
  $(document).click(function(e){
    if ($(e.target).closest(".popuptext").length == 0 && r==1 && time2>0) {
        // .closest can help you determine if the element 
        // or one of its ancestors is #menuscontainer

        time2=0;
        
          $(".popuptext").animate({opacity: "0"},500);
          $(".popuptext").css("display", "none");
          $(".container-fluid").removeAttr('id');
        r=0;
       
    }else{
      time2++;
    }
});  
    
});