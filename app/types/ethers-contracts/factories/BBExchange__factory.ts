/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { BBExchange, BBExchangeInterface } from "../BBExchange";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "bbTokenAddr",
        type: "address",
        internalType: "address",
      },
      {
        name: "initialOwner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "EXCHANGE_NAME",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MIN_LIQUIDITY",
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
    name: "addLiquidity",
    inputs: [
      {
        name: "minWeiAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokenAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minTokenAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "createPool",
    inputs: [
      {
        name: "amountTokens",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getSwapFee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
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
    name: "getTokenAmount",
    inputs: [
      {
        name: "weiAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokenAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "withFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getWeiAmount",
    inputs: [
      {
        name: "tokenAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "weiAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "withFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "k",
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
    name: "lpAt",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lpLiquidity",
    inputs: [
      {
        name: "lp",
        type: "address",
        internalType: "address",
      },
    ],
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
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeAllLiquidity",
    inputs: [
      {
        name: "maxExchangeRate",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minExchangeRate",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "removeLiquidity",
    inputs: [
      {
        name: "ethAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "swapETHForTokens",
    inputs: [
      {
        name: "minTokenAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "swapTokensForETH",
    inputs: [
      {
        name: "tokenAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minWeiAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "token",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract BBToken",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenReserves",
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
    name: "totalLiquidity",
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
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "weiReserves",
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
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
] as const;

const _bytecode =
  "0x60a0604052600060025560006003556003600755606460085534801561002457600080fd5b50604051611eaa380380611eaa833981016040819052610043916100fa565b806001600160a01b03811661007257604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61007b8161008e565b50506001600160a01b031660805261012d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100f557600080fd5b919050565b6000806040838503121561010d57600080fd5b610116836100de565b9150610124602084016100de565b90509250929050565b608051611d15610195600039600081816103ba015281816104ef015281816106cf015281816107a10152818161092801528181610cb101528181610dfa01528181610e85015281816113510152818161147401528181611546015261167a0152611d156000f3fe60806040526004361061012a5760003560e01c80638da5cb5b116100ab578063c2507ac11161006f578063c2507ac11461031a578063c49ce20d1461033a578063d4cadf6814610350578063dbf53e3a14610368578063f2fde38b14610388578063fc0c546a146103a857600080fd5b80638da5cb5b146102505780639c8f9f23146102825780639f81a3b314610295578063a22280a6146102e4578063b4f40c611461030457600080fd5b80634bad9510116100f25780634bad9510146101cb57806358ad6de4146101e1578063715018a6146101f35780638259e6a01461020857806382d5d7ac1461021b57600080fd5b806315770f921461012f57806321b77d63146101585780632eab28411461016d578063335380c514610182578063422f1043146101b8575b600080fd5b34801561013b57600080fd5b5061014560065481565b6040519081526020015b60405180910390f35b34801561016457600080fd5b50610145600181565b61018061017b366004611aba565b6103dc565b005b34801561018e57600080fd5b5061014561019d366004611ad3565b6001600160a01b031660009081526004602052604090205490565b6101806101c6366004611b03565b61056b565b3480156101d757600080fd5b5061014560025481565b6101806101ef366004611b2f565b5050565b3480156101ff57600080fd5b50610180610b8d565b610180610216366004611aba565b610ba1565b34801561022757600080fd5b5061023b610236366004611aba565b610f95565b6040805192835260208301919091520161014f565b34801561025c57600080fd5b506000546001600160a01b03165b6040516001600160a01b03909116815260200161014f565b610180610290366004611aba565b611077565b3480156102a157600080fd5b506102d76040518060400160405280601681526020017542756c6c20616e6420426561722045786368616e676560501b81525081565b60405161014f9190611b51565b3480156102f057600080fd5b506101806102ff366004611b2f565b611417565b34801561031057600080fd5b5061014560015481565b34801561032657600080fd5b5061023b610335366004611aba565b6117aa565b34801561034657600080fd5b5061014560035481565b34801561035c57600080fd5b5060075460085461023b565b34801561037457600080fd5b5061026a610383366004611aba565b611880565b34801561039457600080fd5b506101806103a3366004611ad3565b6118b0565b3480156103b457600080fd5b5061026a7f000000000000000000000000000000000000000000000000000000000000000081565b34806104225760405162461bcd60e51b815260206004820152601060248201526f04e6565642045544820746f20737761760841b60448201526064015b60405180910390fd5b60008061042e836117aa565b915091506001826002546104429190611bb6565b1161045f5760405162461bcd60e51b815260040161041990611bcf565b838110156104a35760405162461bcd60e51b8152602060048201526011602482015270546f6f206d75636820736c69707061676560781b6044820152606401610419565b82600360008282546104b59190611bfd565b9250508190555080600260008282546104ce9190611bb6565b909155505060405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610540573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105649190611c10565b5050505050565b34806105ab5760405162461bcd60e51b815260206004820152600f60248201526e139bc8115512081c1c9bdd9a591959608a1b6044820152606401610419565b8381101561060d5760405162461bcd60e51b815260206004820152602960248201527f6d696e576569416d6f756e742063616e2774206265206d6f7265207468616e206044820152686d73672e76616c756560b81b6064820152608401610419565b600083116106525760405162461bcd60e51b8152602060048201526012602482015271139bc81d1bdad95b9cc81c1c9bdd9a59195960721b6044820152606401610419565b818310156106b85760405162461bcd60e51b815260206004820152602d60248201527f6d696e546f6b656e416d6f756e742063616e2774206265206c6573732074686160448201526c1b881d1bdad95b905b5bdd5b9d609a1b6064820152608401610419565b6040516370a0823160e01b815233600482015283907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561071e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107429190611c32565b10156107845760405162461bcd60e51b81526020600482015260116024820152704e6f7420656e6f75676820746f6b656e7360781b6044820152606401610419565b604051636eb1769f60e11b815233600482015230602482015283907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063dd62ed3e90604401602060405180830381865afa1580156107f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108149190611c32565b10156108325760405162461bcd60e51b815260040161041990611c4b565b6000806000610846846003546002546118ee565b90508581116108a357848110156108985760405162461bcd60e51b81526020600482015260166024820152753a37b5b2b71038bab7ba32903132b63637bb9036b4b760511b6044820152606401610419565b839250809150610903565b60006108b4876002546003546118ee565b9050878110156108fd5760405162461bcd60e51b81526020600482015260146024820152733bb2b49038bab7ba32903132b63637bb9036b4b760611b6044820152606401610419565b92508591505b6040516323b872dd60e01b8152336004820152306024820152604481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610979573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099d9190611c10565b9050806109e45760405162461bcd60e51b81526020600482015260156024820152741d1bdad95b881d1c985b9cd9995c8819985a5b1959605a1b6044820152606401610419565b6109ee8486611bb6565b15610a8857336109fe8587611bb6565b604051600081818185875af1925050503d8060008114610a3a576040519150601f19603f3d011682016040523d82523d6000602084013e610a3f565b606091505b50508091505080610a885760405162461bcd60e51b81526020600482015260136024820152721dd95a481d1c985b9cd9995c8819985a5b1959606a1b6044820152606401610419565b600060035460065486610a9b9190611c90565b610aa59190611ca7565b3360009081526004602052604081205491925003610b0057600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b031916331790555b3360009081526004602052604081208054839290610b1f908490611bfd565b925050819055508060066000828254610b389190611bfd565b925050819055508460036000828254610b519190611bfd565b925050819055508360026000828254610b6a9190611bfd565b9091555050600254600354610b7f9190611c90565b600155505050505050505050565b610b956119ab565b610b9f60006119d8565b565b610ba96119ab565b60025415610bf95760405162461bcd60e51b815260206004820152601860248201527f546f6b656e20726573657276657320776173206e6f74203000000000000000006044820152606401610419565b60035415610c495760405162461bcd60e51b815260206004820152601760248201527f45544820726573657276657320776173206e6f7420302e0000000000000000006044820152606401610419565b60003411610c995760405162461bcd60e51b815260206004820152601860248201527f4e6565642065746820746f2063726561746520706f6f6c2e00000000000000006044820152606401610419565b6040516370a0823160e01b81523360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610d00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d249190611c32565b905080821115610d885760405162461bcd60e51b815260206004820152602960248201527f4e6f74206861766520656e6f75676820746f6b656e7320746f20637265617465604482015268081d1a19481c1bdbdb60ba1b6064820152608401610419565b60008211610dd85760405162461bcd60e51b815260206004820152601b60248201527f4e65656420746f6b656e7320746f2063726561746520706f6f6c2e00000000006044820152606401610419565b6040516323b872dd60e01b8152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610e4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6f9190611c10565b506040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef89190611c32565b6002819055346003819055610f0c91611c90565b6001908155600354600091610f2091611bb6565b336000908152600460205260408120829055600680549293508392909190610f49908490611bfd565b9091555050600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b03191633179055505050565b60008060008311610ff75760405162461bcd60e51b815260206004820152602660248201527f546f6b656e20616d6f756e74206d7573742062652067726561746572207468616044820152656e207a65726f60d01b6064820152608401610419565b600060025411801561100b57506000600354115b61104a5760405162461bcd60e51b815260206004820152601060248201526f496e76616c696420726573657276657360801b6044820152606401610419565b61105983600254600354611a28565b61106e84600254600354600754600854611a59565b91509150915091565b600081116110c75760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610419565b33600090815260046020526040902054806111245760405162461bcd60e51b815260206004820152601d60248201527f4e6f206c697175696469747920666f756e6420666f722073656e6465720000006044820152606401610419565b808211156111445760405162461bcd60e51b815260040161041990611bcf565b60006008546006546111569190611c90565b6003546007546111669086611c90565b6111709190611c90565b61117a9190611ca7565b90506000611187826117aa565b5090506000826006546003548761119e9190611c90565b6111a89190611ca7565b6111b29190611bfd565b905060016003546111c39190611bb6565b81111561120b5760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e74206c697175696469747960501b6044820152606401610419565b6000611216866117aa565b5090506112238382611bfd565b905081600360008282546112379190611bb6565b9250508190555080600260008282546112509190611bb6565b90915550506002546003546112659190611c90565b6001553360009081526004602052604081208054889290611287908490611bb6565b9250508190555085600660008282546112a09190611bb6565b9091555050604051600090339084908381818185875af1925050503d80600081146112e7576040519150601f19603f3d011682016040523d82523d6000602084013e6112ec565b606091505b50509050806113325760405162461bcd60e51b815260206004820152601260248201527108cc2d2d8cac840e8de40e6cadcc8408aa8960731b6044820152606401610419565b60405163a9059cbb60e01b8152336004820152602481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af11580156113a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c69190611c10565b90508061140d5760405162461bcd60e51b81526020600482015260156024820152744661696c656420746f2073656e6420746f6b656e7360581b6044820152606401610419565b5050505050505050565b6000821161145d5760405162461bcd60e51b815260206004820152601360248201527204e65656420746f6b656e7320746f207377617606c1b6044820152606401610419565b6040516370a0823160e01b815233600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156114c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e79190611c32565b10156115295760405162461bcd60e51b81526020600482015260116024820152704e6f7420656e6f75676820746f6b656e7360781b6044820152606401610419565b604051636eb1769f60e11b815233600482015230602482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063dd62ed3e90604401602060405180830381865afa158015611595573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b99190611c32565b10156115d75760405162461bcd60e51b815260040161041990611c4b565b6000806115e384610f95565b915091506001826003546115f79190611bb6565b116116145760405162461bcd60e51b815260040161041990611bcf565b828110156116585760405162461bcd60e51b8152602060048201526011602482015270546f6f206d75636820736c69707061676560781b6044820152606401610419565b6040516323b872dd60e01b8152336004820152306024820152604481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156116cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ef9190611c10565b5083600260008282546117029190611bfd565b92505081905550806003600082825461171b9190611bb6565b9091555050604051600090339083908381818185875af1925050503d8060008114611762576040519150601f19603f3d011682016040523d82523d6000602084013e611767565b606091505b50509050806105645760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606401610419565b600080600083116118095760405162461bcd60e51b8152602060048201526024808201527f57656920616d6f756e74206d7573742062652067726561746572207468616e206044820152637a65726f60e01b6064820152608401610419565b600060025411801561181d57506000600354115b61185c5760405162461bcd60e51b815260206004820152601060248201526f496e76616c696420726573657276657360801b6044820152606401610419565b61186b83600354600254611a28565b61106e84600354600254600754600854611a59565b60006005828154811061189557611895611cc9565b6000918252602090912001546001600160a01b031692915050565b6118b86119ab565b6001600160a01b0381166118e257604051631e4fbdf760e01b815260006004820152602401610419565b6118eb816119d8565b50565b600080841161193f5760405162461bcd60e51b815260206004820152601960248201527f62617365526573657276652063616e2774206265207a65726f000000000000006044820152606401610419565b60008311801561194f5750600082115b61198e5760405162461bcd60e51b815260206004820152601060248201526f696e76616c696420726573657276657360801b6044820152606401610419565b826119998386611c90565b6119a39190611ca7565b949350505050565b6000546001600160a01b03163314610b9f5760405163118cdaa760e01b8152336004820152602401610419565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080611a358584611c90565b90506000611a438686611bfd565b9050611a4f8183611ca7565b9695505050505050565b600080611a668484611bb6565b9050600087611a758388611c90565b611a7f9190611c90565b90506000611a8d8984611c90565b611a97868a611c90565b611aa19190611bfd565b9050611aad8183611ca7565b9998505050505050505050565b600060208284031215611acc57600080fd5b5035919050565b600060208284031215611ae557600080fd5b81356001600160a01b0381168114611afc57600080fd5b9392505050565b600080600060608486031215611b1857600080fd5b505081359360208301359350604090920135919050565b60008060408385031215611b4257600080fd5b50508035926020909101359150565b60006020808352835180602085015260005b81811015611b7f57858101830151858201604001528201611b63565b506000604082860101526040601f19601f8301168501019250505092915050565b634e487b7160e01b600052601160045260246000fd5b81810381811115611bc957611bc9611ba0565b92915050565b6020808252601490820152734e6f7420656e6f756768206c697175696469747960601b604082015260600190565b80820180821115611bc957611bc9611ba0565b600060208284031215611c2257600080fd5b81518015158114611afc57600080fd5b600060208284031215611c4457600080fd5b5051919050565b60208082526025908201527f4e6f7420656e6f75676820746f6b656e20616c6c6f77656420666f72207472616040820152643739b332b960d91b606082015260800190565b8082028115828204841417611bc957611bc9611ba0565b600082611cc457634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220d4ca3882c9cc36c04ab00046797de52c5953b84367f3379f9a6161b38fdfa09264736f6c63430008190033";

type BBExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BBExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BBExchange__factory extends ContractFactory {
  constructor(...args: BBExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    bbTokenAddr: AddressLike,
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      bbTokenAddr,
      initialOwner,
      overrides || {}
    );
  }
  override deploy(
    bbTokenAddr: AddressLike,
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(bbTokenAddr, initialOwner, overrides || {}) as Promise<
      BBExchange & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BBExchange__factory {
    return super.connect(runner) as BBExchange__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BBExchangeInterface {
    return new Interface(_abi) as BBExchangeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): BBExchange {
    return new Contract(address, _abi, runner) as unknown as BBExchange;
  }
}
