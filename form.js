 const fs = require ('fs');
const CreateCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = CreateCsvWriter;
const csv = require('csv-parser');
const $ = require('jquery');
let row_data = [];
({
    path: 'enrollment.csv',
    header: 
    [
        {id: 'ID', title: 'ID'},
        {id:'first_name', title:'First_Name'},
        {id: 'surname', title:'Surname'},
        {id:'age',title:'Age'},
        {id:'phone', title:'Phone'}
    ]
});
const btn_enroll = document.getElementById ('btn_enroll');
const btn_read = document.getElementById('btn_read');
const txtID = document.getElementById ('ID');
const txtFirstName = document.getElementById('first_name');
const txtSurname = document.getElementById('surname');
const txtAge = document.getElementById('age');
const txtPhone = document.getElementById('phone');

btn_enroll.addEventListener('click', function(e) {
    e.preventDefault();   
    fs.open("./alumnos.csv", "a", function (err, fd){
      if (err )
      {
          console.log ("Error al abrir el archivo");
          console.log (err);
          return;
      }
      const linea = `\n${txtID.value}, ${txtFirstName.value}, ${txtSurname.value}, ${txtAge.value}, ${txtPhone.value}`
      fs.write(fd, linea,
      function(err, written, string){
      if (err)
      {
              console.log ('Error al escirbir los datos');
              console.log (err);
              return;
      }
      console.log ("Se escribieron los datos exitosamente");
      });
});
})

btn_read.addEventListener('click', function(e)
{
    e.preventDefault()
    //fs.createReadStream('enrollment.csv')
    //.pipe(csv())
    //.on('data',(row) => {
      //  console.log (row);
    //})
    //.on ('end', () => {
      //  console.log ('it worked!')
    //})
    
        
    //testing
    //function parseCsv (file, delimiter, callback)
    //{
       //var reader = new FileReader();
        //reader.onload = function()
        //{
            //var lines = this.result.split ('\n');
            //var result = lines.map(function(line)
                //{
              //      return line.split (delimiter);
            //    });
          //      callback(result);
        //    };
      //      reader.readAsText(file)
    //}
    //testing 2
    var data = fs.readFileSync('enrollment.csv')
        .toString()
      .split('\n')
      .map (e => e.trim())
      .map (e => e.split(',').map(e => e.trim()));
    console.log (data);
    let data_row= JSON.stringify(data);
    console.log (data_row)
    document.write(data_row);
   
});
    //var table = '';
    //for (var row = 0; row<1; row++)
    //{
        //table += '<tr>'
        //for (var cells=0 ; cells<data_row.length; cells ++)
        //{
          //  table += '<td>' + data_row[cells] + '</td>';
        //}
      //  table += '</tr>'
    //}
    //document.write('</table>' +  table + '</table>');

    //testing 3
    //function opsi(data)
    //{
      //  var allRows = data.split(/\r?\n|\r/);
        //var table = "<table>"
        //for (var singleRows = 0;singleRows.length; singleRows ++ )
        //{
          //  if (singleRows === 0 )
            //{
             //   table += '<thead>'
               // table += '<tr>'
            //}
            //else 
            //{
              //  table += '<tr>';
            //}
            //var rowCells = allRows[singleRows].split(',');
            //for (var rowSingleCell = 0; rowSingleCell.length; rowSingleCell ++)
            //{
              //  if (singleRows === 0 )
                //{
                  //  table += '<th>';
                   // table += rowCells[rowSingleCell];
                    //table += '</th>';
               // }
                //else
                //{
                  //  table = '<td>';
                    //table = rowCells[rowSingleCell];
                    //table += "</td>";
                //}
           // }
            //if (singleRows === 0)
            //{
              //  table += '</tr>';
               // table += "</thead>";
                //table += "</tbody>";
            //}
            //else 
            //{
              //  table += "</tr>";

            //}
        //}
        //table += "</tbody>";
        //table += "</table>";
        //document.write(table)
    //}
    //$.ajax 
    //({
      //  url: "enrollment.csv",
        //dataType: "text",
    //}).done (opsi);
