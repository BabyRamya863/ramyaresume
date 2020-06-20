//AJAX
//FETCH

    function loadJsonFile(file,callback){
        var fileRequest=new XMLHttpRequest();
        fileRequest.overrideMimeType("application/json");
        fileRequest.open("GET",file,true);
        fileRequest.onreadystatechange=function(){
            if(fileRequest.readyState === 4 && fileRequest.status=="200"){
                callback(fileRequest.responseText);
            }
        }
        fileRequest.send();

    }
    loadJsonFile("index.json",function(text){
        var data1=JSON.parse(text);
        console.log(data1);
        details(data1.details);
        details2(data1.career);
        details3(data1.Education);
        details4(data1.SkillsandInterest);
        details5(data1.projects);
        details6(data1.personal);


    })

    var body=document.getElementById('root');
    var ma=document.createElement('main');
    ma.classList.add('main')
    body.appendChild(ma);
    var ar=document.createElement('article');
    ar.classList.add('card')
    ma.appendChild(ar);
    var d1=document.createElement('div');
    d1.classList.add('cardchild1')
    ar.appendChild(d1);
    var d2=document.createElement('div');
    d2.classList.add('cardchild2')
    ar.appendChild(d2);
    var sec=document.createElement('section');
    sec.classList.add('data')
    ma.appendChild(sec);
    

function details(dt)
{
    var img=document.createElement("img");
    img.setAttribute("src","profile.png");
    d1.appendChild(img);
    var name=document.createElement("h2");
    name.setAttribute("id","name");
    name.textContent=dt.name;
    d1.appendChild(name);
    var role=document.createElement("p");
    role.setAttribute("id","Role");
    role.textContent=dt.Role;
    d1.appendChild(role);

    var Email=document.createElement("p");
    Email.setAttribute("id","email");
    Email.textContent=dt.email;
    d2.appendChild(Email);

    var mobile=document.createElement("p");
    mobile.setAttribute("id","mobile");
    mobile.textContent=dt.mobile;
    d2.appendChild(mobile);

    var button=document.createElement("button");
    button.classList.add("btn");
    button.textContent="View Profile";
    d2.appendChild(button);
}
var h4 = document.createElement("h3");
h4.classList.add("heading")
h4.textContent = "CARRER OBJECTIVE";
sec.appendChild(h4);
sec.appendChild(document.createElement("HR"));

function details2(carrer)
{
    var para=document.createElement("p");
    para.textContent=carrer;
    sec.appendChild(para);
    var h4 = document.createElement("h3");
    h4.classList.add("heading")
    h4.textContent = "Educational QUalifications";
    sec.appendChild(h4);
    sec.appendChild(document.createElement("HR"));

}
function details3(edu){

    var h5 = document.createElement("h4");
    h5.classList.add("heading")
    h5.textContent="Graduation"
    sec.appendChild(h5);
    var ul1 =document.createElement("ul");
    var li =document.createElement("li");
    li.textContent = "qualification"+":"+edu.qualification;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "course"+":"+edu.course;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "University"+":"+edu.university;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "PassingYear"+":"+edu.passingyear;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "CGPA"+":"+edu.CGPA;
    ul1.appendChild(li);
    sec.appendChild(ul1);
    sec.appendChild(document.createElement("HR"));
}
function details4(skills)
{
    var h5 = document.createElement("h4");
    h5.classList.add("heading")
    h5.textContent="Skills and Interest"
    sec.appendChild(h5);
    var p=document.createElement("p");
    p.textContent=skills.s1;
    sec.appendChild(p);
    var p=document.createElement("p");
    p.textContent=skills.s2;
    sec.appendChild(p);
    var p=document.createElement("p");
    p.textContent=skills.s3;
    sec.appendChild(p);
    var p=document.createElement("p");
    p.textContent=skills.s4;
    sec.appendChild(p);
    sec.appendChild(document.createElement("HR"));
}
function details5(proj){
    var h5 = document.createElement("h4");
    h5.classList.add("heading")
    h5.textContent="Projects"
    sec.appendChild(h5);
    var p=document.createElement("p");
    p.textContent=proj.p1;
    sec.appendChild(p);
    var p=document.createElement("p");
    p.textContent=proj.p2;
    sec.appendChild(p);
    sec.appendChild(document.createElement("HR"));

}
function details6(per){
    var h5 = document.createElement("h4");
    h5.classList.add("heading")
    h5.textContent="Personal Information"
    sec.appendChild(h5);
    var ul1 =document.createElement("ul");
    var li =document.createElement("li");
    li.textContent = "Date_Of_Birth"+":"+per.DOB;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Age"+":"+per.age;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Gender"+":"+per.Gender;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Mother"+":"+per.Mother;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Father"+":"+per.Father;
    ul1.appendChild(li);
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Place_of_Birth"+":"+per.Place_of_Birth;
    ul1.appendChild(li);

    sec.appendChild(ul1);
    

}


    
