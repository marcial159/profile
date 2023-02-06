let menuVisible=false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false
}
function efectoHabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills=window.innerHeight-skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades =document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("blender");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("csharp");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("trabajoequipo");
        habilidades[10].classList.add("manager");
    }
}
window.onscroll=function(){
    efectoHabilidades();
}