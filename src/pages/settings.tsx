import * as React from 'react'
import Helmet from 'react-helmet'

import { GridRow, GridCol } from './../components/grid'
import { HeadingH5, HeadingH6 } from './../components/typography'
import { Checkbox, FieldSetStyles, Input, Label } from './../components/form-elements'
import { View } from './../components/constants'

import { SettingsStore } from './../stores/store-settings'

const Settings = () => (
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

      <HeadingH6>Personal settings</HeadingH6>

      <GridRow>
        <GridCol sm={6} md={4} lg={3}>
          <FieldSetStyles>
            <Label htmlFor="firstName">First name</Label>

            <Input
              id="firstName"
              name="firstName"
              type="text"
              // onChange={handleInput}
            />
          </FieldSetStyles>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <FieldSetStyles>
            <Label htmlFor="lastName">Last name</Label>

            <Input
              id="lastName"
              name="lastName"
              type="text"
              // onChange={handleInput}
            />
          </FieldSetStyles>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <FieldSetStyles>
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              name="email"
              type="email"
              // onChange={handleInput}
            />
          </FieldSetStyles>
        </GridCol>
      </GridRow>

      <GridRow>
        <GridCol sm={6} md={4} lg={3}>
          <FieldSetStyles>
            <Label htmlFor="username">Username</Label>

            <Input
              id="username"
              name="username"
              type="text"
              // onChange={handleInput}
            />
          </FieldSetStyles>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <FieldSetStyles>
            <Label htmlFor="yearsPropTraining">Years of proper training</Label>

            <Input
              id="yearsPropTraining"
              min="0"
              name="yearsPropTraining"
              step="0.1"
              type="number"
              // onChange={handleInput}
            />
          </FieldSetStyles>
        </GridCol>
      </GridRow>

      <HeadingH6>Measurements settings</HeadingH6>

      <GridRow>
        <GridCol sm={6} md={4} lg={3}>
          <FieldSetStyles>
            <Label htmlFor="height">Height</Label>

            <Input
              id="height"
              name="height"
              type="text"
              // onChange={handleInput}
            />
          </FieldSetStyles>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <FieldSetStyles>
            <Label htmlFor="weight">Weight</Label>

            <Input
              id="weight"
              name="weight"
              type="text"
              // onChange={handleInput}
            />
          </FieldSetStyles>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <FieldSetStyles>
            <Label htmlFor="bodyFat">Body fat %</Label>

            <Input
              id="bodyFat"
              max="100"
              min="0"
              name="bodyFat"
              step="0.1"
              type="number"
              // onChange={handleInput}
            />
          </FieldSetStyles>
        </GridCol>
      </GridRow>

      <HeadingH6>Notifications settings</HeadingH6>

      <Checkbox
        // checked={props.isBodyFatGraphVisible}
        id="dashboard-settings-body-fat"
        label="Send me weekly progress report"
        // onChange={props.setBodyFatGraphVisible}
      />

      <Checkbox
        // checked={props.isBodyFatGraphVisible}
        id="dashboard-settings-body-fat"
        label="Send me occasional tips"
        // onChange={props.setBodyFatGraphVisible}
      />

      <Checkbox
        // checked={props.isBodyFatGraphVisible}
        id="dashboard-settings-body-fat"
        label="Send me product announcements"
        // onChange={props.setBodyFatGraphVisible}
      />
    </View>
  </>
)

export default Settings
