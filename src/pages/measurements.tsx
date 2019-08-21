import * as React from 'react'
import Helmet from 'react-helmet'
// import { GridRow, GridCol } from './../components/grid'
import { LineChart, ChartZoomPan } from 'reaviz'
import styled from 'styled-components'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { HeadingH5 } from './../components/typography'
import { TableBodyFat } from './measurements/table-body-fat'
import { TableBodyWater } from './measurements/table-body-water'
import { TableBodyWeight } from './measurements/table-body-weight'
import { TableCaloricIntake } from './measurements/table-caloric-intake'
import { TableMuscleMass } from './measurements/table-muscle-mass'
import { TableWaterIntake } from './measurements/table-water-intake'
import { View } from './../components/constants'

import { dataBodyFat } from './../data/data-body-fat'
import { dataBodyWater } from '../data/data-body-water'
import { dataBodyWeight } from './../data/data-body-weight'
import { dataCaloricIntake } from './../data/data-caloric-intake'
import { dataMuscleMass } from './../data/data-muscle-mass'
import { dataWaterIntake } from './../data/data-water-intake'

const TabWrapper = styled.div`
  .nav-tabs a {
    color: #111;
  }

  .nav-link.active {
    font-weight: 700;
  }

  .table-responsive {
    max-height: 560px;
  }
`

const Measurements = () => {
  const [activeTab, setActiveTab] = React.useState('bodyweight')

  return (
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

        <TabWrapper>
          <Tabs id="controlled-tab" activeKey={activeTab} onSelect={(k: string) => setActiveTab(k)}>
            <Tab eventKey="bodyweight" title="Bodyweight">
              <LineChart
                data={dataBodyWeight}
                height={350}
                // width={250}
                zoomPan={<ChartZoomPan />}
              />

              <TableBodyWeight />
            </Tab>
            <Tab eventKey="muscleMass" title="Muscle Mass">
              <LineChart
                data={dataMuscleMass}
                height={350}
                // width={250}
                zoomPan={<ChartZoomPan />}
              />

              <TableMuscleMass />
            </Tab>
            <Tab eventKey="bodyFat" title="Body Fat">
              <LineChart
                data={dataBodyFat}
                height={350}
                // width={250}
                zoomPan={<ChartZoomPan />}
              />

              <TableBodyFat />
            </Tab>
            <Tab eventKey="bodyWater" title="Body Water">
              <LineChart
                data={dataBodyWater}
                height={350}
                // width={250}
                zoomPan={<ChartZoomPan />}
              />

              <TableBodyWater />
            </Tab>
            <Tab eventKey="caloricIntake" title="Caloric Intake">
              <LineChart
                data={dataCaloricIntake}
                height={350}
                // width={250}
                zoomPan={<ChartZoomPan />}
              />

              <TableCaloricIntake />
            </Tab>
            <Tab eventKey="waterIntake" title="Water Intake">
              <LineChart
                data={dataWaterIntake}
                height={350}
                // width={250}
                zoomPan={<ChartZoomPan />}
              />

              <TableWaterIntake />
            </Tab>
          </Tabs>
        </TabWrapper>

        {/* <GridRow style={{ marginTop: 21 }}>
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
        </GridRow> */}
      </View>
    </>
  )
}

export default Measurements
