homeTree();
// Tree changing actions
$('#homeTree').on("changed.jstree" , function (e, data) {
    var selectedNode = data.instance.get_node(data.selected).text;
    var id = data.selected;

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
    // var parentNode = data.instance.get_node(data.node.parent).text;
    if(id == 'j1_1'){
        addItem(title,id,'dashboard.png')
    }else if(id == 'j1_2'){
      addItem(title,id,'bulletin.png')
    }else if(id == 'j1_3'){
        addItem(title,id,'releasenotes.png')
    }else if(id == 'j1_4'){
        addItem(title,id,'newideas.png')
    }else if(id == 'j1_5'){
        addItem(title,id,'workshop.png')
    }else if(id == 'j1_6'){
        addItem(title,id,'home.png')
    }else if(id == 'j1_7'){
        addItem(title,id,'dailynews.png')
    }
  });
// All of the home data
function homeTree(){
    refresh('#homeTree')
    $('.treeview').not('#homeTree').css('display','none');
    $('#homeTree').css('display','block');
      $('#homeTree').jstree({
        "plugins" : [ "themes", "json_data", "ui", "types", "state" ],
        'core' : {
          'data' : [
            {
                "state": {
                    "selected": true
                },
                "text": "Dashboard",
                "icon": "jstree-file"
            },
            {
                "text": "Bulletin",
                "icon": "jstree-file"
            },
            {
                "text": "Release Notes",
                "icon": "jstree-file"
            },
            {
                "text": "New Ideas",
                "icon": "jstree-file"
            },
            {
                "text": "Workshops",
                "icon": "jstree-file"
            },
            {
                "text": "News",
                "icon": "jstree-folder",
                "children": [
                    {
                        "text": "Daily News",
                        "icon": "jstree-file"
                    },
                    {
                        "text": "Stocks",
                        "icon": "jstree-folder",
                        "children": [
                            {
                                "text": "Added",
                                "icon": "jstree-folder",
                                "children": [
                                    {
                                        "text": "Full Fundamental",
                                        "icon": "jstree-file"
                                    },
                                    {
                                        "text": "Estimate Coverage Only",
                                        "icon": "jstree-file"
                                    }
                                ]
                            },
                            {
                                "text": "Removed",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "Splits",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "Pending Takeover Offers",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "Spin-Offs & Mergers",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "Name, Symbol & CUSIP Changes",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "Industry Group Changes",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "Index Membership Changes",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "Year-Ends Rolled Forward",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "Special Notes",
                                "icon": "jstree-file"
                            }
                        ]
                    },
                    {
                        "text": "Data",
                        "children": [
                            {
                                "text": "New Raw Data Items",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "New Variables",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "New Industry Items",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "New Market Items",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "New Broker Items",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "New Graph Lines",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "New Benchmark Portfolio",
                                "icon": "jstree-file"
                            }
                        ]
                    },
                    {
                        "text": "Broker",
                        "children": [
                            {
                                "text": "New Broker",
                                "icon": "jstree-file"
                            },
                            {
                                "text": "Brokers Removed",
                                "icon": "jstree-file"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "Publications",
                "icon": "jstree-folder",
                "children": [
                    {
                        "text": "Quarterly Reviews",
                        "icon": "jstree-file"
                    }
                ]
            },
            {
                "text": "Learning Centre",
                "icon": "jstree-file"
            }
        ]
        }
      });
    }