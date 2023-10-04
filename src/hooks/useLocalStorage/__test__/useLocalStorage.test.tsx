import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '..';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should return a value and a setter', () => {
    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    );
    const [state] = result.current;

    expect(state).toBe('initialValue');
  });

  test('should return the value of localStorage if it is present', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'));

    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    );
    const [state] = result.current;

    expect(state).toBe(JSON.stringify('testValue'));
  });

  test('should update the value in localStorage when setState is called', () => {
    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    );
    const [, setState] = result.current;

    act(() => {
      if (typeof setState === 'function') {
        setState('newValue');
      }
    });

    const [state] = result.current;

    expect(state).toBe('newValue');
    expect(localStorage.getItem('testKey')).toBe('newValue');
  });

  test('should update the value returned after calling setState', () => {
    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    );
    const [, setState] = result.current;

    act(() => {
      if (typeof setState === 'function') {
        setState('newValue');
      }
    });

    const [state] = result.current;
    expect(state).toBe('newValue');
  });
});
