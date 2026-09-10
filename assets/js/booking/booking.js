(function () {
    var decrementBtn = document.getElementById("diners-decrement");
    var incrementBtn = document.getElementById("diners-increment");
    var dinersInput = document.getElementById("diners-value");
    var MIN_DINERS = 1;
    var MAX_DINERS = 10;

    function updateDiners(delta) {
        var current = parseInt(dinersInput.value, 10) || MIN_DINERS;
        var next = Math.min(MAX_DINERS, Math.max(MIN_DINERS, current + delta));
        dinersInput.value = next;
    }

    if (decrementBtn && incrementBtn && dinersInput) {
        decrementBtn.addEventListener("click", function () {
            updateDiners(-1);
        });

        incrementBtn.addEventListener("click", function () {
            updateDiners(1);
        });
    }
})();
