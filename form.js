const body = document.querySelector("body");
body.style.backgroundColor = "#E5E4E2";


const h1 = document.createElement("h1");
h1.setAttribute('id',"title");
h1.innerHTML = "Infinitum";
//style h1
h1.style.backgroundColor = "steelBlue";
h1.style.color = "white";
h1.style.fontSize = "25px";
h1.style.fontFamily = "sansSerif";
h1.style.padding = "12px";
document.querySelector("body").appendChild(h1);


//create form
const f = document.createElement("form");
f.setAttribute('action',"myForm");
f.setAttribute('id',"form");

//style form
f.style.margin = "0 auto";
f.style.maxWidth = "500px";
f.style.padding = "1em";


//create label1
const l1 = document.createElement("label");
l1.setAttribute('for',"email");
l1.innerHTML = "Email";
//style label1
l1.style.color = "#999";
l1.style.fontSize = "22px";
l1.style.fontFamily = "sansSerif";
f.appendChild(l1);


//create input1
const i1 = document.createElement("input"); 

i1.setAttribute('type',"text");
i1.setAttribute('id',"email");
i1.style.width = "100%";
i1.style.padding = "15px";
i1.style.border = "1px solid #999";
f.appendChild(i1);

 
//create div1
const div1 = document.createElement("div");
div1.setAttribute('id',"error1");
//style 
div1.style.color = "red";
f.appendChild(div1);


//create label2
const l2 = document.createElement("label");
l2.setAttribute('for',"password");
l2.innerHTML = "<br>Password";
//style label2
l2.style.color = "#999";
l2.style.fontSize = "22px";
l2.style.fontFamily = "sansSerif";
f.appendChild(l2);


//create input2
const i2 = document.createElement("input"); //input element, text
i2.setAttribute('type',"password");
i2.setAttribute('id',"pwd");
i2.style.width = "100%";
i2.style.padding = "15px";
i2.style.border = "1px solid #999";
f.appendChild(i2);

 
//create div2
const div2 = document.createElement("div");
div2.setAttribute('id',"error2");
div2.style.color = "red";
f.appendChild(div2);




//create input element,submit btn
const btn1 = document.createElement("input"); 
btn1.setAttribute('type',"submit");
btn1.setAttribute('value',"Login");
//style btn1
btn1.style.width = "100%";
btn1.style.padding = "15px";
btn1.style.backgroundColor = "steelBlue";
btn1.style.borderRadius = "3px";
btn1.style.outLine = "outLine";
btn1.style.border = "1px solid steelBlue";
btn1.style.marginTop = "15px";
btn1.style.color = "white";
btn1.style.fontSize = "18px";
btn1.style.fontFamily = "sansSerif";
f.appendChild(btn1);


//create hr
const hr1 = document.createElement("hr");
hr1.style.width = "42%";
hr1.style.float = "left";
hr1.style.marginTop = "20px";
document.querySelector("body").appendChild(hr1);


//create hr
const hr2 = document.createElement("hr");
hr2.style.width = "42%";
hr2.style.float = "right";
hr2.style.marginTop = "20px";
f.appendChild(hr1);
f.appendChild(hr2);


//create p
const p = document.createElement("p");
p.innerHTML = "or";
//style p
p.style.color = "black";
p.style.textAlign = "center";
p.style.marginTop = "10px";
f.appendChild(p);


//create p
const s = document.createElement("p"); 
s.innerHTML = '<a href="#">Create New Account</a>';
//style p
s.style.width = "100%";
s.style.padding = "15px";
s.style.backgroundColor = "white";
s.style.borderRadius = "3px";
s.style.outLine = "outLine";
s.style.border = "1px solid white";
s.style.marginTop = "15px";
s.style.color = "black";
s.style.fontSize = "18px";
s.style.fontFamily = "sansSerif";
s.style.textAlign = "center";
s.style.textDecoration = "none";
f.appendChild(s);


//create a
const a = document.createElement("a"); 
a.setAttribute('href',"#");
a.innerHTML = "Forgotten password?";
//style a
a.style.color = "blue";
a.style.marginTop = "15px";
a.style.fontSize = "18px";
a.style.float = "right";
a.style.fontFamily = "sansSerif";
f.appendChild(a);
document.querySelector("body").appendChild(f);



//validate form
document.getElementById("form").addEventListener("submit", validate);



function validate() {

const email = document.getElementById("email").value;
var atpos = email.indexOf("@");
 var dotpos = email.lastIndexOf(".");
if (atpos < 2 || dotpos < atpos +2 || dotpos+2>=email.length)   {
document.getElementById("error1").innerHTML = "*Please enter valid email";
document.getElementById("email").style.borderColor = "red";
}


const pwd = document.getElementById("pwd").value;
if (pwd == "" || pwd.length < 6) {
document.getElementById("error2").innerHTML = "*Please enter valid password";
document.getElementById("pwd").style.borderColor = "red";


event.preventDefault();
}
}