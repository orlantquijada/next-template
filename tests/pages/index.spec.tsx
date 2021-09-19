/* eslint-disable no-undef */
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Home from '@/pages/index'

describe('Lading Page', () => {
  it('renders heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'Hello World',
    })

    expect(heading).toBeInTheDocument()
  })
})
