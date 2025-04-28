class WebTables
{
    selectors = {
        btnAdd: "//button[@id='addNewRecordButton']",
        txtFirstName: "//input[@id='firstName']",
        txtLasName: "//input[@id='lastName']",
        txtAge: "//input[@id='age']",
        txtEmail: "//input[@id='userEmail']",
        txtSalary: "//input[@id='salary']",
        txtDepartment: "//input[@id='department']",
        btnSubmit: "//button[@id='submit']",
        txtSearch: "//input[@id='searchBox']",
        btnEdit: "//span[@id='edit-record-1']",
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

    inputData(firstName, lastName, email, age, salary, department) {
        this.getElement(this.selectors.txtFirstName).type(firstName);
        this.getElement(this.selectors.txtLasName).type(lastName);
        this.getElement(this.selectors.txtEmail).type(email);
        this.getElement(this.selectors.txtAge).type(age);
        this.getElement(this.selectors.txtSalary).type(salary);
        this.getElement(this.selectors.txtDepartment).type(department);
    }

    submitData() {
        this.clickButton(this.selectors.btnSubmit);
    }

    AddNew()
    {
        this.clickButton(this.selectors.btnAdd);
    }

    searchData(searchText) {
        this.getElement(this.selectors.txtSearch).type(searchText);
    }
}

export default WebTables;