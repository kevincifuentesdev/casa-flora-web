(function () {
    const DESKTOP_BREAKPOINT = 768;
    let darkTheme = localStorage.getItem("dark-theme") === "true";

    function applyTheme() {
        document.documentElement.classList.toggle("dark", darkTheme);

        if (darkModeBtn) {
            darkModeBtn.querySelector(".moon-icon").style.fill = darkTheme
                ? "currentColor"
                : "none";
        }
    }

    const navLinks = [
        { label: "Inicio", href: "./index.html", icon: "home" },
        { label: "Menú", href: "./menu.html", icon: "menu" },
        { label: "Reserva", href: "./booking.html", icon: "booking" },
        { label: "Perfil", href: "./profile.html", icon: "profile" },
    ];

    const navbar = document.querySelector(".navbar");
    let desktopNav = null;

    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf("/") + 1) || "index.html";
        return page;
    }

    function createDesktopNav() {
        if (desktopNav) return desktopNav;

        const nav = document.createElement("nav");
        nav.className = "desktop-nav-links";

        const currentPage = getCurrentPage();

        navLinks.forEach(function (link) {
            const a = document.createElement("a");
            a.href = link.href;
            a.textContent = link.label;
            a.className = "desktop-nav-link";

            const linkPage = link.href.replace("./", "");
            if (linkPage === currentPage) {
                a.classList.add("active");
            }

            nav.appendChild(a);
        });

        desktopNav = nav;
        return nav;
    }

    function handleResize() {
        const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;
        const heading = navbar.querySelector(".main-heading");

        if (isDesktop && !navbar.querySelector(".desktop-nav-links")) {
            const nav = createDesktopNav();
            heading.insertAdjacentElement("afterend", nav);
        }

        if (!isDesktop && navbar.querySelector(".desktop-nav-links")) {
            navbar.querySelector(".desktop-nav-links").remove();
            desktopNav = null;
        }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    function switchTheme() {
        darkTheme = !darkTheme;
        localStorage.setItem("dark-theme", String(darkTheme));
        applyTheme();
    }

    var darkModeBtn = navbar.querySelector(".dark-mode");

    applyTheme();

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            if (!document.startViewTransition) {
                switchTheme();
                return;
            }

            document.documentElement.classList.add("theme-transitioning");
            var transition = document.startViewTransition(switchTheme);
            transition.finished.then(function () {
                document.documentElement.classList.remove(
                    "theme-transitioning",
                );
            });
        });
    }
})();
