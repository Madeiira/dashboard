function getData() {
    // Chamada AJAX para obter os dados do arquivo data.php
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var totalUsers = response.totalUsers;
                var totalSales = response.totalSales;
                var totalRevenue = response.totalRevenue;

                createChart(totalUsers, totalSales, totalRevenue);
            } else {
                console.error('Erro ao obter os dados: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'php/data.php', true);
    xhr.send();
}

function createChart(totalUsers, totalSales, totalRevenue) {
    var data = {
        labels: ['Total de Usuários', 'Total de Vendas', 'Receita Total'],
        datasets: [{
            data: [
                totalUsers,
                totalSales,
                totalRevenue
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };

    var chartCanvas = document.getElementById('chart');
    var ctx = chartCanvas.getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
    });
}