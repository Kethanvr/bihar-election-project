
# Create additional datasets for dashboard - Key Winners and Key Issues

import pandas as pd

# 9. Notable Winners (Key Leaders)
notable_winners = {
    'Candidate_Name': [
        'Tejashwi Yadav',
        'Nitish Kumar',
        'Chirag Paswan',
        'Samrat Choudhary',
        'Vijay Kumar Sinha',
        'Mangal Pandey',
        'Shreyasi Singh',
        'Sandeep Saurav',
        'Kaladhar Prasad Mandal',
        'Sanjiv Chaurasia'
    ],
    'Party': ['RJD', 'JD(U)', 'LJP(RV)', 'BJP', 'BJP', 'BJP', 'BJP', 'CPI(ML)', 'JD(U)', 'BJP'],
    'Constituency': ['Raghopur', 'MLC (Not contesting)', 'Not contesting', 'Tarapur', 'Lakhisarai', 
                     'Siwan', 'Jamui', 'Paliganj', 'Rupauli', 'Digha'],
    'Margin_of_Victory': ['11,419', 'N/A', 'N/A', 'Large', 'Large', '9,370', '54,498', '6,655', '73,572', '59,079'],
    'Role': ['RJD Leader, Former Dy CM', 'Chief Minister (JDU)', 'LJP Leader, Union Minister', 
             'Dy CM, BJP', 'Speaker, BJP', 'Health Minister, BJP', 'Olympian, BJP', 'CPI(ML) Leader', 
             'Largest Victory Margin', 'Second Largest Margin']
}

