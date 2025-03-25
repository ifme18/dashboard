// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PredictionMarket {
    string public question;
    uint public yesBets;
    uint public noBets;
    address public owner;
    bool public resolved;
    bool public outcome;

    constructor(string memory _question) {
        question = _question;
        owner = msg.sender;
    }

    function bet(bool _prediction) external payable {
        require(!resolved, "Market is already resolved");
        require(msg.value > 0, "Bet amount must be greater than 0");

        if (_prediction) {
            yesBets += msg.value;
        } else {
            noBets += msg.value;
        }
    }

    function resolve(bool _outcome) external {
        require(msg.sender == owner, "Only owner can resolve");
        require(!resolved, "Market already resolved");
        resolved = true;
        outcome = _outcome;
    }

    function getMarketDetails() external view returns (string memory, uint, uint, bool, bool) {
        return (question, yesBets, noBets, resolved, outcome);
    }
}