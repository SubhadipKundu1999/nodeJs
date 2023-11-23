# modeling relationship:


-> there are two approach

1. //using references (Normalization)

let author ={
    name:"Subha"
}

let course={
    name:"node",
    author:"id1"
}

--> benifits:  data consistancy
   


2. Using Embedded Documents (Denormalization) => good performance

let course ={
    name:"node",
    author:{
        name:"subha"
    }
}

benifits:  . The advantage of using the embedded documents is we can group the required information and can keep it in a single document. So it is easier to get the details in one call itself.

disadvantage: But when the document starts to grow, for example, adding the more authors and author information to the above document, it will become lengthier and takes more time to retrieve the details.


3. Hybrid Approach: as above two approachs have its own advantages and diadvantages , so we need a trade off between performance and data consistancy
let author ={
    name:"Subha"
    //50 other propertis
}

let course ={
    name:"node",
    author:{
        id:'ref to author collection '
        name:"subha"  // most frequet author property need when query for course made.
    }
}