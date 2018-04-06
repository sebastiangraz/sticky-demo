document.addEventListener('DOMContentLoaded', function () {

  // select the target node
  let target = document.body;
  // create an observer instance
  let observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          // console.log(mutation.target.dataset.state);
          if (mutation.target.dataset.state == 'open') {
            mutation.target.parentElement.querySelector('[data-fa-i2svg]').classList.add('fa-angle-up');
          } else {
            mutation.target.parentElement.querySelector('[data-fa-i2svg]').classList.add('fa-angle-down');
          }
      });
  });

  // configuration of the observer:
  let config = { attributes: true, childList: true, characterData: true, subtree: true }

  let togglelist = document.querySelectorAll('[data-role="TOGGLELIST"]');
  for (var i = 0; i < togglelist.length; i++) {
    observer.observe(togglelist[i], config);
  }

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

  document.querySelector('[data-role="TOGGLEFILTERS"]').onclick = function () {
    $(this)
       .find('[data-fa-i2svg]')
       .toggleClass('fa-eye')
       .toggleClass('fa-eye-slash');
    toggleText(this.querySelector('span'), 'Hide all filters', 'Show all filters');
    let sidebarArray = document.querySelectorAll('[data-role="DESKTOPSIDEBAR"] [data-role="TOGGLELIST"]');
    toggleState(this, 'closed', 'open');
    if(this.getAttribute('data-state') === 'closed') {
      Array.from(sidebarArray).forEach(a =>
        // console.log(a)
        a.setAttribute('data-state', 'closed')
      )
    } else {
      Array.from(sidebarArray).forEach(a =>
        // console.log(a)
        a.setAttribute('data-state', 'open')
      )
    }
  };


  let sidebarArray = document.querySelectorAll('[data-role="TOGGLE"]');

  Array.from(sidebarArray).forEach(a =>

    a.onclick = function () {
      toggleState(this.parentElement.nextElementSibling, 'closed', 'open');
    }
    // console.log(a.parentElement)
  )

  $('[data-role*="OPENFILTER"]').on('click', function(){
    $('body').addClass('overflow-hidden');
    $('[data-role*="OVERLAY"]').addClass('open').removeClass('closed')
    $('[data-role*="MOBILESIDEBAR"]').addClass('open').removeClass('closed')
  })

  $('[data-role*="CLOSESIDEBAR"]').on('click', function(){
    $('body').removeClass('overflow-hidden');
    $('[data-role*="MOBILESIDEBAR"]').addClass('closed').removeClass('open')
  })

  $('[data-role*="OVERLAY"]').on('click', function(){
    $('body').removeClass('overflow-hidden');
    $('[data-role*="MOBILESIDEBAR"]').addClass('closed').removeClass('open')
    $(this).addClass('closed').removeClass('open')
  })

  $('[data-role*="COUNTER"]').hide();

  $('[data-role*="CHECKBOX"]').each(function( ) {
    $(this).on('click', function(){
      var count = document.querySelectorAll('[data-role*="MOBILESIDEBAR"] [data-role*="CHECKBOX"]:checked').length;
      $('[data-role*="COUNTER"]').show();
      $('[data-role*="COUNTER"]').html(count);
      if (count == 0) {
        $('[data-role*="COUNTER"]').hide();
      }
    })
  });

});
