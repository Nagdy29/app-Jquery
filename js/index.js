// Library => 2006 => Jquery => Js
//bootstrap , Jquery
//bootstrap => framework
//Jquery => library
// $ => object include all  Jquery methods
//("#demo") // Jquery Selector
//hide() => Effect
//(4000) => duration => 4s

/*
Jquery Effects

$("#demo").hide(5000);
$("#demo").show(1000);
$("#demo").toggle(1000);


$("#demo").slideDown(1000);
$("#demo").slideUp(1000);
$("#demo").slideToggle(1000);

$("#demo").fadeOut(3000);
$("#demo").fadeIn(3000);
$("#demo").fadeToggle(3000);
$("#demo").fadeTo(2000 , 0.5 );

callback();

//chaining 
$("#demo").slideUp(1000).slideDown(1000).hide(1000);

 $("#demo").animate( {width:'100%'} , 2000);
   $("#demo").stop();
*/

/*
Jquery HTML
.text()//setters & getters
.html()//setters & getters
.val();//Input 
.attr();//html attribute => src , href , id 
.css("color");//css property font-size , marign , padding

.addClass();
.removeClass();
.toggleClass();

.after();
.before();

.append();
.prepend();

.remove();
.empty();
.width();//width only
.innerWidth();//width + padding
.outerWidth();//width + padding + border
.outerWidth(true);//width + padding + border + margin

*/

/*
Jquery Traversing

$("#demo").next()
$("#demo").prev()
$("#demo").prevAll()
$("#demo").nextAll()

$("#demo").nextUntil()
$("#demo").prevUntil()
$("#demo").siblings()



$("#demo").parent()
$("#demo").parents()
$("#demo").parentsUntil()

$("#demo").children()
$("#demo").find("span")
$("span").eq(5)
// */

let aboutoffset = $("#about").offset().top;

$(window).scroll(function () {
  let wscroll = $(window).scrollTop();

  if (wscroll > aboutoffset - 50) {
    $("#main-nav ").css("backgroundColor", "rgb(0,0,0,0.5)");
    $("#btnUp").fadeIn(500)

  } else {
    $("#main-nav ").css("backgroundColor", "transparent");
    $("#btnUp").fadeOut(500)

  }
});

$("#btnUp").click(function () {

  $("html, body").animate({scrollTop:0}, 3000)
})

$("a").click(function(e){
  let aHref = $(e.target).attr("href")
  let sectionoffsite = $(aHref).offset().top
  console.log(sectionoffsite)
  $("html, body").animate({scrollTop: sectionoffsite}, 2000)
})

$("#Icon").click(function(){
  let colorboxwidth = $("#colorBoxside").innerWidth()
  if($("#sliderbar").css("left") == "0px" ){

    $("#sliderbar").animate({left:`-${colorboxwidth}` })
  }else{
        $("#sliderbar").animate({left:0 })


  }

})

let colors = $(".colorBox")

colors.eq(0).css("backgroundColor", "darkblue")
colors.eq(1).css("backgroundColor", "tomato")
colors.eq(2).css("backgroundColor", "olive")
colors.eq(3).css("backgroundColor", "springgreen")
colors.eq(4).css("backgroundColor", "cadetblue")

colors.click(function (e) {
  let bac= $(e.target).css("backgroundColor")
  $(".change").css("color", bac)
  })