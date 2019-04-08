function checkInputCompanyName() {
    var data = document.getElementById("name").value;
    if (data.charAt(data.length-1) == parseInt(data.charAt(data.length-1))) {
        document.getElementById("name").value = data.substring(0,data.length-1);
    }
}

function checkInputNumber(){
    var data = document.getElementById("ID_partner").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("ID_partner").value = data.substring(0,data.length-1);
    }
}

function checkInputTelephone(){
    var data = document.getElementById("telephone").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("telephone").value = data.substring(0,data.length-1);
    }
}

function checkInputFax(){
    var data = document.getElementById("fax").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("fax").value = data.substring(0,data.length-1);
    }
}

function checkText() {
    var dataNumberPartner = document.getElementById("ID_partner").value;
    var dataCompany = document.getElementById("name").value;
    var dataTel = document.getElementById("telephone").value;
    var dataEmail = document.getElementById("email").value.indexOf('@');
    var dataAddress = document.getElementById("address").value;
    var dataFax = document.getElementById("fax").value;
    var dataType = document.getElementById("partner_type").value;
    
    if(dataNumberPartner == ""){
        alert("กรุณากรอกรหัสคู่ค้า");
    }
    else if(dataCompany == ""){
        alert("กรุณากรอกชื่อบริษัท");
    }
    else if(dataTel.length != 10 || dataTel != parseInt(dataTel)){
        alert("เบอร์โทรศัพท์ต้องเป็นตัวเลขและมีจำนวน 10 หลัก");
    }
    else if(dataEmail == -1){
        alert("Emailผิดพลาด");
    }
    else if(dataAddress == ""){
        alert("กรุณากรอกที่อยู่");
    }
    else if(dataFax.length != 9 || dataFax != parseInt(dataFax)){
        alert("เบอร์Faxต้องเป็นตัวเลขและมีจำนวน 9 หลัก");
    }
    else if(dataType == "choose"){
        alert("กรุณาเลือกประเภทคู่ค้า");
    }
    else{
        alert("บันทึกข้อมูลสำเร็จ"); 
        document.getElementById("addpartner").submit();
    }   
}