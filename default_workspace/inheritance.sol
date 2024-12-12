// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
contract Person {
    string name;
    uint age;
    function getpersondetails()public virtual view returns(string memory,uint){
        return (name,age);
    }
    function setperson (string memory _name,uint  _age) public {
        name=_name;
        age=_age;
    }
    function onlyParent() private {
        
    }
}