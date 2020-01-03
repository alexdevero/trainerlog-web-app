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

  // Experimental
  const [exercisesNewer, setExercisesNewer] = React.useState<ExercisesArrayInterface[]>([])
  // Experimental

  // Exercises for pagination
  const [exercisesForPagination, setExercisesForPagination] = React.useState<ExercisesArrayInterface[]>([])

  // Handle active pages
  const [activePage, setActivePage] = React.useState(1)

  const generateExercises = async () => {
    let newExercisesState: ExercisesArrayInterface[] = await []
    let newExercisesForPaginationState: ExercisesArrayInterface[] = await []

    // Experimental
    let newerExercisesState: ExercisesArrayInterface[] = await []
    // Experimental

    Object.values(props.exercises).map((value: any, index: number, array: any[]) => {
      return value.map((exerciseSet: ExercisesArrayInterface, index: number) => {
        // Experimental
        newerExercisesState.push(exerciseSet)
        // Experimental

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

    // Experimental
    await setExercisesNewer(newerExercisesState)
    // Experimental
  }

  // const generatePaginationData = (page: number) => {
  //   for (let i = page - 1; i <= page * 21 && i < exercisesForPagination.length; i++) {
  //     console.log(exercisesForPagination[i])
  //   }
  // }

  // Trigger pagination generator and watch for changes
  // React.useEffect(() => {
  //   generatePaginationData(1)
  // }, [exercisesForPagination, props.exercises])

  // Trigger exercises generator and watch for changes
  React.useEffect(() => {
    generateExercises()
  }, [props.exercises])

  const handlePageClick = async (event: React.MouseEvent, pageNumber: number) => {
    event.preventDefault()

    if (pageNumber !== activePage && pageNumber > 0) {
      // Experimental
      const newerExercisesState: ExercisesArrayInterface[] = await []
      if (pageNumber === 1) {
        for (let i = pageNumber - 1; i <= pageNumber * 21 && i < exercisesForPagination.length; i++) {
          newerExercisesState.push(exercisesForPagination[i])
        }
      }

      setExercisesNewer(newerExercisesState)
      // Experimental

      // Array for exercises for the new page
      const newExercisesState: ExercisesArrayInterface[] = await []

      // Fetch exercises for the new page
      for (let i = (pageNumber - 1) * 21; i <= pageNumber * 21 && i < exercisesForPagination.length; i++) {
        newExercisesState.push(exercisesForPagination[i])
      }

      // Set exercises to show immediately
      await setExercises(newExercisesState)

      // Change active page
      await setActivePage(pageNumber)
    }
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
