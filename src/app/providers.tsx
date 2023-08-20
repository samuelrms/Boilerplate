'use client'

import { theme } from '@/base_styles/theme'
import { Children } from '@/types/children'
import { ThemeProvider } from 'styled-components'

const Providers = ({ children }: Children) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Providers
