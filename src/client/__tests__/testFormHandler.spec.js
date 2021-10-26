import { handleSubmit } from '../js/formHandler'

describe('test the form',() => {

    test('test the function should be exist and should return true',() => {
        expect(handleSubmit).toBeDefined();
    }) 

    test('this should return true if form handler is a function',() => {
        expect(typeof handleSubmit).toBe('function');
    })
})