
var bar_ctx = document.getElementById('bar-chart').getContext('2d');

var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 200);
purple_orange_gradient.addColorStop(0, 'white');
purple_orange_gradient.addColorStop(1, 'pink');

var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        datasets: [{
            label: '# de Pedidos',
            data: [12, 19, 3, 8, 14, 5],
						backgroundColor: purple_orange_gradient,
						hoverBackgroundColor: purple_orange_gradient,
						hoverBorderWidth: 1,
						hoverBorderColor: 'black'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});