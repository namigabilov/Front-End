$( document ).ready(function() {
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
      e.preventDefault();
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
});