const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 11;
      break;
    case 'wednesday':
      return 12;
      break;
    case 'thursday':
      return 13;
      break;
    case 'friday':
      return 9;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 7;
      break;
    default:
      return 'Error!';
  }
  
};
const getActualSleepHours = () => 8 + 11 + 12 + 13 + 9 + 8 + 7;
const getIdealSleepHours = idealHours => idealHours * 7;
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('U got a perfect sleep!);
  } else if (actualSleepHours > idealSleepHours) {
      console.log('U got ' + (actualSleepHours - idealSleepHours) + ' hours more then U needed this week.');
    }
    else {
      console.log('U should get some rest!');
    }
};
  calculateSleepDebt();
