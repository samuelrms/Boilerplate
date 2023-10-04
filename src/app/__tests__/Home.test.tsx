import { renderWithTheme } from '@/tests/utils';
import { fireEvent, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  test('should render the heading', () => {
    renderWithTheme(<Home />);
    expect(
      screen.getByRole('heading', {
        name: /Create Next.js apps using TailwindCSS and TypeScript/i,
      })
    );
  });

  test('should render the Typography component', () => {
    renderWithTheme(<Home />);
    expect(screen.getByText(/Typography component/i));
  });

  test('should render the Button component', () => {
    renderWithTheme(<Home />);
    expect(screen.getByText(/Button Component Primary/i));
  });

  test('should render the Button component with secondary color', () => {
    renderWithTheme(<Home />);
    expect(screen.getByText(/Button Component Secondary/i));
  });

  test('should render the Stack component', () => {
    renderWithTheme(<Home />);
    expect(screen.getByText(/Stack component/i));
  });

  test('should render the Divider component', () => {
    renderWithTheme(<Home />);
    expect(screen.getAllByRole('separator').length).toBe(3);
  });

  test('should render the Button component', () => {
    renderWithTheme(<Home />);
    expect(screen.getAllByRole('button').length).toBe(5);
  });

  test('should render the main tag', () => {
    renderWithTheme(<Home />);
    expect(screen.getByRole('main'));
  });

  test('should render the NavBar component', () => {
    renderWithTheme(<Home />);
    expect(screen.getByRole('navigation'));
  });

  test('should render the Stack component', () => {
    renderWithTheme(<Home />);
    expect(screen.getByText(/Contador/i));
  });

  test('should render the Stack component with children', () => {
    renderWithTheme(<Home />);
    expect(screen.getByText(/Soma/i));
  });

  test('should render the Stack component with children', () => {
    renderWithTheme(<Home />);
    expect(screen.getByText(/Zerar/i));
  });

  test('should render the Stack component with children', () => {
    renderWithTheme(<Home />);
    expect(screen.getByText(/Subtrair/i));
  });

  it('should render correctly and interact with the buttons', () => {
    const { getByText } = renderWithTheme(<Home />);

    expect(getByText('Contador: 0')).toBeInTheDocument();

    fireEvent.click(getByText('Soma'));
    expect(getByText('Contador: 1')).toBeInTheDocument();

    fireEvent.click(getByText('Zerar'));
    expect(getByText('Contador: 0')).toBeInTheDocument();

    fireEvent.click(getByText('Subtrair'));
    expect(getByText('Contador: -1')).toBeInTheDocument();
  });
});
