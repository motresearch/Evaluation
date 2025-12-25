# Employee Evaluation System

A comprehensive web-based employee evaluation system with bilingual support (English/Khmer) for assessing employee performance across 12 key criteria.

## Features

- **Bilingual Interface**: Supports both English and Khmer languages
- **12 Evaluation Criteria**: Comprehensive assessment covering employee characteristics and work performance
- **Automatic Progression**: Sequential evaluation of all employees with automatic advancement
- **Google Sheets Integration**: Real-time data export to Google Sheets for record-keeping
- **Responsive Design**: Mobile-friendly interface
- **Khmer Font Support**: Proper typography for Khmer text using Google Fonts

## Evaluation Criteria

### Section A: Employee Characteristics (6 criteria)
1. Discipline and internal regulations compliance
2. Internal unity and solidarity  
3. Work and living ethics
4. Virtues with work team and social activities
5. Knowledge sharing and transfer with work team
6. Personal and collective hygiene

### Section B: Capacity and Work Results (6 criteria)
7. Leadership capacity
8. Creative thinking
9. Work responsibility
10. Task accomplishment
11. Regular knowledge development
12. Problem solving

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Noto Sans Khmer, Khmer)
- **Backend Integration**: Google Apps Script for Google Sheets
- **Styling**: Custom CSS with responsive design

## Setup Instructions

### 1. Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/employee-evaluation-system.git

# Open index.html in your browser
# No server required - works as a static file
```

### 2. Google Sheets Integration

#### Create Google Apps Script:
1. Create a new Google Sheet
2. Go to **Extensions > Apps Script**
3. Replace the default code with the script from `google-apps-script.js`
4. Deploy as web app (Anyone access)
5. Copy the web app URL

#### Update the HTML file:
- Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` in `index.html` with your deployed URL

#### Google Sheet Headers:
```
Employee | Total Score | Average Score | Date | Discipline | Unity | Ethics | Virtues | Knowledge Sharing | Hygiene | Leadership | Creativity | Responsibility | Task Completion | Knowledge Development | Problem Solving
```

## Usage

1. Open `index.html` in a web browser
2. The system automatically starts with the first employee
3. Rate each employee on all 12 criteria (1-5 scale)
4. Submit evaluation - system automatically advances to next employee
5. After evaluating all employees, view comprehensive results table
6. Data is automatically saved to Google Sheets

## Rating Scale

- **1**: Poor / ខ្សោយ
- **2**: Fair / មធ្យម  
- **3**: Good / ល្អ
- **4**: Very Good / ល្អណាស់
- **5**: Excellent / ល្អឥតខ្ចោះ

## Project Structure

```
employee-evaluation-system/
├── index.html          # Main application file
├── README.md           # This file
├── .gitignore         # Git ignore rules
└── google-apps-script.js # Google Apps Script code
```

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Khmer language support provided by Google Fonts
- Icons and UI elements designed with modern CSS
- Google Apps Script for seamless data integration