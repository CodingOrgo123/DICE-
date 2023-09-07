function random() {
    var num1 = Math.random();
    num1 = num1 * 6;
    num1 = Math.floor(num1);
    num1 = num1 + 1;
    if (num1 === 1) {
        document.getElementById("img").src = "./images/1face.png";
    } else if (num1 === 2) {
        document.getElementById("img").src = "./images/die_face_2.png";
    } else if (num1 === 3) {
        document.getElementById("img").src = "./images/3face.jpg";
    } else if (num1 === 4) {
        document.getElementById("img").src = "./images/4face.jpeg";
    } else if (num1 === 5) {
        document.getElementById("img").src = "./images/die_face_5.png";
    } else {
        document.getElementById("img").src = "./images/face6.png";
    }

    var num2 = Math.random();
    num2 = num2 * 6;
    num2 = Math.floor(num2);
    num2 = num2 + 1;
    if (num2 === 1) {
        document.getElementById("img1").src = "./images/1face.png";
    } else if (num2 === 2) {
        document.getElementById("img1").src = "./images/die_face_2.png";
    } else if (num2 === 3) {
        document.getElementById("img1").src = "./images/3face.jpg";
    } else if (num2 === 4) {
        document.getElementById("img1").src = "./images/4face.jpeg";
    } else if (num2 === 5) {
        document.getElementById("img1").src = "./images/die_face_5.png";
    } else {
        document.getElementById("img1").src = "./images/face6.png";
    }
    if (num1 > num2) {
        document.getElementById("d1").innerHTML = "Player1! WIN THE GAME";
        var audio = new Audio("./images/WIN.mp3");
        audio.play();
        p
    } else if (num2 > num1) {
        document.getElementById("d1").innerHTML = "Player2! WIN THE GAME";
        var audio = new Audio("./images/WIN.mp3");
        audio.play();
    } else {
        document.getElementById("d1").innerHTML = "DRAW!"
    }

}