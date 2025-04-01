document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.getElementById("hamburger");
    let sidebar = document.getElementById("sidebar");
    let hamburgerIcon = document.getElementById("hamburger-icon");

    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        hamburgerIcon.classList.toggle("active");
        if (sidebar.classList.contains("active")) {
            hamburgerIcon.textContent = "close";
        } else {
            hamburgerIcon.textContent = "menu";
        }
    });

    let profileMenu = document.getElementById("dropdown");
    let menuItem = document.getElementById("dropdown-content");

    profileMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        menuItem.classList.toggle('show');
    });

    document.addEventListener('click', function () {
        menuItem.classList.remove('show');
    });

    const dateNow = new Date();
    let fullYear = dateNow.getFullYear();
    let day = dateNow.getDate();
    let month = dateNow.toLocaleString('default', { month: 'long' });;
    let newDate = month + " " + day + " " + fullYear;
    const targets = document.getElementsByClassName("date");
    Array.from(targets).forEach(target => {
        target.innerText = `${newDate}`;
    });

    getChart();

});



function getChart() {
    const ctx = document.getElementById('analyticsChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'Label1',
                data: [5000, 8000, 10000, 5000, 12500, 7000, 16000],
                borderColor: '#4e73df',
                backgroundColor: 'rgba(78, 115, 223, 0.05)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#4e73df',
                pointRadius: 0,
            },
            {
                label: 'Label2',
                data: [13000, 10000, 15000, 12000, 17500, 11500, 20000],
                borderColor: 'rgba(248, 205, 112, 1)',
                backgroundColor: 'rgba(248, 205, 112, 0.05)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'rgba(248, 205, 112, 1)',
                pointRadius: 0,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 20000,
                    ticks: {
                        callback: function (value) {
                            return value === 0 ? '0k' : (value / 1000) + 'k';
                        },
                        stepSize: 5000,
                        font: {
                            size: 14,
                        },
                        padding: 5,
                        color: 'rgba(102, 112, 133, 0.8)',

                    },
                    grid: {
                        drawBorder: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                    },
                    border: {
                        display: false,
                        dash: [15, 9],
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        padding: 5
                    },
                    border: {
                        display: false
                    }
                }
            },
            elements: {
                line: {
                    borderWidth: 2
                }
            }
        }
    });
}

window.addEventListener('resize', function () {
    chart.resize();
});

