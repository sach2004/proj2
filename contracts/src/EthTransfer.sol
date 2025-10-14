pragma solidity ^0.8.20;

contract EthTransfer {
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 timestap
    );

    function sendEth(address payable _to) external payable {
        require(msg.value > 0, "MUST SEND ETH");
        require(_to != address(0), "INVALID recipient");

        (bool success, ) = _to.call{value: msg.value}("");

        require(success, "Transfer Failed");

        emit Transfer(msg.sender, _to, msg.value, block.timestamp);
    }

    receive() external payable {}

    fallback() external payable {}
}
