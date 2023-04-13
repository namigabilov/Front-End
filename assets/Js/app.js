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
const input = document.querySelector(".input");
const messages = document.querySelector(".messages");

let initial = true,
  last = false;
function message(msg, self = false, animate = true) {
  // check whether to insert a spacer
  if (initial) {
    initial = false;
    last = self;
  } else if (this.last !== self) {
    this.last = self;
    const spacer = document.createElement("div");
    spacer.classList.add("spacer");
    messages.appendChild(spacer);
  }

  // append message
  const message = document.createElement("div");
  message.classList.add("message");
  self && message.classList.add("self");
  animate && message.classList.add("animate");
  const text = document.createTextNode(msg);
  message.appendChild(text);

  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;

  this.last = self;
}

// setup some intial text
((messages) =>
  messages.map(({ text, self = false }) => {
    message(text, self, false);
  }))([
  { text: "Salam" },
  { text: "Bu Yazılmış Default Mesaj'dir "},
  { text: "Salam", self: true },
  { text: "Bu yazılmış Default Cavabdır" , self :true},

]);

let timer = null;
input.addEventListener("keyup", (e) => {
  if (e.key !== "Enter" || !input.value.trim().length) return;
  message(input.value, true);
  input.value = "";

  // avoid multiple responses from last message
  clearTimeout(timer);

  // generate random response
  const responses = [
    "Salam Mən Mesaj Botuyam Ancaq Static Cavab verə bilirəm !",
  ];
  // random response delay
  timer = setTimeout(
    () => message(responses[(Math.random() * responses.length) | 0]),
    (Math.random() * 3000) | 0
  );
});

// remove weird overflow on animation
let overflown = false;
messages.addEventListener("animationend", () => {
  if (overflown) return;
  if (messages.scrollHeight > messages.clientHeight) {
    messages.style["overflow-y"] = "auto";
    overflown = true;
  }
});

window.addEventListener("resize", () => {
  if (messages.scrollHeight > messages.clientHeight) {
    messages.style["overflow-y"] = "auto";
    overflown = true;
  } else overflown = false;
});

feather.replace();
document.querySelector(".nav-item").focus();