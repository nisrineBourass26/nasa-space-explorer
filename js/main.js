const API_KEY = "knccByKmcIFStzb6FPQrkRIXidBFQMzpIdu8aETC";

// Query Selectors
const galleryContainer = document.getElementById("galleryContainer");
const searchInput = document.getElementById("searchInput");

// ===========================================
// 1. APOD GALLERY
// ===========================================

function createAPODCard(item) {
    if (item.media_type !== "image") return "";
    return `
        <div cardlass="col apod-c" data-title="${item.title}" data-date="${item.date}">
            <div class="card h-100">
                <img src="${item.url}" class="card-img-top img-fluid" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text small text-muted">${item.date}</p>
                </div>
            </div>
        </div>
    `;
}

async function loadAPOD() {
    if (!galleryContainer) return;
    try {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=9 `);
        const data = await res.json();
        galleryContainer.innerHTML = data.map(createAPODCard).join("");
        if (searchInput) searchInput.addEventListener("keyup", handleGallerySearch);
    } catch (error) {
        galleryContainer.innerHTML = `<div class="alert alert-danger">Failed to load images.</div>`;
    }
}

function handleGallerySearch() {
    const value = searchInput.value.toLowerCase();
    document.querySelectorAll(".apod-card").forEach(card => {
        const title = card.dataset.title.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
    });
}

// ======================= ASTEROIDS PAGE ========================= //

const loadAsteroidsBtn = document.getElementById("loadAsteroids");
if (loadAsteroidsBtn) loadAsteroidsBtn.addEventListener("click", loadAsteroids);

async function loadAsteroids() {
    const today = new Date().toISOString().split("T")[0];
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${API_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const asteroids = data.near_earth_objects[today];
        displayAsteroidList(asteroids);
        drawAsteroidChart(asteroids);
    } catch (error) { console.error(error); }
}

function displayAsteroidList(asteroids) {
    const container = document.getElementById("asteroidList");
    if (!container) return;
    container.innerHTML = asteroids.map(a => `
        <div class="col-md-4 mb-4">
            <div class="card h-100 p-3">
                <h5>${a.name}</h5>
                <p>Size: ${a.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} m</p>
                <p>Speed: ${parseFloat(a.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(0)} km/h</p>
            </div>
        </div>
    `).join("");
}

function drawAsteroidChart(asteroids) {
    const ctx = document.getElementById("asteroidChart");
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: asteroids.map(a => a.name),
            datasets: [{
                label: 'Asteroid Size (meters)',
                data: asteroids.map(a => a.estimated_diameter.meters.estimated_diameter_max),
                backgroundColor: '#0b3d91'
            }]
        }
    });
}

// ===========================================
// 3. PAGE 4 – SOLAR SYSTEM (via Flask)
// ===========================================

async function loadSolarSystemBodies() {
    const container = document.getElementById("bodies-container");
    if (!container) return;
    try {
        const res = await fetch("http://127.0.0.1:5000/bodies");
        const data = await res.json();
        const bodies = data.bodies.filter(b => b.isPlanet === true || b.englishName.toLowerCase().includes("moon"));
        container.innerHTML = bodies.map(b => `
            <div class="col-md-4 mb-4">
                <div class="card h-100 p-3">
                    <h4 class="card-title">${b.englishName}</h4>
                    <p class="mb-1"><strong>Gravity:</strong> ${b.gravity || "N/A"} m/s²</p>
                    <p class="mb-1"><strong>Type:</strong> ${b.bodyType}</p>
                </div>
            </div>
        `).join("");
    } catch (err) { console.error(err); }
}

document.addEventListener("DOMContentLoaded", () => {
    if (galleryContainer) loadAPOD();
    if (window.location.pathname.includes("page4")) loadSolarSystemBodies();
});