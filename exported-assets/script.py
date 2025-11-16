
import pandas as pd
import json

# Create comprehensive Bihar Election 2025 dataset based on research

# 1. Party-wise Results Summary
party_results = {
    'Party': ['BJP', 'JD(U)', 'RJD', 'LJP(RV)', 'INC', 'AIMIM', 'HAM(S)', 'RLM', 'CPI(ML)', 'CPI(M)', 'BSP', 'Others'],
    'Alliance': ['NDA', 'NDA', 'MGB', 'NDA', 'MGB', 'Others', 'NDA', 'NDA', 'MGB', 'MGB', 'Others', 'Others'],
    'Seats_Contested': [101, 101, 143, 28, 61, 'N/A', 6, 6, 20, 'N/A', 'N/A', 'N/A'],
    'Seats_Won': [89, 85, 25, 19, 6, 5, 5, 4, 2, 1, 1, 0],
    'Vote_Share_Percentage': [20.08, 19.25, 23.00, 4.97, 8.71, 'N/A', 'N/A', 'N/A', 2.84, 0.60, 1.62, 'N/A'],
    'Total_Votes': [10081143, 9667118, 11546055, 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
    'Strike_Rate_Percentage': [88.1, 84.2, 17.5, 65.5, 9.8, 'N/A', 83.3, 66.7, 10.0, 'N/A', 'N/A', 'N/A']
}

party_df = pd.DataFrame(party_results)
print("Party-wise Results Summary:")
print(party_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 2. Alliance-wise Summary
alliance_summary = {
    'Alliance': ['NDA', 'Mahagathbandhan (MGB)', 'Others', 'Total'],
    'Seats_Won': [202, 35, 6, 243],
    'Vote_Share_Percentage': [46.6, 37.9, 15.5, 100.0],
    'Major_Parties': ['BJP, JD(U), LJP(RV), HAM(S), RLM', 'RJD, INC, CPI(ML), CPI(M)', 'AIMIM, BSP, Jan Suraaj']
}

alliance_df = pd.DataFrame(alliance_summary)
print("Alliance-wise Summary:")
print(alliance_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 3. Election Overview Statistics
election_stats = {
    'Metric': [
        'Total Constituencies',
        'Total Registered Voters',
        'Voter Turnout Percentage',
        'Total Votes Cast',
        'Male Voter Turnout',
        'Female Voter Turnout',
        'Phase 1 Date',
        'Phase 2 Date',
        'Phase 1 Constituencies',
        'Phase 2 Constituencies',
        'Phase 1 Turnout',
        'Phase 2 Turnout',
        'Result Declaration Date',
        'SC Reserved Seats',
        'ST Reserved Seats',
        'Women Candidates Fielded',
        'Women Winners'
    ],
    'Value': [
        '243',
        '7.45 crore (74.5 million)',
        '67.13%',
        '5.02 crore (50.2 million)',
        '62.98%',
        '71.78%',
        'November 6, 2025',
        'November 11, 2025',
        '121',
        '122',
        '65.08%',
        '68.76%',
        'November 14, 2025',
        '38',
        '2',
        '88',
        '29'
    ]
}

stats_df = pd.DataFrame(election_stats)
print("Election Overview Statistics:")
print(stats_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 4. SC/ST Reserved Seats Performance
sc_st_performance = {
    'Category': ['SC Seats (38 total)', 'ST Seats (2 total)', 'Total Reserved'],
    'NDA_Wins': [34, 1, 35],
    'MGB_Wins': [4, 1, 5],
    'Others': [0, 0, 0]
}

sc_st_df = pd.DataFrame(sc_st_performance)
print("SC/ST Reserved Seats Performance:")
print(sc_st_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 5. Women Representation
women_stats = {
    'Party': ['BJP', 'JD(U)', 'LJP(RV)', 'RJD', 'HAM(S)', 'RLM', 'Total'],
    'Women_Candidates': [12, 13, 'N/A', 'N/A', 'N/A', 'N/A', 88],
    'Women_Winners': [10, 10, 3, 3, 2, 1, 29],
    'Success_Rate_Percentage': [83.3, 76.9, 'N/A', 'N/A', 'N/A', 'N/A', 32.9]
}

women_df = pd.DataFrame(women_stats)
print("Women Candidates & Winners:")
print(women_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 6. Comparison with 2020 Elections
comparison_2020 = {
    'Party': ['BJP', 'JD(U)', 'RJD', 'INC', 'LJP(RV)', 'CPI(ML)'],
    '2020_Seats': [74, 43, 75, 19, 1, 12],
    '2025_Seats': [89, 85, 25, 6, 19, 2],
    'Change': ['+15', '+42', '-50', '-13', '+18', '-10'],
    '2020_Vote_Share': [19.46, 15.39, 23.11, 9.48, 'N/A', 3.16],
    '2025_Vote_Share': [20.08, 19.25, 23.00, 8.71, 4.97, 2.84]
}

comparison_df = pd.DataFrame(comparison_2020)
print("Comparison with 2020 Elections:")
print(comparison_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 7. Key Margin Statistics
margin_stats = {
    'Category': [
        'Seats decided by <10,000 votes',
        'Seats decided by <100 votes',
        'Seats with margin >30,000 votes',
        'Seats where NDA >50% vote share',
        'Highest Winning Margin',
        'Narrowest Winning Margin',
        'Zero Re-polls'
    ],
    'Count/Details': [
        '63 seats',
        '3 seats (Sandesh, Agiaon, Ramgarh)',
        '60 seats (59 won by NDA)',
        '68 constituencies',
        '73,572 votes (Rupauli - JDU)',
        '95 votes (Agiaon - BJP)',
        'Historic first for Bihar'
    ]
}

margin_df = pd.DataFrame(margin_stats)
print("Key Margin & Competition Statistics:")
print(margin_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# Save all dataframes to CSV
party_df.to_csv('bihar_2025_party_results.csv', index=False)
alliance_df.to_csv('bihar_2025_alliance_summary.csv', index=False)
stats_df.to_csv('bihar_2025_election_stats.csv', index=False)
sc_st_df.to_csv('bihar_2025_sc_st_performance.csv', index=False)
women_df.to_csv('bihar_2025_women_representation.csv', index=False)
comparison_df.to_csv('bihar_2025_comparison_2020.csv', index=False)
margin_df.to_csv('bihar_2025_margin_stats.csv', index=False)

print("\nAll CSV files have been created successfully!")
print("\nFiles created:")
print("1. bihar_2025_party_results.csv")
print("2. bihar_2025_alliance_summary.csv")
print("3. bihar_2025_election_stats.csv")
print("4. bihar_2025_sc_st_performance.csv")
print("5. bihar_2025_women_representation.csv")
print("6. bihar_2025_comparison_2020.csv")
print("7. bihar_2025_margin_stats.csv")
