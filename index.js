// Write your solution in this file!
const employee = {
    name: "Jeff",
    streetAddress: "4444 four street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {
        ...employee,
        [key]: value,
    }
    return updatedEmployee;
};

updateEmployeeWithKeyAndValue;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

destructivelyUpdateEmployeeWithKeyAndValue;

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee};
    delete newEmployee[key];
    return newEmployee;
};

deleteFromEmployeeByKey;

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};

destructivelyDeleteFromEmployeeByKey;