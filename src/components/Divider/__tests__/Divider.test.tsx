import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/tests/utils';

import { Divider } from '..';

describe('Divider', () => {
  test('renders', () => {
    renderWithTheme(<Divider />);
    const divider = screen.getByTestId('divider');
    expect(divider);
  });

  test('should render with custom height', () => {
    renderWithTheme(<Divider height={2} />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveStyle({ height: '2px' });
  });

  test('should render with custom width', () => {
    renderWithTheme(<Divider width={2} />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveStyle({ width: '2px' });
  });

  test('should render with custom margin', () => {
    renderWithTheme(<Divider m={2} />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveStyle({ margin: '2rem' });
  });

  test('should render with custom margin-left', () => {
    renderWithTheme(<Divider ml={2} />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveStyle({ marginLeft: '2rem' });
  });

  test('should render with custom margin-right', () => {
    renderWithTheme(<Divider mr={2} />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveStyle({ marginRight: '2rem' });
  });

  test('should render with custom margin-top', () => {
    renderWithTheme(<Divider mt={2} />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveStyle({ marginTop: '2rem' });
  });

  test('should render with custom margin-bottom', () => {
    renderWithTheme(<Divider mb={2} />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveStyle({ marginBottom: '2rem' });
  });

  test('should render with custom background-color', () => {
    renderWithTheme(<Divider bgColor="red" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveStyle({ backgroundColor: 'red' });
  });

  // test('should render correctly', () => {
  //   const { container } = renderWithTheme(<Divider />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });
});
