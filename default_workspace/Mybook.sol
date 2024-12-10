// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
contract Books{
  struct Book{
    string  title;
    uint16  price;
    address  owner;
    bool  sold;
  }

 Book mybook;
    function getbookdetails() public view returns (string memory,uint16){
        return (mybook.title,mybook.price);
    }
     function setbookdetails(string memory _title, uint16 _price) public {
        mybook.title= _title;
        mybook.price= _price;
        mybook.owner=msg.sender;
        mybook.sold=false;
     }
    function ethTowei(uint eval) public pure returns(uint){
        return (eval*1000000000000000000);
    }
    function buybook () public payable {
        if(msg.value >= ethTowei(mybook.price)){
            uint bal=msg.value-ethTowei(mybook.price);
            if(bal>0){
                payable (msg.sender).transfer(bal);
            }
             mybook.owner=msg.sender;
             mybook.sold=true;

        }
    }
}