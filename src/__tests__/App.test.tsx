import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Test App root comp', () => {
  it('shoud render App comp', () => {
    render(<App />);
    expect(screen.getByText(/My tags/)).toBeInTheDocument();
  });
});
