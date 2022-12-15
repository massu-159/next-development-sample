/**
* @jest-environment jsdom
*/
import { act, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

it('Should render title text', async () => {

  await act(()=>render(<Home />))
  expect(screen.getByText('Next.js!')).toBeInTheDocument()
})
