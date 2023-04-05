function postresume(){
    name1=document.spectrumresume.fname.value;
    if(name1==""){
        alert("Please enter your first name");
        return false;
    }else{
        pattern=/^[A-z \s]+$/
        result=pattern.test(name1)
        if(result==false){
            alert("First name can only contains alphabets and space");
            return false;
        }
    }
    namemiddle=document.spectrumresume.mname.value;
    if(namemiddle==""){
       
    }else{
        pattern=/^[A-z \s]+$/
        result=pattern.test(namemiddle)
        if(result==false){
            alert("Middle name can only contains alphabets and space");
            return false;
        }
    }
    namelast=document.spectrumresume.lname.value;
    if(namelast==""){
       
    }else{
        pattern=/^[A-z \s]+$/
        result=pattern.test(namelast)
        if(result==false){
            alert("Last name can only contains alphabets and space");
            return false;
        }
    }
}
    function addSkill() {
        var table=document.getElementById("table1")
        var rows=table.insertRow()
        var cell1=rows.insertCell(0)
        var cell2=rows.insertCell(1)
        var cell3=rows.insertCell(2)
        var cell4=rows.insertCell(3)
        var cell5=rows.insertCell(4)
        var cell6=rows.insertCell(5)
        cell1.innerHTML='<input type="text" name="skill"  class="form-control" >'
        cell2.innerHTML='<input type="text" name="version" class="form-control">'
        cell3.innerHTML='<select name="" id=""><option value="1980">1980</option>   <option value="1985">1985</option>  <option value="1990">1990</option><option value="1995">1995</option>   <option value="2000">2000</option>  <option value="2005">2005</option><option value="2007">2007</option>   <option value="2008">2008</option>  <option value="2009">2009</option><option value="2010">2010</option>   <option value="2015">2015</option>  <option value="2023">2023</option></select> '
        cell4.innerHTML=' <select name="" id=""><option value="0">0</option>   <option value="2">2</option>  <option value="3">3</option><option value="4">4</option>   <option value="5">5</option>  <option value="6">6</option><option value="7">7</option>   <option value="8">8</option>  <option value="9">9</option><option value="10">10</option>   <option value="11">11</option>  <option value="12">12</option></select> Year(s)'
        cell5.innerHTML='<select name="" id=""><option value="1">1</option>   <option value="2">2</option>  <option value="3">3</option><option value="4">4</option>   <option value="5">5</option>  <option value="6">6</option><option value="7">7</option>   <option value="8">8</option>  <option value="9">9</option><option value="10">10</option>   <option value="11">11</option>  <option value="12">12</option></select> Month(s) '
        cell6.innerHTML='<button type="button" name="delskill" onclick="delSkill()">Delete Skill</button>'
    }
    function delSkill(){
        var table=document.getElementById("table1")
       table.deleteRow(2)
    }




