// Main Dashboard Script - Orchestrates data loading and rendering

class BiharDashboard {
    constructor() {
        this.dataLoader = new DataLoader();
        this.chartManager = new ChartManager();
    }

    async init() {
        try {
            console.log('Initializing Bihar Elections Dashboard...');
            
            // Load all data
            await this.dataLoader.loadAllData();
            
            // Render all sections
            this.renderHeroMetrics();
            this.renderAlliancePerformance();
            this.renderPartyPerformance();
            this.renderElectionStats();
            this.renderHistoricalComparison();
            this.renderVictoryMargins();
            this.renderWomenRepresentation();
            this.renderCasteDemographics();
            this.renderNotableWinners();
            this.renderNotableLosers();
            
            console.log('Dashboard initialized successfully!');
        } catch (error) {
            console.error('Error initializing dashboard:', error);
            this.showError('Failed to load dashboard data. Please refresh the page.');
        }
    }

    // Render Hero Metrics Section
    renderHeroMetrics() {
        const kpis = this.dataLoader.getDashboardKPIs();
        const container = document.getElementById('hero-metrics');
        
        // Select key metrics to display
        const keyMetrics = [
            { name: 'NDA Seats', key: 'NDA Seats', color: 'nda' },
            { name: 'MGB Seats', key: 'MGB Seats', color: 'mgb' },
            { name: 'Voter Turnout', key: 'Voter Turnout', color: 'blue' },
            { name: 'Female Turnout', key: 'Female Voter Turnout', color: 'pink' },
            { name: 'Women MLAs', key: 'Women MLAs Elected', color: 'purple' },
            { name: 'Total Seats', key: 'Total Seats', color: 'gray' }
        ];

        const colorClasses = {
            nda: 'text-orange-600',
            mgb: 'text-green-600',
            blue: 'text-blue-600',
            pink: 'text-pink-600',
            purple: 'text-purple-600',
            gray: 'text-gray-600'
        };

        container.innerHTML = keyMetrics.map(metric => {
            const kpi = kpis.find(k => k.KPI_Name === metric.key);
            if (!kpi) return '';
            
            const value = kpi.Value;
            const benchmark = kpi.Benchmark;
            
            return `
                <div class="bg-white rounded-lg shadow-md p-6 card text-center">
                    <div class="text-3xl font-bold ${colorClasses[metric.color]} mb-2">${value}</div>
                    <div class="text-sm text-gray-600 mb-1">${metric.name}</div>
                    ${benchmark !== 'Fixed' ? `<div class="text-xs text-gray-500">2020: ${benchmark}</div>` : ''}
                </div>
            `;
        }).join('');
    }

    // Render Alliance Performance Section
    renderAlliancePerformance() {
        const allianceData = this.dataLoader.getAllianceSummary();
        
        // Filter out the total row
        const filteredData = allianceData.filter(d => d.Alliance !== 'Total');
        
        // Create charts
        this.chartManager.createAllianceSeatChart(filteredData);
        this.chartManager.createAllianceVoteChart(filteredData);
    }

    // Render Party Performance Section
    renderPartyPerformance() {
        const partyData = this.dataLoader.getPartyResults();
        
        // Create chart
        this.chartManager.createPartySeatsChart(partyData);
        
        // Create table
        const tableContainer = document.getElementById('partyTable');
        
        // Filter parties with seats won
        const filteredData = partyData.filter(d => parseInt(d.Seats_Won) > 0);
        
        tableContainer.innerHTML = `
            <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-gray-700">Party</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Alliance</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Contested</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Won</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Vote Share</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Strike Rate</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        ${filteredData.map(party => `
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-3 font-medium">${party.Party}</td>
                                <td class="px-4 py-3 text-center">
                                    <span class="inline-block px-2 py-1 text-xs rounded ${
                                        party.Alliance === 'NDA' ? 'bg-orange-100 text-orange-700' :
                                        party.Alliance === 'MGB' ? 'bg-green-100 text-green-700' :
                                        'bg-gray-100 text-gray-700'
                                    }">
                                        ${party.Alliance}
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-center">${party.Seats_Contested || '-'}</td>
                                <td class="px-4 py-3 text-center font-semibold">${party.Seats_Won}</td>
                                <td class="px-4 py-3 text-center">${party.Vote_Share_Percentage || '-'}%</td>
                                <td class="px-4 py-3 text-center">${party.Strike_Rate_Percentage || '-'}%</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    // Render Election Statistics Section
    renderElectionStats() {
        const stats = this.dataLoader.getElectionStats();
        
        // Create charts
        this.chartManager.createGenderTurnoutChart(stats);
        this.chartManager.createPhaseTurnoutChart(stats);
    }

