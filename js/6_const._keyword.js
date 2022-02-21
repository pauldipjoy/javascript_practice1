// *** const Cannot be Reassigned***

// const a = 1.5;
//  a = 1.25;   [***this will give an error coz **re-assign** again in this line***]
  //  or,
  //  a = a + 1.25;  [***this will give an error coz **re-assign** again in this line***]

//   console.log(a);  *[incorrect]*

// if,

//  const a = 2.25;  [***no error coz only **assigned** this line***]

//  console.log(a); **[correct]** 


/*  ***Constant Arrays*** */

    // const car = [BMW, AUDI, VOLVO, TOYOTA];

    // car = [BMW, JAGUAR, VOLVO]  //*ERROR* coz you can not **reassign** the const array

    // console.log(car); reference error

// ***You can create a constant array***

        //  const cars = ["Saab", "Volvo", "BMW"];

// ***You can change an element***
//  cars[0] = "Toyota";  /*allowed and no error coz you can   **Change the elements**   of constant array*/

//  console.log(cars);

// ***You can add an element***

      /* cars.push("Audi");*/


      /* ***Constant Objects***  */

      

      // const house = {color:"blue", room: 5, floor: 4};

      // house = {color:"blue", room: 5, floor: 4 } //error coz you can not  **reassign**  the object

      // console.log(house); //TypeError


      //  **You can change the properties of a constant object**

      // const house = {color:"blue", room: 5, floor: 4};

    

      // ***You can change a property***
        //  house.color = "red";

         // ***You can add a property***

        // car.owner = "DIPJOY";

      // console.log(house); //allowed



      







