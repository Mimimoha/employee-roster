const Employee = require('../lib/employee')


describe('employee', () => {
    describe('Initialization', () => {
        // it how to pass the test 
        it(" should create a card of employee information when ", () => {
            const instance = new Employee()
            expect(typeof (instance)).toBe("object")
        })
        it(" should be able to take in a string for name", () => {
            const name = "mariam"

            const instance = new Employee(name)
            expect(instance.name).toBe(name)
        })
        it("get name function should be able to get name", () => {
            const name = "mariam"

            const instance = new Employee(name)
            expect(instance.getname()).toBe(name)
        })
        it(" should be able to take in a number for id", () => {
            const id = 0

            const instance = new Employee('test', id)
            expect(instance.id).toBe(id)
        })
        it("get id function should be able to get id", () => {
            const id = 0

            const instance = new Employee("test", id)
            expect(instance.getid()).toBe(id)
        })
        it('should be able to take in a string for email', () => {
            const email = "email"

            const instance = new Employee('name', 0, 'email')
            expect(instance.email).toBe(email)

        })
        it("get name function should be able to get name", () => {
            const email = "email"

            const instance = new Employee('name', 0, email)
            expect(instance.getemail()).toBe(email)

        })


    })
})