function changeButtonColor () {
    let button = document.getElementById('target');
    if(button.style.backgroundColor === 'red') {
    button.style.backgroundColor = 'green'
    }else {
        button.style.backgroundColor = 'red'
    }
}

function changeColor () {
    document.getElementById('target1').style.backgroundColor= "red";

}


function changeTextColor(){
    console.log('button clicked')
    let pTag = document.getElementById('target2')
    console.log(pTag)
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    pTag.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}