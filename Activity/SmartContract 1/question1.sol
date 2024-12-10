// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
 contract MathFunctions {
    uint16 number1;
    uint16 number2;
    uint16 number3;
    int Number;
    uint16 NUMBER;
    
    function setNumbers(uint16 Number1, uint16 Number2, uint16 Number3) public {
        number1 = Number1;
        number2 = Number2;
        number3 = Number3;
    }
    function largest() public view returns (uint16) {
        uint16 largestno = number1;

        if (number2 > largestno) {
            largestno = number2;
        }
        if (number3 > largestno) {
            largestno = number3;
        }
        return largestno;
    }
    function setNumber(int _Number) public {
        Number=_Number;
    }
    function checksign() public view returns (string memory)
    {
        if(Number==0){
            return "Zero" ;
        }
        else if(Number>0) {
            return "Positive";
        }
        else {
            return "Negative";
        }
        

    }
    function setNumberToWsrds(uint16 num)public {
        NUMBER=num;
    }
    function  words() public view returns(string memory) {
    if(NUMBER==0){
        return "Zero";
    }
    if(NUMBER==1){
        return "One";
    }
    if(NUMBER==2){
        return "Two";
    }if(NUMBER==3){
        return "Three";
    }if(NUMBER==4){
        return "Four";
    }if(NUMBER==5){
        return "Five";
    }if(NUMBER==6){
        return "Six";
    }
    if(NUMBER==7){
        return "Seven";
    }if(NUMBER==8){
        return "Eight";
    }if(NUMBER==9){
        return "Nine";
    }
    return "invalid number";
    }
    }