function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);
    first = word.charAt(1);
    console.log(first);
    length_divide_2 = Math.floor(word.length / 2);
    second = word.charAt(length_divide_2);
    console.log(second);
    length_minus_1 = word.length - 1;
    third = word.charAt(length_minus_1);
    console.log(third);
    remove_1 = word.replace(first, "_");
    remove_2 = remove_1.replace(second, "_");
    remove_3 = remove_2.replace(third, "_");
    console.log(remove_3);

    question_word = "<h4 id='word_display'> Q. " + remove_3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button; document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

player_1 = localStorage.getItem("Player_1");
player_2 = localStorage.getItem("Player_2");
document.getElementById("player_question").innerHTML = "question turn-" + player_1;
document.getElementById("player_answer").innerHTML = "answer turn-" + player_2;

player_1_score = 0;
player_2_score = 0;
document.getElementById("player1_name").innerHTML = player_1 + ":";
document.getElementById("player2_name").innerHTML = player_2 + ":";
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

question_turn = "player1"; answer_turn = "player2";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if (answer == word) {
        if (answer_turn == "player1") {
            player_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
        else {

            player_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_2;
    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2;
    }
    else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1;
    }
    document.getElementById("output").innerHTML = "";
}