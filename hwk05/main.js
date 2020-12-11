// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemodal")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function readData() {
  // test
  console.log('reading data');

    //checking off a todo
    $(document).ready(function() {
        $("ul").on("click", "li", function() {
          $(this).toggleClass("completed");
      });
  
  //local storage

  //checking off todo - local storage
  var activeElement =  $(this).text();
  console.log(activeElement);
  localStorage.setItem("completed", activeElement);
  });

  $(document).ready(function(){
      $("ul li").each(function( index ) {
          if($(this).text() == localStorage.getItem("completed")){
            $(this).addClass("completed");
          }
      });
  });
  
  // saving text from input and list items - local storage
    $(document).ready(function() {
      var $button = $('.add-item');
      var $input = $('.input');
      var $list = $('.list');
  
  // get items from local storage
    if (localStorage.getItem('user-input')) {
    // select where the storage will be
    $list.html(localStorage.getItem('user-input'));
    }
  
  // add item 
    $button.on('click', function() {
  
    $list.append('<li>' + $input.val() + '<span class ="close"> x</span></li>');
  
    // set to html inside the list
    localStorage.setItem('user-input', $list.html());

    // log added task items to console
    console.log($('input').val())
  
    // return array of value (task items)
    $input.val('');
  
    });
  
    // remove item
    $('.list').on('click', '.close', function() {
    $(this).parent().remove();
    // save changes to local storage
    localStorage.setItem('user-input', $list.html());
    });
  
    });
}