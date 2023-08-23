import { fireEvent, screen } from '@testing-library/react';
import { Button } from '..';
import { renderWithTheme } from '@/tests/utils';

describe('Button variants', () => {
  test('variant:outlined', () => {
    renderWithTheme(<Button variant="outlined">variant:outlined</Button>);
    const button = screen.getByRole('button');
    expect(button);
  });

  test('variant:filled', () => {
    renderWithTheme(<Button variant="filled">variant:filled</Button>);
    const button = screen.getByRole('button');
    expect(button);
  });

  test('size:md', () => {
    renderWithTheme(<Button size="md">size:md</Button>);
    const button = screen.getByRole('button');
    expect(button);
  });

  test('size:sm', () => {
    renderWithTheme(<Button size="sm">size:sm</Button>);
    const button = screen.getByRole('button');
    expect(button);
  });

  test('color:primary', () => {
    renderWithTheme(<Button color="primary">color:primary</Button>);
    const button = screen.getByRole('button');
    expect(button);
  });

  test('color:secondary', () => {
    renderWithTheme(<Button color="secondary">color:secondary</Button>);
    const button = screen.getByRole('button');
    expect(button);
  });

  test('variant:outlined', () => {
    const { getByText } = renderWithTheme(
      <Button variant="outlined">Click me!</Button>
    );
    const buttonElement = getByText('Click me!');
    expect(buttonElement);
  });

  test('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = renderWithTheme(
      <Button onClick={onClickMock}>Click!</Button>
    );
    const buttonElement = getByText('Click!');

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // test('should render correctly', () => {
  //   const { container } = renderWithTheme(<Button />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });
});
