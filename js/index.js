function submenu(){
    document.getElementById('submenu_list_option').style.display="block";
}
function reset(){
    location.reload();
}
function week_credential(){
    let filter_value_alert = document.getElementById("value-alert");
    let filter_emoji = document.getElementById("filtered-value-emoji");
    //change emoji
    filter_emoji.src="./images/sad.png";
    //change filter_value_alert
    filter_value_alert.innerText="Week";
}
function confused_credential(){
    let filter_value_alert = document.getElementById("value-alert");
    let filter_emoji = document.getElementById("filtered-value-emoji");
    //change emoji
    filter_emoji.src="./images/confused.png";
    //change filter_value_alert
    filter_value_alert.innerText="OK";
}
function happy_credential(){
    let filter_value_alert = document.getElementById("value-alert");
    let filter_emoji = document.getElementById("filtered-value-emoji");
    //change emoji
    filter_emoji.src="./images/happy.png";
    //change filter_value_alert
    filter_value_alert.innerText="Strong";
}
function display_result(length, charset){
    let retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
function generateVal(){
let filter_value_display = document.getElementById("value");
let filter_dropdown = document.getElementById("filter_dropdown_list");
let  selected_value = filter_dropdown.value
let checkboxval1 = document.querySelector(".check-options > span > input#check-value1");
let checkboxval2 = document.querySelector(".check-options > span > input#check-value2");
let checkboxval3 = document.querySelector(".check-options > span > input#check-value3");
let checkboxval4 = document.querySelector(".check-options > span > input#check-value4");
let after_filter_value = document.getElementById("lengthVal");
let charset="";
let retVal="";
let length = 0;
let ans =[];
if((selected_value === "6" || selected_value === "9" || selected_value === "12") && ((checkboxval1.checked) && (checkboxval2.checked) && (checkboxval3.checked) && (checkboxval4.checked))){
    if(selected_value === "6" && ((checkboxval1.checked) && (checkboxval2.checked) && (checkboxval3.checked) && (checkboxval4.checked))){
           length = parseInt(selected_value);
           charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$&@%";
           retVal = display_result(length, charset);
           ans = retVal;
       week_credential();
    }else if(selected_value === "9" && ((checkboxval1.checked) && (checkboxval2.checked) && (checkboxval3.checked) && (checkboxval4.checked))){
           length = parseInt(selected_value);
           charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$&@%";
           retVal = display_result(length, charset);
           ans = retVal;
       confused_credential();
    }else {
           length = parseInt(selected_value);
           charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$&@%";
           retVal = display_result(length, charset);
           ans = retVal;
       happy_credential();
    }
}
else{  
    if((selected_value === "6" || selected_value === "9" || selected_value === "12") && ((checkboxval1.checked) && (checkboxval2.checked) && (checkboxval3.checked))){
        if(selected_value === "6" && ((checkboxval1.checked) && (checkboxval2.checked) && (checkboxval3.checked))){
               length = parseInt(selected_value);
               charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
               retVal = display_result(length, charset);
               ans = retVal;
            week_credential();
        }else if(selected_value === "9" && ((checkboxval1.checked) && (checkboxval2.checked) && (checkboxval3.checked))){
               length = parseInt(selected_value);
               charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
               retVal = display_result(length, charset);
               ans = retVal;
           week_credential();
        }else{
               length = parseInt(selected_value);
               charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
               retVal = display_result(length, charset);
               ans = retVal;
            confused_credential();
          }
    }
    else{
        if((selected_value === "6" || selected_value === "9" || selected_value === "12") && (checkboxval1.checked)){
            if(selected_value === "6" && checkboxval1.checked){
                   length = parseInt(selected_value);
                   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                   retVal = display_result(length, charset);
                   ans = retVal; 
               week_credential(); 
            }else if(selected_value === "9" && checkboxval1.checked){
                   length = parseInt(selected_value);
                   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                   retVal = display_result(length, charset);
                   ans = retVal; 
               week_credential();
            }else {
                    length = parseInt(selected_value);
                    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    retVal = display_result(length, charset);
                    ans = retVal;  
               week_credential();
            }
        }else if((selected_value === "6" || selected_value === "9" || selected_value === "12") && (checkboxval2.checked)){
           if(selected_value === "6" && checkboxval2.checked){
               length = parseInt(selected_value);
               charset = "abcdefghijklmnopqrstuvwxyz";
               retVal = display_result(length, charset);
               ans = retVal;
            week_credential();
           }else if(selected_value === "9" && checkboxval2.checked){
                length = parseInt(selected_value);
                charset = "abcdefghijklmnopqrstuvwxyz";
                retVal = display_result(length, charset);
                ans = retVal;
            week_credential();
           }else{
               length = parseInt(selected_value);
               charset = "abcdefghijklmnopqrstuvwxyz";
               retVal = display_result(length,charset);
               ans = retVal;
            week_credential();
           }    
        }else if((selected_value === "6" || selected_value === "9" || selected_value === "12") && (checkboxval3.checked)){
            if(selected_value === "6" && checkboxval3.checked){
                   length = parseInt(selected_value);
                   charset = "0123456789";
                   retVal = display_result(length, charset);
                   ans = retVal;
                week_credential();
            }else if(selected_value === "9" && checkboxval3.checked){
                    length = parseInt(selected_value);
                    charset = "0123456789";
                    retVal = display_result(length, charset);
                    ans = retVal;
                week_credential();
            }else{
                    length = parseInt(selected_value);
                    charset = "0123456789";
                    retVal = display_result(length, charset);
                    ans = retVal;
                week_credential();
            }
        }else if((selected_value === "6" || selected_value === "9" || selected_value === "12") && (checkboxval4.checked)){
               if(selected_value === "6" && checkboxval4.checked){
                    length = parseInt(selected_value);
                    charset = "#$&@%";
                    retVal = display_result(length, charset);
                    ans = retVal;
                week_credential();
               }else if(selected_value === "9" && checkboxval4.checked){
                   length = parseInt(selected_value);
                   charset = "#$&@%";
                   retVal = display_result(length, charset);
                   ans = retVal;
                week_credential();
               }else{
                   length = parseInt(selected_value);
                   charset = "#$&@%";
                   retVal = display_result(length, charset);
                   ans = retVal;
                week_credential();
               }
        }else if((selected_value === "6" || selected_value === "9" || selected_value === "12") && ((checkboxval1.checked) && (checkboxval2.checked))){
               if(selected_value === "6" && ((checkboxval1.checked) && (checkboxval2.checked))){
                   length = parseInt(selected_value);
                   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                   retVal = display_result(length,charset);
                  ans = retVal;
                week_credential();
               }else if(selected_value === "9" && ((checkboxval1.checked) && (checkboxval2.checked))){
                   length = parseInt(selected_value);
                   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                   retVal = display_result(length,charset);
                   ans = retVal;
                week_credential();
               }else{
                   length = parseInt(selected_value);
                   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                   retVal = display_result(length,charset);
                   ans = retVal;
                week_credential();
               }
        }
        else{
              alert("something went wrong, please refresh page and try again...!");
        }    
    }
}
filter_value_display.innerText = ans.toString();
}
function copyClipboard(){
// Select the element by its ID
var filter_value = document.getElementById("value");
// Get the text content of the element
var textToCopy = filter_value.textContent || filter_value.innerText;
// Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy).then(function() {
      alert('Text copied to clipboard: ' + textToCopy);
    }).catch(function(err) {
      alert('Could not copy text: ', err);
    });
}
