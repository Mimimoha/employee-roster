const Employee = require('../lib/employee')


describe('employee', () => {
    describe('Initialization', () => {
        // it how to pass the test 
        it(" should create a card of employee information when ", () => {
            const newEmployee = new Employee()
            expect(typeof (newEmployee)).toBe("object")
        })
        it(" should be able to take in a string for name", () => {
            const name = "mariam"

            const newEmployee = new Employee(name)
            expect(newEmployee.name).toBe(name)
        })
        it("get name function should be able to get name", () => {
            const name = "mariam"

            const newEmployee = new Employee(name)
            expect(newEmployee.getname()).toBe(name)
        })
        it(" should be able to take in a number for id", () => {
            const id = 0

            const newEmployee = new Employee('test', id)
            expect(newEmployee.id).toBe(id)
        })
        it("get id function should be able to get id", () => {
            const id = 0

            const newEmployee = new Employee("test", id)
            expect(newEmployee.getid()).toBe(id)
        })
        it('should be able to take in a string for email', () => {
            const email = "email"

            const newEmployee = new Employee('name', 0, 'email')
            expect(newEmployee.email).toBe(email)

        })
        it("get name function should be able to get name", () => {
            const email = "email"

            const newEmployee = new Employee('name', 0, email)
            expect(newEmployee.getemail()).toBe(email)

        })


    })
})