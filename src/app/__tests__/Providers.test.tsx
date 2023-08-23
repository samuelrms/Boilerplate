import { render } from '@testing-library/react';

import Providers from '../providers';

describe('Providers', () => {
  test('renders Providers component', () => {
    const { getByTestId } = render(
      <Providers>
        <div data-testid="test-child">Test Child</div>
      </Providers>
    );

    expect(getByTestId('test-child')).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const { container } = render(
      <Providers>
        <div data-testid="test-child">Test Child</div>
      </Providers>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
