import { isURL } from '../js/URLChecker'

describe('testing if the input url is valid or not',()=>{

    test('test the function should be exist and should return true',()=>{
        expect(isURL).toBeDefined();
    })

    test('return true if the input url is valid',()=>{
        expect(isURL('https://www.udacity.com')).toBeTruthy();
    });

    test('return false if the input url is not valid',()=>{
        expect(isURL('somestring')).toBeFalsy();
    })
})