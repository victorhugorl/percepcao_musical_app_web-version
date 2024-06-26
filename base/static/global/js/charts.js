const ctx = document.getElementById("id-canva");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Tempo", "Acertos", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "level status",
                data: [8, 9, 3, 5, 2, 3],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
