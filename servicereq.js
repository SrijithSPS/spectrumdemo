   $(document).ready(function(){
        $("#ser1").validate({
            rules: {
                fname:{
                    required:true,
                    minlength:3,
                    maxlength:20
                },
                email:{
                    required:true,
                    email:true
                },
                mobile:{
                    required:true,
                    number:true
                },
                cap:{
                    required:true,
                    number:true
                }
            },
            messages:{
                fname:{
                    required:"please enter first name",
                    minlength:"Minimum lenght of name should be 3",
                    maxlength:"Maximum lenght of name should be 20"
                },
                email:{
                    required:"Please enter e-mail",
                    email:"E-mail format is not correct"
                },
                mobile:{
                    required:"Please enter mobile number",
                    number: "Please only use numbers"
                },
                cap:{
                    required:"Please enter the code",
                    number: "Please only use numbers"
                }
            },
            submitHandler: function(form) {
                form.submit();
            }
           });
        });      
        
          
        
         
        
           
        











//     Name1=document.ser.fname.value;
//     if(Name1==""){
//         alert("Please enter your first name");
//         return false;
//     }else{
//         pattern=/^[A-z \s]+$/
//         result=pattern.test(Name1)
//         if(result==false){
//             alert("First name can only contains alphabets and space");
//             return false;
//         }
//     }
//     Name2=document.ser.lname.value;
//     if(Name2==""){
        
//     }
//     else{
//     pattern=/^[A-z \s]+$/
//     result=pattern.test(Name2)
//     if(result == false){
//         alert("Last name can only contains alphabets and space");
//         return false;
//     }
//    }
//     Name3=document.ser.mname.value;
//     if(Name3==""){
        
//     }
//     else{
//         pattern=/^[A-z \s]+$/
//         result=pattern.test(Name3)
//         if(result == false){
//             alert("Middle name can only contains alphabets and space");
//             return false; 
//         }
//     }
    
//      Address=document.ser.address.value;
//      if(Address==""){
        
//     }else{
//         pattern=/^[A-z 0-9 \.\s\/\,\;\:\[\]]+$/
//         result=pattern.test(Address)
//         if(result==false){
//             alert("Address can only contains can only contains alphabets,numbers,space and ./[],:;");
//             return false;
//         }
//     }
//     Email=document.ser.email.value;
    
//     if(Email==""){
//         alert("Please enter your e-mail");
//         return false;
//     }else{
//         pattern=/^[A-z 0-9 \!\@\#\$\%\&\*\(\)\.]+$/
//         result=pattern.test(Email)
//         if(result==false){
//             alert("Email can contain only alphabets, numbers and ! @ # $ % & * ( ) ");
//             return false;
//         }
//     }
//     Mobile=document.ser.mobile.value;
//     if(Mobile==""){
//         alert("Please enter your mobile number");
//         return false;
//     }else{
//         pattern=/^[0-9]+$/
//         result=pattern.test(Mobile)
//         if(result==false){
//             alert("Mobile number can only contains numbers");
//             return false;
//         }
//     }
//     Fax=document.ser.fax.value;
//     if(Fax==""){
    
//     }else{
//         pattern=/^[0-9]+$/
//         result=pattern.test(Fax)
//         if(result==false){
//             alert("Fax can only contains numbers");
//             return false;
//         }
//     }
//     Srd=document.ser.srd.value;
//     if(Srd==""){
      
//     }else{
//         pattern=/^[A-z 0-9 \.\s\/\,\;\:\[\]]+$/
//         result=pattern.test(Srd)
//         if(result==false){
//             alert("Service query can only contains can only contains alphabets,numbers,space and ./[],:;");
//             return false;
//         }
//     }
//     Phone1=document.ser.phone1.value;
//     if(Phone1==""){
       
//     }else{
//         pattern=/^[0-9]+$/
//         result=pattern.test(Phone1)
//         if(result==false){
//             alert("Phone number1 can only have numbers");
//             return false;
//         }
//     }
//     Phone2=document.ser.phone2.value;
//     if(Phone2==""){
       
//     }else{
//         pattern=/^[0-9]+$/
//         result=pattern.test(Phone2)
//         if(result==false){
//             alert("Phone number2 can only have numbers");
//             return false;
//         }
//     }
//     Cap=document.ser.cap.value;
//     console.log(Cap)
//     result=135019;
//      if(Cap==""){
//         alert("Please fill in the CAPTCHA");
//         return false;
//     }else if(result!=Cap){
//          alert("Incorrect CAPTCHA");
//          return false;
//     }
