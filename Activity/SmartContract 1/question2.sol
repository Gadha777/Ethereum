// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
contract leapyear{
    uint16 year;
    
    function setyear(uint16 Year)public {
        year=Year;
    }
    function Leapyear()public view returns (string memory,uint16,string memory){
        uint16 count;
        uint16 tempyear=year;
        // uint16 temp2year=year;
        while(tempyear>0){
            count++;
            tempyear=tempyear/10;
        }
         if (count == 4) {
            if (year % 400 == 0 ) 
            {
                return ("It contains 4 digits", count, " is a leap year");
            } else {
                return ("It contains 4 digits",count, "It is not a leap year");
            }
        
        }
        else {
            return ("It does not contain 4 digits", count,"not a year");
            }
        
    }

}