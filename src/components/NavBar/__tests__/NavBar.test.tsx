import { renderWithTheme } from '@/tests/utils';
import { act, fireEvent, screen } from '@testing-library/react';

import { NavBar } from '..';

describe('NavBar', () => {
  test('renders', () => {
    renderWithTheme(<NavBar />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar);
  });

  test('should render with custom width', () => {
    renderWithTheme(<NavBar width={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ width: '2rem' });
  });

  test('should render with custom background-color', () => {
    renderWithTheme(<NavBar bgColor="red" />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ backgroundColor: 'red' });
  });

  test('should render with custom position', () => {
    renderWithTheme(<NavBar position="fixed" />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ position: 'fixed' });
  });

  test('should render with custom padding', () => {
    renderWithTheme(<NavBar p={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ padding: '2rem' });
  });

  test('should render with custom padding-left', () => {
    renderWithTheme(<NavBar pl={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ paddingLeft: '2rem' });
  });

  test('should render with custom padding-right', () => {
    renderWithTheme(<NavBar pr={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ paddingRight: '2rem' });
  });

  test('should render with custom padding-top', () => {
    renderWithTheme(<NavBar pt={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ paddingTop: '2rem' });
  });

  test('should render with custom padding-bottom', () => {
    renderWithTheme(<NavBar pb={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ paddingBottom: '2rem' });
  });

  test('should render with custom margin', () => {
    renderWithTheme(<NavBar m={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ margin: '2rem' });
  });

  test('should render with custom margin-left', () => {
    renderWithTheme(<NavBar ml={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ marginLeft: '2rem' });
  });

  test('should render with custom margin-right', () => {
    renderWithTheme(<NavBar mr={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ marginRight: '2rem' });
  });

  test('should render with custom margin-top', () => {
    renderWithTheme(<NavBar mt={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ marginTop: '2rem' });
  });

  test('should render with custom margin-bottom', () => {
    renderWithTheme(<NavBar mb={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ marginBottom: '2rem' });
  });

  test('should render with custom gap', () => {
    renderWithTheme(<NavBar gap={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ gap: '2rem' });
  });

  test('should render with custom transitionTime', () => {
    renderWithTheme(<NavBar transitionTime={2} />);
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toHaveStyle({ transition: '2s' });
  });

  test('should show the navigation bar when scrolling up', () => {
    const { getByTestId } = renderWithTheme(<NavBar shouldHideOnScroll />);
    const navBarElement = getByTestId('nav-bar');
    expect(navBarElement).toBeVisible();

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 0 } });
    });

    expect(navBarElement).toBeVisible();
  });

  test('should hide the navigation bar when scrolling down', () => {
    const { getByTestId } = renderWithTheme(<NavBar shouldHideOnScroll />);
    const navBarElement = getByTestId('nav-bar');
    expect(navBarElement).toBeVisible();

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 200 } });
    });

    expect(navBarElement).toHaveStyle({ transform: 'translateY(-100%)' });
  });

  test('should hide the navigation bar when scrolling down', () => {
    const { getByTestId } = renderWithTheme(<NavBar shouldHideOnScroll />);
    const navBarElement = getByTestId('nav-bar');
    expect(navBarElement).toBeVisible();

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: -200 } });
    });

    expect(navBarElement).toHaveStyle({ transform: 'translateY(0)' });
  });

  test('should render correctly', () => {
    const { container } = renderWithTheme(<NavBar />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
