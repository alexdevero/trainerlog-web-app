import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

import { ExercisesFilter } from './../pages/exercises/exercises-filter'
import { ExercisesTable } from './../pages/exercises/exercises-table'

import { ExercisesFilterStore } from '../stores/store-exercises-filter'

const FilterButton = styled.button`
  padding: 0;
  font-size: 18px;
  color: #aaa;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: color .25s ease-out;

  &:hover {
    color: #eee;
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
    showForearms: ExercisesFilterStore.showForearms,
    showGlutes: ExercisesFilterStore.showGlutes,
    showChest: ExercisesFilterStore.showChest,
    showLats: ExercisesFilterStore.showLats,
    showLowerBack: ExercisesFilterStore.showLowerBack,
    showMiddleBack: ExercisesFilterStore.showMiddleBack,
    showNeck: ExercisesFilterStore.showNeck,
    showQuadriceps: ExercisesFilterStore.showQuadriceps,
    showShoulders: ExercisesFilterStore.showShoulders,
    showTraps: ExercisesFilterStore.showTraps,
    showTriceps: ExercisesFilterStore.showTriceps
  })

  const handleFilterChange = (filter: string) => {
    if (filter === 'showAll') {
      setFilterOptions({
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
      })
    } else {
      const filterOptionStateIndex = Object.keys(filterOptions).findIndex((key) => key === filter)
      const filterOptionOldValue = Object.values(filterOptions)[filterOptionStateIndex]

      setFilterOptions({
        ...filterOptions,
        showAll: false,
        [filter]: !filterOptionOldValue
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

          <FilterButton onClick={() => setFilterOpen(!filterOpen)}><span className="fas fa-filter" title="Open filter" /></FilterButton>
        </div>

        {filterOpen && <ExercisesFilter filterOptions={filterOptions} handleFilterChange={handleFilterChange} />}

        <ExercisesTable />
      </View>
    </>
  )
}

export default Exercises
