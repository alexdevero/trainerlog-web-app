// TODO: Implement firebase and get data from dtb

interface ExercisesFilterStoreInterface {
  showAll: boolean;
  showAbs: boolean;
  showBack: boolean;
  showBiceps: boolean;
  showCardio: boolean;
  showChest: boolean;
  showForearm: boolean;
  showGlutes: boolean;
  showLowerLegs: boolean;
  showShoulders: boolean;
  showTriceps: boolean;
  showUpperLegs: boolean;
}

export const ExercisesFilterStore: ExercisesFilterStoreInterface = {
  showAll: true,
  showAbs: false,
  showBack: false,
  showBiceps: false,
  showCardio: false,
  showChest: false,
  showForearm: false,
  showGlutes: false,
  showLowerLegs: false,
  showShoulders: false,
  showTriceps: false,
  showUpperLegs: false,
}
