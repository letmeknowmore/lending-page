var toggled = 0;

$('.burger').click(function(){
  if(toggled == 0){
  $('.burgx3').stop().transition({rotate: "45", "margin-top": "13px"});
  $('.burgx2').stop().transition({opacity: "0"}, "fast");
  $('.burgx').stop().transition({rotate: "-45", "margin-top": "13px"});
    toggled++;
  }
  else{
  $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px"});
  $('.burgx2').transition({opacity: "1"}, "fast");
  $('.burgx').stop().transition({rotate: "-=135", "margin-top": "23px"});
  toggled--;
  }
});

const burger = burger.querySelector('.burger')
const ul = burger.querySelector('.menu-list')

burger.addEventListener('click', function () { 
ul.style.display = "block";
});
