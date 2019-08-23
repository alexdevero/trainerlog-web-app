import * as React from 'react'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import Pagination from 'react-bootstrap/Pagination'

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

const PaginationWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`

const PaginationInput = styled.input.attrs(props => ({
  type: 'text'
}))`
  padding: 0;
  max-width: 25px;
  font-size: 15px;
  text-align: center;
  background: transparent;
  border: 1px solid #ddd;
`

export const ExercisesTable = (props: ExercisesTableInterface) => {
  // Exercises to show immediately
  const [exercises, setExercises] = React.useState<ExercisesArrayInterface[]>([])

  // Exercises for pagination
  const [exercisesForPagination, setExercisesForPagination] = React.useState<ExercisesArrayInterface[]>([])

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

      <PaginationWrapper>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item><PaginationInput /></Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{(Math.ceil(exercisesForPagination.length / 21))}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </PaginationWrapper>
    </>
  )
}
