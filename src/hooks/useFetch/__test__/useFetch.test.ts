import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '..';
import fetchMock from 'jest-fetch-mock';

type Test = {
  id: string;
  url: string;
  width: number;
  height: number;
};

describe('useFetch', () => {
  test('should return successfully loaded data', async () => {
    const test: Test = {
      id: 'test-id',
      url: 'test-url',
      width: 100,
      height: 100,
    };
    fetchMock.mockResponseOnce(JSON.stringify(test));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<Test>('test-url')
    );

    const { data, error, loading } = result.current;

    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toBeNull();

    await waitForNextUpdate();

    expect(data).toEqual(null);
    expect(loading).toBeTruthy();
    expect(error).toBeNull();
  });

  test('should return error', async () => {
    fetchMock.mockRejectOnce(new Error('error'));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<Test>('test-url')
    );

    const { data, error, loading } = result.current;

    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toBeNull();

    await waitForNextUpdate();

    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toEqual(null);
  });

  test('should return data', async () => {
    const test: Test = {
      id: 'test-id',
      url: 'test-url',
      width: 100,
      height: 100,
    };
    fetchMock.mockResponseOnce(JSON.stringify(test));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<Test>('test-url')
    );

    const { data, error, loading } = result.current;

    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toBeNull();

    await waitForNextUpdate();

    expect(data).toEqual(null);
    expect(loading).toBeTruthy();
    expect(error).toBeNull();
  });

  test('should return data with options', async () => {
    const test: Test = {
      id: 'test-id',
      url: 'test-url',
      width: 100,
      height: 100,
    };
    fetchMock.mockResponseOnce(JSON.stringify(test));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<Test>('test-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test: 'test' }),
      })
    );

    const { data, error, loading } = result.current;

    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toBeNull();

    await waitForNextUpdate();

    expect(data).toEqual(null);
    expect(loading).toBeTruthy();
    expect(error).toBeNull();
  });
});
