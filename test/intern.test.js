const Intern = require('../lib/intern')

describe('intern', () => {
    describe('Initialization', () => {


        it('should create a new intern when', () => {
            const newIntern = new Intern()
            expect(typeof (newIntern)).toBe("object")

        })
        it('should be able to take in a string for school', () => {
            const school = "school"

            const newIntern = new Intern('name', 0, 'email', school)
            expect(newIntern.school).toBe(school)
        })

        it("should add school input to getschool function", () => {
            const school = "school"

            const newIntern = new Intern('name', 0, 'email', school)
            expect(newIntern.getschool()).toBe(school)
        })




    })
})