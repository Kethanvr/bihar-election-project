# Bihar Assembly Elections 2025 - Dashboard

A comprehensive, modern, and interactive dashboard showcasing the Bihar Assembly Elections 2025 results. Built with HTML5, Tailwind CSS, Chart.js, and vanilla JavaScript.

## 📊 Features

- **Hero Metrics**: Quick overview of key election statistics
- **Alliance Performance**: Visual breakdown of NDA, MGB, and Others
- **Party-wise Analysis**: Detailed party performance with interactive charts
- **Election Statistics**: Gender and phase-wise voter turnout analysis
- **Historical Comparison**: 2020 vs 2025 election results
- **Victory Margins**: Largest wins and closest contests
- **Women's Representation**: Women candidates and winners analysis
- **Caste Demographics**: Bihar's social composition from 2023 survey
- **Notable Winners & Losers**: Key political figures and their performance
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended for best performance)

### Installation

1. Clone or download this repository
2. Ensure all CSV files are in the `exported-assets/` folder
3. Open `index.html` in your web browser

### Using a Local Server (Recommended)

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Option 2: Node.js (with npx)**
```bash
npx http-server -p 8000

# Then visit: http://localhost:8000
```

**Option 3: VS Code Live Server**
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
bihar-project/
├── index.html                          # Main dashboard file
├── assets/
│   ├── css/
│   │   └── styles.css                  # Custom CSS styles
│   └── js/
│       ├── dataLoader.js               # CSV parsing & data management
│       ├── charts.js                   # Chart.js visualizations
│       └── main.js                     # Main dashboard logic
├── exported-assets/                    # CSV data files
│   ├── bihar_2025_alliance_summary.csv
│   ├── bihar_2025_party_results.csv
│   ├── bihar_2025_election_stats.csv
│   ├── bihar_2025_dashboard_kpis.csv
│   ├── bihar_2025_comparison_2020.csv
│   ├── bihar_2025_largest_margins.csv
│   ├── bihar_2025_closest_contests.csv
│   ├── bihar_2025_women_representation.csv
│   ├── bihar_2025_caste_demographics.csv
│   ├── bihar_2025_notable_winners.csv
│   ├── bihar_2025_notable_losers.csv
│   └── ... (other CSV files)
└── README.md                           # This file
```

## 🎨 Design Features

- **Minimalistic Design**: Clean, professional appearance with subtle colors
- **Google Poppins Font**: Modern typography throughout
- **Responsive Layout**: Mobile-first design using Tailwind CSS
- **Interactive Charts**: Hover tooltips and smooth animations
- **Accessible**: High contrast ratios and semantic HTML
- **Print-Friendly**: Optimized styles for printing

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS** (v3.x): Utility-first CSS framework
- **Chart.js** (v4.4.0): Interactive charts and visualizations
- **PapaParse** (v5.4.1): CSV file parsing
- **Vanilla JavaScript**: No heavy frameworks, fast and efficient
- **Google Fonts**: Poppins font family

## 📊 Data Sources

All election data is sourced from:
- Election Commission of India (ECI)
- Official Bihar CEO website
- Verified news sources (NDTV, India Today, Times of India, etc.)

## 🎯 Key Insights

- **NDA Victory**: 202 seats (83%) - Historic landslide
- **Voter Turnout**: 67.13% - Highest ever in Bihar
- **Women Power**: 71.78% female turnout vs 62.98% male
- **BJP Emergence**: First time as single largest party (89 seats)
- **JD(U) Resurgence**: 85 seats (up from 43 in 2020)
- **RJD Collapse**: 25 seats (down from 75 in 2020)

## 🔧 Customization

### Changing Colors

Edit the color palette in `assets/js/charts.js`:

```javascript
this.colorPalette = {
    nda: '#E67E3D',      // NDA alliance color
    mgb: '#00A651',      // MGB alliance color
    bjp: '#FF9933',      // BJP party color
    // ... add more
};
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Create rendering method in `assets/js/main.js`
3. Call the method in the `init()` function

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

**Issue**: Charts not rendering
- **Solution**: Make sure all CDN links are accessible (check your internet connection)

**Issue**: Data not loading
- **Solution**: Ensure all CSV files are in the `exported-assets/` folder with correct names

**Issue**: Console errors about CORS
- **Solution**: Use a local web server instead of opening the HTML file directly

## 📝 License

This project is created for educational and research purposes. Election data is publicly available from the Election Commission of India.

## 👨‍💻 Developer

Created as part of the Bihar Elections 2025 Research Project.

---

**Last Updated**: November 2025  
**Dashboard Version**: 1.0.0

