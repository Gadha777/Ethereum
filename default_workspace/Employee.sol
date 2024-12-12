// SPDX-License-Identifier: MIT
import "./inheritance.sol";
pragma solidity 0.8.26;

contract Employee is Person{
    uint empId;
    function setemployeedetails(string memory _name,uint _age,uint _empId)public {
        setperson(_name, _age);
        empId=_empId;
    }
    // function getpersondetails()public  override ;
}
