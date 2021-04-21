var flooradd, raw, final, floor;
function generate(){
    raw = (Math.random() * (document.getElementById('max').value - document.getElementById('min').value + 1));
    floor = Math.floor(raw);
    flooradd = (floor + parseInt(document.getElementById('min').value));
    document.getElementById('final').innerHTML = flooradd;
    console.log('Raw is ' + raw);
    console.log('Floor is ' + floor);
    console.log('FloorAdd is ' + flooradd);
}