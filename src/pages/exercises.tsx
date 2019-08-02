import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { GridCol, GridRow } from './../components/grid'
import { HeadingH5 } from './../components/typography'
import { Fieldset, Checkbox } from './../components/form-elements'
import { View } from './../components/constants'

import { ExercisesStore } from './../stores/store-exercises'

const ExercisesFilterRow = styled(GridRow)`
  margin-top: 16px;

  @media (max-width: 575px) {
    & > div + div {
      margin-top: 16px;
    }
  }

  @media (max-width: 767px) {
    & > div:nth-of-type(n+3) {
      margin-top: 16px;
    }
  }

  @media (max-width: 991px) {
    & > div:nth-of-type(n+4) {
      margin-top: 16px;
    }
  }

  @media (min-width: 992px) {
    & > div:nth-of-type(n+5) {
      margin-top: 16px;
    }
  }
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
    color: #eee;
  }

  &:focus {
    outline: 0;
  }
`

const Exercises = () => {
  const [filterOpen, setFilterOpen] = React.useState(false)
  const [filterOptions, setFilterOptions] = React.useState({
    showAll: ExercisesStore.showAll,
    showAbs: ExercisesStore.showAbs,
    showBack: ExercisesStore.showBack,
    showBiceps: ExercisesStore.showBiceps,
    showCardio: ExercisesStore.showCardio,
    showChest: ExercisesStore.showChest,
    showForearm: ExercisesStore.showForearm,
    showGlutes: ExercisesStore.showGlutes,
    showLowerLegs: ExercisesStore.showLowerLegs,
    showShoulders: ExercisesStore.showShoulders,
    showTriceps: ExercisesStore.showTriceps,
    showUpperLegs: ExercisesStore.showUpperLegs
  })

  const handleFilterChange = (filter: string) => {
    if (filter === 'showAll') {
      setFilterOptions({
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
        showUpperLegs: false
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

        {filterOpen && <ExercisesFilterRow>
          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showAll}
                id="app-theme"
                label="Show all"
                onChange={() => handleFilterChange('showAll')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showBiceps}
                id="app-theme"
                label="Show biceps"
                onChange={() => handleFilterChange('showBiceps')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showTriceps}
                id="app-theme"
                label="Show triceps"
                onChange={() => handleFilterChange('showTriceps')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showAbs}
                id="app-theme"
                label="Show abs"
                onChange={() => handleFilterChange('showAbs')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showForearm}
                id="app-theme"
                label="Show forearms"
                onChange={() => handleFilterChange('showForearm')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showShoulders}
                id="app-theme"
                label="Show shoulders"
                onChange={() => handleFilterChange('showShoulders')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showBack}
                id="app-theme"
                label="Show back"
                onChange={() => handleFilterChange('showBack')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showChest}
                id="app-theme"
                label="Show chest"
                onChange={() => handleFilterChange('showChest')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showGlutes}
                id="app-theme"
                label="Show glutes"
                onChange={() => handleFilterChange('showGlutes')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showUpperLegs}
                id="app-theme"
                label="Show upper legs"
                onChange={() => handleFilterChange('showUpperLegs')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showLowerLegs}
                id="app-theme"
                label="Show lower legs"
                onChange={() => handleFilterChange('showLowerLegs')}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Checkbox
                checked={filterOptions.showCardio}
                id="app-theme"
                label="Show cardio"
                onChange={() => handleFilterChange('showCardio')}
              />
            </Fieldset>
          </GridCol>
        </ExercisesFilterRow>}
      </View>
    </>
  )
}

export default Exercises
