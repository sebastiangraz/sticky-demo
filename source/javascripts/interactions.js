document.addEventListener('DOMContentLoaded', function () {


  $('[data-role*="TOGGLE"]').on('click', function () {
    $(this)
      .find('[data-fa-i2svg]')
      .toggleClass('fa-angle-up')
      .toggleClass('fa-angle-down');
    $(this).parent().next().toggleClass('hidden')
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
