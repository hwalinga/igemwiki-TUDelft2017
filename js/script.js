(function () {
  var intro_height = 450,
    hr_height = 13,
    hr_margin_bottom = 16,

    first = "igem",
    secon = "tudelft",
    third = "gmail",
    forth = "com",
    all = " " + " " + first + "." + secon + "@" + third + "." + forth,
    sall = " " + " " + all,
    ma = "ma" + "il",
    mm = ma + "to" + ":";
  $(function () {
    // Dynamically add e-mail to distract spam bots
    $("#mail-button").attr("href", mm + all);
    $("#email").text(sall);

    // Removing empty p tages
    $("p").filter(function () {
      return $.trim($(this).text()) === '';
    }).remove();

    // Pop up boxes on menu
    $("#contact span").hide();
    addMenuHoverEffects();
  });

  // Set absolute position menu when scrolling over intro img
  $(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop(),
        top_bar = $('#top-bar');
      if (scroll > intro_height) {
        top_bar.addClass('fixed-menu container');
        $('#top-hr').addClass('fixed-top-hr');
        $('#top-hr').css('top', "" + top_bar.outerHeight() + "px");
        $('main').css("margin-top", "" + (top_bar.outerHeight() + hr_height + hr_margin_bottom) + "px");
      } else {
        $('#top-bar').removeClass('fixed-menu container');
        $('main').css("margin-top", 0);
        $('#top-hr').removeClass('fixed-top-hr');
      }
    });
  });

//  $(function () {
//    alert($('footer').css('padding-top'));
//  })

}());



// function for copying text to clipboard (used for phone number)
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(element).select();
  document.execCommand("copy");
  $temp.remove();
}

function addMenuHoverEffects() {
  $("#contact li a, #contact li button").hover(function () {
    $(this).find("span").animate({
      width: 'show'
    });
  }, function () {
    $(this).find("span").animate({
      width: 'hide'
    });
  });
}