winners_df = pd.DataFrame(notable_winners)
print("Notable Winners & Key Leaders:")
print(winners_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 10. Notable Losers
notable_losers = {
    'Candidate_Name': [
        'Prashant Kishor',
        'Tej Pratap Yadav',
        'Various Congress Leaders',
        'Mukesh Sahani (VIP)',
        'Jan Suraaj Candidates'
    ],
    'Party': ['Jan Suraaj', 'Janshakti Janta Dal', 'INC', 'VIP', 'Jan Suraaj'],
    'Status': [
        'Founded party, did not contest personally',
        'Finished 3rd in Mahua with 34,000 votes',
        'Congress won only 6 seats (down from 19)',
        'VIP won 0 seats (despite being in MGB)',
        'Lost deposits in 236 of 238 seats'
    ],
    'Context': [
        'Party failed to win any seat',
        'Lost to LJP(RV) by large margin',
        'Major setback for Congress in Bihar',
        'Failed to capitalize on alliance',
        'Massive debut failure'
    ]
}

losers_df = pd.DataFrame(notable_losers)
print("Notable Losers:")
print(losers_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 11. Key Election Issues
election_issues = {
    'Issue': [
        'Employment/Jobs',
        'Development & Infrastructure',
        'Women Welfare',
        'Caste Politics',
        'Law & Order',
        'Migration',
        'Agricultural Issues',
        'Education',
        'EBC Empowerment',
        'Anti-Incumbency'
    ],
    'Importance': ['Very High', 'High', 'Very High', 'Very High', 'Medium', 'High', 'Medium', 'Medium', 'High', 'Medium'],
    'Benefited_Alliance': ['Mixed', 'NDA', 'NDA', 'NDA', 'NDA', 'Mixed', 'Mixed', 'Mixed', 'NDA', 'MGB'],
    'Key_Programs': [
        'Job promises by both sides',
        'Double Engine Government narrative',
        'Mukhyamantri Mahila Rojgar Yojana (Rs 10,000)',
        'EBC reservation & representation',
        'Nitish Kumar\'s governance record',
        'Concerns about youth migration',
        'Agricultural subsidies and support',
        'Education infrastructure',
        'EBC-focused welfare schemes',
        'Anti-Nitish sentiment'
    ]
}

issues_df = pd.DataFrame(election_issues)
print("Key Election Issues & Narratives:")
print(issues_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 12. Regional Performance
regional_performance = {
    'Region': [
        'Mithilanchal (North)',
        'Kosi (Northeast)',
        'Seemanchal (Muslim-dominated)',
        'Tirhut (Central)',
        'Bhojpur (South-central)',
        'Magadh (South)',
        'Patna Region (Capital)'
    ],
    'NDA_Performance': ['Strong', 'Very Strong', 'Mixed', 'Strong', 'Strong', 'Strong', 'Dominant'],
    'MGB_Performance': ['Weak', 'Weak', 'Moderate', 'Weak', 'Weak', 'Weak', 'Weak'],
    'Key_Features': [
        'Traditional NDA stronghold',
        'High female turnout favored NDA',
        '24 constituencies, 53% Muslim-dominated seats',
        'Mixed caste demographics',
        'Close contests, some <100 vote margins',
        'NDA swept most seats',
        'BJP/JDU dominated urban centers'
    ]
}

regional_df = pd.DataFrame(regional_performance)
print("Regional Performance Analysis:")
print(regional_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 13. Closest Contests (Nail-biters)
closest_contests = {
    'Constituency': ['Agiaon', 'Sandesh', 'Ramgarh', 'Bodh Gaya', 'Bakhtiarpur', 'Balrampur', 
                     'Makhdumpur', 'Masaurhi', 'Singheshwar'],
    'Winner': ['Mahesh Paswan', 'Radha Charan Sah', 'Satish Kumar Singh Yadav', 'Kumar Sarvjeet',
               'Arun Kumar', 'Sangita Devi', 'Subedar Das', 'Arun Manjhi', 'Ramesh Rishi'],
    'Party': ['BJP', 'JD(U)', 'BSP', 'RJD', 'LJP(RV)', 'LJP(RV)', 'RJD', 'JD(U)', 'JD(U)'],
    'Margin': [95, 'Very Low', 'Very Low', 881, 981, 389, 1830, 7643, 2982],
    'Significance': [
        'Narrowest margin in Bihar 2025',
        'One of 3 seats decided by <100 votes',
        'One of 3 seats decided by <100 votes',
        'RJD retained by slim margin',
        'LJP(RV) narrow win',
        'LJP(RV) barely held',
        'RJD retained SC seat',
        'JD(U) SC seat narrow victory',
        'JD(U) SC seat close contest'
    ]
}

closest_df = pd.DataFrame(closest_contests)
print("Closest Election Contests:")
print(closest_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# 14. Largest Victory Margins
largest_margins = {
    'Constituency': ['Rupauli', 'Digha', 'Gopalpur', 'Hasanpur', 'Aurai', 'Rajgir', 
                     'Jhanjharpur', 'Jamui', 'Pirpainti', 'Bankipur'],
    'Winner': ['Kaladhar Prasad Mandal', 'Sanjiv Chaurasia', 'Shailesh Kumar', 'Rajesh Kumar',
               'Rama Nishad', 'Kaushal Kishore', 'Nitish Mishra', 'Shreyasi Singh', 
               'Murari Pasavan', 'Nitin Nabin'],
    'Party': ['JD(U)', 'BJP', 'JD(U)', 'LJP(RV)', 'BJP', 'JD(U)', 'BJP', 'BJP', 'BJP', 'BJP'],
    'Margin': [73572, 59079, 58135, 58191, 57206, 55428, 54849, 54498, 53107, 51936],
    'Region': ['North', 'Patna', 'Central', 'Central', 'North', 'Nalanda', 
               'North', 'South', 'East', 'Patna']
}

largest_df = pd.DataFrame(largest_margins)
print("Largest Victory Margins:")
print(largest_df.to_string(index=False))
print("\n" + "="*100 + "\n")

# Save additional dataframes
winners_df.to_csv('bihar_2025_notable_winners.csv', index=False)
losers_df.to_csv('bihar_2025_notable_losers.csv', index=False)
issues_df.to_csv('bihar_2025_key_issues.csv', index=False)
regional_df.to_csv('bihar_2025_regional_performance.csv', index=False)
closest_df.to_csv('bihar_2025_closest_contests.csv', index=False)
largest_df.to_csv('bihar_2025_largest_margins.csv', index=False)

print("\nAdditional CSV files created successfully!")
print("\nNew files:")
print("9. bihar_2025_notable_winners.csv")
print("10. bihar_2025_notable_losers.csv")
print("11. bihar_2025_key_issues.csv")
print("12. bihar_2025_regional_performance.csv")
print("13. bihar_2025_closest_contests.csv")
print("14. bihar_2025_largest_margins.csv")
