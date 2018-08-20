const jstree = require('jstree');
const fs = require('fs');

$.getScript('assets/js/homeTree.js', () => {});
$.getScript('assets/js/stratTree.js', () => {});


// read tree files from JSON not working currently
  function startup (){
    $.getScript('config/homeTree.js', () => {});
    $('#start').select();
    fs.readFile('config/homeTree.json','utf8',function(err,data){
      if (err) throw err;
      var obj = JSON.parse(data)
    });
    console.log('test home')
  }
   

    function refresh(tree){
      $(tree).jstree("refresh");
      }


  

  
    
  
  
 