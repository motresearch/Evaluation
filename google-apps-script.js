function doPost(e) {
  try {
    // Get the Google Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the form data
    const data = e.parameter;

    // Prepare the row data
    const rowData = [
      data.employee,           // Employee name
      parseFloat(data.totalScore),    // Total Score
      parseFloat(data.averageScore),  // Average Score
      new Date().toLocaleDateString(), // Date
      parseInt(data.discipline),      // Discipline
      parseInt(data.unity),           // Unity
      parseInt(data.ethics),          // Ethics
      parseInt(data.virtues),         // Virtues
      parseInt(data.knowledgeSharing), // Knowledge Sharing
      parseInt(data.hygiene),         // Hygiene
      parseInt(data.leadership),      // Leadership
      parseInt(data.creativity),      // Creativity
      parseInt(data.responsibility),  // Responsibility
      parseInt(data.taskCompletion),  // Task Completion
      parseInt(data.knowledgeDevelopment), // Knowledge Development
      parseInt(data.problemSolving)   // Problem Solving
    ];

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Evaluation submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function setupHeaders() {
  // This function can be run once to set up the headers
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Clear any existing data
  sheet.clear();

  // Set up headers
  const headers = [
    'Employee',
    'Total Score',
    'Average Score',
    'Date',
    'Discipline',
    'Unity',
    'Ethics',
    'Virtues',
    'Knowledge Sharing',
    'Hygiene',
    'Leadership',
    'Creativity',
    'Responsibility',
    'Task Completion',
    'Knowledge Development',
    'Problem Solving'
  ];

  sheet.appendRow(headers);

  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#f0f0f0');
}