describe("API with user", () => {
    it("Should post a new user", () => {

        cy.createUser({
            id: 123,
            username: "User1",
            firstName: "Sergei",
            lastName: "Lazarev",
            email: "Lazarev1@gmail.com",
            password: "123",
            phone: "896743856",
            userStatus: 2,
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        });
    });

    it("Should put updated user", () => {

        cy.createUser({
            id: 123,
            username: "User2",
            firstName: "Saveli",
            lastName: "Laptin",
            email: "Laptin2@gmail.com",
            password: "123",
            phone: "789654123",
            userStatus: 2,
        });

        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/user/User2",
            body: {
                id: 123,
                username: "User2",
                firstName: "Savelei",
                lastName: "Laptin",
                email: "Laptin2@gmail.com",
                password: "test",
                phone: "789654123",
                userStatus: 1,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        });
    });

    it("Should deleted user", () => {

        cy.createUser({
            id: 123,
            username: "User3",
            firstName: "U",
            lastName: "K",
            email: "User3@gmail.com",
            password: "user",
            phone: "741852369",
            userStatus: 2,
        });

        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/User3",
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        });
    });
});