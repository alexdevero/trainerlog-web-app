import * as React from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import styled from 'styled-components'

// import { ExercisesAbsStore } from './../../stores/store-exercises-abs'
// import { ExercisesBicepsStore } from './../../stores/store-exercises-biceps'
// import { ExercisesTricepsStore } from './../../stores/store-exercises-triceps'
// import { ExercisesChestStore } from './../../stores/store-exercises-chest'
// import { ExercisesQuadricepsStore } from './../../stores/store-exercises-quadriceps'
// import { ExercisesCalvesStore } from './../../stores/store-exercises-calves'
// import { ExercisesNeckStore } from './../../stores/store-exercises-neck'
// import { ExercisesTrapsStore } from './../../stores/store-exercises-traps'
// import { ExercisesLatsStore } from './../../stores/store-exercises-lats'
// import { ExercisesMiddleBackStore } from './../../stores/store-exercises-middle-back'
// import { ExercisesLowerBackStore } from './../../stores/store-exercises-lower-back'
// import { ExercisesGlutesStore } from './../../stores/store-exercises-glutes'
// import { ExercisesForearmsStore } from './../../stores/store-exercises-forearms'
import { ExercisesShouldersStore } from './../../stores/store-exercises-shoulders'

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

export const ExercisesTable = () => {
  const [exercisesArray, setExercisesArray] = React.useState<ExercisesArrayInterface[]>([])

  React.useEffect(() => {
    const generateExercises = async () => {
      let newState: ExercisesArrayInterface[] = await []

      await ExercisesShouldersStore.map((exercise, index) => {
        if (index < 10) {
          newState.push(exercise)
        }
      })

      await setExercisesArray(newState)
    }

    generateExercises()
  }, [])

  return (
    <ExercisesTableEl hover>
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
        {exercisesArray.map((exercise: ExercisesArrayInterface, index: number) => {
          return (
            <tr key={exercise.id}>
              <td>{index + 1}</td>
              <td>{exercise.name}</td>
              <td>{exercise.muscle}</td>
              <td>{exercise.equipment}</td>
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
        })}
      </tbody>
    </ExercisesTableEl>
  )
}
