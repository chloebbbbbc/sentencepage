var subjects=['Trump','Billionaire','Beggar','design','trashcan','I','Devil','Angel','child'];
var preps=['under','at','on','top','bottom','near','in','at the back','next to'];
var mods=['stupid','picky','toxic','drunk','shy','envy','evil','incomparable','blue'];
var objects=['cigarette','burger','ice','chocolate','money','gift','garbage','color pencil'];
var punctuations=['?','+','&','@','%','...','=','-','/','!'];



function wordGenerator(){
    var subject = subjects[Math.floor(Math.random()* subjects.length)];
    var prep = preps[Math.floor(Math.random()* preps.length)];
    var mod = mods[Math.floor(Math.random()* mods.length)];
    var object = objects[Math.floor(Math.random()* objects.length)];
    var punctuation = punctuations[Math.floor(Math.random()* punctuations.length)];
    // console.log();
    var sentence=subject+' '+prep+' '+mod+' '+object+punctuation;
    document.getElementById('word').innerHTML = sentence;
    document.title = sentence;
    
}

window.setInterval(function() {
    wordGenerator();
}, 4000);

wordGenerator();

