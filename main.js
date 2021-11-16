function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    lassifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/raMN4kt1o/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}