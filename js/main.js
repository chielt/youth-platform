var MyDoc = {};

$( document ).ready(function() {
  MyDoc.like = true;

  $('textarea').autosize();

  $('.comment-link').click(function(){ $(this).siblings('.comment-pane').show('fast');});
  $('.like-link').on('click', function(e) {
    if(MyDoc.like)
    {
      var likes = parseInt($(this).siblings('a').children('.like-counter').html())+1;
      $(this).siblings('a').children('.like-counter').html(likes);
      MyDoc.like = false;
    }
  });

  $('#btn-support-campaign').on('click', function(e) {
    var btnsupport = $(this);
    btnsupport.toggleClass("btn-primary btn-success"); //you can list several class names 

    if(btnsupport.html() == "Support this campaign")
    {
      btnsupport.html('<span class="glyphicon glyphicon-ok"></span> Supporting');
      var cnt = parseInt($('#campaign-supporter-counter').html())+1; 
      $('#campaign-supporter-counter').html(cnt);
    } else {
      btnsupport.html('Support this campaign');
      var cnt = parseInt($('#campaign-supporter-counter').html())-1; 
      $('#campaign-supporter-counter').html(cnt);
    }
  });

  $('#btn-follow-campaign').on('click', function(e) {
    var btnfollow = $(this);
 
    btnfollow.toggleClass("btn-primary btn-success"); //you can list several class names 

    if(btnfollow.html() == "Follow this campaign")
    {
      btnfollow.html('<span class="glyphicon glyphicon-ok"></span> Following');
      var cnt = parseInt($('#campaign-follower-counter').html())+1; 
      $('#campaign-follower-counter').html(cnt);
    } else {
      btnfollow.html('Follow this campaign');
      var cnt = parseInt($('#campaign-follower-counter').html())-1; 
      $('#campaign-follower-counter').html(cnt);
    }
  });

  $('#btn-support-event').on('click', function(e) {
    var btnsupport = $(this);
    btnsupport.toggleClass("btn-primary btn-success"); //you can list several class names 

    if(btnsupport.html() == "Join this event")
    {
      btnsupport.html('<span class="glyphicon glyphicon-ok"></span> Going');
      var cnt = parseInt($('#event-going-counter').html())+1; 
      $('#event-going-counter').html(cnt);
      if($('#btn-maybe-support-event').html() =='<span class="glyphicon glyphicon-ok"></span> Maybe going')
      {
        $('#btn-maybe-support-event').toggleClass("btn-primary btn-success");
        $('#btn-maybe-support-event').html('Maybe join this event');
        var cnt = parseInt($('#event-maybe-going-counter').html())-1; 
        $('#event-maybe-going-counter').html(cnt);
      }
    } else {
      $('#btn-support-event').html('Join this event');
      var cnt = parseInt($('#event-going-counter').html())-1; 
      $('#event-going-counter').html(cnt);
    }
  });

  $('#btn-maybe-support-event').on('click', function(e) {
    var btnsupport = $(this);
    btnsupport.toggleClass("btn-primary btn-success"); //you can list several class names 

    if(btnsupport.html() == "Maybe join this event")
    {
      btnsupport.html('<span class="glyphicon glyphicon-ok"></span> Maybe going');
      var cnt = parseInt($('#event-maybe-going-counter').html())+1; 
      $('#event-maybe-going-counter').html(cnt);
      if($('#btn-support-event').html() =='<span class="glyphicon glyphicon-ok"></span> Going')
      {
        $('#btn-support-event').toggleClass("btn-primary btn-success");
        $('#btn-support-event').html('Join this event');
        var cnt = parseInt($('#event-maybe-going-counter').html())-1; 
        $('#btn-support-event-counter').html(cnt);
      }
    } else {
      btnsupport.html('Maybe join this event');
      var cnt = parseInt($('#event-maybe-going-counter').html())-1; 
      $('#event-maybe-going-counter').html(cnt);
    }
  });

  $('#btn-follow-event').on('click', function(e) {
    var btnfollow = $(this);
 
    btnfollow.toggleClass("btn-primary btn-success"); //you can list several class names 

    if (btnfollow.html() == "Follow this event")
    {
      btnfollow.html('<span class="glyphicon glyphicon-ok"></span> Following');
      var cnt = parseInt($('#event-follower-counter').html())+1; 
      $('#event-follower-counter').html(cnt);
    } else {
      btnfollow.html('Follow this event');
      var cnt = parseInt($('#event-follower-counter').html())-1; 
      $('#event-follower-counter').html(cnt);
    }
  });

  $('.btn-going').on('click', function(e) { 
    $(this).toggleClass("btn-primary btn-success"); //you can list several class names 

    $(this).html() == "Going"
    ? $(this).html('<span class="glyphicon glyphicon-ok"></span> Going')
    : $(this).html('Going');

    $(this).html() == '<span class="glyphicon glyphicon-ok"></span> Going' 
    ? $(this).siblings('.btn-maybe').html('Maybe going').addClass('disabled')
    : $(this).siblings('.btn-maybe').removeClass('disabled');
     
    //e.preventDefault();
  });

	$('.btn-maybe').on('click', function(e) { 
    $(this).toggleClass("btn-primary btn-success"); //you can list several class names 

    $(this).html() == "Maybe going"
    ? $(this).html('<span class="glyphicon glyphicon-ok"></span> Maybe going')
    : $(this).html('Maybe going');

    $(this).html() == '<span class="glyphicon glyphicon-ok"></span> Maybe going' 
    ? $(this).siblings('.btn-going').html('Going').addClass('disabled')
    : $(this).siblings('.btn-going').removeClass('disabled');
     
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

  $(".responsive-calendar").responsiveCalendar({
          time: '2014-06',
          events: {
            "2014-06-15": {"number": 1, "url": "http://w3widgets.com/responsive-slider"},
            "2013-04-26": {"number": 1, "url": "http://w3widgets.com"}, 
            "2013-05-03":{"number": 1}, 
            "2013-06-12": {}}
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



