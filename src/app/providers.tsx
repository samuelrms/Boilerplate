'use client';

import { theme } from '@/base_styles/theme';
import { Children } from '@/types/children';
import { ThemeProvider, CacheProvider, Global } from '@emotion/react';
import { useState } from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { resetCss } from '@/base_styles/resetCss';
import { Provider } from 'react-redux';
import { store } from '@/redux';

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
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Global styles={resetCss} />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default Providers;
