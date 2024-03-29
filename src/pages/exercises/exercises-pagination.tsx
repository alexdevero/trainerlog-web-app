import * as React from 'react'
import styled from 'styled-components'
import Pagination from 'react-bootstrap/Pagination'

interface ExercisesArrayInterface {
  equipment: string;
  id: string;
  muscle: string;
  name: string;
}

interface ExercisesPaginationInterface {
  activePage: number;
  exercisesForPagination: ExercisesArrayInterface[];
  handlePageClick: (event: React.MouseEvent, pageNumber: number) => void;
}

const PaginationWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`

// const PaginationInput = styled.input.attrs(props => ({
//   type: 'text'
// }))`
//   padding: 0;
//   max-width: 25px;
//   font-size: 15px;
//   text-align: center;
//   background: transparent;
//   border: 1px solid #ddd;
// `

export const ExercisesPagination = (props: ExercisesPaginationInterface) => {
  const generatePages = () => {
    const pages: any[] = []

    for (let i = 1; i <= (props.exercisesForPagination.length / 21); i++) {
      for (let j = 0; j < (i / 21); j++) {
        console.log(i)
        pages.push(props.exercisesForPagination[j])
      }
      // pages.push(props.exercisesForPagination)
    }

    console.log(pages)

    // props.exercisesForPagination.map((page, index: number) => {
    //   if (index % 21 === 0) {
    //     pages.push(<Pagination.Item active={props.activePage === index} onClick={(event: React.MouseEvent) => props.handlePageClick(event, index)}>{index}</Pagination.Item>)
    //   }
    // })

    // return pages
  }

  return (
    <PaginationWrapper>
      <Pagination>
        <Pagination.First disabled={props.activePage === 1} onClick={(event: React.MouseEvent) => props.handlePageClick(event, 1)} />
        <Pagination.Prev disabled={props.activePage === 1} onClick={(event: React.MouseEvent) => props.handlePageClick(event, props.activePage - 1)} />
        <Pagination.Item active={props.activePage === 1} onClick={(event: React.MouseEvent) => props.handlePageClick(event, 1)}>{1}</Pagination.Item>

        {/* Create pagination for second page */}
        {(Math.ceil(props.exercisesForPagination.length / 21)) >= 1 && (
          <>
            <Pagination.Item active={props.activePage === 2} onClick={(event: React.MouseEvent) => props.handlePageClick(event, 2)}>{2}</Pagination.Item>
          </>
        )}

        {/* Create pagination for third and other pages */}
        {(Math.ceil(props.exercisesForPagination.length / 21)) >= 3 && (
          <>
            {/* <Pagination.Ellipsis /> */}

            {generatePages()}

            {/* <Pagination.Item><PaginationInput /></Pagination.Item> */}
            <Pagination.Item active={props.activePage === Math.ceil(props.exercisesForPagination.length / 21)} onClick={(event: React.MouseEvent) => props.handlePageClick(event, Math.ceil(props.exercisesForPagination.length / 21))}>
              {(Math.ceil(props.exercisesForPagination.length / 21))}
            </Pagination.Item>
          </>
        )}

        <Pagination.Next disabled={props.activePage === Math.ceil(props.exercisesForPagination.length / 21 + 1)} onClick={(event: React.MouseEvent) => props.handlePageClick(event, props.activePage + 1)} />
        <Pagination.Last disabled={props.activePage === Math.ceil(props.exercisesForPagination.length / 21 + 1)} onClick={(event: React.MouseEvent) => props.handlePageClick(event, Math.ceil(props.exercisesForPagination.length / 21))} />
      </Pagination>
    </PaginationWrapper>
  )
}
