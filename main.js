//https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json

function startClassification(e){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json",modelReady)
}

function modelReady(e){
    classifier.classify(gotResults)
}

var cat=0
var dog=0

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("animal").innerHTML="I can hear: "+results[0].label
        document.getElementById("detection").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+"%"
    }
}
