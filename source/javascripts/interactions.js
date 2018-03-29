document.addEventListener('DOMContentLoaded', function () {

  $('[data-role*="TOGGLE"]').on('click', function () {
    $(this)
      .find('[data-fa-i2svg]')
      .toggleClass('fa-angle-up')
      .toggleClass('fa-angle-down');
    $(this).parent().next().toggleClass('hidden')
  });

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
