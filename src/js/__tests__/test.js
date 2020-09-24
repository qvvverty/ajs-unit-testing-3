import fetchData from '../http';
import getLevel from '../index';

jest.mock('../http');

test('Response status "ok"', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });
  expect(getLevel()).toBe('Ваш текущий уровень: 5');
});

test('Response status "404"', () => {
  fetchData.mockReturnValue({ status: '404' });
  expect(getLevel()).toBe('Информация об уровне временно недоступна');
});
