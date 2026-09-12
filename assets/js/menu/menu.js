import products from "./products.js";

const state = {
    selectedCategories: [],
    maxPrice: 0,
    sortBy: "relevancia",
    searchQuery: "",
};

let els = {};

function cacheDOM() {
    els = {
        filterPanel: document.getElementById("filter-panel"),
        filterOverlay: document.getElementById("filter-overlay"),
        filterToggleBtn: document.getElementById("filter-toggle-btn"),
        filterCloseBtn: document.getElementById("filter-close-btn"),
        categoryPillsContainer: document.getElementById("category-pills"),
        priceSlider: document.getElementById("price-slider"),
        priceCurrentLabel: document.getElementById("price-current"),
        priceMaxLabel: document.getElementById("price-max"),
        sortSelect: document.getElementById("sort-select"),
        searchInput: document.getElementById("search-input"),
        activeFiltersContainer: document.getElementById("active-filters"),
        resultsCount: document.getElementById("results-count"),
        productsGrid: document.getElementById("products-grid"),
        emptyState: document.getElementById("empty-state"),
        clearFiltersBtn: document.getElementById("clear-filters-btn"),
        emptyStateBtn: document.getElementById("empty-state-btn"),
    };
}

function init() {
    cacheDOM();

    const prices = products.map((p) => p.getProductPrice());
    state.maxPrice = Math.max(...prices);

    els.priceSlider.max = state.maxPrice;
    els.priceSlider.value = state.maxPrice;
    els.priceMaxLabel.textContent = formatPrice(state.maxPrice);
    els.priceCurrentLabel.textContent = formatPrice(state.maxPrice);

    renderCategoryPills();
    renderProducts();
    bindEvents();
}

function getAllCategories() {
    const catSet = new Set();
    products.forEach((p) => {
        p.getProductCategories().forEach((c) => catSet.add(c));
    });
    return Array.from(catSet);
}

function renderCategoryPills() {
    const categories = getAllCategories();
    els.categoryPillsContainer.innerHTML = "";

    categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.className = "category-pill";
        btn.textContent = cat;
        btn.dataset.category = cat;
        btn.setAttribute("aria-pressed", "false");

        btn.addEventListener("click", () => toggleCategory(cat, btn));
        els.categoryPillsContainer.appendChild(btn);
    });
}

function toggleCategory(category, btn) {
    const idx = state.selectedCategories.indexOf(category);
    if (idx === -1) {
        state.selectedCategories.push(category);
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
    } else {
        state.selectedCategories.splice(idx, 1);
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
    }
    applyFilters();
}

function getFilteredProducts() {
    let filtered = [...products];

    if (state.selectedCategories.length > 0) {
        filtered = filtered.filter((p) =>
            p.getProductCategories().some((c) =>
                state.selectedCategories.includes(c)
            )
        );
    }

    filtered = filtered.filter(
        (p) => p.getProductPrice() <= state.maxPrice
    );

    if (state.searchQuery.trim()) {
        const query = state.searchQuery.trim().toLowerCase();
        filtered = filtered.filter(
            (p) =>
                p.getProductName().toLowerCase().includes(query) ||
                p.getProductDescription().toLowerCase().includes(query)
        );
    }

    switch (state.sortBy) {
        case "precio-asc":
            filtered.sort((a, b) => a.getProductPrice() - b.getProductPrice());
            break;
        case "precio-desc":
            filtered.sort((a, b) => b.getProductPrice() - a.getProductPrice());
            break;
        case "nombre-az":
            filtered.sort((a, b) =>
                a.getProductName().localeCompare(b.getProductName(), "es")
            );
            break;
        default:
            break;
    }

    return filtered;
}

function applyFilters() {
    const filtered = getFilteredProducts();

    renderProducts(filtered);
    renderActiveFilterTags();
    updateResultsCount(filtered.length);
    updateClearButton();
    updateFilterToggleCount();
}

