import * as React from 'react'
import styled from 'styled-components'

import { GridCol, GridRow } from './../../components/grid'
import { HeadingH6 } from './../../components/typography'
import { Checkbox } from './../../components/form-elements'

interface DashboardSettingsPropsInterface {
  isBodyFatGraphVisible: boolean;
  isBodyWeightGraphVisible: boolean;
  isPrWeightGraphVisible: boolean;
  isPrEquipmentGraphVisible: boolean;
  setBodyFatGraphVisible: () => void;
  setBodyWeightGraphVisible: () => void;
  setPrWeightGraphVisible: () => void;
  setPrEquipmentGraphVisible: () => void;
}

const GridRowWrapper = styled(GridRow)`
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

  @media (max-width: 1199px) {
    & > div:nth-of-type(n+4) {
      margin-top: 16px;
    }
  }

  @media (min-width: 1200px) {
    & > div:nth-of-type(n+5) {
      margin-top: 16px;
    }
  }
`

export const DashboardSettings = (props: DashboardSettingsPropsInterface) => (
  <div style={{ margin: '0 0 32px' }}>
    <HeadingH6 style={{ margin: '0 0 12px' }}>Statistics settings</HeadingH6>

    <GridRowWrapper>
      <GridCol md={4} sm={6} xl={3}>
        <Checkbox
          checked={props.isBodyFatGraphVisible}
          id="dashboard-settings-body-fat"
          label="Body fat %"
          onChange={props.setBodyFatGraphVisible}
        />
      </GridCol>

      <GridCol md={4} sm={6} xl={3}>
        <Checkbox
          checked={props.isBodyWeightGraphVisible}
          id="dashboard-settings-body-weight"
          label="Body weight"
          onChange={props.setBodyWeightGraphVisible}
        />
      </GridCol>

      <GridCol md={4} sm={6} xl={3}>
        <Checkbox
          checked={props.isPrWeightGraphVisible}
          id="dashboard-settings-body-weight"
          label="PRs (weight)"
          onChange={props.setPrWeightGraphVisible}
        />
      </GridCol>

      <GridCol md={4} sm={6} xl={3}>
        <Checkbox
          checked={props.isPrEquipmentGraphVisible}
          id="dashboard-settings-body-weight"
          label="PRs (equipment)"
          onChange={props.setPrEquipmentGraphVisible}
        />
      </GridCol>
    </GridRowWrapper>
  </div>
)
