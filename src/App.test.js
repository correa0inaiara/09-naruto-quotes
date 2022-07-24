import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import Image from './components/Image';
import Quotes from './components/Quotes';

test('quotes component should render title, quote, author and button', () => {
  render(<Quotes />);
  const title = screen.getByText('Naruto Quotes Generator')
  const quote = screen.getByTestId('quote')
  const author = screen.getByTestId('author')
  const button = screen.getByRole('button')

  expect(title).toBeInTheDocument();
  expect(quote).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('image component should render image', () => {
  render(<Image />)
  const image = screen.getByRole('img')

  expect(image).toBeInTheDocument();
});