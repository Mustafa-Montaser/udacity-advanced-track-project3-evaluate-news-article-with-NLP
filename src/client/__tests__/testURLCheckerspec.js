import { isURL } from '../js/URLChecker'

describe("testing num checker ", () => {

    test('defined', () => {
        expect(isURL).toBeDefined()
    })
    test('invalid num', () => {
        expect(isURL("beb")).toBeFalsy()
    })
    test('valid num', () => {
        expect(isURL("https://stackoverflow.com")).toBeTruthy()
    })
})