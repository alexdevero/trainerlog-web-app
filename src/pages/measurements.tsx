import * as React from 'react'
import Helmet from 'react-helmet'
// import { GridRow, GridCol } from './../components/grid'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { HeadingH5 } from './../components/typography'
import { TableBodyFat } from './measurements/table-body-fat'
import { TableBodyWater } from './measurements/table-body-water'
import { TableBodyweight } from './measurements/table-bodyweight'
import { TableCaloricIntake } from './measurements/table-caloric-intake'
import { TableMuscleMass } from './measurements/table-muscle-mass'
import { TableWaterIntake } from './measurements/table-water-intake'
import { View } from './../components/constants'

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

        <Tabs id="controlled-tab" activeKey={activeTab} onSelect={(k: string) => setActiveTab(k)}>
          <Tab eventKey="bodyweight" title="Bodyweight">
            <TableBodyweight />
          </Tab>
          <Tab eventKey="muscleMass" title="Muscle Mass">
            <TableMuscleMass />
          </Tab>
          <Tab eventKey="bodyFat" title="Body Fat">
            <TableBodyFat />
          </Tab>
          <Tab eventKey="bodyWater" title="Body Water">
            <TableBodyWater />
          </Tab>
          <Tab eventKey="caloricIntake" title="Caloric Intake">
            <TableCaloricIntake />
          </Tab>
          <Tab eventKey="waterIntake" title="Water Intake">
            <TableWaterIntake />
          </Tab>
        </Tabs>

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
