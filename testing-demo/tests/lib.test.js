
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
//    describe('getCurrencies',()=>{
//     it('should return suported currencies',()=>{
//         const result = lib.getCurrencies();

//         //Too general
//         expect(result).toBeDefined();
//         expect(result).not.toBeNull();

//         // Too specific

//         expect(result[0]).toBe('USD');
//         expect(result[1]).toBe('AUD');
//         expect(result[2]).toBe('EUR');
//         expect(result.length).toBe(3);


//         //proper way
//         expect(result).toContain('USD');
//         expect(result).toContain('AUD');
//         expect(result).toContain('EUR');


        //Ideal way
        /*
        expect.arrayContaining(array) matches a received array which contains all of the elements in the expected array. 
        That is, the expected array is a subset of the received array. Therefore, it matches a received array which contains 
        elements that are not in the expected array.
        

        expect(result).toEqual( expect.arrayContaining(['USD','EUR', 'AUD']));
    })

   })

*/
//testing object

describe('getProduct',()=>{
    it('should return the product with the given id',()=>{
        const result = lib.getProduct(1);
        // expect(result).toBe({id:1, price:10, name: "Soap"});
       // this case get failed because "toBe"  method only compare object but actually objects are compared by their refference in memory
      // Note:  Compared values have no visual difference. Note that you are testing for equality with the stricter `toBe` matcher using `Object.is`. For deep equality only, use `toEqual` instead.    
       
      
        // expect(result).toEqual({id:1, price:10, name: "Soap"}); 
        // but above method is too specific because test will be pass if all the property and their exact vallue is matched. if actual object have some more property like {category:'a'} the above test will be fail


    //  proper way
    expect(result).toMatchObject({id:1, price:10})  ; // match this property is matched or not.
    // or
    expect(result).toHaveProperty('id',1)    // match if result is having property 'id' with (value with data type) exactly '1' 
    })
})



