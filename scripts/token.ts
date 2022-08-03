/**
 * Reward Token != Staking Token ? USE THIS : RewardInStakingToken.deploy.ts
 */

import { ethers, run, network } from "hardhat";
import { BigNumber } from "ethers";
import { SoulsOfMeta__factory} from "../typechain";

async function deploy() {
    /**
     * Deploy staking token
     * - If staking token already existsq`
     *  - const stakingToken = await ethers.getContractAt("StakingToken", <address>)
     */
    const SoulsOfMetaFactory = (await ethers.getContractFactory("SoulsOfMeta")) as SoulsOfMeta__factory;
    const SoulsOfMeta = await SoulsOfMetaFactory.deploy();
    await SoulsOfMeta.deployed();
    
    /**
     * Programmatic verification
     */
    try {
        // verify staking token
        await run("verify:verify", {
            address: SoulsOfMeta.address,
            contract: "contracts/SoulsOfMeta.sol:SoulsOfMeta",
            constructorArguments: [],
        });
    } catch (e: any) {
        console.error(`error in verifying: ${e.message}`);
    }

    console.log({
        Token: SoulsOfMeta.address
    });
}

deploy().catch((e: any) => console.log(e.message));
