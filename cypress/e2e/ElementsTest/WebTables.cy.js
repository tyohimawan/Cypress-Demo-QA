import { describe } from 'mocha';
import WebTables from '../../Page Object/Elements/WebTables';
import testData from '../../fixtures/DataWebTables.json'; // Import the test data

const webTables = new WebTables();

// Ambil nama skema dari sini supaya dynamic
const schemeName = "Web Tables";

// Cari object yang Scheme-nya sesuai
const pageData = dataURL.find(item => item.Scheme === schemeName);

// Optional: kalau tidak ketemu, error
if (!pageData) {
  throw new Error(`Page data for "${schemeName}" not found in DataURL.json`);
}

describe(schemeName, () => {
    beforeEach(() => {
        const fullURL = `${pageData.baseUrl}${pageData.endpoint}`;
        cy.visit(fullURL);
    });

    testData.forEach((data, index) => {
        it(`Add and Verify User ${schemeName} ${index + 1}`, () => {
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
            cy.get('.rt-tbody').within(() => {
                cy.contains('div', data.firstName).should('exist');
                cy.contains('div', data.lastName).should('exist');
                cy.contains('div', data.email).should('exist');
                cy.contains('div', data.age).should('exist');
                cy.contains('div', data.salary).should('exist');
                cy.contains('div', data.department).should('exist');
            });
        });
    });
});