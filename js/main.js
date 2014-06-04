$( document ).ready(function() {
  $('#btn-support-campaign').on('click', function(e) {
    var btnsupport = $(this);
    btnsupport.toggleClass("btn-primary btn-success"); //you can list several class names 

    btnsupport.html() == "Support this campaign"
    ? btnsupport.html('<span class="glyphicon glyphicon-ok"></span> Supporting')
    : btnsupport.html('Support this campaign');
    //e.preventDefault();
  });

	$('#btn-follow-campaign').on('click', function(e) {
    var btnfollow = $(this);
 
    btnfollow.toggleClass("btn-primary btn-success"); //you can list several class names 

    btnfollow.html() == "Follow this campaign"
    ? btnfollow.html('<span class="glyphicon glyphicon-ok"></span> Following')
    : btnfollow.html('Follow this campaign');
    //e.preventDefault();
  });

  $("#showPetition").click(function(){
    $("#petition-form").slideDown("fast");
    $(this).attr("id", "submitPetition");
    $(this).attr("form", "petition-form");
    $(this).attr("type", "submit");
    $(this).text("Submit");


    $("#submitPetition").click(function(){
      $(this).removeClass("btn-success");
      $(this).addClass("btn-primary");
      $(this).html('<span class="glyphicon glyphicon-ok"></span> Thank You!');
      $("#petition-form").slideUp("fast");
      $(this).unbind('click');
    });
  });
});

$('#campaign-status-input').focusin(function(){
    $('.campaign-status-update-controls').show('fast');
    $('#campaign-status-input').css('height', '25px');
});

$('#upload-photo-btn').click(function(){
  $('#photo-upload').show('fast');
});

 $(function() {
     $("input:file").live(function (){
       var fileName = $(this).val();
       $(".filename").html(fileName);
     });
  });

