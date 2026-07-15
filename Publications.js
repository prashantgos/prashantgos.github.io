document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get("theme");

    if (!themeParam)
        return;

    // Support one OR multiple themes
    const selectedThemes = themeParam
        .split(",")
        .map(t => t.trim());

    const pubs = document.querySelectorAll(".pub");

    let count = 0;

    pubs.forEach(pub => {

        const pubThemes = (pub.dataset.theme || "").split(" ");

        // Match ANY selected theme
        const match = selectedThemes.some(theme =>
            pubThemes.includes(theme)
        );

        if (match) {
            pub.style.display = "";
            count++;
        }
        else {
            pub.style.display = "none";
        }

    });

    // ---------- Friendly theme names ----------
    const themeNames = {

        "physics-simulation": "Physics-Based Simulation",
        "clouds": "Atmospheric Modeling & Cloud Animation",
        "rendering": "Rendering & Visual Effects",
        "geometry": "Large-Scale Geometry & Point-Based Rendering",
        "games": "Computer Games & Interactive Systems",
        "xr": "Extended Reality & Human Perception",
        "visualization": "Visualization & Visual Analytics",
        "hcc": "Human-Centered Computing",
        "ai": "Human-Centered AI & Intelligent Systems",
        "healthcare": "Digital Health & Healthcare Technologies"

    };

    const title = document.getElementById("page-title");

    // Use friendly name if there is only one theme
    let displayTitle;

    if (selectedThemes.length === 1) {

        displayTitle =
            themeNames[selectedThemes[0]] || selectedThemes[0];

    } else {

        // For combined themes, keep the page title generic
        displayTitle = "Research Theme";

    }

    title.innerHTML = `
        ${displayTitle}
        <span class="pub-subtitle">(${count} publications)</span>
    `;

	document.getElementById("theme-toolbar").innerHTML = `
		<a class="back-button" href="Research.html">
			← Back to Research
		</a>

		<a class="back-button secondary-button" href="Publications.html">
			📚 Show All Publications
		</a>
`;
	
	// ===========================================
// Hide years with no visible publications
// ===========================================

	document.querySelectorAll(".year-title").forEach(year => {

		let next = year.nextElementSibling;
		let hasVisiblePublication = false;

		while (next && !next.classList.contains("year-title")) {

			if (
				next.classList.contains("pub") &&
				next.style.display !== "none"
			) {
				hasVisiblePublication = true;
				break;
			}

			next = next.nextElementSibling;
		}

		year.style.display = hasVisiblePublication ? "" : "none";

	});

});