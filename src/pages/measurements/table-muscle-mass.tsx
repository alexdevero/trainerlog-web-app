import * as React from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment'

import { dataMuscleMass } from './../../data/data-muscle-mass'

export const TableMuscleMass = () => (
  <>
    <Table hover responsive style={{ marginTop: 12 }}>
      <thead style={{ fontSize: 13 }}>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>%</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {dataMuscleMass.map((item, index: number) => {
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
