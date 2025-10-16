pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/EthTransfer.sol";

contract DeployScript is Script{
    function run() external{
        vm.startBroadcast();

        EthTransfer ethTransfer = new EthTransfer();

        console.log("ETHTransfer deployed at:" , address(ethTransfer));

        vm.stopBroadcast();
        
    }
}