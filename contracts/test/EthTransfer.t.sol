pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import "../src/EthTransfer.sol";

contract EthTransferTest is Test {
    EthTransfer public ethTransfer;

    address alice = address(0x1);
    address bob = address(0x2);

    function setUp() public {
        ethTransfer = new EthTransfer();
        vm.deal(alice, 100 ether);
    }

    function test_SendEth() public {
        uint256 sendAmount = 5 ether;

        vm.prank(alice);

        ethTransfer.sendEth{value: sendAmount}(payable(bob));

        assertEq(bob.balance, sendAmount);
    }
}
