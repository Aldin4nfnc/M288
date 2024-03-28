document.addEventListener("DOMContentLoaded", function() {
    var clicks = 0;
    var timeLeft = 10;
    var timer;
    var rank = "Novice"; // Default rank
    var gameStarted = false;

    document.getElementById("clickButton").addEventListener("click", function() {
        if (!gameStarted) {
            startGame();
            gameStarted = true;
        }
        clicks++;
        document.getElementById("clicks").textContent = clicks;
        updateRank();
    });

    function startGame() {
        timer = setInterval(countDown, 1000);
    }

    function countDown() {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }

    function updateRank() {
        if (clicks >= 50) {
            rank = "Master Clicker";
        } else if (clicks >= 30) {
            rank = "Expert Clicker";
        } else if (clicks >= 10) {
            rank = "Intermediate Clicker";
        }
        document.getElementById("rank").textContent = rank;
    }

    function endGame() {
        document.getElementById("clickButton").disabled = true;
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("totalClicks").textContent = clicks;
        document.getElementById("finalRank").textContent = rank;

        document.getElementById("playAgainButton").addEventListener("click", function() {
            resetGame();
        });
    }

    function resetGame() {
        clicks = 0;
        timeLeft = 10;
        rank = "Novice";
        document.getElementById("clicks").textContent = clicks;
        document.getElementById("time").textContent = timeLeft;
        document.getElementById("rank").textContent = rank;
        document.getElementById("result").classList.add("hidden");
        document.getElementById("clickButton").disabled = false;
        gameStarted = false;
    }
});
