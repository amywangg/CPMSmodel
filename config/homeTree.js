homeTree();
// Tree changing actions
$('#homeTree').on("changed.jstree" , function (e, data) {
    console.log(data.selected);
    var str = data.selected;
    if(str == 'j1_1'){
      console.log(true)
      render ('dashboard.png')
    }else if(str == 'j1_2'){
      console.log(true)
      render ('bulletin.png')
    }else if(str == 'j1_3'){
      render ('releasenotes.png')
    }else if(str == 'j1_4'){
      render ('newideas.png')
    }else if(str == 'j1_5'){
      render ('workshop.png')
    }else if(str == 'j1_6'){
      render ('home.png')
    }else if(str == 'j1_7'){
      render ('dailynews.png')
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