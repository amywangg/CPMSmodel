
const GoldenLayout = require('golden-layout')
var config, compName;


function createWin(title){
    console.log('hi')
    compName=title;
    config = {
        settings:{
            hasHeaders: true,
            constrainDragToContainer: true,
            reorderEnabled: true,
            selectionEnabled: false,
            popoutWholeStack: false,
            blockedPopoutsThrowError: true,
            closePopoutsOnUnload: true,
            showPopoutIcon: true,
            showMaximiseIcon: true,
            showCloseIcon: true
        },
        content:[{
            type: 'row',
            content: [{
                type:'component',
                componentName: compName,
                componentState: { text: 'Component 1' },
        }]
        }]
      };
      var myLayout = new GoldenLayout( config, $('#content') );
  
      myLayout.registerComponent( compName, function( container, state ){
        $('#results').appendTo('.lm_content')      
    });
      
      myLayout.init();

      
      $(window).resize(function () {
        myLayout.updateSize();
        });
}

var addMenuItem = function( title, text ) {
    var element = $( '<li>' + text + '</li>' );
    $( '#menuContainer' ).append( element );

   var newItemConfig = {
        title: title,
        type: 'component',
        componentName: 'example',
        componentState: { text: text }
    };
  
    myLayout.createDragSource( element, newItemConfig );
};
