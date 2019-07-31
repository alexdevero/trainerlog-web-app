interface DashboardStoreInterface {
  isBodyFatGraphVisible: boolean;
  isBodyWeightGraphVisible: boolean;
  isPrEquipmentGraphVisible: boolean;
  isPrWeightGraphVisible: boolean;
  isSettingsVisible: boolean;
}

export const DashboardStore: DashboardStoreInterface = {
  isBodyFatGraphVisible: true,
  isBodyWeightGraphVisible: true,
  isPrEquipmentGraphVisible: true,
  isPrWeightGraphVisible: true,
  isSettingsVisible: false
}
