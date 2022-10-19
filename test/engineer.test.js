const Engineer = require('../lib/engineer');

describe('engineer', () => {
    describe('Initialization', () => {


        it('should create a new engineer when', () => {
            const newEngineer  = new Engineer ()
            expect(typeof (newEngineer )).toBe("object")
        })
        it('should be able to take in a string', () => {
            const github = "github"

            const newEngineer  = new Engineer ("name",0,"email", github)
            expect(newEngineer.github).toBe(github)
        })

        it("should add github to get github function", () => {
            const github = "github"

            const newEngineer  = new Engineer("name",0,"email", github)
            expect(newEngineer.getgithub()).toBe(github)


        })





    })
})