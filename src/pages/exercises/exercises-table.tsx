import * as React from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import styled from 'styled-components'

import { ExercisesFilterStoreInterface } from './../../stores/store-exercises-filter'

interface ExercisesTableInterface {
  exercises: any;
  filterOptions: ExercisesFilterStoreInterface;
}

interface ExercisesArrayInterface {
  equipment: string;
  id: string;
  muscle: string;
  name: string;
}

const ExercisesTableEl = styled(Table)`
  margin-top: 16px;

  th {
    font-size: 15px;
  }

  td,
  .dropdown-toggle,
  .dropdown-item {
    font-size: 14px;
  }
`

export const ExercisesTable = (props: ExercisesTableInterface) => {
  // Exercises to show immediately
  const [exercises, setExercises] = React.useState<ExercisesArrayInterface[]>([])

  // Exercises for pagination
  const [exercisesRest, setExercisesRest] = React.useState<ExercisesArrayInterface[]>([])

  React.useEffect(() => {
    const generateExercises = async () => {
      let newExercisesState: ExercisesArrayInterface[] = await []
      let newExercisesRestState: ExercisesArrayInterface[] = await []

      Object.values(props.exercises).map((value: any, index: number, array: any[]) => {
        return value.map((exerciseSet: ExercisesArrayInterface, index: number) => {
          if (newExercisesState.length < 21) {
            newExercisesState.push(exerciseSet)
          } else {
            newExercisesRestState.push(exerciseSet)
          }
        })
      })

      // Set exercises for pagination
      await setExercisesRest(newExercisesRestState)

      // Set exercises to show immediately
      await setExercises(newExercisesState)
    }

    generateExercises()
  }, [props.exercises])

  return (
    <ExercisesTableEl hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Muscle</th>
          <th>Equipment</th>
          <th>Add. actions</th>
        </tr>
      </thead>

      <tbody>
        {
          exercises.map((exerciseSet: ExercisesArrayInterface, index: number) => {
            return (
              <tr key={exerciseSet.id}>
                <td>{index + 1}</td>
                <td>{exerciseSet.name}</td>
                <td>{exerciseSet.muscle}</td>
                <td>{exerciseSet.equipment}</td>
                <td>
                  <Dropdown alignRight>
                    <Dropdown.Toggle style={{ padding: 0, background: 'transparent', border: 'none' }} variant="light" id="dropdown-basic">
                      More
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Info</Dropdown.Item>
                      <Dropdown.Item>Favorite</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </ExercisesTableEl>
  )
}
