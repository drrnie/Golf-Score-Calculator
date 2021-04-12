const click = document.querySelector('.submitScore').onclick = totalScore;

function totalScore(par, strokes){
    par = Math.floor(Math.random()*10);
    document.getElementById("par").innerHTML = par;
    strokes = Math.floor(Math.random()*10);
    document.getElementById("strokes").innerHTML = strokes;

    return (strokes == 1 ? document.querySelector('#returnvalues').innerHTML = "Score card says: Hole in one!"
    : (strokes <= par -2 ? document.querySelector('#returnvalues').innerHTML = 'Score card says: Eagle'
    : (strokes == par -1 ? document.querySelector('#returnvalues').innerHTML = 'Score card says: Birdie'
    : (strokes == 0 || par == 0 ? document.querySelector('#returnvalues').innerHTML = 'Score card says: No Score'
    : (strokes == par ? document.querySelector('#returnvalues').innerHTML = 'Score card says: Par'
    : (strokes == par +1 ? document.querySelector('#returnvalues').innerHTML = 'Score card says: Bogey'
    : (strokes == par +2 ? document.querySelector('#returnvalues').innerHTML = 'Score card says: Double Bogey'
    : document.querySelector('#returnvalues').innerHTML = 'Score card says: Go Home!')))))));
}

let reset = () =>{
    window.location.reload();
}
