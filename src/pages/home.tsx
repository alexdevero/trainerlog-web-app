import * as React from 'react'
import { BarChart, LineChart } from 'reaviz'

// import 'reaviz/dist/index.css'

import { View } from './../components/constants'
import { GridCol, GridRow } from './../components/grid'
import { HeadingH4 } from './../components/typography'

import { dataBodyFat } from '../data/data-body-fat'
import { dataPrBodyWeight } from '../data/data-pr-body-weight'
import { dataPrEquipment } from '../data/data-pr-equipment'
import { dataBodyWeight } from '../data/data-body-weight'

const Home = () => {
  return (
    <View>
      <GridRow>
        <GridCol md={6} xl={3}>
          <HeadingH4>Your weight</HeadingH4>

          <LineChart
            data={dataBodyWeight}
            height={250}
            width={250}
          />
        </GridCol>

        <GridCol md={6} xl={3}>
          <HeadingH4>Your body fat %</HeadingH4>

          <LineChart
            data={dataBodyFat}
            height={250}
            width={250}
          />
        </GridCol>
        <GridCol md={6} xl={3}>
          <HeadingH4>Your PRs (equipment)</HeadingH4>

          <BarChart
            data={dataPrEquipment}
            height={250}
            width={350}
            // gridlines={<GridlineSeries />}
          />
        </GridCol>

        <GridCol md={6} xl={3}>
          <HeadingH4>Your PRs (body weight)</HeadingH4>

          <BarChart
            data={dataPrBodyWeight}
            height={250}
            width={350}
            // gridlines={<GridlineSeries />}
          />
        </GridCol>
      </GridRow>
    </View>
  )
}

export default Home
