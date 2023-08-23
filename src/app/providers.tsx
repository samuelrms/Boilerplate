'use client';

import { theme } from '@/base_styles/theme';
import { Children } from '@/types/children';
import { ThemeProvider, CacheProvider, Global } from '@emotion/react';
import { useState } from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { resetCss } from '@/base_styles/resetCss';

const Providers = ({ children }: Children) => {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'css' });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Global styles={resetCss} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Providers;
