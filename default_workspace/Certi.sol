// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
 
 contract Cert{
    struct Certificate {
        string name;
        string course;
        string grade ;
        string date;
    }
    address admin;
   
    mapping  (uint256 _id => Certificate) public Certificates;
     constructor(){
        admin=msg.sender;
    }

    modifier onlyadmin(){
        require(msg.sender==admin ,"unauthorized access");
        _;
    }
    function issue (uint256 _id, 
                    string memory _name,
                    string memory _course,
                    string memory _grade,
                    string memory _date)public  onlyadmin{
 Certificates[_id]=Certificate(_name,_course,_grade,_date);
                    }
 }