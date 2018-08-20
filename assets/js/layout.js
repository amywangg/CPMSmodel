var name = 'Dashboard'

var config = {
    content: [{
        type: 'row',
          isClosable: false,
          showCloseIcon: false,
        content: [{
            type:'component',
            componentName: name,
            componentState: { id: 'lay-j1_1' }      
    }],
    id: 'lay-j1_1',
}]
};

var myLayout = new window.GoldenLayout( config, $('#content') );

myLayout.registerComponent( name, function( container, state ){
    container.getElement().attr('id',state.id.toString())
});

myLayout.init();
 // display image when clicked
 var pastID ='none'

var addItem = function( title, id ,img) {

    if(pastID=='none'){
        render(img,id)
    }else{
        if (document.getElementById('lay-'+id) && id!='j1_1') {
            var switchTab = myLayout.root.getItemsById('lay-'+id.toString())[0];
            myLayout.root.contentItems[0].setActiveContentItem(switchTab);
        }else if(id=='j1_1'){
            console.log('Dashboard exists')
        }else{
            var newItemConfig = {
                title: title,
                type: 'component',
                componentName: 'Dashboard',
                componentState: { id: 'lay-'+id.toString() },
                id: 'lay-'+id.toString()
            };
        myLayout.root.contentItems[ 0 ].addChild( newItemConfig );
        render(img,id)
        }
    }
};



 function render (img, id){
console.log(pastID)

$('.container').css('display','none')//hide all table results
   if (pastID=='none'){
    $("#id_def").clone().attr("id", "id_" + id).insertAfter('#lay-'+id);
    $("#id_"+id).find("#imgBody").attr("id", "imgBody" + id)
    $("#id_"+id).find('#contentImg').attr("id", "contentImg" + id)
     pastID=id;
     $('#id_'+id).appendTo('#lay-j1_1')
//    }else if (document.getElementById('id_'+id)) {
//      alert('this record already exists');
   } else {
     // do stuff
     $("#id_def").clone().attr("id", "id_" + id).insertAfter('#lay-'+id);
     $("#id_"+id).find(".imgBody").attr("id", "imgBody" + id)
     $("#imgBody"+id).find('#contentImg').attr("id", "contentImg" + id)
     pastID=id;
     $('#id_'+id).appendTo('#lay-'+id)
   }
   $('#contentImg'+id).attr('src', 'assets/img/' + img)
   $('#id_def').css('display','none')//hide all table results
   $('#id_'+id).css('display','block')
   $('#imgBody'+id).css('display','block')
 }

// formatting for resizing layout
$(window).resize(function () {
    myLayout.updateSize();
    });

    $('#split-bar').mousedown(function (e) {
        e.preventDefault();
        $(document).mousemove(function (e) {
        e.preventDefault();
        myLayout.updateSize();
        });
    });
