// Data Loader Module - Handles CSV parsing and data management

class DataLoader {
    constructor() {
        this.data = {
            allianceSummary: [],
            partyResults: [],
            electionStats: [],
            dashboardKPIs: [],
            comparison2020: [],
            largestMargins: [],
            closestContests: [],
            womenRepresentation: [],
            casteDemographics: [],
            notableWinners: [],
            notableLosers: [],
            regionalPerformance: [],
            scStPerformance: [],
            marginStats: [],
            keyInsights: [],
            keyIssues: [],
            timeline: [],
            topConstituencies: []
        };
        this.basePath = 'exported-assets/';
        this.loadedCount = 0;
        this.totalFiles = 18;
    }

    async loadAllData() {
        const fileMap = {
            allianceSummary: 'bihar_2025_alliance_summary.csv',
            partyResults: 'bihar_2025_party_results.csv',
            electionStats: 'bihar_2025_election_stats.csv',
            dashboardKPIs: 'bihar_2025_dashboard_kpis.csv',
            comparison2020: 'bihar_2025_comparison_2020.csv',
            largestMargins: 'bihar_2025_largest_margins.csv',
            closestContests: 'bihar_2025_closest_contests.csv',
            womenRepresentation: 'bihar_2025_women_representation.csv',
            casteDemographics: 'bihar_2025_caste_demographics.csv',
            notableWinners: 'bihar_2025_notable_winners.csv',
            notableLosers: 'bihar_2025_notable_losers.csv',
            regionalPerformance: 'bihar_2025_regional_performance.csv',
            scStPerformance: 'bihar_2025_sc_st_performance.csv',
            marginStats: 'bihar_2025_margin_stats.csv',
            keyInsights: 'bihar_2025_key_insights.csv',
            keyIssues: 'bihar_2025_key_issues.csv',
            timeline: 'bihar_2025_election_timeline.csv',
            topConstituencies: 'bihar_2025_top_constituencies_votes.csv'
        };

        const promises = Object.entries(fileMap).map(([key, filename]) => 
            this.loadCSV(key, filename)
        );

        try {
            await Promise.all(promises);
            console.log('All data loaded successfully');
            return this.data;
        } catch (error) {
            console.error('Error loading data:', error);
            throw error;
        }
    }

    loadCSV(dataKey, filename) {
        return new Promise((resolve, reject) => {
            Papa.parse(this.basePath + filename, {
                download: true,
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    this.data[dataKey] = results.data;
                    this.loadedCount++;
                    console.log(`Loaded ${filename} (${this.loadedCount}/${this.totalFiles})`);
                    resolve(results.data);
                },
                error: (error) => {
                    console.error(`Error loading ${filename}:`, error);
                    reject(error);
                }
            });
        });
    }

    // Helper methods to get specific data
    getAllianceSummary() {
        return this.data.allianceSummary;
    }

    getPartyResults() {
        return this.data.partyResults;
    }

    getElectionStats() {
        return this.data.electionStats;
    }

    getDashboardKPIs() {
        return this.data.dashboardKPIs;
    }

    getComparison2020() {
        return this.data.comparison2020;
    }

    getLargestMargins() {
        return this.data.largestMargins;
    }

    getClosestContests() {
        return this.data.closestContests;
    }

    getWomenRepresentation() {
        return this.data.womenRepresentation;
    }

    getCasteDemographics() {
        return this.data.casteDemographics;
    }

    getNotableWinners() {
        return this.data.notableWinners;
    }

    getNotableLosers() {
        return this.data.notableLosers;
    }

    getRegionalPerformance() {
        return this.data.regionalPerformance;
    }

    getScStPerformance() {
        return this.data.scStPerformance;
    }

    getMarginStats() {
        return this.data.marginStats;
    }

    // Utility methods
    parseNumber(value) {
        if (!value || value === 'N/A') return 0;
        return parseFloat(value.toString().replace(/,/g, ''));
    }

    parsePercentage(value) {
        if (!value || value === 'N/A') return 0;
        return parseFloat(value.toString().replace('%', ''));
    }
}

// Export for use in other scripts
window.DataLoader = DataLoader;

