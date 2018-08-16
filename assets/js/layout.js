var config = {
        content: [{
            type:'component',
            componentName: 'Dashboard',
            componentState: { text: 'Component 1' }      
    }],
    width: 1050
};

var myLayout = new window.GoldenLayout( config, $('#content') );

myLayout.registerComponent( 'Dashboard', function( container, state ){
    $('#id_').appendTo(container.getElement());
});

myLayout.init();

var addItem = function( title, id ) {
    var newItemConfig = {
        title: title,
        type: 'component',
        componentName: title,
        componentState: { id: id }
    };
myLayout.root.contentItems[ 0 ].addChild( newItemConfig );
};

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
