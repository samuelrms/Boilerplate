import { renderWithTheme } from '@/tests/utils';
import { screen } from '@testing-library/react';

import { Typography } from '..';

describe('Typography', () => {
  test('renders', () => {
    renderWithTheme(<Typography />);
    const typography = screen.getByTestId('typography');
    expect(typography);
  });

  test('should render a text', () => {
    const { getByText } = renderWithTheme(<Typography>Typography</Typography>);
    const typography = getByText('Typography');
    expect(typography).toBeInTheDocument();
  });

  test('should render with custom color', () => {
    renderWithTheme(<Typography color="red" />);
    const typography = screen.getByTestId('typography');
    expect(typography).toHaveStyle({ color: 'red' });
  });

  test('should render with custom size', () => {
    renderWithTheme(<Typography size="sm" />);
    const typography = screen.getByTestId('typography');
    expect(typography).toHaveStyle({ fontSize: '0.875rem' });
  });

  test('should render with custom variant', () => {
    renderWithTheme(<Typography variant="caption" />);
    const typography = screen.getByTestId('typography');
    expect(typography).toHaveStyle({ fontSize: '0.75rem' });
  });

  test('should render with custom size and variant', () => {
    renderWithTheme(<Typography size="sm" variant="caption" />);
    const typography = screen.getByTestId('typography');
    expect(typography).toHaveStyle({ fontSize: '0.875rem' });
  });

  // test('should render correctly', () => {
  //   const { container } = renderWithTheme(<Typography></>);
  //   expect(container.firstChild).toMatchSnapshot();
  // });
});
