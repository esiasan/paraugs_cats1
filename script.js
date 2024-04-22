//console.log(1)
let zina = document.querySelector('.zina').value;
let zinas = documet.querySelector('.cataZina');

function sutitZinu()
{
    console.log('sutitzinu()darbojas');
   
    zinas.innerHTML = zinas.innerHTML+'<br>'+zina.value;
}
function ieladetcataZinas()
{
let datiNoServera= await fetch('cataZinas.txt');
let dati =await datiNoServera.text;
}