import * as React from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment'

import { SettingsStore } from './../../stores/store-settings'

import { dataBodyWeight } from './../../data/data-body-weight'

export const TableBodyweight = () => (
  <>
    <Table hover responsive style={{ marginTop: 12 }}>
      <thead style={{ fontSize: 13 }}>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>{SettingsStore.units ? 'Kg' : 'Lbs'}</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {dataBodyWeight.map((item, index: number) => {
          return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{moment(item.key).format('DD. MM. YYYY')}</td>
              <td>{Number.parseFloat('' + item.data).toFixed(2)}</td>
              <td>
                <Dropdown alignRight>
                  <Dropdown.Toggle style={{ padding: 0, background: 'transparent', border: 'none' }} variant="light" id="dropdown-basic">
                    More
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  </>
)
