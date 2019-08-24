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

export const ExercisesPagination = (props: ExercisesPaginationInterface) => {
  return (
    <PaginationWrapper>
      <Pagination>
        <Pagination.First onClick={(event: React.MouseEvent) => props.handlePageClick(event, 1)} />
        <Pagination.Prev onClick={(event: React.MouseEvent) => props.handlePageClick(event, props.activePage - 1)} />
        <Pagination.Item active onClick={(event: React.MouseEvent) => props.handlePageClick(event, 1)}>{1}</Pagination.Item>

        {(Math.ceil(props.exercisesForPagination.length / 21)) > 3 && (
          <>
            <Pagination.Item onClick={(event: React.MouseEvent) => props.handlePageClick(event, 2)}>{2}</Pagination.Item>
            {/* <Pagination.Item><PaginationInput /></Pagination.Item> */}
            <Pagination.Ellipsis />
          </>
        )}

        {(Math.ceil(props.exercisesForPagination.length / 21)) >= 1 && (
          <Pagination.Item onClick={(event: React.MouseEvent) => props.handlePageClick(event, Math.ceil(props.exercisesForPagination.length / 21))}>2</Pagination.Item>
        )}
        <Pagination.Next onClick={(event: React.MouseEvent) => props.handlePageClick(event, props.activePage + 1)} />
        <Pagination.Last onClick={(event: React.MouseEvent) => props.handlePageClick(event, Math.ceil(props.exercisesForPagination.length / 21))} />
      </Pagination>
    </PaginationWrapper>
  )
}
