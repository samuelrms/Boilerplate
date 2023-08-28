import { render, RenderResult } from '@testing-library/react';
import Providers from '@/app/providers';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<Providers>{children}</Providers>);
