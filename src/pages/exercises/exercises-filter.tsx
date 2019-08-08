import * as React from 'react'
import styled from 'styled-components'

import { Fieldset, Checkbox } from './../../components/form-elements'
import { GridCol, GridRow } from './../../components/grid'

interface ExercisesFilterInterface {
  filterOptions: {
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
  };
  handleFilterChange: (filter: string) => void;
}

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

export const ExercisesFilter = (props: ExercisesFilterInterface) => {
  return (
    <ExercisesFilterRow>
      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showAll}
            id="app-theme"
            label="Show all"
            onChange={() => props.handleFilterChange('showAll')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showBiceps}
            id="app-theme"
            label="Show biceps"
            onChange={() => props.handleFilterChange('showBiceps')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showTriceps}
            id="app-theme"
            label="Show triceps"
            onChange={() => props.handleFilterChange('showTriceps')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showAbs}
            id="app-theme"
            label="Show abs"
            onChange={() => props.handleFilterChange('showAbs')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showForearm}
            id="app-theme"
            label="Show forearms"
            onChange={() => props.handleFilterChange('showForearm')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showShoulders}
            id="app-theme"
            label="Show shoulders"
            onChange={() => props.handleFilterChange('showShoulders')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showBack}
            id="app-theme"
            label="Show back"
            onChange={() => props.handleFilterChange('showBack')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showChest}
            id="app-theme"
            label="Show chest"
            onChange={() => props.handleFilterChange('showChest')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showGlutes}
            id="app-theme"
            label="Show glutes"
            onChange={() => props.handleFilterChange('showGlutes')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showUpperLegs}
            id="app-theme"
            label="Show upper legs"
            onChange={() => props.handleFilterChange('showUpperLegs')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showLowerLegs}
            id="app-theme"
            label="Show lower legs"
            onChange={() => props.handleFilterChange('showLowerLegs')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showCardio}
            id="app-theme"
            label="Show cardio"
            onChange={() => props.handleFilterChange('showCardio')}
          />
        </Fieldset>
      </GridCol>
    </ExercisesFilterRow>
  )
}
