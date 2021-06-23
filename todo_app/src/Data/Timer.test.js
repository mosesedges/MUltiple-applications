import React from 'react'
import ReactDOM from 'react-dom'
import {render, cleanup, fireEvent, wait, waitFor} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Timer from './Timer'
import { get } from 'react-hook-form';



afterEach(cleanup);

it('should take snapshot', () => {
  const {asFragment} = render(<Timer/>)
  expect(asFragment(<Timer/>)).toMatchSnapshot()
})


it('should equal 0', () => {
  const{getByTestId} = render(<Timer/>)
  expect(getByTestId('count')).toHaveTextContent(0)
})

it('should be enabled', () => {
  const{getByTestId} = render(<Timer/>)
  expect(getByTestId('btnUp')).toBeEnabled()
})

it('should be enable ', () => {
  const{getByTestId} = render(<Timer/>)
expect(getByTestId('btnDown')).toBeEnabled()
})


it('increment count', () => {
  const{getByTestId} = render(<Timer/>)

  fireEvent.click(getByTestId('btnUp'))

  expect(getByTestId('count')).toHaveTextContent('1')
})


it('should decrement ', () => {
  const {getByTestId} = render(<Timer/>)

  fireEvent.click(getByTestId('btnDown'))
  
  expect(getByTestId('count')).toHaveTextContent('-1')
})

it('should reset', () => {
  const {getByTestId} = render(<Timer/>)

  fireEvent.click(getByTestId('btnReset'))

  expect(getByTestId('count')).toHaveTextContent(0)
})


it('increment count after 0.5s', async () => {
  const {findByTestId, getByText} = render(<Timer/>)

  fireEvent.click (awaitscreen.findByTestId('btnUp'))

  const count = await waitFor(() =>  getByText('1'))

expect(getByText(count)).toBeInTheDocument()
 

    

})