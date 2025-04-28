class TextBox
{
    selectors = {
        txtFullName: "//input[@id='userName']",
        txtEmail: "//input[@id='userEmail']",
        txtCurrentAddress: "//textarea[@id='currentAddress']",
        txtPermanentAddress: "//textarea[@id='permanentAddress']",
        btnSubmit: "//button[@id='submit']"
    }

    getElement(selector) {
        return cy.xpath(selector);
    }

    clickButton(selector) {
        cy.xpath(selector).click();
    }

    clearField(selector) {
        cy.xpath(selector).clear();
    }

    InputData(fullName, email, currentAddress, permanentAddress) {
        cy.xpath(this.selectors.txtFullName).type(fullName);
        cy.xpath(this.selectors.txtEmail).type(email);
        cy.xpath(this.selectors.txtCurrentAddress).type(currentAddress);
        cy.xpath(this.selectors.txtPermanentAddress).type(permanentAddress);
    }

    submitData() {
        this.clickButton(this.selectors.btnSubmit);
    }
}

export default TextBox;