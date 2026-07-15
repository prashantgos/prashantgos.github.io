document.addEventListener("DOMContentLoaded", async () => {

    const response = await fetch("Publications.html");
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // ===========================================
    // Count publications for each research theme
    // ===========================================

    document.querySelectorAll(".theme-count").forEach(counter => {

        // Multiple themes separated by commas
        const themes = counter.dataset.theme
            .split(",")
            .map(t => t.trim());

        const matchedPapers = new Set();

        themes.forEach(theme => {

            doc.querySelectorAll(`.pub[data-theme~="${theme}"]`)
                .forEach(pub => matchedPapers.add(pub));

        });

        counter.innerHTML =
            `<strong>${matchedPapers.size}</strong> Publications`;

    });

    // ===========================================
    // Create publication links automatically
    // ===========================================

    document.querySelectorAll(".theme-link").forEach(link => {

        const themes = link.dataset.theme;

        link.href =
            `Publications.html?theme=${encodeURIComponent(themes)}`;

    });

});