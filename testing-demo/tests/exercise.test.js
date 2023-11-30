
const excerise = require('../exercise1')


describe('fizzBuzz',()=>{

    it('it should throw if input is not a number ',()=>{
        expect(()=>{excerise.fizzBuzz("string")}).toThrow();
    })

    it('it should return FizzBuzz if input is devisible by both 3 and 5',()=>{
        const result = excerise.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    
    })

    it('it should return FizzBuzz if input is only devisible by 3',()=>{
        const result = excerise.fizzBuzz(3);
        expect(result).toBe('Fizz');
    
    })

    it('it should return FizzBuzz if input is only devisible by 3',()=>{
        const result = excerise.fizzBuzz(5);
        expect(result).toBe('Buzz');
    })
    
})