// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract SMS{

    struct Student{
      string Name;
      uint16 SemNo;
      department dept;
      uint16 CGPA;
      uint16 Rollno;
      bool Exist;
    }
    enum department { CS, EC, ME }
    address  staffadvisor;

    mapping(uint16 => Student) private Studentrecords;

     
    constructor() {
        staffadvisor = msg.sender;
    }

    modifier admin(){
        require(msg.sender == staffadvisor,"You cannot access this ");
        _;
    }
    modifier verify(uint16 Rollno){
        require(Studentrecords[Rollno].Exist,"Rollno does not Exist");
        _;
    }

    function addstudent(string memory _Name,uint16 _SemNo,department _dept,uint16 _CGPA,uint16 _Rollno) public  admin {
            
            require(!Studentrecords[_Rollno].Exist, "Rollno is already Exists");
            Studentrecords[_Rollno] = Student(_Name,_SemNo,_dept,_CGPA,_Rollno,true);
    }

     function getstudent(uint16 _Rollno) public view admin returns (string memory Name, uint16 SemNo, department dept, uint16 CGPA, uint16 Rollno) {
        
        Student memory student = Studentrecords[_Rollno];
        return (student.Name, student.SemNo, student.dept, student.CGPA, student.Rollno);
    }

    function editData(uint8 _SemNo,department _dept,uint8 _CGPA,uint16 _Rollno) public admin verify(_Rollno){

                Student storage student = Studentrecords[_Rollno];
                student.SemNo= _SemNo;
                student.dept = _dept;
                student.CGPA = _CGPA; 
    }

    function editName(string memory _Name,uint16 _Rollno) public verify(_Rollno){

                Student storage student = Studentrecords[_Rollno];
                student.Name= _Name;
               
    }




}