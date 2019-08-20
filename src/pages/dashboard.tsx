import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { BarChart, LineChart, ChartZoomPan } from 'reaviz'

// import 'reaviz/dist/index.css'

import { DashboardStore } from './../stores/store-dashboard'

import { View } from './../components/constants'
import { GridCol, GridRow } from './../components/grid'
import { HeadingH5 } from './../components/typography'
import { DashboardSettings } from './dashboard/dashboard-settings'

import { dataBodyFat } from './../data/data-body-fat'
import { dataPrBodyWeight } from './../data/data-pr-body-weight'
import { dataPrEquipment } from './../data/data-pr-equipment'
import { dataBodyWeight } from './../data/data-body-weight'

const SettingsButton = styled.button`
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

const Dashboard = () => {
  // TODO: Implement handlers interacting directly with store
  const [isSettingsVisible, setSettingsVisible] = React.useState(DashboardStore.isSettingsVisible)
  const [isBodyFatGraphVisible, setBodyFatGraphVisible] = React.useState(DashboardStore.isBodyFatGraphVisible)
  const [isBodyWeightGraphVisible, setBodyWeightGraphVisible] = React.useState(DashboardStore.isBodyWeightGraphVisible)
  const [isPrWeightGraphVisible, setPrWeightGraphVisible] = React.useState(DashboardStore.isPrWeightGraphVisible)
  const [isPrEquipmentGraphVisible, setPrEquipmentGraphVisible] = React.useState(DashboardStore.isPrEquipmentGraphVisible)

  return (
    <>
      <Helmet>
        <title>Dashboard | TrainerLog</title>
      </Helmet>

      <View>
        <div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
          <SettingsButton onClick={() => setSettingsVisible(!isSettingsVisible)}><span className="fas fa-cog" title="Dashboard settings" /></SettingsButton>
        </div>

        {isSettingsVisible && (
          <DashboardSettings
            isBodyFatGraphVisible={isBodyFatGraphVisible}
            isBodyWeightGraphVisible={isBodyWeightGraphVisible}
            isPrEquipmentGraphVisible={isPrEquipmentGraphVisible}
            isPrWeightGraphVisible={isPrWeightGraphVisible}
            setBodyFatGraphVisible={() => setBodyFatGraphVisible(!isBodyFatGraphVisible)}
            setBodyWeightGraphVisible={() => setBodyWeightGraphVisible(!isBodyWeightGraphVisible)}
            setPrEquipmentGraphVisible={() => setPrEquipmentGraphVisible(!isPrEquipmentGraphVisible)}
            setPrWeightGraphVisible={() => setPrWeightGraphVisible(!isPrWeightGraphVisible)}
          />
        )}

        <GridRow>
          {isBodyWeightGraphVisible && (
            <GridCol md={6}>
              <HeadingH5>Your weight</HeadingH5>

              <LineChart
                data={dataBodyWeight}
                height={350}
                // width={250}
                zoomPan={<ChartZoomPan />}
              />
            </GridCol>
          )}

          {isBodyFatGraphVisible && (
            <GridCol md={6}>
              <HeadingH5>Your body fat %</HeadingH5>

              <LineChart
                data={dataBodyFat}
                height={350}
                // width={250}
                zoomPan={<ChartZoomPan />}
              />
            </GridCol>
          )}

          {isPrEquipmentGraphVisible && (
            <GridCol md={6}>
              <HeadingH5>Your PRs (equipment)</HeadingH5>

              <BarChart
                data={dataPrEquipment}
                height={350}
                // width={350}
                // gridlines={<GridlineSeries />}
              />
            </GridCol>
          )}

          {isPrWeightGraphVisible && (
            <GridCol md={6}>
              <HeadingH5>Your PRs (body weight)</HeadingH5>

              <BarChart
                data={dataPrBodyWeight}
                height={350}
                // width={350}
                // gridlines={<GridlineSeries />}
              />
            </GridCol>
          )}
        </GridRow>
      </View>
    </>
  )
}

export default Dashboard
