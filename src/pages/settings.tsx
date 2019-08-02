import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { GridRow, GridCol } from './../components/grid'
import { HeadingH5, HeadingH6 } from './../components/typography'
import { Checkbox, Fieldset, Input, Label, Select } from './../components/form-elements'
import { View } from './../components/constants'

import { SettingsStore } from './../stores/store-settings'

const SettingsSubHeading = styled(HeadingH6)`
  margin-bottom: 12px;
`

const Settings = () => {
  {/*
    // TODO: Implement handlers interacting directly with store
  */}
  const [firstName, setFirstName] = React.useState(SettingsStore.firstName)
  const [lastName, setLastName] = React.useState(SettingsStore.lastName)
  const [email, setEmail] = React.useState(SettingsStore.email)
  const [username, setUsername] = React.useState(SettingsStore.username)
  const [sex, setSex] = React.useState(SettingsStore.sex)
  const [height, setHeight] = React.useState(SettingsStore.height)
  const [weight, setWeight] = React.useState(SettingsStore.weight)
  const [bodyFat, setBodyFat] = React.useState(SettingsStore.bodyFat)
  const [yearsPropTraining, setYearsPropTraining] = React.useState(SettingsStore.yearsPropTraining)
  const [appTheme, setAppTheme] = React.useState(SettingsStore.appTheme)
  const [units, setUnits] = React.useState(SettingsStore.units)
  const [weeklyProgressReport, setWeeklyProgressReport] = React.useState(SettingsStore.weeklyProgressReport)
  const [occasionalTips, setOccasionalTips] = React.useState(SettingsStore.occasionalTips)
  const [productAnnouncements, setProductAnnouncements] = React.useState(SettingsStore.productAnnouncements)

  return (
    <>
      <Helmet>
        <title>Settings | TrainerLog</title>
      </Helmet>

      <View>
        <HeadingH5>
          Settings
          {' '}
          <span aria-label="Settings" aria-hidden={true}>
            🛠
          </span>
        </HeadingH5>

        <SettingsSubHeading>Personal</SettingsSubHeading>

        <GridRow>
          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Label htmlFor="firstName">First name</Label>

              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Label htmlFor="lastName">Last name</Label>

              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Fieldset>
          </GridCol>
        </GridRow>

        <SettingsSubHeading>Profile</SettingsSubHeading>

        <GridRow style={{ marginTop: 16 }}>
          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Label htmlFor="username">Username</Label>

              <Input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Label htmlFor="username">Sex</Label>

              <Select name="" id="" defaultValue={sex === 'female' ? 'female' : 'male'}>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </Select>
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Label htmlFor="yearsPropTraining">Years of proper training</Label>

              {/*
                // TODO: implement better handling of getting user input (empty === isNaN)
              */}
              <Input
                id="yearsPropTraining"
                min="0"
                name="yearsPropTraining"
                step="0.1"
                type="number"
                value={yearsPropTraining}
                onChange={(event) => setYearsPropTraining(parseInt(event.target.value))}
              />
            </Fieldset>
          </GridCol>
        </GridRow>

        <SettingsSubHeading>Measurements</SettingsSubHeading>

        <Fieldset>
          <Checkbox
            checked={units}
            id="units"
            label="Use metric units"
            onChange={() => setUnits(!units)}
          />
        </Fieldset>

        <GridRow style={{ marginTop: 16 }}>
          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Label htmlFor="height">Height ({units ? 'cm' : 'inch'})</Label>

              {/*
                // TODO: implement better handling of getting user input (empty === isNaN)
              */}
              <Input
                id="height"
                min="0"
                name="height"
                step="0.1"
                type="number"
                value={height}
                onChange={(event) => setHeight(parseInt(event.target.value))}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Label htmlFor="weight">Weight ({units ? 'kg' : 'lbs'})</Label>

              {/*
                // TODO: implement better handling of getting user input (empty === isNaN)
              */}
              <Input
                id="weight"
                min="0"
                name="weight"
                step="0.1"
                type="number"
                value={weight}
                onChange={(event) => setWeight(parseInt(event.target.value))}
              />
            </Fieldset>
          </GridCol>

          <GridCol sm={6} md={4} lg={3}>
            <Fieldset>
              <Label htmlFor="bodyFat">Body fat %</Label>

              {/*
                // TODO: implement better handling of getting user input (empty === isNaN)
              */}
              <Input
                id="bodyFat"
                max="100"
                min="0"
                name="bodyFat"
                step="0.1"
                type="number"
                value={bodyFat}
                onChange={(event) => setBodyFat(parseInt(event.target.value))}
              />
            </Fieldset>
          </GridCol>
        </GridRow>

        <SettingsSubHeading>UI settings</SettingsSubHeading>

        <Fieldset>
          <Checkbox
            checked={appTheme}
            id="app-theme"
            label="Use dark mode"
            onChange={() => setAppTheme(!appTheme)}
          />
        </Fieldset>

        <SettingsSubHeading>Notifications settings</SettingsSubHeading>

        <Fieldset>
          <Checkbox
            checked={weeklyProgressReport}
            id="weekly-progress-report"
            label="Send me weekly progress report"
            onChange={() => setWeeklyProgressReport(!weeklyProgressReport)}
          />
        </Fieldset>

        <Fieldset>
          <Checkbox
            checked={occasionalTips}
            id="occasional-tips"
            label="Send me occasional tips"
            onChange={() => setOccasionalTips(!occasionalTips)}
          />
        </Fieldset>

        <Fieldset>
          <Checkbox
            checked={productAnnouncements}
            id="product-announcements"
            label="Send me product announcements"
            onChange={() => setProductAnnouncements(!productAnnouncements)}
          />
        </Fieldset>
      </View>
    </>
  )
}

export default Settings