function renderProducts(list) {
    const items = list || products;

    els.productsGrid.innerHTML = "";

    if (items.length === 0) {
        els.productsGrid.style.display = "none";
        els.emptyState.style.display = "flex";
        return;
    }

    els.productsGrid.style.display = "";
    els.emptyState.style.display = "none";

    items.forEach((product, i) => {
        const card = createProductCard(product);
        card.style.animationDelay = `${i * 0.05}s`;
        els.productsGrid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";

    const mediaDiv = document.createElement("div");
    mediaDiv.className = "product-media";

    const img = document.createElement("img");
    img.src = product.getProductImage();
    img.alt = product.getProductName();
    img.className = "product-picture";
    img.loading = "lazy";
    mediaDiv.appendChild(img);

    const tagContainer = document.createElement("div");
    tagContainer.className = "media-tag-container";
    product.getProductCategories().forEach((cat) => {
        const tag = document.createElement("span");
        tag.className = "media-tag";
        tag.textContent = cat;
        tagContainer.appendChild(tag);
    });
    mediaDiv.appendChild(tagContainer);

    const infoDiv = document.createElement("div");
    infoDiv.className = "product-info";

    const heading = document.createElement("h3");
    heading.textContent = product.getProductName();

    const desc = document.createElement("p");
    desc.textContent = product.getProductDescription();

    const actionDiv = document.createElement("div");
    actionDiv.className = "product-action";

    const priceSpan = document.createElement("span");
    priceSpan.textContent = formatPrice(product.getProductPrice());

    const addBtn = document.createElement("button");
    addBtn.className = "add-to-cart";
    addBtn.setAttribute("aria-label", "Agregar al carrito");
    addBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="add-to-cart-icon">
            <path d="M13.75 9C13.75 8.586 13.414 8.25 13 8.25C12.586 8.25 12.25 8.586 12.25 9V10.25H11C10.586 10.25 10.25 10.586 10.25 11C10.25 11.414 10.586 11.75 11 11.75H12.25V13C12.25 13.414 12.586 13.75 13 13.75C13.414 13.75 13.75 13.414 13.75 13V11.75H15C15.414 11.75 15.75 11.414 15.75 11C15.75 10.586 15.414 10.25 15 10.25H13.75V9Z" fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.293 2.751C1.43 2.36 1.858 2.155 2.249 2.292L2.55 2.398C3.167 2.615 3.691 2.799 4.103 3.001C4.543 3.218 4.921 3.484 5.205 3.9C5.487 4.312 5.604 4.765 5.657 5.262C5.661 5.297 5.665 5.333 5.668 5.37L17.12 5.37C17.939 5.37 18.774 5.37 19.461 5.447C19.81 5.486 20.157 5.548 20.463 5.656C20.764 5.761 21.094 5.934 21.329 6.24C21.711 6.736 21.778 7.314 21.742 7.9C21.707 8.458 21.569 9.152 21.404 9.977L21.394 10.03L21.393 10.034L20.884 12.503C20.734 13.23 20.608 13.841 20.446 14.323C20.273 14.835 20.034 15.284 19.608 15.632C19.181 15.979 18.693 16.123 18.157 16.188C17.652 16.25 17.028 16.25 16.286 16.25L10.88 16.25C9.535 16.25 8.445 16.25 7.587 16.128C6.69 16.001 5.938 15.729 5.344 15.102C4.797 14.526 4.505 13.914 4.359 13.06C4.222 12.26 4.208 11.213 4.208 9.76V7.038C4.208 6.298 4.207 5.803 4.166 5.423C4.127 5.06 4.057 4.878 3.967 4.746C3.879 4.617 3.745 4.497 3.442 4.348C3.119 4.19 2.68 4.034 2.013 3.799L1.751 3.708C1.361 3.57 1.155 3.142 1.293 2.751ZM5.708 6.87V9.76C5.708 11.249 5.726 12.158 5.837 12.807C5.939 13.402 6.112 13.733 6.432 14.07C6.705 14.358 7.082 14.542 7.797 14.643C8.538 14.748 9.521 14.75 10.938 14.75H16.241C17.04 14.75 17.571 14.749 17.975 14.699C18.357 14.653 18.535 14.571 18.66 14.469C18.785 14.367 18.901 14.21 19.024 13.844C19.154 13.459 19.262 12.939 19.424 12.156L19.923 9.736C20.101 8.844 20.217 8.252 20.244 7.808C20.27 7.387 20.204 7.239 20.143 7.158C20.137 7.153 20.093 7.116 19.966 7.071C19.811 7.016 19.59 6.971 19.294 6.937C18.699 6.871 17.945 6.87 17.089 6.87H5.708Z" fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 19.5C5.25 20.743 6.258 21.75 7.5 21.75C8.743 21.75 9.75 20.743 9.75 19.5C9.75 18.257 8.743 17.25 7.5 17.25C6.258 17.25 5.25 18.257 5.25 19.5ZM7.5 20.25C7.086 20.25 6.75 19.914 6.75 19.5C6.75 19.086 7.086 18.75 7.5 18.75C7.914 18.75 8.25 19.086 8.25 19.5C8.25 19.914 7.914 20.25 7.5 20.25Z" fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 19.5C14.25 20.743 15.258 21.75 16.5 21.75C17.743 21.75 18.75 20.743 18.75 19.5C18.75 18.257 17.743 17.25 16.5 17.25C15.258 17.25 14.25 18.257 14.25 19.5ZM16.5 20.25C16.086 20.25 15.75 19.914 15.75 19.5C15.75 19.086 16.086 18.75 16.5 18.75C16.914 18.75 17.25 19.086 17.25 19.5C17.25 19.914 16.914 20.25 16.5 20.25Z" fill="currentColor"></path>
        </svg>
    `;

    actionDiv.appendChild(priceSpan);
    actionDiv.appendChild(addBtn);

    infoDiv.appendChild(heading);
    infoDiv.appendChild(desc);
    infoDiv.appendChild(actionDiv);

    card.appendChild(mediaDiv);
    card.appendChild(infoDiv);

    return card;
}


function renderActiveFilterTags() {
    els.activeFiltersContainer.innerHTML = "";

    state.selectedCategories.forEach((cat) => {
        const tag = createFilterTag(cat, () => {
            const pill = els.categoryPillsContainer.querySelector(
                `[data-category="${cat}"]`
            );
            if (pill) toggleCategory(cat, pill);
        });
        els.activeFiltersContainer.appendChild(tag);
    });

    const prices = products.map((p) => p.getProductPrice());
    const globalMax = Math.max(...prices);
    if (state.maxPrice < globalMax) {
        const tag = createFilterTag(
            `Hasta ${formatPrice(state.maxPrice)}`,
            () => {
                state.maxPrice = globalMax;
                els.priceSlider.value = globalMax;
                els.priceCurrentLabel.textContent = formatPrice(globalMax);
                applyFilters();
            }
        );
        els.activeFiltersContainer.appendChild(tag);
    }

    if (state.searchQuery.trim()) {
        const tag = createFilterTag(
            `"${state.searchQuery.trim()}"`,
            () => {
                state.searchQuery = "";
                els.searchInput.value = "";
                applyFilters();
            }
        );
        els.activeFiltersContainer.appendChild(tag);
    }
}

function createFilterTag(label, onRemove) {
    const tag = document.createElement("span");
    tag.className = "filter-tag";
    tag.textContent = label;

    const removeBtn = document.createElement("button");
    removeBtn.className = "filter-tag-remove";
    removeBtn.innerHTML = "✕";
    removeBtn.setAttribute("aria-label", `Quitar filtro: ${label}`);
    removeBtn.addEventListener("click", onRemove);

    tag.appendChild(removeBtn);
    return tag;
}

function updateResultsCount(count) {
    const total = products.length;
    els.resultsCount.textContent = `Mostrando ${count} de ${total} productos`;
}

function clearAllFilters() {
    state.selectedCategories = [];
    state.searchQuery = "";
    state.sortBy = "relevancia";

    const prices = products.map((p) => p.getProductPrice());
    state.maxPrice = Math.max(...prices);

    els.searchInput.value = "";
    els.sortSelect.value = "relevancia";
    els.priceSlider.value = state.maxPrice;
    els.priceCurrentLabel.textContent = formatPrice(state.maxPrice);

    const pills = els.categoryPillsContainer.querySelectorAll(".category-pill");
    pills.forEach((pill) => {
        pill.classList.remove("active");
        pill.setAttribute("aria-pressed", "false");
    });

    applyFilters();
}

function updateClearButton() {
    const prices = products.map((p) => p.getProductPrice());
    const globalMax = Math.max(...prices);
    const hasFilters =
        state.selectedCategories.length > 0 ||
        state.maxPrice < globalMax ||
        state.searchQuery.trim() !== "" ||
        state.sortBy !== "relevancia";

    els.clearFiltersBtn.disabled = !hasFilters;
}

function updateFilterToggleCount() {
    const prices = products.map((p) => p.getProductPrice());
    const globalMax = Math.max(...prices);

    let count = state.selectedCategories.length;
    if (state.maxPrice < globalMax) count++;
    if (state.searchQuery.trim()) count++;

    const badge = els.filterToggleBtn.querySelector(".filter-count");
    if (count > 0) {
        if (badge) {
            badge.textContent = count;
        } else {
            const span = document.createElement("span");
            span.className = "filter-count";
            span.textContent = count;
            els.filterToggleBtn.appendChild(span);
        }
    } else if (badge) {
        badge.remove();
    }
}

function openDrawer() {
    els.filterPanel.classList.add("open");
    els.filterOverlay.classList.add("active");
    document.body.classList.add("body-no-scroll");
}

function closeDrawer() {
    els.filterPanel.classList.remove("open");
    els.filterOverlay.classList.remove("active");
    document.body.classList.remove("body-no-scroll");
}

let searchTimeout = null;

function bindEvents() {
    els.filterToggleBtn.addEventListener("click", openDrawer);
    els.filterCloseBtn.addEventListener("click", closeDrawer);
    els.filterOverlay.addEventListener("click", closeDrawer);

    els.priceSlider.addEventListener("input", (e) => {
        state.maxPrice = parseInt(e.target.value, 10);
        els.priceCurrentLabel.textContent = formatPrice(state.maxPrice);
        applyFilters();
    });

    els.sortSelect.addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        applyFilters();
    });

    els.searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            state.searchQuery = e.target.value;
            applyFilters();
        }, 300);
    });

    els.clearFiltersBtn.addEventListener("click", clearAllFilters);
    els.emptyStateBtn.addEventListener("click", clearAllFilters);
}


function formatPrice(value) {
    return `$${value.toLocaleString("es-CO")}`;
}

document.addEventListener("DOMContentLoaded", init);
