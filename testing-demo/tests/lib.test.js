
const lib = require("../lib");

 describe('absolute',()=>{

it('should return a positive number if input is positive', ()=>{
    const result = lib.absolute(1);
    expect(result).toBe(1);
    
    });
    
    it('should return a positive number if input is negative', ()=>{
        const result = lib.absolute(-1);
        expect(result).toBe(1);
        
    });
    
    it('should return 0 number if input is 0', ()=>{
            const result = lib.absolute(0);
            expect(result).toBe(0);
            
    });    
    
 })

 describe('greet',()=>{
    it('should return greeting message',()=>{
        const result =lib.greet('Mosh');
        // expect(result).toMatch('Welcome Mosh');
        expect(result).toContain('Mosh');
    })
 })

