import React from 'react'
import ReactDOM from 'react-dom'
import {render, cleanup, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Member from './Member'


afterEach(cleanup);

it('should take snapshot', () => {
  const {asFragment} = render(<Member/>)
  expect(asFragment(<Member/>)).toMatchSnapshot()

})

it('should have a Belle full!', () => {
  const {getByTestId} = render(<Member/>)
  expect(getByTestId('heading1')).toHaveTextContent('Belle full!')
})

it('should have  Welcome Back!', () =>{
  const {getByTestId} = render(<Member/>)
  expect(getByTestId('heading2')).toHaveTextContent('Welcome Back!')
})

it('paragraph should remind customer next action', () => {
  const {getByTestId} = render(<Member/>)
  expect(getByTestId('ptag')).toHaveTextContent('Please sign in to place an order')
})

it('submit the form', () => {
const {getByTestId} = render(<Member/>)
fireEvent.submit(getByTestId('login'))
expect(getByTestId('login')).toBeCalled(handleSubmit())
})





