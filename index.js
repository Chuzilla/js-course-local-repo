let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countloc=0
let countawa=0
let localcount =document.getElementById("localcount")
let awaycount= document.getElementById("awaycount")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
function incrementLocal()
{
    countloc+=1
    localcount.textContent=countloc

}
function incrementAway()
{
    countawa+=1
    awaycount.textContent=countawa
}
