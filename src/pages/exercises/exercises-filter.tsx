import * as React from 'react'
import styled from 'styled-components'

import { Fieldset, Checkbox } from './../../components/form-elements'
import { GridCol, GridRow } from './../../components/grid'

interface ExercisesFilterInterface {
  filterOptions: {
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
            checked={props.filterOptions.showForearms}
            id="app-theme"
            label="Show forearms"
            onChange={() => props.handleFilterChange('showForearms')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showNeck}
            id="app-theme"
            label="Show neck"
            onChange={() => props.handleFilterChange('showNeck')}
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
            checked={props.filterOptions.showTraps}
            id="app-theme"
            label="Show traps"
            onChange={() => props.handleFilterChange('showTraps')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showLats}
            id="app-theme"
            label="Show lats"
            onChange={() => props.handleFilterChange('showLats')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showLowerBack}
            id="app-theme"
            label="Show lower back"
            onChange={() => props.handleFilterChange('showLowerBack')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showMiddleBack}
            id="app-theme"
            label="Show middle back"
            onChange={() => props.handleFilterChange('showMiddleBack')}
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
            checked={props.filterOptions.showQuadriceps}
            id="app-theme"
            label="Show quadriceps"
            onChange={() => props.handleFilterChange('showQuadriceps')}
          />
        </Fieldset>
      </GridCol>

      <GridCol sm={6} md={4} lg={3}>
        <Fieldset>
          <Checkbox
            checked={props.filterOptions.showCalves}
            id="app-theme"
            label="Show calves"
            onChange={() => props.handleFilterChange('showCalves')}
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
