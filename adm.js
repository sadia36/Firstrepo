var dbStudents = firebase.database().ref('Students')
function submit() {
    var rollNo = document.getElementById("txtRollno").value
    var name = document.getElementById("txtName").value
    var fName = document.getElementById('txtFname').value
    var CNIC = document.getElementById('txtCNIC').value
    var cityVal, city
    var ddlcity = document.getElementById('ddlcity')
    cityVal = ddlcity.options[ddlcity.selectedIndex].value
    city = ddlcity.options[ddlcity.selectedIndex].text
    // console.log('Roll:', rollNo)
    // console.log('Name:',name)
    // console.log('fathers Name:', fName)
    // var objSt =new Objectstudent(rollNo,name,fName)

    var eduction =[]
    var sscS=document.getElementById('chkBoxSSCS')
    var sscG=document.getElementById('chkBoxSSCG')
    var sscC =document.getElementById('chkBoxSSCC')
    var hscPE=document.getElementById('chkBoxHSCP.E')
    var hscME=document.getElementById('chkBoxHSCM.E')
    if (sscS.checked==true){
        eduction.push('SSC(science)')
    }
    if (sscG.checked){
        eduction.push('sscgenerl')
    }
    if(sscC.checked){
        eduction.push('ssccomputer')
    }
    if(hscPE.checked){
        eduction.push('hsc(P.E)')
    }
    if(hscME.checked){
        eduction.push('hsc(M.E)')
    }

    var objSt = new Objectstudent()
    objSt.RollNo = rollNo
    objSt.Name = name
    objSt.FatherName = fName
    objSt.CNIC = CNIC
    objSt.Gender = gender
    objSt.Domicile = domicile
    objSt.Eduction = eductionlevel
    objSt.CityVal = cityVal
    objSt.City = city
    objSt.Qualification= eduction
    var key =dbStudents.push().key
    objSt.Key=key
    dbStudents.child(key).set(objSt)
    console.log(objSt)


}

function Objectstudent(rollNo, name, fName, CNIC, gender, domicile, eductionlevel, cityVal, city,qualification,key) {
    this.RollNo = rollNo
    this.Name = name
    this.FatherName = fName
    this.CNIC = CNIC
    this.Gender = gender
    this.Domicile = domicile
    this.Eduction = eductionlevel
    this.CityVal = cityVal
    this.City = city
    this.Qualification = qualification
    this.Key=key 

}

var gender = "male"
function funcMale() {
    gender = "male"
}
function funcFemale() {
    gender = "female"
}


var domicile = "Rural"
function funcRural() {
    domicile = "rural"
}
function funcUrban() {
    domicile = "urban"
}

var eductionlevel = "matric"

function funcMatric() {
    eductionlevel = " matric"
}

function funcInter() {
    eductionlevel = "inter"
}

function funcGradution() {
    eductionlevel = "gradution"
}



