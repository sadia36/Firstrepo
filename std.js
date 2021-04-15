var dbStudents = firebase.database().ref('Students')
var stList = []

dbStudents.on('child_added', function (getData) {
    console.log('yes')
    var abc = getData.val()
    stList = []
    stList.push(abc)
    console.log(stList)
    fillTable()
})
function fillTable() {
    console.log('fired')
    console.log(stList)
    var tbl = document.getElementById('tbl')
    for (i = 0; i < stList.length; i++) {
        var tr = document.createElement('tr')
        //var tr =document.getElementById('tr')
        var td = document.createElement('td')
        td.innerHTML = stList[i]['Name']
        tr.appendChild(td)

        var btnEdit = document.createElement('button')
        btnEdit.innerHTML = 'Edit'
        btnEdit.setAttribute('id', stList[i]['Key'])
        btnEdit.setAttribute("onclick", "functionEdit(this)")

        var td = document.createElement('td')
        td.appendChild(btnEdit)

        tr.appendChild(td)

        tbl.appendChild(tr)

    }
}
function functionEdit(e) {
    console.log(e.id)
}



