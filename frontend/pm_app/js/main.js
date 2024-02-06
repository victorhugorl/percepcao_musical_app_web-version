// Poderia ter o consumo de uma API aqui do nosso proprio projeto

function newChart(ctx, date) {
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "numbers of Votes",
                    data: [
                        date[0],
                        date[1],
                        date[2],
                        date[3],
                        date[4],
                        date[5]
                    ],
                    // data: [12, 19, 3, 5, 2, 3],
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
}

const ctx = document.getElementById("graficOne"); // fazendo uns testes so pra rir depois deixo menor e bem feito
const data = [12, 19, 3, 5, 2, 3];
const data2 = [16, 9, 6, 1, 22, 4];
const ctx2 = document.getElementById("graficTwo");


alert('está funcionando');