import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

import { ExercisesFilter } from './../pages/exercises/exercises-filter'
import { ExercisesTable } from './../pages/exercises/exercises-table'

import { ExercisesFilterStore } from '../stores/store-exercises-filter'

import { ExercisesAbsStore } from './../stores/store-exercises-abs'
import { ExercisesBicepsStore } from './../stores/store-exercises-biceps'
import { ExercisesCalvesStore } from './../stores/store-exercises-calves'
import { ExercisesCardioStore } from './../stores/store-exercises-cardio'
import { ExercisesForearmsStore } from './../stores/store-exercises-forearms'
import { ExercisesGlutesStore } from './../stores/store-exercises-glutes'
import { ExercisesChestStore } from './../stores/store-exercises-chest'
import { ExercisesLatsStore } from './../stores/store-exercises-lats'
import { ExercisesLowerBackStore } from './../stores/store-exercises-lower-back'
import { ExercisesMiddleBackStore } from './../stores/store-exercises-middle-back'
import { ExercisesNeckStore } from './../stores/store-exercises-neck'
import { ExercisesQuadricepsStore } from './../stores/store-exercises-quadriceps'
import { ExercisesShouldersStore } from './../stores/store-exercises-shoulders'
import { ExercisesTrapsStore } from './../stores/store-exercises-traps'
import { ExercisesTricepsStore } from './../stores/store-exercises-triceps'

const FilterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;
`

const FilterButton = styled.button`
  padding: 0;
  font-size: 18px;
  color: #aaa;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: color .25s ease-out;

  &:hover {
    color: #ccc;
  }

  &:focus {
    outline: 0;
  }
`

const Exercises = () => {
  const [filterOpen, setFilterOpen] = React.useState(false)
  const [filterOptions, setFilterOptions] = React.useState({
    showAbs: ExercisesFilterStore.showAbs,
    showAll: ExercisesFilterStore.showAll,
    showBiceps: ExercisesFilterStore.showBiceps,
    showCalves: ExercisesFilterStore.showCalves,
    showCardio: ExercisesFilterStore.showCardio,
    showChest: ExercisesFilterStore.showChest,
    showForearms: ExercisesFilterStore.showForearms,
    showGlutes: ExercisesFilterStore.showGlutes,
    showLats: ExercisesFilterStore.showLats,
    showLowerBack: ExercisesFilterStore.showLowerBack,
    showMiddleBack: ExercisesFilterStore.showMiddleBack,
    showNeck: ExercisesFilterStore.showNeck,
    showQuadriceps: ExercisesFilterStore.showQuadriceps,
    showShoulders: ExercisesFilterStore.showShoulders,
    showTraps: ExercisesFilterStore.showTraps,
    showTriceps: ExercisesFilterStore.showTriceps
  })
  const [exercises, setExercises] = React.useState<{ equipment: string; id: string; muscle: string; name: string; }[][]>([ExercisesAbsStore])

  const handleFilterBtnClick = () => {
    let filteredExercises: any = []

    Object.keys(filterOptions).forEach((key, value) => {
      if (Object.values(filterOptions)[value]) {
        switch (key) {
          case 'showAbs':
            filteredExercises.push(ExercisesAbsStore)
            break
          case 'showAll':
            filteredExercises.push(
              ExercisesAbsStore,
              ExercisesBicepsStore,
              ExercisesCalvesStore,
              ExercisesCardioStore,
              ExercisesForearmsStore,
              ExercisesGlutesStore,
              ExercisesChestStore,
              ExercisesLatsStore,
              ExercisesLowerBackStore,
              ExercisesMiddleBackStore,
              ExercisesNeckStore,
              ExercisesQuadricepsStore,
              ExercisesShouldersStore,
              ExercisesTrapsStore,
              ExercisesTricepsStore
            )
            break
          case 'showBiceps':
            filteredExercises.push(ExercisesBicepsStore)
            break
          case 'showCalves':
            filteredExercises.push(ExercisesCalvesStore)
            break
          case 'showCardio':
            filteredExercises.push(ExercisesCardioStore)
            break
          case 'showForearms':
            filteredExercises.push(ExercisesForearmsStore)
            break
          case 'showGlutes':
            filteredExercises.push(ExercisesGlutesStore)
            break
          case 'showChest':
            filteredExercises.push(ExercisesChestStore)
            break
          case 'showLats':
            filteredExercises.push(ExercisesLatsStore)
            break
          case 'showLowerBack':
            filteredExercises.push(ExercisesLowerBackStore)
            break
          case 'showMiddleBack':
            filteredExercises.push(ExercisesMiddleBackStore)
            break
          case 'showNeck':
            filteredExercises.push(ExercisesNeckStore)
            break
          case 'showQuadriceps':
            filteredExercises.push(ExercisesQuadricepsStore)
            break
          case 'showShoulders':
            filteredExercises.push(ExercisesShouldersStore)
            break
          case 'showTraps':
            filteredExercises.push(ExercisesTrapsStore)
            break
          case 'showTriceps':
            filteredExercises.push(ExercisesTricepsStore)
            break
          default:
            break
        }
      }

      setExercises([...filteredExercises])
    })

    setFilterOpen(false)
  }

  React.useEffect(() => {
    handleFilterBtnClick()
  }, [])

  const handleCheckboxClick = (event: React.MouseEvent, label: string) => {
    if (label === 'showAll') {
      setFilterOptions({
        showAbs: false,
        showAll: true,
        showBiceps: false,
        showCalves: false,
        showCardio: false,
        showChest: false,
        showForearms: false,
        showGlutes: false,
        showLats: false,
        showLowerBack: false,
        showMiddleBack: false,
        showNeck: false,
        showQuadriceps: false,
        showShoulders: false,
        showTraps: false,
        showTriceps: false
      })
    } else {
      const filterOptionStateIndex = Object.keys(filterOptions).findIndex((key) => key === label)
      const filterOptionOldValue = Object.values(filterOptions)[filterOptionStateIndex]

      setFilterOptions({
        ...filterOptions,
        showAll: false,
        [label]: !filterOptionOldValue
      })
    }
  }

  return (
    <>
      <Helmet>
        <title>Exercises Library | TrainerLog</title>
      </Helmet>

      <View>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <HeadingH5 style={{ marginTop: 0, marginBottom: 0 }}>
            Exercises library
            {' '}
            <span aria-label="Flexed biceps" aria-hidden={true}>
              💪
            </span>
          </HeadingH5>

          <FilterButtonWrapper>
            <FilterButton onClick={() => setFilterOpen(!filterOpen)}><span className="fas fa-filter" title="Open filter" /></FilterButton>
          </FilterButtonWrapper>
        </div>

        {filterOpen && (
          <ExercisesFilter
            filterOptions={filterOptions}
            handleCheckboxClick={handleCheckboxClick}
            handleFilterBtnClick={handleFilterBtnClick}
          />
        )}

        <ExercisesTable exercises={exercises} filterOptions={filterOptions} />
      </View>
    </>
  )
}

export default Exercises
