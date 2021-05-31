function saveUserName() {
    Player_1 = document.getElementById("textInput_1").value;
    Player_2 = document.getElementById("textInput_2").value;
    localStorage.setItem("Player_1",Player_1);
    localStorage.setItem("Player_2",Player_2);
    window.location="quiz_game_page.html";
}