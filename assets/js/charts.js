// Charts Module - Handles all Chart.js visualizations

class ChartManager {
    constructor() {
        this.charts = {};
        this.colorPalette = {
            nda: '#E67E3D',
            mgb: '#00A651',
            others: '#6B7280',
            bjp: '#FF9933',
            jdu: '#2E7D32',
            rjd: '#00A651',
            inc: '#19AAED',
            ljprv: '#8B4513',
            aimim: '#00693E',
            bsp: '#0000FF',
            hams: '#FFA500',
            rlm: '#FF1493',
            cpiml: '#DC143C',
            cpim: '#DC143C',
            male: '#3B82F6',
            female: '#EC4899',
            phase1: '#8B5CF6',
            phase2: '#10B981'
        };
    }

    // Alliance Seat Distribution Pie Chart
    createAllianceSeatChart(data) {
        const ctx = document.getElementById('allianceSeatChart');
        if (!ctx) return;

        const chartData = {
            labels: data.map(d => d.Alliance),
            datasets: [{
                data: data.map(d => parseInt(d.Seats_Won)),
                backgroundColor: [
                    this.colorPalette.nda,
                    this.colorPalette.mgb,
                    this.colorPalette.others
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        };

        this.charts.allianceSeat = new Chart(ctx, {
            type: 'doughnut',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { family: 'Poppins', size: 12 },
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${value} seats (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Alliance Vote Share Bar Chart
    createAllianceVoteChart(data) {
        const ctx = document.getElementById('allianceVoteChart');
        if (!ctx) return;

        const chartData = {
            labels: data.map(d => d.Alliance),
            datasets: [{
                label: 'Vote Share (%)',
                data: data.map(d => parseFloat(d.Vote_Share.replace('%', ''))),
                backgroundColor: [
                    this.colorPalette.nda,
                    this.colorPalette.mgb,
                    this.colorPalette.others
                ],
                borderWidth: 1,
                borderColor: '#e5e7eb'
            }]
        };

        this.charts.allianceVote = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.parsed.y.toFixed(2)}%`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 50,
                        ticks: {
                            callback: (value) => value + '%',
                            font: { family: 'Poppins' }
                        },
                        grid: { color: '#f3f4f6' }
                    },
                    x: {
                        ticks: { font: { family: 'Poppins', size: 12 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Party Seats Bar Chart
    createPartySeatsChart(data) {
        const ctx = document.getElementById('partySeatsChart');
        if (!ctx) return;

        // Filter out parties with 0 seats for cleaner visualization
        const filteredData = data.filter(d => parseInt(d.Seats_Won) > 0);
        
        // Sort by seats won (descending)
        filteredData.sort((a, b) => parseInt(b.Seats_Won) - parseInt(a.Seats_Won));

        const chartData = {
            labels: filteredData.map(d => d.Party),
            datasets: [{
                label: 'Seats Won',
                data: filteredData.map(d => parseInt(d.Seats_Won)),
                backgroundColor: filteredData.map(d => {
                    const party = d.Party.toLowerCase().replace(/[()]/g, '');
                    return this.colorPalette[party] || this.colorPalette.others;
                }),
                borderWidth: 1,
                borderColor: '#e5e7eb'
            }]
        };

        this.charts.partySeats = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.parsed.x} seats`
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: { font: { family: 'Poppins' } },
                        grid: { color: '#f3f4f6' }
                    },
                    y: {
                        ticks: { font: { family: 'Poppins', size: 11 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Gender Turnout Chart
    createGenderTurnoutChart(stats) {
        const ctx = document.getElementById('genderTurnoutChart');
        if (!ctx) return;

        const maleTurnout = parseFloat(stats.find(s => s.Metric === 'Male Voter Turnout')?.Value.replace('%', '') || 0);
        const femaleTurnout = parseFloat(stats.find(s => s.Metric === 'Female Voter Turnout')?.Value.replace('%', '') || 0);

        const chartData = {
            labels: ['Male', 'Female'],
            datasets: [{
                label: 'Voter Turnout (%)',
                data: [maleTurnout, femaleTurnout],
                backgroundColor: [this.colorPalette.male, this.colorPalette.female],
                borderWidth: 1,
                borderColor: '#e5e7eb'
            }]
        };

        this.charts.genderTurnout = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.parsed.y.toFixed(2)}%`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 80,
                        ticks: {
                            callback: (value) => value + '%',
                            font: { family: 'Poppins' }
                        },
                        grid: { color: '#f3f4f6' }
                    },
                    x: {
                        ticks: { font: { family: 'Poppins', size: 12 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Phase Turnout Chart
    createPhaseTurnoutChart(stats) {
        const ctx = document.getElementById('phaseTurnoutChart');
        if (!ctx) return;

        const phase1Turnout = parseFloat(stats.find(s => s.Metric === 'Phase 1 Turnout')?.Value.replace('%', '') || 0);
        const phase2Turnout = parseFloat(stats.find(s => s.Metric === 'Phase 2 Turnout')?.Value.replace('%', '') || 0);

        const chartData = {
            labels: ['Phase 1 (Nov 6)', 'Phase 2 (Nov 11)'],
            datasets: [{
                label: 'Voter Turnout (%)',
                data: [phase1Turnout, phase2Turnout],
                backgroundColor: [this.colorPalette.phase1, this.colorPalette.phase2],
                borderWidth: 1,
                borderColor: '#e5e7eb'
            }]
        };

        this.charts.phaseTurnout = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.parsed.y.toFixed(2)}%`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 80,
                        ticks: {
                            callback: (value) => value + '%',
                            font: { family: 'Poppins' }
                        },
                        grid: { color: '#f3f4f6' }
                    },
                    x: {
                        ticks: { font: { family: 'Poppins', size: 12 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // 2020 vs 2025 Comparison Chart
    createComparisonChart(data) {
        const ctx = document.getElementById('comparisonChart');
        if (!ctx) return;

        const chartData = {
            labels: data.map(d => d.Party),
            datasets: [
                {
                    label: '2020',
                    data: data.map(d => parseInt(d['2020_Seats'])),
                    backgroundColor: '#9CA3AF',
                    borderWidth: 1,
                    borderColor: '#e5e7eb'
                },
                {
                    label: '2025',
                    data: data.map(d => parseInt(d['2025_Seats'])),
                    backgroundColor: '#3B82F6',
                    borderWidth: 1,
                    borderColor: '#e5e7eb'
                }
            ]
        };

        this.charts.comparison = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { font: { family: 'Poppins', size: 12 }, padding: 15 }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.dataset.label}: ${context.parsed.y} seats`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { font: { family: 'Poppins' } },
                        grid: { color: '#f3f4f6' }
                    },
                    x: {
                        ticks: { font: { family: 'Poppins', size: 11 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Largest Margins Chart
    createLargestMarginsChart(data) {
        const ctx = document.getElementById('largestMarginsChart');
        if (!ctx) return;

        const chartData = {
            labels: data.map(d => d.Constituency),
            datasets: [{
                label: 'Victory Margin',
                data: data.map(d => parseInt(d.Margin.replace(/,/g, ''))),
                backgroundColor: '#10B981',
                borderWidth: 1,
                borderColor: '#e5e7eb'
            }]
        };

        this.charts.largestMargins = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const data = context.chart.data.labels;
                                const index = context.dataIndex;
                                const originalData = this.largestMarginsData[index];
                                return [
                                    `Winner: ${originalData.Winner} (${originalData.Party})`,
                                    `Margin: ${context.parsed.x.toLocaleString()} votes`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            callback: (value) => (value / 1000).toFixed(0) + 'K',
                            font: { family: 'Poppins' }
                        },
                        grid: { color: '#f3f4f6' }
                    },
                    y: {
                        ticks: { font: { family: 'Poppins', size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
        
        this.largestMarginsData = data;
    }

    // Closest Contests Chart
    createClosestContestsChart(data) {
        const ctx = document.getElementById('closestContestsChart');
        if (!ctx) return;

        // Filter and parse margins
        const filteredData = data.filter(d => {
            const margin = d.Margin;
            return margin && !isNaN(parseInt(margin));
        });

        const chartData = {
            labels: filteredData.map(d => d.Constituency),
            datasets: [{
                label: 'Victory Margin',
                data: filteredData.map(d => parseInt(d.Margin)),
                backgroundColor: '#EF4444',
                borderWidth: 1,
                borderColor: '#e5e7eb'
            }]
        };

        this.charts.closestContests = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const index = context.dataIndex;
                                const originalData = filteredData[index];
                                return [
                                    `Winner: ${originalData.Winner} (${originalData.Party})`,
                                    `Margin: ${context.parsed.x.toLocaleString()} votes`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: { font: { family: 'Poppins' } },
                        grid: { color: '#f3f4f6' }
                    },
                    y: {
                        ticks: { font: { family: 'Poppins', size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Women Party Chart
    createWomenPartyChart(data) {
        const ctx = document.getElementById('womenPartyChart');
        if (!ctx) return;

        // Filter parties with women winners
        const filteredData = data.filter(d => d.Party !== 'Total' && parseInt(d.Women_Winners) > 0);

        const chartData = {
            labels: filteredData.map(d => d.Party),
            datasets: [{
                label: 'Women Winners',
                data: filteredData.map(d => parseInt(d.Women_Winners)),
                backgroundColor: '#EC4899',
                borderWidth: 1,
                borderColor: '#e5e7eb'
            }]
        };

        this.charts.womenParty = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.parsed.y} women MLAs elected`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 2,
                            font: { family: 'Poppins' }
                        },
                        grid: { color: '#f3f4f6' }
                    },
                    x: {
                        ticks: { font: { family: 'Poppins', size: 12 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Caste Demographics Pie Chart
    createCasteDemographicsChart(data) {
        const ctx = document.getElementById('casteDemographicsChart');
        if (!ctx) return;

        // Filter out total row
        const filteredData = data.filter(d => d.Category !== 'Total');

        const chartData = {
            labels: filteredData.map(d => d.Category),
            datasets: [{
                data: filteredData.map(d => parseFloat(d.Population_Percentage.replace('%', ''))),
                backgroundColor: [
                    '#3B82F6', // EBC - Blue
                    '#10B981', // OBC - Green
                    '#8B5CF6', // SC - Purple
                    '#EF4444', // ST - Red
                    '#F59E0B'  // General - Orange
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        };

        this.charts.casteDemographics = new Chart(ctx, {
            type: 'pie',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { family: 'Poppins', size: 11 },
                            padding: 10
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                return `${label}: ${value.toFixed(2)}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Destroy all charts (for cleanup)
    destroyAll() {
        Object.values(this.charts).forEach(chart => chart.destroy());
        this.charts = {};
    }
}

// Export for use in other scripts
window.ChartManager = ChartManager;

