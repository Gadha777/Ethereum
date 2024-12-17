// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;
 
 contract Cert{
    struct Certificate {
        string name;
        string course;
        string grade ;
        string date;
            bool Exist;

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
    //   modifier exist(uint256 _id){
    //                 require(!Certificates[_id].Exist, "_id is already Exists");
    //     _;
    // }
    function issue (uint256 _id, 
                    string memory _name,
                    string memory _course,
                    string memory _grade,
                    string memory _date)public  onlyadmin {
 require(!Certificates[_id].Exist, "_id is already Exists");
 Certificates[_id]=Certificate(_name,_course,_grade,_date,true);
                    }
 }