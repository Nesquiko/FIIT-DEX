// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BBToken} from "./BBToken.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract BBExchange is Ownable {
    string public exchange_name = "Bull and Bear Exchange";

    BBToken public token;

    // Liquidity pool for the exchange
    uint256 private token_reserves = 0;
    uint256 private eth_reserves = 0;

    mapping(address => uint256) private lps;

    // Needed for looping through the keys of the lps mapping
    address[] private lp_providers;

    // liquidity rewards
    uint256 private swap_fee_numerator = 3;
    uint256 private swap_fee_denominator = 100;

    // Constant: x * y = k
    uint256 private k;

    constructor(address bbTokenAddr, address initialOwner) Ownable(initialOwner) {
        token = BBToken(bbTokenAddr);
    }

    // Function createPool: Initializes a liquidity pool between your Token and ETH.
    // ETH will be sent to pool in this transaction as msg.value
    // amountTokens specifies the amount of tokens to transfer from the liquidity provider.
    // Sets up the initial exchange rate for the pool by setting amount of token and amount of ETH.
    function createPool(uint256 amountTokens) external payable onlyOwner {
        // This function is already implemented for you; no changes needed.

        // require pool does not yet exist:
        require(token_reserves == 0, "Token reserves was not 0");
        require(eth_reserves == 0, "ETH reserves was not 0.");

        // require nonzero values were sent
        require(msg.value > 0, "Need eth to create pool.");
        uint256 tokenSupply = token.balanceOf(msg.sender);
        require(amountTokens <= tokenSupply, "Not have enough tokens to create the pool");
        require(amountTokens > 0, "Need tokens to create pool.");

        token.transferFrom(msg.sender, address(this), amountTokens);
        token_reserves = token.balanceOf(address(this));
        eth_reserves = msg.value;
        k = token_reserves * eth_reserves;
    }

    // Function removeLP: removes a liquidity provider from the list.
    // This function also removes the gap left over from simply running "delete".
    function removeLP(uint256 index) private {
        require(index < lp_providers.length, "specified index is larger than the number of lps");
        lp_providers[index] = lp_providers[lp_providers.length - 1];
        lp_providers.pop();
    }

    // Function getSwapFee: Returns the current swap fee ratio to the client.
    function getSwapFee() public view returns (uint256, uint256) {
        return (swap_fee_numerator, swap_fee_denominator);
    }

    // ============================================================
    //                    FUNCTIONS TO IMPLEMENT
    // ============================================================

    /* ========================= Liquidity Provider Functions =========================  */

    // Function addLiquidity: Adds liquidity given a supply of ETH (sent to the contract as msg.value).
    // You can change the inputs, or the scope of your function, as needed.
    function addLiquidity(uint256 max_exchange_rate, uint256 min_exchange_rate) external payable {
        /**
         * TODO: Implement this function ******
         */
    }

    // Function removeLiquidity: Removes liquidity given the desired amount of ETH to remove.
    // You can change the inputs, or the scope of your function, as needed.
    function removeLiquidity(uint256 amountETH, uint256 max_exchange_rate, uint256 min_exchange_rate) public payable {
        /**
         * TODO: Implement this function ******
         */
    }

    // Function removeAllLiquidity: Removes all liquidity that msg.sender is entitled to withdraw
    // You can change the inputs, or the scope of your function, as needed.
    function removeAllLiquidity(uint256 max_exchange_rate, uint256 min_exchange_rate) external payable {
        /**
         * TODO: Implement this function ******
         */
    }
    /**
     *  Define additional functions for liquidity fees here as needed **
     */

    /* ========================= Swap Functions =========================  */

    // Function swapTokensForETH: Swaps your token with ETH
    // You can change the inputs, or the scope of your function, as needed.
    function swapTokensForETH(uint256 amountTokens, uint256 max_exchange_rate) external payable {
        /**
         * TODO: Implement this function ******
         */
    }

    // Function swapETHForTokens: Swaps ETH for your tokens
    // ETH is sent to contract as msg.value
    // You can change the inputs, or the scope of your function, as needed.
    function swapETHForTokens(uint256 max_exchange_rate) external payable {
        /**
         * TODO: Implement this function ******
         */
    }
}
