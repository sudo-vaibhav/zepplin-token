// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20{
    // constructor()
    //     ERC20("MyToken","MYT")
    //     {
    //         _mint(
    //         msg.sender,
    //         10000 * 10 ** decimals()
    //         );
    //     }
    constructor(string memory _name, string memory _symbol)
    ERC20(_name,_symbol)
    {

    }

}