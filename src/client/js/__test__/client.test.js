const { getCityData, getWeather, getImage } = require('../formHandler');

// Unit tests for getCityData() function
describe('getCityData() function', () => {
  test('should be defined', () => {
    expect(getCityData).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof getCityData).toBe('function');
  });
});

// Unit tests for getWeather() function
describe('getWeather() function', () => {
  test('should be defined', () => {
    expect(getWeather).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof getWeather).toBe('function');
  });
});

// Unit tests for getImage() function
describe('getImage() function', () => {
  test('should be defined', () => {
    expect(getImage).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof getImage).toBe('function');
  });
});
