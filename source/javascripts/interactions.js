document.addEventListener('DOMContentLoaded', function () {

  let toggleText = function(elem, t1, t2){
    if (elem.innerHTML === t1) {
      elem.innerHTML = t2;
    } else {
      elem.innerHTML = t1
    }
  };

  let toggleState = function (elem, one, two) {
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
  };

  // document.querySelector('[data-role="HIDEFILTERS"]').onclick = function () {
  //   toggleText(this.querySelector('span'), 'Hide all filters', 'Show all filters');
  //
  //   let test = document.querySelectorAll('[data-role="TOGGLELIST"]');
  //   for (var e of test) {
  //     toggleState(e, 'closed', 'open');
  //   }
  // };

  let sidebarArray = document.querySelectorAll('[data-role="TOGGLE"]');

  Array.from(sidebarArray).forEach(a =>
    a.onclick = function () {
      console.log();
      toggleState(this.parentElement.nextElementSibling, 'closed', 'open');
    }
    // console.log(a.parentElement)
  )

  // $('[data-role*="HIDEFILTERS"]').on('click', function(){
  //   let test = document.querySelectorAll('[data-role="TOGGLELIST"]');
  //   for (var e of test) {
  //     console.log(e);
  //     toggleState(e, 'closed', 'open');
  //   }
  // });

  // $('[data-role*="TOGGLE"]').on('click', function(){
  //
  // });

  // $('[data-role*="TOGGLE"]').on('click', function () {
  //   $(this).parent().next().toggleClass('hidden')
  // });

  $('[data-role*="OPENFILTER"]').on('click', function(){
    $('body').addClass('overflow-hidden');
    $('[data-role*="OVERLAY"]').addClass('open').removeClass('closed')
    $('[data-role*="MOBILESIDEBAR"]').addClass('open').removeClass('closed')
  })

  $('[data-role*="OVERLAY"]').on('click', function(){
    $('body').removeClass('overflow-hidden');
    $('[data-role*="MOBILESIDEBAR"]').addClass('closed').removeClass('open')
    $(this).addClass('closed').removeClass('open')
  })


  $('[data-role*="COUNTER"]').hide();


  $('[data-role*="CHECKBOX"]').each(function( ) {
    $(this).on('click', function(){
      var count = document.querySelectorAll('[data-role*="CHECKBOX"]:checked').length;
      $('[data-role*="COUNTER"]').show();
      $('[data-role*="COUNTER"]').html(count);
      if (count == 0) {
        $('[data-role*="COUNTER"]').hide();
      }
    })
  });

  // document.querySelector('.toggle').addEventListener("click", purchase, false)
  //
  // function purchase() {
  //   console.log('toggle');
  //   // document.querySelector('.purchase').classList.toggle('active');
  //   // if (document.querySelector('.purchase').classList.contains('active')) {
  //   //   document.querySelector('#purchase').innerHTML = 'Close ↑'
  //   // } else {
  //   //   document.querySelector('#purchase').innerHTML = 'Purchase ↓'
  //   // }
  // }
});
