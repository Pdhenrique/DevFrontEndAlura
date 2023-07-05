import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './index';

describe('deve renderizar um campo de input', () => {
  test('', () => {
    render(<Form />);

    const textField = screen.getByPlaceholderText('Type a value');

    expect(textField).toBeInTheDocument();
  });

  test('com o type number', () => {
    render(<Form />);

    const textField = screen.getByPlaceholderText('Type a value');

    expect(textField).toHaveAttribute('type', 'number');
  });

  test('que pode ser preenchido', () => {
    render(<Form />);

    const textField = screen.getByPlaceholderText('Type a value');

    userEvent.type(textField, '50');
    expect(textField).toHaveValue(50);
  });
});
