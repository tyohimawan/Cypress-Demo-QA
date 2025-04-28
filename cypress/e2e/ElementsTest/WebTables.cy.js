import { describe } from 'mocha';
import WebTables from '../../Page Object/Elements/WebTables';
import testData from '../../fixtures/DataWebTables.json'; // Import the test data

const webTables = new WebTables();

describe('Web Tables', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/webtables');
    });

    testData.forEach((data, index) => {
        it(`Add and Verify User ${index + 1}`, () => {
            // Add new user
            webTables.AddNew();
            webTables.inputData(
                data.firstName,
                data.lastName,
                data.email,
                data.age,
                data.salary,
                data.department
            );
            webTables.submitData();

            // Verify the user is added
            webTables.searchData(data.firstName);
            cy.get('.rt-tbody').should('contain', data.firstName)
                .and('contain', data.lastName)
                .and('contain', data.email)
                .and('contain', data.age)
                .and('contain', data.salary)
                .and('contain', data.department);

            // Additional assertions
            cy.get('.rt-tbody').within(() => {
                cy.get('.rt-tr-group').should('have.length', 1); // Ensure only one row matches the search
                cy.get('.rt-td').eq(0).should('have.text', data.firstName); // Verify first name
                cy.get('.rt-td').eq(1).should('have.text', data.lastName); // Verify last name
                cy.get('.rt-td').eq(2).should('have.text', data.age); // Verify age
                cy.get('.rt-td').eq(3).should('have.text', data.email); // Verify email
                cy.get('.rt-td').eq(4).should('have.text', data.salary); // Verify salary
                cy.get('.rt-td').eq(5).should('have.text', data.department); // Verify department
            });

            // Verify the search input is cleared after the test
            webTables.clearSearch();
            cy.get('.rt-tbody').should('not.contain', data.firstName);
        });
    });
});