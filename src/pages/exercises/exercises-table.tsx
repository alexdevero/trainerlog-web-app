import * as React from 'react'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

import { ExercisesFilterStoreInterface } from './../../stores/store-exercises-filter'

import { ExercisesPagination } from './exercises-pagination'

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
  const [exercisesForPagination, setExercisesForPagination] = React.useState<ExercisesArrayInterface[]>([])

  const [activePage, setActivePage] = React.useState(1)

  React.useEffect(() => {
    const generateExercises = async () => {
      let newExercisesState: ExercisesArrayInterface[] = await []
      let newExercisesForPaginationState: ExercisesArrayInterface[] = await []

      Object.values(props.exercises).map((value: any, index: number, array: any[]) => {
        return value.map((exerciseSet: ExercisesArrayInterface, index: number) => {
          if (newExercisesState.length < 21) {
            newExercisesState.push(exerciseSet)
          } else {
            newExercisesForPaginationState.push(exerciseSet)
          }
        })
      })

      // Set exercises for pagination
      await setExercisesForPagination(newExercisesForPaginationState)

      // Set exercises to show immediately
      await setExercises(newExercisesState)
    }

    generateExercises()
  }, [props.exercises])

  const handlePageClick = (event: React.MouseEvent, pageNumber: number) => {
    event.preventDefault()

    console.log('pageNumber', pageNumber)
    console.log(event.target)
  }

  return (
    <>
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

      <ExercisesPagination activePage={activePage} exercisesForPagination={exercisesForPagination} handlePageClick={handlePageClick} />
    </>
  )
}
