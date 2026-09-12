(function () {
    var form = document.getElementById("booking-form");
    var ctaBtn = form.querySelector(".booking-cta");
    var FIELD_NAMES = {
        environment: "Ambiente",
        date: "Fecha",
        time: "Horario",
        diners: "Comensales"
    };

    var FIELD_MESSAGES = {
        environment: "Selecciona un ambiente.",
        date: "Selecciona una fecha.",
        time: "Selecciona un horario.",
        diners: "Número de comensales inválido."
    };

    var FIELD_SELECTORS = {
        environment: ".environment-group",
        date: ".calendar-container",
        time: ".time-slots-section",
        diners: ".diners-control"
    };

    function getSelectedDate() {
        var selected = document.querySelector(".calendar-day.selected");
        return selected ? selected.dataset.date : null;
    }

    function getFieldValue(name) {
        if (name === "date") return getSelectedDate();
        if (name === "diners") {
            var input = document.getElementById("diners-value");
            return input ? input.value : null;
        }
        var checked = form.querySelector('input[name="' + name + '"]:checked');
        return checked ? checked.value : null;
    }

    function validateField(name) {
        var value = getFieldValue(name);
        if (!value || value.trim() === "") return FIELD_MESSAGES[name];
        if (name === "diners") {
            var num = parseInt(value, 10);
            if (isNaN(num) || num < 1 || num > 10) return FIELD_MESSAGES[name];
        }
        return null;
    }

    function validate() {
        var errors = {};
        var fields = ["environment", "date", "time", "diners"];

        for (var i = 0; i < fields.length; i++) {
            var msg = validateField(fields[i]);
            if (msg) errors[fields[i]] = msg;
        }

        return errors;
    }

    function showFieldError(name, message) {
        var container = form.querySelector(FIELD_SELECTORS[name]);
        if (!container) return;

        container.classList.add("field-error");

        var existing = container.parentNode.querySelector(".field-error-msg[data-field='" + name + "']");
        if (existing) existing.remove();

        var span = document.createElement("span");
        span.className = "field-error-msg";
        span.setAttribute("data-field", name);
        span.setAttribute("role", "alert");
        span.textContent = message;

        container.insertAdjacentElement("afterend", span);
    }

    function clearFieldError(name) {
        var container = form.querySelector(FIELD_SELECTORS[name]);
        if (!container) return;

        container.classList.remove("field-error");

        var msg = container.parentNode.querySelector(".field-error-msg[data-field='" + name + "']");
        if (msg) msg.remove();
    }

    function clearAllErrors() {
        form.querySelectorAll(".field-error").forEach(function (el) {
            el.classList.remove("field-error");
        });
        form.querySelectorAll(".field-error-msg").forEach(function (el) {
            el.remove();
        });
    }

    function highlightErrors(errors) {
        clearAllErrors();

        var firstErrorEl = null;
        var fields = ["environment", "date", "time", "diners"];

        for (var i = 0; i < fields.length; i++) {
            var name = fields[i];
            if (errors[name]) {
                showFieldError(name, errors[name]);
                if (!firstErrorEl) {
                    firstErrorEl = form.querySelector(FIELD_SELECTORS[name]);
                }
            }
        }

        if (firstErrorEl) {
            firstErrorEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    form.querySelectorAll('input[name="time"]').forEach(function (radio) {
        radio.addEventListener("change", function () {
            clearFieldError("time");
        });
    });

    form.querySelectorAll('input[name="environment"]').forEach(function (radio) {
        radio.addEventListener("change", function () {
            clearFieldError("environment");
        });
    });

    var calendarGrid = document.getElementById("calendar-grid");
    if (calendarGrid) {
        var observer = new MutationObserver(function () {
            var selected = calendarGrid.querySelector(".calendar-day.selected");
            if (selected) clearFieldError("date");
        });
        observer.observe(calendarGrid, { childList: true, subtree: true, attributes: true });
    }

    ctaBtn.addEventListener("click", function () {
        var errors = validate();

        if (Object.keys(errors).length > 0) {
            highlightErrors(errors);
            return;
        }

        clearAllErrors();
    });
})();
