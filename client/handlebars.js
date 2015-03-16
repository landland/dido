Template.hello.rendered = function(){
  $('.ui.dropdown')
      .dropdown();

  $('.ui.checkbox')
      .checkbox();


  $('.ui.checkbox')
      .checkbox();

  $('.ui.accordion')
      .accordion();
      // Custom scroll
      // --------------
      $(".no-touch .table_hold").mCustomScrollbar({
          axis: "yx",
          scrollbarPosition: "outside",
          mouseWheelPixels: 200
      })



      $(".no-touch .table-body-scroll").mCustomScrollbar({
          axis: "y",
          mouseWheelPixels: 200
      })


      // Select tags
      //-----------------
      $(".filter_tags a").click(function() {
          var elem = $(this).parent();

          if (elem.hasClass("checked")) {
              elem.removeClass("checked");
          } else {
              elem.addClass("checked");
          }
          return false;
      })

      // $(".user_hold .name").click(function() {
      //     return false;
      // })



      $(".left_sidebar, .collapse_left").click(function() {

          var main = $(".site_main");
          if (main.hasClass("close_left_sidebars")) {

              main.removeClass("close_left_sidebars");

              $(".no-touch .left_sidebar").mCustomScrollbar({
                  axis: "y",
                  theme: "dark",
                  mouseWheelPixels: 200
              })
              return false;

          } else if (!$(this).hasClass("left_sidebar")) {

              main.addClass("close_left_sidebars");

              $(".no-touch .left_sidebar").mCustomScrollbar('destroy');
              return false;
          }

      })



      $(".collapse_right").click(function() {
          var main = $(".site_main");

          if ($(this).hasClass("js_open")) {
              $(".js_open").removeClass("js_open");
              main.addClass("close_right_sidebars");

              $(".no-touch .right_sidebar").mCustomScrollbar('destroy');
              return false
          } else {
              $(".js_open").removeClass("js_open");
              $(this).addClass("js_open");
              main.removeClass("close_right_sidebars");
              $(".no-touch .right_sidebar").mCustomScrollbar({
                  axis: "y",
                  theme: "dark",
                  mouseWheelPixels: 200
              })

              //ajax or something
              $(".no-touch .right_sidebar").find(".small.image img:first").attr("src", $(this).find("img:first").attr("src"));
              return false;
          }
      });



      close_sidebar();

      $(window).resize(function() {
          close_sidebar();
      })
};
Template.profile.rendered = function(){
  $('.ui.dropdown')
      .dropdown();

  $('.ui.checkbox')
      .checkbox();


  $('.ui.checkbox')
      .checkbox();

  $('.ui.accordion')
      .accordion();
      // Custom scroll
      // --------------
      $(".no-touch .table_hold").mCustomScrollbar({
          axis: "yx",
          scrollbarPosition: "outside",
          mouseWheelPixels: 200
      })



      $(".no-touch .table-body-scroll").mCustomScrollbar({
          axis: "y",
          mouseWheelPixels: 200
      })


      // Select tags
      //-----------------
      $(".filter_tags a").click(function() {
          var elem = $(this).parent();

          if (elem.hasClass("checked")) {
              elem.removeClass("checked");
          } else {
              elem.addClass("checked");
          }
          return false;
      })

      // $(".user_hold .name").click(function() {
      //     return false;
      // })



      $(".left_sidebar, .collapse_left").click(function() {

          var main = $(".site_main");
          if (main.hasClass("close_left_sidebars")) {

              main.removeClass("close_left_sidebars");

              $(".no-touch .left_sidebar").mCustomScrollbar({
                  axis: "y",
                  theme: "dark",
                  mouseWheelPixels: 200
              })
              return false;

          } else if (!$(this).hasClass("left_sidebar")) {

              main.addClass("close_left_sidebars");

              $(".no-touch .left_sidebar").mCustomScrollbar('destroy');
              return false;
          }

      })



      $(".collapse_right").click(function() {
          var main = $(".site_main");

          if ($(this).hasClass("js_open")) {
              $(".js_open").removeClass("js_open");
              main.addClass("close_right_sidebars");

              $(".no-touch .right_sidebar").mCustomScrollbar('destroy');
              return false
          } else {
              $(".js_open").removeClass("js_open");
              $(this).addClass("js_open");
              main.removeClass("close_right_sidebars");
              $(".no-touch .right_sidebar").mCustomScrollbar({
                  axis: "y",
                  theme: "dark",
                  mouseWheelPixels: 200
              })

              //ajax or something
              $(".no-touch .right_sidebar").find(".small.image img:first").attr("src", $(this).find("img:first").attr("src"));
              return false;
          }
      });



      close_sidebar();

      $(window).resize(function() {
          close_sidebar();
      })
};
function close_sidebar() {

    if ($(".sidebar").length) {

        if ($(window).width() < 1390) {
            $(".site_main").addClass("close_left_sidebars");
            if ($(".no-touch .sidebar").length)
                $(".no-touch .sidebar").mCustomScrollbar('destroy');
        } else {
            $(".site_main").removeClass("close_left_sidebars");
            $(".no-touch .left_sidebar").mCustomScrollbar({
                axis: "y",
                theme: "dark",
                mouseWheelPixels: 200
            })
            $(".no-touch .right_sidebar").mCustomScrollbar('destroy');
        }
    }
}
