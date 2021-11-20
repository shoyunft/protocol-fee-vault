export default async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const { address } = await deploy("ProtocolFeeVault", {
    from: deployer,
    args: ["0x58e7A64B99968A0f388c3dbc60594C4AEd169a8a"], // multisig
  });

  console.log(`ProtocolFeeVault deployed to ${address}`);
};
