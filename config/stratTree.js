// Tree changing actions
    $('#stratTree').on("changed.jstree", function (e, data) {
        console.log(data.selected);
        var str = data.selected;
        if(str == 'j2_1'){
          render ('stratQuick.png')
        }else if(str == 'j2_2'){
          console.log(true)
          render ('myStrat.png')
        }else if(str == 'j1_3'){
          render ('releasenotes.png')
        }else if(str == 'j2_4'){
          getRequest ('https://www.google.ca')
        }else if(str == 'j1_5'){
          render ('workshop.png')
        }else if(str == 'j1_6'){
          render ('home.png')
        }else if(str == 'j1_7'){
          render ('dailynews.png')
        }
      });
// All the tree data
function stratTree(){
    refresh('#stratTree')
    $('.treeview').not('#stratTree').css('display','none');
    $('#stratTree').css('display','block');
    $('#stratTree').jstree({
      "plugins" : [ "themes", "json_data", "ui", "types", "state" ],
      'core' : {
        'data' : [
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
                  },{
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
                },{
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
  }});
}