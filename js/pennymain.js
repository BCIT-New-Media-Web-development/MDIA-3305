function search(){
    var keyword = document.querySelector('#key-word').value;

    searchFilter = '&query=' + keyword;
    
    loadList();
}

function loadList(){
    $.ajax('AIzaSyCG2wiBBDujsOb_oNgDAnMhkvO_BrPkDwc' + searchFilter)
    .done(function(){
        addToContainer();
    })
}

function addToContainer(){
  console.log('t1');
}