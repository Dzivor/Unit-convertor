const convertButtonEl=document.getElementById("convertButton")
const inputValueEl=document.getElementById("inputValue")
const volumeEl=document.getElementById("volume-el")
const lengthEl=document.getElementById("length-el")
const MassEl=document.getElementById("mass-el")
const paraEl=document.getElementById("para-el")
let value=0

convertButtonEl.addEventListener("click", function(){
    value=inputValueEl.value
    if(value>0){
        convertVolume(value)
        convertLength(value)
        convertMass(value)}
})

function convertVolume(value){
    let gallonsToLiters= value*3.78541
    let litersToGallons=value/3.78541
    volumeEl.textContent=`${value} gallons = ${gallonsToLiters.toFixed(3)} liters | ${value} liters = ${litersToGallons.toFixed(3)} gallons`
    
}


function convertLength(value){
    let feetToMeters=value*0.3048
    let metersToFeet=value/0.3048
    lengthEl.textContent=`${value} feet = ${feetToMeters.toFixed(3)} meters | ${value} meters = ${metersToFeet.toFixed(3)} feet`

}

function convertMass(value){
    let poundsToKilos=value*0.45359237
    let kilosToPounds=value/0.45359237
    MassEl.textContent=`${value} pounds = ${poundsToKilos.toFixed(3)} kilos | ${value} kilos = ${kilosToPounds.toFixed(3)} pounds`
    
}

function positiveValue(){
    paraEl.textContent="Please enter a positive number"
}

function enterNumber(){
    paraEl.textContent="Please enter a number"
}