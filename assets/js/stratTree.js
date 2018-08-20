// Tree changing actions
var count =0;
$('#stratTree').on("changed.jstree", function (e, data) {
    var selectedNode = data.instance.get_node(data.selected).text;
    var id = data.selected;
    if (count==0){

    }
    if (data.instance.get_node(data.node).text != undefined) {
        if(data.instance.get_node(data.node.parent).text != undefined){
            var parentNode = data.instance.get_node(data.node.parent).text
            var title = parentNode + "." + selectedNode;
        }else{
            var title = selectedNode;
        }
    }else {
        var title = 'CPMS';
    }

    if (id == 'j2_1') {
        addItem(title,id,'stratQuick.png')
    } else if (id == 'j2_2') {
        console.log(true)
        addItem(title,id,'myStrat.png')
    } else if (id == 'j2_3') {
        addItem(title,id,'releasenotes.png')
    } else if (id == 'j2_4') {
        $('.imgBody').css('display', 'none')
        getRequest('https://www.google.ca', testBuy, title, id)

    } else if (id == 'j2_5') {
        $('.imgBody').css('display', 'none')
        getRequest('https://www.google.ca', testSell, title, id)

    } else if (id == 'j2_6') {
        $('.imgBody').css('display', 'none')
        // $('.imgBody').css('display','none')
        createWin(title)
    } else if (id == 'j2_7') {
        $('.imgBody').css('display', 'none')
        getRequest('https://www.google.ca', test2Buy, title, id)

    } else if (id == 'j2_8') {
        $('.imgBody').css('display', 'none')
        getRequest('https://www.google.ca', test2Sell, title, id)

    } else if (id == 'j2_10') {
        $('.imgBody').css('display', 'none')
        getRequest('https://www.google.ca', testSell, title, id)

    } else if (id == 'j2_11') {
        $('.imgBody').css('display', 'none')
        getRequest('https://www.google.ca', testSell, title, id)

    }
});

// All the tree data
function stratTree() {
    refresh('#stratTree')
    $('.treeview').not('#stratTree').css('display', 'none');
    $('#stratTree').css('display', 'block');
    $('#stratTree').jstree({
        "plugins": ["themes", "json_data", "ui", "types", "state"],
        'core': {
            'data': [
                {
                    "state": {
                        "selected": true
                    },
                    "text": "Quick Start",
                    "icon": "jstree-file"
                },
                {
                    "text": "My Strategies",
                    "icon": "jstree-folder",
                    "children": [
                        {
                            "text": "Test",
                            "icon": "jstree-folder",
                            "children": [
                                {
                                    "text": "Buy",
                                    "icon": "jstree-file"
                                },
                                {
                                    "text": "Sell",
                                    "icon": "jstree-file"
                                }
                            ]
                        }, {
                            "text": "Test2",
                            "icon": "jstree-folder",
                            "children": [
                                {
                                    "text": "Buy",
                                    "icon": "jstree-file"
                                },
                                {
                                    "text": "Sell",
                                    "icon": "jstree-file"
                                }
                            ]
                        }, {
                            "text": "Test3",
                            "icon": "jstree-folder",
                            "children": [
                                {
                                    "text": "Buy",
                                    "icon": "jstree-file"
                                },
                                {
                                    "text": "Sell",
                                    "icon": "jstree-file"
                                }
                            ]
                        }
                    ]
                }]
        }
    });
}