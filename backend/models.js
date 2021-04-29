module.exports = {
    models: {
      User: [
        // Multiple fields W/ Same value
        [
          ["name", "email", "password"],
          ["type:String", "required:true"],
        ],
        
        // Singles Feilds & Fields with different values 
        // Add another array bracket with same format as above.
        [
          ["timestamp"],
          ["type:Date", "default:Date.now()"],
        ],
      
      ],
  
      // Refs
      // Use it as a MongooseID
      Profile: [
        [
          ["user"],
          ["type:MongooseID", "ref:users"]
        ],
      ],
    },
};
  