const Manager = require('../lib/manager');

describe('manager', () => {
    describe('Initialization', () => {


        it('should create a new manager when', () => {
            const newManager = new Manager()
            expect(typeof (newManager)).toBe("object")
        })
        it('should be able to take in a number for office ', () => {
            const officeNumber = 0

            const newManager = new Manager("name",0,"email", officeNumber)
            expect(newManager.officeNumber).toBe(officeNumber)
        })

        it("should add office number to officeNumber function", () => {
            const officeNumber = 0

            const newManager = new Manager("name",0,"email", officeNumber)
            expect(newManager.getofficeNumber()).toBe(officeNumber)


        })





    })
})