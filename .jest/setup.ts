import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';

global.React = React;
expect.extend(matchers);
