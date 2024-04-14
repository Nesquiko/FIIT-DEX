/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DeployConfig,
  DeployConfigInterface,
} from "../../DeployConfig.s.sol/DeployConfig";

const _abi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "ANVIL_CHAIN_ID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ANVIL_KEY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "IS_SCRIPT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "SEPOLIA_CHAIN_ID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "activeConfig",
    inputs: [],
    outputs: [
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deployerPK",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAnvilConfig",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct DeployConfig.NetworkConfig",
        components: [
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deployerPK",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "getSepoliaConfig",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct DeployConfig.NetworkConfig",
        components: [
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deployerPK",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
] as const;

const _bytecode =
  "0x6080604052600c805462ff00ff19166201000117905534801561002157600080fd5b5062aa36a7460361004557610034610090565b8051600d5560200151600e55610166565b60408051808201825260008082526020918201528151808301909252617a6982527fac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff8090820152610034565b604080518082019091526000808252602082015260408051808201825262aa36a78152905163c1978d1f60e01b8152602060048201819052600b60248301526a505249564154455f4b455960a81b6044830152820190737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f90606401602060405180830381865afa158015610122573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610146919061014d565b9052919050565b60006020828403121561015f57600080fd5b5051919050565b61028f806101756000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063989e6fd91161005b578063989e6fd9146100e85780639db1e60514610133578063d1170edf1461013d578063f8ccbf471461016057600080fd5b8063158a3f7c146100825780634b534bdf146100bc57806393c6b990146100c5575b600080fd5b6100a97fac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff8081565b6040519081526020015b60405180910390f35b6100a9617a6981565b6100cd610183565b604080518251815260209283015192810192909252016100b3565b60408051808201825260008082526020918201528151808301909252617a6982527fac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80908201526100cd565b6100a962aa36a781565b600d54600e5461014b919082565b604080519283526020830191909152016100b3565b600c546101739062010000900460ff1681565b60405190151581526020016100b3565b604080518082019091526000808252602082015260408051808201825262aa36a78152905163c1978d1f60e01b8152602060048201819052600b60248301526a505249564154455f4b455960a81b6044830152820190737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f90606401602060405180830381865afa158015610215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102399190610240565b9052919050565b60006020828403121561025257600080fd5b505191905056fea264697066735822122043a705acc9cf086725b749f9ea667ca642461f92e532a822c48a70c846d1b19b64736f6c63430008190033";

type DeployConfigConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployConfigConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeployConfig__factory extends ContractFactory {
  constructor(...args: DeployConfigConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DeployConfig & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DeployConfig__factory {
    return super.connect(runner) as DeployConfig__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployConfigInterface {
    return new Interface(_abi) as DeployConfigInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DeployConfig {
    return new Contract(address, _abi, runner) as unknown as DeployConfig;
  }
}