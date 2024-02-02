function setColor(set) {
    let changeColor = set;
    function change() {
        if(changeColor) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
    }
    return change;
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}
