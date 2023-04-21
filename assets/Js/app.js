$( document ).ready(function() {
  $('.act').on('click',function(e){
    e.preventDefault()
    $('.act').removeClass('activeForSettings')
    $(this).addClass('activeForSettings')

    if ($(this).hasClass('act1')) {
      $('.tabSetting').addClass('d-none')
      $('.editProfile').removeClass('d-none')
    }
    if ($(this).hasClass('act2')) {
      $('.tabSetting').addClass('d-none')
      $('.changePassword').removeClass('d-none')
    }
    if ($(this).hasClass('act3')) {
      $('.tabSetting').addClass('d-none')
      $('.securityAndActivity').removeClass('d-none')
    }
    if ($(this).hasClass('act4')) {
      $('.tabSetting').addClass('d-none')
      $('.help').removeClass('d-none')
    }
  })

 $(".startCall").on('click',function () {
  $('.chat-modal').addClass('d-none')
  $('.call-container').removeClass('d-none')
 })
 $(".endCall").on('click',function () {
  $('.chat-modal').removeClass('d-none')
  $('.call-container').addClass('d-none')
 })
  $(".chat-list a").click(function() {
    $(".chatbox").addClass('showbox');
    return false;
});

$(".chat-icon").click(function() {
    $(".chatbox").removeClass('showbox');
});
  $('.like').on('click', function() {
  $(this).toggleClass('fa-regular fa-solid');
  if ($(this).hasClass('fa-solid')) {
    $(this).addClass('activeForLike');
  } else {
    $(this).removeClass('activeForLike');
  }
  });
  $('.savePost').on('click', function() {
      $(this).toggleClass('fa-regular fa-solid');
  });
  $('.navItems').on('click',function (e) {
      $('.navItems').removeClass('active')
      $(this).addClass('active');
  })
  $('#settings').on('click', function () {
      if ($('#settingTable').hasClass('d-none')) {
        $('#settingTable').removeClass('d-none');
      } else {
        $('#settingTable').addClass('d-none');
      }
  });
  $(document).on('click', function(e) {
      if (!$('.navigation, #settings').has(e.target).length) {
        $('#settingTable').addClass('d-none');
      }
  });
  $("#myModal").modal('show');
  function tabChange() {
    var tabs = $('.nav-tabs > li');
    var active = tabs.filter('.active');
    var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
    next.tab('show');
  }

  $('.tab-pane').hover(function() {
    clearInterval(tabCycle);
  }, function() {
    tabCycle = setInterval(tabChange, 5000);
  });
  var tabCycle = setInterval(tabChange, 5000)
  $(function(){
    $('.nav-tabs a').click(function(e) {
        e.preventDefault();
        clearInterval(tabCycle);
        $(this).tab('show')
        tabCycle = setInterval(tabChange, 5000);
    });
});
});
feather.replace();
document.querySelector(".nav-item").focus();
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
