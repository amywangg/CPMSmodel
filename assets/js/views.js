// connect the results 
$.getScript('config/testAPI.js', () => { });

$('.navTr').hover(() => {
  $(this).children().css("background", "#e4662c",
    "box-shadow", "0px 0px 10px 2px rgba(119, 119, 119, 0.5")
})
// functions for the content area (APIS)
var pastID = 'none', arrayID=[];
// Post Request and format data to be put in table
function getRequest(urlString, data, title, id) {
  var repeatID =false;
  $.ajax({
    url: urlString,
    success: function (body) {
      var idDiv = '.id_';

      if (pastID == 'none') { // first iteration 
        // change all of the attr of the elements
        $(idDiv).find("#title").attr("id", "title" + id); //change title id
        $(idDiv).find("#results").attr("id", "results" + id); //change results id
        $(idDiv).find("#getResults").attr("id", "getResults" + id);//change getResults id
      
        // generate the table
        var table = arrayToTable(data, { thead: true, attrs: { id: 'resultTab' + id, class: 'table table-dark table-hover table-striped  thead-light' } })
        $('#getResults' + id).append(table); //add the table to the getResults area
        $('#title' + id).text(title) //change the title text
        $('#results'+id).css('display', 'block'); 

        pastID = id; // set the previous id to track
        arrayID.push(id)
      } else { //changing pages or loading new data
        arrayID.forEach((e)=>{
          if(e.toString() == id){
            console.log('repeated!')
            repeatID=true
            $('.container').not('#results'+id).css('display', 'none');
            $('#results'+id).css('display', 'block');
            $('#id_').css('display', 'block');
          }
        });

        console.log(repeatID)
        if(repeatID==false){
          tableDiv(id)
          $('#title' + id).text(title)
          var table = arrayToTable(data, { thead: true, attrs: { id: 'resultTab' + id, class: 'table table-dark table-hover table-striped  thead-light' } })
          $('#getResults' + id).append(table);
          $('.container').not('#results'+id).css('display', 'none');
          $(idDiv).css('display', 'block');
          pastID = id;
          arrayID.push(id)
        }
        
      }
    },
    error: (err) => console.log("ERROR: " + JSON.stringify(err))
  });
}

function tableDiv(id) {
  console.log(pastID + ' tableDiv()')
  var resultDiv = '#results' + id;
  // clone previous table and change its attributes
  $("#results"+pastID).clone().attr('id', 'results'+id).insertAfter("#results" + pastID);
  $(resultDiv).find("#title"+pastID).attr("id", "title" + id);
  $(resultDiv).find("#getResults" + pastID).attr("id", "getResults" + id);
  $(resultDiv).find("#resultTab" + pastID).remove();
}

var arrayToTable = function (results, options = {}) {
  var header = [], format, data = [], counter = 0;

  $.each(results.split('" "'), function (index, item) {
    counter++;
    if (counter == 1) {
      header = item.split('","')
      header[0] = header[0].replace(/['"]+/g, '');
    } else {
      format = item.split('","')
      format.forEach(element => {
        data.push(element)
      });
    }
  });

  var table = $('<table "/>'),
    rows = [],
    row,
    i, j,
    defaults = {
      attrs: {} // attributes for the table element
    }

  options = $.extend(defaults, options);
  table.attr(options.attrs)
  var rowNum = 0;

  // loop through all the rows, we will deal with tfoot and thead later
  for (i = 0; i < (data.length / header.length) + 1; i++) {
    if (i == 0) {
      row = $('<tbody> <tr />');
    } else {
      row = $('<tr />');
    }

    for (j = 0; j < header.length; j++) {
      if (i == 0) {
        row.append($('<th scope="col"/>').html(header[j]));

      } else {
        row.append($('<td />').html(data[rowNum - (header.length)]));
      }
      rowNum++;
    }
    rows.push(row);
  }
  rows.push("</tbody>")
  // add all the rows
  table.append('<TableHeaderColumn dataField="any" dataFormat={indexN}>#</TableHeaderColumn>')
  for (i = 0; i < (data.length / header.length) + 1; i++) {
    table.append(rows[i]);
  };
  return table;
}
