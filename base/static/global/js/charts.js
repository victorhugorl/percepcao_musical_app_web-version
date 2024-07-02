const ctx = document.getElementById("id-canva");

// Aqui a docs https://www.chartjs.org/docs/latest/
new Chart(ctx, {
    // tipo de grafico
    type: "bar",
    data: {
        labels: ["Tempo", "Acertos", "Pontos", "Conclusão Aula", "Ofensiva"],
        datasets: [
            {
                label: "Desempenho semanal",
                // esses pontos terar um calculo por tras
                data: [8, 9, 3, 2, 10],
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
