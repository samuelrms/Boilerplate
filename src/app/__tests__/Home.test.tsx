import { renderWithTheme } from '@/tests/utils';
import { screen } from '@testing-library/react';
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
    expect(screen.getAllByRole('separator').length).toBe(2);
  });

  test('should render the main tag', () => {
    renderWithTheme(<Home />);
    expect(screen.getByRole('main'));
  });

  test('should render correctly', () => {
    const { container } = renderWithTheme(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
