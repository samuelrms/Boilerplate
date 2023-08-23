import { renderWithTheme } from '@/tests/utils';
import { screen } from '@testing-library/react';

import { Stack } from '..';

describe('Stack', () => {
  test('renders', () => {
    renderWithTheme(<Stack />);
    const stack = screen.getByTestId('stack');
    expect(stack);
  });

  test('should render with custom padding', () => {
    renderWithTheme(<Stack p={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ padding: '2rem' });
  });

  test('should render with custom padding-left', () => {
    renderWithTheme(<Stack pl={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ paddingLeft: '2rem' });
  });

  test('should render with custom padding-right', () => {
    renderWithTheme(<Stack pr={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ paddingRight: '2rem' });
  });

  test('should render with custom padding-top', () => {
    renderWithTheme(<Stack pt={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ paddingTop: '2rem' });
  });

  test('should render with custom padding-bottom', () => {
    renderWithTheme(<Stack pb={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ paddingBottom: '2rem' });
  });

  test('should render with custom margin', () => {
    renderWithTheme(<Stack m={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ margin: '2rem' });
  });

  test('should render with custom margin-left', () => {
    renderWithTheme(<Stack ml={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ marginLeft: '2rem' });
  });

  test('should render with custom margin-right', () => {
    renderWithTheme(<Stack mr={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ marginRight: '2rem' });
  });

  test('should render with custom margin-top', () => {
    renderWithTheme(<Stack mt={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ marginTop: '2rem' });
  });

  test('should render with custom margin-bottom', () => {
    renderWithTheme(<Stack mb={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ marginBottom: '2rem' });
  });

  test('renders', () => {
    renderWithTheme(<Stack />);
    const stack = screen.getByTestId('stack');
    expect(stack);
  });

  test('should render with custom background-color', () => {
    renderWithTheme(<Stack bgColor="red" />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ backgroundColor: 'red' });
  });

  test('should render with custom border-radius', () => {
    renderWithTheme(<Stack br={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ borderRadius: '2rem' });
  });

  test('should render with custom border-width', () => {
    renderWithTheme(<Stack borderWidth={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ borderWidth: '2rem' });
  });

  test('should render with custom border-color', () => {
    renderWithTheme(<Stack borderColor="red" />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ borderColor: 'red' });
  });

  test('should render with custom border-style', () => {
    renderWithTheme(<Stack borderStyle="dashed" />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ borderStyle: 'dashed' });
  });

  test('should render with custom gap', () => {
    renderWithTheme(<Stack gap={2} />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ gap: '2rem' });
  });

  test('should render with custom color', () => {
    renderWithTheme(<Stack color="red" />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ color: 'red' });
  });

  // test('should render correctly', () => {
  //   const { container } = renderWithTheme(<Stack />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });
});
