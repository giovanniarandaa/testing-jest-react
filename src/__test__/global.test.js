const text = "Hola Mundo";
const fruits = ['Manzana', 'Melon', 'Banana'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
})

test('Tenemos una banana', () => {
  expect(fruits).toContain('Banana')
})

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9)
})

test('Verdadero', () => {
  expect(true).toBeTruthy();
})

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''))
}

test('Probar un callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH')
  })
})

test('Probar una promesa', () => {
  return reverseString2('Hola')
    .then(string => {
      expect(string).toBe('aloH')
    })
})

test('Probar async / await', async() => {
  const string = await reverseString2('Hola');
  expect(string).toBe('aloH');
})

// afterEach(() => console.log('Después de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'))