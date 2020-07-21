/*
1) Create a new instance of Person and call it student
Insert values according to the constructor 
Copy the test and adjust it so that it won't fail
Play around with it until you get it
*/

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

}
  const student = new Person("John", "Doe", 50, "blue");
  describe("students", ()=>{
          it("has a name", ()=> {
              expect(student.firstName).toContain("John")
              expect(student.lastName).toBe("Doe")
              expect(student.eyeColor).toBe("blue")
          })

      })


//   console.log(student);

/* 2) Create a new class of any object that comes 
to your mind (like car, house, furniture etc)
Add a constructor 


Create a new instance of the class that you created
Write the tests using the following Matchers (
   toContain, toEqual, toBeLessThan, toBeDefined, not.toB

*/

let car = {
    model: 'Volvo',
    year: 1990,
    black: true,
    number: 50,
};
console.log(car);
describe("car information", () => {
    it("has a model", () => {
        expect(car.model).toContain("Volvo")
        expect(car.year).toBe(1990)
        expect(car.black).toEqual(true)
        expect(car.black).toBe(true)
        expect(car.number >= 30).toBeTruthy();
        expect(car.number).toBeLessThan(55);
    })

})