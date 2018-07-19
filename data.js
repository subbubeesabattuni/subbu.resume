// function getfile(file,callback){
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status == "200"){
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send();
// }
// getfile("data.json",function(text) {
//   var data = JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   career(data.CareerObjective);
//   education(data.education);
//   skill(data.skills);
//   achieve(data.achievements);
// } )

function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}

var newfile = loadjson("data.json")
newfile.then(data=>{
  details(data.basics);
  career(data.CareerObjective);
  education(data.education);
  skill(data.skills);
  achieve(data.achievements);
})

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
  function education(edu){
  var add = document.createElement("h3");
  add.textContent = "Education Qualification";
  child2.appendChild(add);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<edu.length;i++){
    var deg = document.createElement("h3");
    deg.textContent = edu[i].degree;
    child2.appendChild(deg);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent = edu[i].institute;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent = edu[i].data;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}
function skill(skillinfo){
var add = document.createElement("h3");
add.textContent = "Technical Skills";
child2.appendChild(add);

var hr = document.createElement("hr");
child2.appendChild(hr);

  var skilldata = document.createElement("table");
  skilldata.border = "3";
  child2.appendChild(skilldata);

  tabledata="";
  for(i=0;i<skillinfo.length;i++){
    tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
  }
  skilldata.innerHTML = tabledata;
}
function achieve(ach){
  var add = document.createElement("h3");
  add.textContent = "Achievements";
  child2.appendChild(add);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<ach.length;i++){
    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent = ach[i].data;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
}
}
