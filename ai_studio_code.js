// 1. Define your data for different companies
const companyData = {
    companyA: {
        lastYear: [12000, 15000, 10000, 18000, 22000, 25000],
        currentYear: [14000, 17000, 12000, 21000, 24000, 28000]
    },
    companyB: {
        lastYear: [8000, 9000, 11000, 7000, 13000, 15000],
        currentYear: [9500, 10500, 12500, 8500, 14500, 17000]
    },
    companyC: {
        lastYear: [5000, 6000, 5500, 8000, 7500, 9000],
        currentYear: [6000, 7500, 6500, 9500, 8500, 11000]
    }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

// 2. Initialize the chart
const ctx = document.getElementById('salesComparisonChart').getContext('2d');
let salesChart = new Chart(ctx, {
    type: 'bar', // Using bar chart for side-by-side comparison
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Previous Year',
                data: companyData.companyA.lastYear,
                backgroundColor: 'rgba(150, 150, 150, 0.5)',
                borderColor: 'rgba(150, 150, 150, 1)',
                borderWidth: 1
            },
            {
                label: 'Current Year',
                data: companyData.companyA.currentYear,
                backgroundColor: 'rgba(52, 152, 219, 0.7)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// 3. Handle data updates when the dropdown changes
document.getElementById('companySelect').addEventListener('change', (e) => {
    const selectedCompany = e.target.value;
    const newData = companyData[selectedCompany];

    // Update chart datasets
    salesChart.data.datasets[0].data = newData.lastYear;
    salesChart.data.datasets[1].data = newData.currentYear;
    
    // Animate the update
    salesChart.update();
});