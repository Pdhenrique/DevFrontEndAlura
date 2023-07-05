import { render, screen } from '@testing-library/react';
import Menu from './index';

test('should render a home page link', () => {
  render(<Menu />);
  const homePageLink = screen.getByText('Home');

  expect(homePageLink).toBeInTheDocument();
});

test('should render a list of links', () => {
  render(<Menu />);
  const LinksLista = screen.getAllByRole('link');

  expect(LinksLista).toHaveLength(4);
});

test("Shouldn't render link to Extract", () => {
  render(<Menu />);
  const LinksExtrato = screen.queryByText('Extrato');

  expect(LinksExtrato).not.toBeInTheDocument();
});

test("Shouldn't render link to Extract", () => {
  render(<Menu />);
  const LinksExtrato = screen.queryByText('Extrato');

  expect(LinksExtrato).not.toBeInTheDocument();
});

test('should render a list of links with the class link', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');

  links.forEach((link) => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
});
