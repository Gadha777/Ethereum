// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract BooksRecord {
    struct Book {
        string title;
        uint16 price; // Salary in Ether (for simplicity)
        address payable sellerAddress; 
        address payable buyerAddress; // Employee wallet address for payments
    }

    Book  mybook;

    // Convert Ether value to Wei
    function ethToWei(uint eval) public pure returns (uint) {
        return eval * 1000000000000000000;
    }

    // Function to set employee details
    function setBookdetails(string memory Title,uint16 Price,address payable Selleraddress) public {
      mybook.title=Title;
      mybook.price=Price;
      mybook.sellerAddress=Selleraddress;
    //   mybook.buyerAddress=Buyeraddress;

    }

    function getBookdetails()public view returns (string memory,uint16)
    {
        return (
          mybook.title,mybook.price
        );
    }

     function payBook() public payable {
        require(mybook.sellerAddress != address(0), "Seller wallet address not set");
        require(msg.value > 0, "Payment must be greater than zero");

        uint priceInWei = ethToWei(mybook.price);
        if(msg.value<priceInWei)
        {
            //
            payable(msg.sender).transfer(msg.value);
            revert("Insufficient payment: Amount refunded to buyer");
        }
        if (msg.value == priceInWei) {
            // Exact payment
            mybook.sellerAddress.transfer(priceInWei);
            mybook.buyerAddress = payable(msg.sender);
        } 
        if (msg.value > priceInWei) {
            // Overpayment: transfer price to the seller and refund the excess to the buyer
            uint balance = msg.value - priceInWei;
            mybook.sellerAddress.transfer(priceInWei);
            payable(msg.sender).transfer(balance);
            mybook.buyerAddress = payable(msg.sender);
        } 
    }

   
}
