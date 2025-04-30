import TextBox from "../../Page Object/Elements/TextBox";
import testData from "../../fixtures/DataTextBox.json";
import dataURL from "../../fixtures/DataURL.json";
import { describe } from 'mocha';

const textBox = new TextBox();

const schemeName = "Text Box";

const pageData = dataURL.find(item => item.Scheme === schemeName);

if (!pageData) {
  throw new Error(`Page data for "${schemeName}" not found in DataURL.json`);
}

describe(schemeName, () => {
    beforeEach(() => {
        const fullURL = `${pageData.baseUrl}${pageData.endpoint}`;
        cy.visit(fullURL);
    });

    testData.forEach((data, index) => {
        it(`Fill and Verify ${schemeName} ${index + 1}`, () => {
            // Fill the text box
            textBox.InputData(
                data.fullName,
                data.email,
                data.currentAddress,
                data.permanentAddress
            );
            textBox.submitData();

            // Verify the input data
            cy.get('#output').within(() => {
                cy.contains('Name: ' + data.fullName).should('exist');
                cy.contains('Email: ' + data.email).should('exist');
                cy.contains('Current Address: ' + data.currentAddress).should('exist');
                cy.contains('Permananet Address: ' + data.permanentAddress).should('exist');
            });
        });
    });
});
