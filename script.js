// Data panel Pterodactyl (contoh)
const panels = [
    { name: "Panel 1", url: "https://panel1.example.com", status: "Aktif" },
    { name: "Panel 2", url: "https://panel2.example.com", status: "Non-Aktif" },
    { name: "Panel 3", url: "https://panel3.example.com", status: "Aktif" }
];

// Fungsi untuk menampilkan data panel
function renderPanels() {
    const tbody = document.querySelector("#panel-list tbody");
    tbody.innerHTML = ""; // Kosongkan tabel sebelum mengisi data baru

    panels.forEach(panel => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${panel.name}</td>
            <td><a href="${panel.url}" target="_blank">${panel.url}</a></td>
            <td>${panel.status}</td>
        `;
        tbody.appendChild(row);
    });
}

// Panggil fungsi renderPanels saat halaman dimuat
document.addEventListener("DOMContentLoaded", renderPanels);