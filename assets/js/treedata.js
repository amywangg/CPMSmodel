const jstree = require('jstree');
const fs = require('fs');
$.getScript('config/homeTree.js', () => {});
$.getScript('config/stratTree.js', () => {});

  function startup (){
    $.getScript('config/homeTree.js', () => {});
    $('#start').select();
    fs.readFile('config/homeTree.json','utf8',function(err,data){
      if (err) throw err;
      var obj = JSON.parse(data)
    });
    console.log('test home')
   
    
  }
    // display page when clicked
    function render (img){
      $('#results').css('display','none')
      $('.imgBody').css('display','block')
      $('#contentImg').attr('src', 'assets/img/' + img)
    }

    function refresh(tree){
      $(tree).jstree("refresh");
      }

  

  
    
  
  
 