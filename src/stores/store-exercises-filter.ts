// TODO: Implement firebase and get data from dtb

export interface ExercisesFilterStoreInterface {
  showAbs: boolean;
  showAll: boolean;
  showBiceps: boolean;
  showCalves: boolean;
  showCardio: boolean;
  showForearms: boolean;
  showGlutes: boolean;
  showChest: boolean;
  showLats: boolean;
  showLowerBack: boolean;
  showMiddleBack: boolean;
  showNeck: boolean;
  showQuadriceps: boolean;
  showShoulders: boolean;
  showTraps: boolean;
  showTriceps: boolean;
}

export const ExercisesFilterStore: ExercisesFilterStoreInterface = {
  showAbs: false,
  showAll: true,
  showBiceps: false,
  showCalves: false,
  showCardio: false,
  showForearms: false,
  showGlutes: false,
  showChest: false,
  showLats: false,
  showLowerBack: false,
  showMiddleBack: false,
  showNeck: false,
  showQuadriceps: false,
  showShoulders: false,
  showTraps: false,
  showTriceps: false
}
