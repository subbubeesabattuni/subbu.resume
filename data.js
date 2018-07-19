function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
getfile("data.json",function(text) {
  var data = JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CareerObjective);
  study(data.education);
  skills(data.skills);
} )

var child = document.querySelector(".childone");


function details(det){
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);

  var name = document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);

  var phoneno = document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);

  var email = document.createElement("a")
  email.href = "mailto:najindraprasad@gmail.com";
  email.textContent = det.email;
  child.appendChild(email);

  var address = document.createElement("h2");
  address.textContent = "Address";
  child.appendChild(address);

  var address = document.createElement("hr");
  child.appendChild(address);

  var address = document.createElement("h3");
  address.textContent = det.address;
  child.appendChild(address);

}

var child2 = document.querySelector(".childtwo");
function career(careerinfo){
  var add = document.createElement("h3");
  add.textContent = "Career Objective";
  child2.appendChild(add);

  var address = document.createElement("hr");
  child2.appendChild(address);

  var info = document.createElement("i");
  info.textContent = careerinfo.info;
  child2.appendChild(info);
}
function study(studies) {
  var k=document.createElement("h2");
  k.textContent="educational info";
  child2.appendChild(k);

  var h=document.createElement("hr");
  child2.appendChild(h);


}

function skills(skillinfo){
  var s=document.createElement("h2");
  s.textContent="technicall skills";
  child2.appendChild(s);

  var h=document.createElement("hr");
  child2.appendChild(h);

  var skilldata=document.createElement("table");
  skilldata.border="1";
  child2.appendChild(skilldata);
  tabledata="";
  for(i=0;i<skillinfo.length;i++){
  tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
}
  skilldata.innerHTML = tabledata;
}
