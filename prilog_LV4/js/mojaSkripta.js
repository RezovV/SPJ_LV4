var abc= new _lib("title");
console.log(abc.el.innerHTML);

var drugi = new _lib("h1");
drugi.ubaciElement("naziv","","1"," tekst123")

var prvi = new _lib("li");

prvi.sakrij();

var treci = new _lib("img");
treci.dodajKlasu("bok")




localStorage.setItem("racunarstvo","https://racunarstvo.vuv.hr/");
localStorage.setItem("loomen","http://loomen.vsmti.hr");
localStorage.setItem("imagine","http://e5.onthehub.com/d.ashx?s=ui4qkso06k");
localStorage.setItem("studentski_dom","http://studom.vsmti.hr");
localStorage.setItem("office365","https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail");

var foot=new _lib(".footer-navigation");

var id=0;

Object.keys(localStorage).forEach(function(a){
    foot.ubaciElement("li","item", a, "");
    var li= new _lib("#"+ a);
    li.ubaciElement("a","",a + id, a);
    a1= new _lib("#"+ a + id);
    a1.dodajAtribut("href", localStorage.getItem(a));
    id++;
});




