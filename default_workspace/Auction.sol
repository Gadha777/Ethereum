// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Auction {
    struct carauction {
        string ownername; 
        string car;       
        string model;   
        uint256 price;   
        address payable owneraddress;
    }

    address  admin = msg.sender; 
    mapping(uint256 => carauction) public carauctions; 
    
    //new car for auction
    function issue(
        uint256 _id,
        string memory _ownername,
        string memory _car,
        string memory _model,
        uint256 _price
    ) public {
        carauctions[_id] = carauction({
            ownername: _ownername,
            car: _car,
            model: _model,
            price: _price,
            owneraddress: payable(msg.sender) // The issuer becomes the initial owner
        });
    }

    // update if the condition true
    function changeowner(
        uint256 _id,
        string memory _newownername
    ) public payable {
        carauction storage auction = carauctions[_id];

        require(msg.value > auction.price, "your price is lower than the current price.");

        // refund the previous owner fund
        if (auction.price > 0) {
            auction.owneraddress.transfer(auction.price);
        }

        // update the auction with the new owner details
        auction.ownername = _newownername;
        auction.price = msg.value;
        auction.owneraddress = payable(msg.sender);
    }
}