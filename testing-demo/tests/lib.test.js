
const lib = require("../lib");

//  describe('absolute',()=>{

// it('should return a positive number if input is positive', ()=>{
//     const result = lib.absolute(1);
//     expect(result).toBe(1);
    
//     });
    
//     it('should return a positive number if input is negative', ()=>{
//         const result = lib.absolute(-1);
//         expect(result).toBe(1);
        
//     });
    
//     it('should return 0 number if input is 0', ()=>{
//             const result = lib.absolute(0);
//             expect(result).toBe(0);
            
//     });    
    
//  })

//  describe('greet',()=>{
//     it('should return greeting message',()=>{
//         const result =lib.greet('Mosh');
//         // expect(result).toMatch('Welcome Mosh');
//         expect(result).toContain('Mosh');
//     })
//  })





// testing an array 
   describe('getCurrencies',()=>{
    it('should return suported currencies',()=>{
        const result = lib.getCurrencies();

        //Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // Too specific

        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);


        //proper way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');


        //Ideal way
        /*
        expect.arrayContaining(array) matches a received array which contains all of the elements in the expected array. 
        That is, the expected array is a subset of the received array. Therefore, it matches a received array which contains 
        elements that are not in the expected array.
        */

        expect(result).toEqual( expect.arrayContaining(['USD','EUR', 'AUD']));
    })

   })