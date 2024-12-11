// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract Bank{
    mapping (address=>uint) balanceledger;
    modifier balancecheck(uint amount){
     require(balanceledger[msg.sender]>=amount ,"insufficient amount");
     _;
    }
    
    function deposit () public payable {
        balanceledger[msg.sender]=balanceledger[msg.sender]+msg.value;

    }
    function getbalance() public view returns(uint) {
        return balanceledger[msg.sender];
    }
    function withdraw(uint amount) public  balancecheck(amount){
        //require(balanceledger[msg.sender]>=amount ,"insufficient amount"); instead of this use modifier
        balanceledger[msg.sender]=balanceledger[msg.sender]-amount;
        payable (msg.sender).transfer(amount);
    }
    function transfer ( address recipient,uint amount ) public  balancecheck(amount) {
       // require(balanceledger[msg.sender]>=amount ,"insufficient amount");
        balanceledger[msg.sender]=balanceledger[msg.sender]-amount;
        payable (recipient).transfer(amount);
    }
}