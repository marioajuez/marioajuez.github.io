$(function () {

  // var o = $("html,body");
 
  var a = $("nav"),
    e = $(".menu-hamburger");
    
    $(window).on("load resize", function () {
    var o = $(".menu-hamburger").offset().top;
      $(window).on("scroll", function () {
       
        var s = $(window).scrollTop();
        s >= o
          ? (e.addClass("fixed"), a.addClass("stickyNav"))
          : (e.removeClass("fixed"), a.removeClass("stickyNav"));
      });
    })
        
    $(window).on("resize", function () {
        
      var win = window
      var doc = document
      var docElem = doc.documentElement
      var body = doc.getElementsByTagName('body')[0]
      var x = win.innerWidth || docElem.clientWidth || body.clientWidth

        if ( x < 768 )
        { 
            window.scrollTo(0,0)
            location.reload()
        }
      }
    )
});
