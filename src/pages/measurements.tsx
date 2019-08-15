import * as React from 'react'
import Helmet from 'react-helmet'
import { GridRow, GridCol } from './../components/grid'

import { HeadingH5 } from './../components/typography'
import { TableBodyFat } from './measurements/table-body-fat'
import { TableBodyWater } from './measurements/table-body-water'
import { TableBodyweight } from './measurements/table-bodyweight'
import { TableCaloricIntake } from './measurements/table-caloric-intake'
import { TableMuscleMass } from './measurements/table-muscle-mass'
import { TableWaterIntake } from './measurements/table-water-intake'
import { View } from './../components/constants'

const Measurements = () => (
  <>
    <Helmet>
      <title>Measurements | TrainerLog</title>
    </Helmet>

    <View>
      <HeadingH5 style={{ marginTop: 0 }}>
        Measurements
        {' '}
        <span aria-label="Scale" aria-hidden={true}>
          ⚖
        </span>
      </HeadingH5>

      <p>Measurements for for weight, height, body fat and also body parts, i.e. biceps, triceps, abs, legs, etc. Helps you measure your progress.</p>

      <GridRow style={{ marginTop: 21 }}>
        <GridCol md={6}>
          <TableBodyweight />
        </GridCol>

        <GridCol md={6}>
          <TableMuscleMass />
        </GridCol>
      </GridRow>

      <GridRow style={{ marginTop: 21 }}>
        <GridCol md={6}>
          <TableBodyFat />
        </GridCol>

        <GridCol md={6}>
          <TableBodyWater />
        </GridCol>
      </GridRow>

      <GridRow style={{ marginTop: 21 }}>
        <GridCol md={6}>
          <TableCaloricIntake />
        </GridCol>

        <GridCol md={6}>
          <TableWaterIntake />
        </GridCol>
      </GridRow>
    </View>
  </>
)

export default Measurements
