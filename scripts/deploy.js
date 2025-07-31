const { ethers, run, network } = require("hardhat");

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStorageFactory.deploy();

    // Corrected: Wait for the deployment transaction to be mined and confirmed
    console.log("Deployment transaction sent. Waiting for 1 confirmation...");
    const deploymentReceipt = await simpleStorage.deploymentTransaction().wait(1);

    // Corrected: Access the deployed contract address
    console.log(`Contract deployed to address: ${simpleStorage.target}`);
    console.log(`Transaction hash: ${deploymentReceipt.hash}`);
    console.log(`Gas used: ${deploymentReceipt.gasUsed.toString()}`);
    console.log('network: ', network.config)
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for 6 confirmations on Sepolia for verification...");
        // Ensure the transaction is mined before attempting verification
        if (simpleStorage.deploymentTransaction()) {
             await simpleStorage.deploymentTransaction().wait(6);
        } else {
            console.log("Deployment transaction not found. Skipping verification.");
        }
        await verify(simpleStorage.target, []);
    }

    const currentValue = await simpleStorage.retrieve();
    console.log(`Current value: ${currentValue}`);
    const transactionResponse = await simpleStorage.store(7);
    await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    console.log(`Updated value: ${updatedValue}`);
}

async function verify(contractAddress, args) {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
        console.log("Contract verified!");
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Contract already verified!");
        } else {
            console.log("Verification failed:", e);
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
    