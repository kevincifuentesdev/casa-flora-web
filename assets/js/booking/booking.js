(function () {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
    var selectedDate = null;

    var MONTHS = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    var grid = document.getElementById("calendar-grid");
    var monthLabel = document.getElementById("calendar-month-label");
    var prevBtn = document.getElementById("calendar-prev");
    var nextBtn = document.getElementById("calendar-next");

    function renderCalendar(year, month) {
        grid.innerHTML = "";

        monthLabel.textContent = MONTHS[month] + " " + year;

        var firstDay = new Date(year, month, 1).getDay();
        var startOffset = firstDay === 0 ? 6 : firstDay - 1;

        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var prevMonthDays = new Date(year, month, 0).getDate();

        for (var i = startOffset - 1; i >= 0; i--) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "calendar-day muted";
            btn.textContent = prevMonthDays - i;
            grid.appendChild(btn);
        }

        for (var d = 1; d <= daysInMonth; d++) {
            var btn = document.createElement("button");
            btn.type = "button";
            var cellDate = new Date(year, month, d);
            cellDate.setHours(0, 0, 0, 0);

            var isPast = cellDate < today;
            var isToday = cellDate.getTime() === today.getTime();
            var isSelected = selectedDate && cellDate.getTime() === selectedDate.getTime();

            var classes = "calendar-day";
            if (isPast) classes += " muted";
            if (isToday) classes += " today";
            if (isSelected) classes += " selected";

            btn.className = classes;
            btn.textContent = d;

            if (!isPast) {
                btn.dataset.date = cellDate.toISOString();
                btn.addEventListener("click", handleDayClick);
            }

            grid.appendChild(btn);
        }

        var totalCells = startOffset + daysInMonth;
        var remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
        for (var n = 1; n <= remaining; n++) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "calendar-day muted";
            btn.textContent = n;
            grid.appendChild(btn);
        }

        updateNavState();
    }

    function handleDayClick(e) {
        selectedDate = new Date(e.currentTarget.dataset.date);
        renderCalendar(currentYear, currentMonth);
    }

    function updateNavState() {
        var isCurrentMonth = currentYear === today.getFullYear() && currentMonth === today.getMonth();
        prevBtn.disabled = isCurrentMonth;
        prevBtn.style.opacity = isCurrentMonth ? "0.3" : "1";
        prevBtn.style.pointerEvents = isCurrentMonth ? "none" : "auto";
    }

    prevBtn.addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    });

    nextBtn.addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    });

    renderCalendar(currentYear, currentMonth);

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
