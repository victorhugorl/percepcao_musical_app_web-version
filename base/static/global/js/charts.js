const ctx = document.getElementById("id-canva");

new Chart(ctx, {
    // tipo de grafico
    type: "bar",
    data: {
        labels: ["Tempo", "Acertos", "Pontos"],
        datasets: [
            {
                label: "Desempenho semanal",
                // esses pontos terar um calculo por tras
                data: [8, 9, 3],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            // da pra mudar outros tipos de config
            y: {
                beginAtZero: true
            }
        }
    }
});
