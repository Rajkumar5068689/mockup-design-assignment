// $('.wizard li').click(function() {
//     $(this).prevAll().addClass("completed");
//      $(this).nextAll().removeClass("completed")
   
//    });

var selectedRow = null;
let pageIndex = 0;

function onFormSubmit() {
    let a = document.getElementById("type").value;
    let b= document.getElementById("assign").value;
    if( a=="" || b==""){
        alert("Please Review Your Mandatory Fields")
        resetForm();
        return

    }
    
        var formData = readFormData();
       
        if (selectedRow == null)
        
            insertNewRecord(formData);
        else
        
            updateRecord(formData);
         
        resetForm();

}

function readFormData() {
    var formData = {};
    formData["type"] = document.getElementById("type").value;
    formData["assign"] = document.getElementById("assign").value;
    formData["start_date"] = document.getElementById("start_date").value;
    formData["end_date"] = document.getElementById("end_date").value;
    formData["remind_date"] = document.getElementById("remind_date").value;
    formData["sub"] = document.getElementById("sub").value;
    formData["detail"] = document.getElementById("detail").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
     let index = document.getElementsByTagName('table')[0].childElementCount;
     console.log(index);
    var newRow = table.insertRow(table.length);
    row = table.parentElement.parentElement;
    cell1 = newRow.insertCell(0);
    cell1.innerHTML ='';
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.type;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.assign;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.start_date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.end_date
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.remind_date
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.sub
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.detail
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)"><div class="edit"><i class="far fa-edit"></i></div></a>
       <a onClick="onDelete(this)"><div class="trash"><i class="fas fa-trash-alt"></i></div></a>`;
       console.log(newRow);
       console.log(table);
}
function resetForm() {
    document.getElementById("type").value = "";
    document.getElementById("assign").value = "";
    document.getElementById("start_date").value = "";
    document.getElementById("end_date").value = "";
    document.getElementById("remind_date").value = "";
    document.getElementById("sub").value = "";
    document.getElementById("detail").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("type").value = selectedRow.cells[1].innerHTML;
    document.getElementById("assign").value = selectedRow.cells[2].innerHTML;
    document.getElementById("start_date").value = selectedRow.cells[3].innerHTML;
    document.getElementById("end_date").value = selectedRow.cells[4].innerHTML;
    document.getElementById("remind_date").value = selectedRow.cells[5].innerHTML;
    document.getElementById("sub").value = selectedRow.cells[6].innerHTML;
    document.getElementById("detail").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.type;
    selectedRow.cells[2].innerHTML = formData.assign;
    selectedRow.cells[3].innerHTML = formData.start_date;
    selectedRow.cells[4].innerHTML = formData.end_date;
    selectedRow.cells[5].innerHTML = formData.remind_date;
    selectedRow.cells[6].innerHTML = formData.sub;
    selectedRow.cells[7].innerHTML = formData.detail;
}

function onDelete(td) {

    if (confirm('Are you sure to delete this record ?')) {
        alert("The given Data is Deleted")
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}





// jQuery( document ).ready(function() {
        
//     var back =jQuery(".prev");
//     var next = jQuery(".next");
//     var steps = jQuery(".step");
    
//     next.bind("click", function() { 
//         jQuery.each( steps, function( i ) {
//             if (!jQuery(steps[i]).hasClass('current') && !jQuery(steps[i]).hasClass('done')) {
//                 jQuery(steps[i]).addClass('current');
//                 jQuery(steps[i - 1]).removeClass('current').addClass('done');
//                 return false;
//             }
//         })      
//     });
//     back.bind("click", function() { 
//         jQuery.each( steps, function( i ) {
//             if (jQuery(steps[i]).hasClass('done') && jQuery(steps[i + 1]).hasClass('current')) {
//                 jQuery(steps[i + 1]).removeClass('current');
//                 jQuery(steps[i]).removeClass('done').addClass('current');
//                 return false;
//             }
//         })      
//     });

// })