    // Render Historical Comparison Section
    renderHistoricalComparison() {
        const comparisonData = this.dataLoader.getComparison2020();
        
        // Create chart
        this.chartManager.createComparisonChart(comparisonData);
        
        // Create table
        const tableContainer = document.getElementById('comparisonTable');
        
        tableContainer.innerHTML = `
            <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-gray-700">Party</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">2020</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">2025</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Change</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        ${comparisonData.map(party => {
                            const change = parseInt(party.Change);
                            const isPositive = change > 0;
                            const isNegative = change < 0;
                            
                            return `
                                <tr class="hover:bg-gray-50">
                                    <td class="px-4 py-3 font-medium">${party.Party}</td>
                                    <td class="px-4 py-3 text-center">${party['2020_Seats']}</td>
                                    <td class="px-4 py-3 text-center font-semibold">${party['2025_Seats']}</td>
                                    <td class="px-4 py-3 text-center">
                                        <span class="font-semibold ${
                                            isPositive ? 'text-green-600' :
                                            isNegative ? 'text-red-600' :
                                            'text-gray-600'
                                        }">
                                            ${party.Change}
                                        </span>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    // Render Victory Margins Section
    renderVictoryMargins() {
        const largestMargins = this.dataLoader.getLargestMargins();
        const closestContests = this.dataLoader.getClosestContests();
        
        // Create charts
        this.chartManager.createLargestMarginsChart(largestMargins);
        this.chartManager.createClosestContestsChart(closestContests);
    }

    // Render Women Representation Section
    renderWomenRepresentation() {
        const womenData = this.dataLoader.getWomenRepresentation();
        
        // Find total row
        const totalRow = womenData.find(d => d.Party === 'Total');
        
        if (totalRow) {
            document.getElementById('womenCandidates').textContent = totalRow.Women_Candidates;
            document.getElementById('womenWinners').textContent = totalRow.Women_Winners;
            document.getElementById('womenSuccessRate').textContent = totalRow.Success_Rate;
        }
        
        // Create chart
        this.chartManager.createWomenPartyChart(womenData);
    }

    // Render Caste Demographics Section
    renderCasteDemographics() {
        const casteData = this.dataLoader.getCasteDemographics();
        
        // Create chart
        this.chartManager.createCasteDemographicsChart(casteData);
    }

    // Render Notable Winners Section
    renderNotableWinners() {
        const winners = this.dataLoader.getNotableWinners();
        const tableContainer = document.getElementById('winnersTable');
        
        tableContainer.innerHTML = `
            <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-gray-700">Candidate</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Party</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Constituency</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Margin</th>
                            <th class="px-4 py-3 text-left font-semibold text-gray-700">Role</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        ${winners.map(winner => `
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-3 font-medium">${winner.Candidate_Name}</td>
                                <td class="px-4 py-3 text-center">
                                    <span class="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                                        ${winner.Party}
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-center">${winner.Constituency}</td>
                                <td class="px-4 py-3 text-center">${winner.Margin_of_Victory || '-'}</td>
                                <td class="px-4 py-3 text-sm text-gray-600">${winner.Role}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    // Render Notable Losers Section
    renderNotableLosers() {
        const losers = this.dataLoader.getNotableLosers();
        const tableContainer = document.getElementById('losersTable');
        
        tableContainer.innerHTML = `
            <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-gray-700">Candidate/Party</th>
                            <th class="px-4 py-3 text-center font-semibold text-gray-700">Party</th>
                            <th class="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                            <th class="px-4 py-3 text-left font-semibold text-gray-700">Context</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        ${losers.map(loser => `
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-3 font-medium">${loser.Candidate_Name}</td>
                                <td class="px-4 py-3 text-center">
                                    <span class="inline-block px-2 py-1 text-xs rounded bg-red-100 text-red-700">
                                        ${loser.Party}
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">${loser.Status}</td>
                                <td class="px-4 py-3 text-sm text-gray-600">${loser.Context}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    // Show error message
    showError(message) {
        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <h2 class="text-xl font-semibold text-red-800 mb-2">Error Loading Dashboard</h2>
                <p class="text-red-600">${message}</p>
            </div>
        `;
    }
}

// Initialize dashboard when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new BiharDashboard();
    dashboard.init();
});

