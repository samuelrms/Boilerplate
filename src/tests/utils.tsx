import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/base_styles/theme';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
