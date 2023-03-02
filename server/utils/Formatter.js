// format the date to be hh:mm am/pm mm/dd/yyyy
const addDateSuffix = (date) => {
  let dateStr = date.toString();

  // get last char of date string
  const lastChar = dateStr.charAt(dateStr.length - 1);

  if (lastChar === '1' && dateStr !== '11') {
    dateStr = `${dateStr}st`;
  } else if (lastChar === '2' && dateStr !== '12') {
    dateStr = `${dateStr}nd`;
  } else if (lastChar === '3' && dateStr !== '13') {
    dateStr = `${dateStr}rd`;
  } else {
    dateStr = `${dateStr}th`;
  }

  return dateStr;
};

// format the date to be hh:mm am/pm mm/dd/yyyy
const formatDate = ({ month, day, year }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${month ? months[month] : ''} ${day ? addDateSuffix(day) : ''} ${
    year || ''
  }`.trim();
};

// format the date to be hh:mm am/pm mm/dd/yyyy
const formatTime = ({ hour, minute }) =>
  `${hour > 12 ? hour - 12 : hour}:${minute} ${
    hour >= 12 ? 'PM' : 'AM'
  }`.trim();

module.exports = { formatDate, formatTime };
