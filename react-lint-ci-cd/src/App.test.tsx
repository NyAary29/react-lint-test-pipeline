import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })

  it('renders the title', () => {
    render(<App />)
    expect(screen.getByText(/React CI\/CD Pipeline/i)).toBeTruthy()
  })

  it('mentions ESLint', () => {
    render(<App />)
    expect(screen.getByText(/ESLint/i)).toBeTruthy()
  })

  it('mentions tests', () => {
    render(<App />)
    expect(screen.getByText(/tests/i)).toBeTruthy()
  })

  it('counter starts at 0', () => {
    render(<App />)
    expect(screen.getByText(/Count is 0/i)).toBeTruthy()
  })

  it('counter increments on click', () => {
    render(<App />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByText(/Count is 1/i)).toBeTruthy()
  })
})