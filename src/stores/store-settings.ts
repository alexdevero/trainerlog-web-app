// TODO: Implement firebase and get data from dtb

interface SettingsStoreInterface {
  firstName: string;
  lastName: string;
  email: string;
  date: string;

  username: string;
  sex: string;
  yearsPropTraining: number;

  height: number;
  weight: number;
  bodyFat: number;

  appTheme: boolean;// 'light' | 'dark';
  units: boolean;//'metric' | 'imperial';

  weeklyProgressReport: boolean;
  occasionalTips: boolean;
  productAnnouncements: boolean;
}

export const SettingsStore: SettingsStoreInterface = {
  firstName: 'Tom',
  lastName: 'Jones',
  email: 'tomjones@email.com',
  date: '2019-08-07',

  username: 'tomjones',
  sex: 'male',
  yearsPropTraining: 1,

  height: 187,
  weight: 65,
  bodyFat: 8.5,

  appTheme: false,// 'light',
  units: true,// 'metric',

  weeklyProgressReport: true,
  occasionalTips: true,
  productAnnouncements: true
}
