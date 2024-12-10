// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract EmployeeRecord {
    struct Employee {
        string name;
        string department;
        string designation;
        uint salary; // Salary in Ether (for simplicity)
        address payable walletAddress; // Employee wallet address for payments
    }

    Employee  employee;

    // Convert Ether value to Wei
    function ethToWei(uint eval) public pure returns (uint) {
        return eval * 1 ether;
    }

    // Function to set employee details
    function setEmployeeDetails(
        string memory _name,
        string memory _department,
        string memory _designation,
        uint _salary,
        address payable _walletAddress
    ) public {
        employee = Employee({
            name: _name,
            department: _department,
            designation: _designation,
            salary: _salary,
            walletAddress: _walletAddress
        });
    }

    // Function to get employee details
    function getEmployeeDetails()
        public
        view
        returns (string memory, string memory, string memory, uint, address)
    {
        return (
            employee.name,
            employee.department,
            employee.designation,
            employee.salary,
            employee.walletAddress
        );
    }

    // Function to pay the employee's salary
    function payEmployee() public payable {
        require(employee.walletAddress != address(0), "Employee wallet address not set");
        require(msg.value >= ethToWei(employee.salary), "Insufficient payment sent");

        uint balance = msg.value - ethToWei(employee.salary);
        employee.walletAddress.transfer(ethToWei(employee.salary)); // Transfer salary to the employee

        // Return excess funds to sender if any
        if (balance > 0) {
            payable(msg.sender).transfer(balance);
        }
    }

    // Update the employee's salary
    function updateSalary(uint _newSalary) public {
        employee.salary = _newSalary;
    }
}
