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
  BBExchangeTest,
  BBExchangeTestInterface,
} from "../../BBExchangeTest.t.sol/BBExchangeTest";

const _abi = [
  {
    type: "function",
    name: "IS_TEST",
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
    name: "excludeArtifacts",
    inputs: [],
    outputs: [
      {
        name: "excludedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeContracts",
    inputs: [],
    outputs: [
      {
        name: "excludedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeSenders",
    inputs: [],
    outputs: [
      {
        name: "excludedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "failed",
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
    name: "setUp",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "targetArtifactSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifactSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzSelector[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetArtifacts",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetContracts",
    inputs: [],
    outputs: [
      {
        name: "targetedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetInterfaces",
    inputs: [],
    outputs: [
      {
        name: "targetedInterfaces_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzInterface[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "artifacts",
            type: "string[]",
            internalType: "string[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzSelector[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSenders",
    inputs: [],
    outputs: [
      {
        name: "targetedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "testExample",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "log",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_address",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes32",
    inputs: [
      {
        name: "",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_int",
    inputs: [
      {
        name: "",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_address",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes32",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_string",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_string",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_uint",
    inputs: [
      {
        name: "",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "logs",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x6080604052600c8054600160ff199182168117909255601e80549091169091179055348015602c57600080fd5b5061307d8061003c6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806366d9a9a01161008c578063b5508aa911610066578063b5508aa91461015b578063ba414fa614610163578063e20c9f711461017b578063fa7626d41461018357600080fd5b806366d9a9a01461012957806385226c811461013e578063916a17c61461015357600080fd5b80630a9254e4146100d45780631ed7831c146100de5780632ade3880146100fc5780633e5e3c23146101115780633f5a4a2a146101195780633f7286f414610121575b600080fd5b6100dc610190565b005b6100e66102e0565b6040516100f39190610d83565b60405180910390f35b610104610342565b6040516100f39190610e20565b6100e6610484565b6100dc6104e4565b6100e6610710565b610131610770565b6040516100f39190610ee0565b610146610856565b6040516100f39190610f95565b610131610926565b610146610a0c565b61016b610adc565b60405190151581526020016100f3565b6100e6610b80565b601e5461016b9060ff1681565b60405161019c90610d76565b604051809103906000f0801580156101b8573d6000803e3d6000fd5b50601e60016101000a8154816001600160a01b0302191690836001600160a01b03160217905550601e60019054906101000a90046001600160a01b03166001600160a01b031663c04062266040518163ffffffff1660e01b81526004016060604051808303816000875af1158015610234573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610258919061100e565b602180546001600160a01b039283166001600160a01b03199182161790915560208054938316938216939093178355601f8054949092169316929092179091556040805180820190915260048152633ab9b2b960e11b918101919091526102be90610be0565b602280546001600160a01b0319166001600160a01b0392909216919091179055565b6060601680548060200260200160405190810160405280929190818152602001828054801561033857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161031a575b5050505050905090565b6060601d805480602002602001604051908101604052809291908181526020016000905b8282101561047b57600084815260208082206040805180820182526002870290920180546001600160a01b03168352600181018054835181870281018701909452808452939591948681019491929084015b828210156104645783829060005260206000200180546103d79061105b565b80601f01602080910402602001604051908101604052809291908181526020018280546104039061105b565b80156104505780601f1061042557610100808354040283529160200191610450565b820191906000526020600020905b81548152906001019060200180831161043357829003601f168201915b5050505050815260200190600101906103b8565b505050508152505081526020019060010190610366565b50505050905090565b60606018805480602002602001604051908101604052809291908181526020018280548015610338576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161031a575050505050905090565b60225460405163c88a5e6d60e01b81526001600160a01b03909116600482015268056bc75e2d631000006024820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c88a5e6d90604401600060405180830381600087803b15801561054c57600080fd5b505af1158015610560573d6000803e3d6000fd5b5050602254610585925068056bc75e2d6310000091506001600160a01b031631610bf2565b60225460405163ca669fa760e01b81526001600160a01b039091166004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ca669fa790602401600060405180830381600087803b1580156105de57600080fd5b505af11580156105f2573d6000803e3d6000fd5b505060408051600060248083019190915282518083039091018152604490910182526020810180516001600160e01b031663ec442f0560e01b179052905163f28dceb360e01b8152737109709ecfa91a80626ff3989d68f67f5b1dd12d935063f28dceb392506106659190600401611095565b600060405180830381600087803b15801561067f57600080fd5b505af1158015610693573d6000803e3d6000fd5b5050601f5460405163a9059cbb60e01b815260006004820152600a60248201526001600160a01b03909116925063a9059cbb91506044016020604051808303816000875af11580156106e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070d91906110af565b50565b60606017805480602002602001604051908101604052809291908181526020018280548015610338576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161031a575050505050905090565b6060601b805480602002602001604051908101604052809291908181526020016000905b8282101561047b5760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561083e57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116108005790505b50505050508152505081526020019060010190610794565b6060601a805480602002602001604051908101604052809291908181526020016000905b8282101561047b5783829060005260206000200180546108999061105b565b80601f01602080910402602001604051908101604052809291908181526020018280546108c59061105b565b80156109125780601f106108e757610100808354040283529160200191610912565b820191906000526020600020905b8154815290600101906020018083116108f557829003601f168201915b50505050508152602001906001019061087a565b6060601c805480602002602001604051908101604052809291908181526020016000905b8282101561047b5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156109f457602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116109b65790505b5050505050815250508152602001906001019061094a565b60606019805480602002602001604051908101604052809291908181526020016000905b8282101561047b578382906000526020600020018054610a4f9061105b565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7b9061105b565b8015610ac85780601f10610a9d57610100808354040283529160200191610ac8565b820191906000526020600020905b815481529060010190602001808311610aab57829003601f168201915b505050505081526020019060010190610a30565b60085460009060ff1615610af4575060085460ff1690565b604051630667f9d760e41b8152737109709ecfa91a80626ff3989d68f67f5b1dd12d600482018190526519985a5b195960d21b602483015260009163667f9d7090604401602060405180830381865afa158015610b55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7991906110d1565b1415905090565b60606015805480602002602001604051908101604052809291908181526020018280548015610338576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161031a575050505050905090565b6000610beb82610c60565b5092915050565b60405163260a5b1560e21b81526004810183905260248101829052737109709ecfa91a80626ff3989d68f67f5b1dd12d906398296c549060440160006040518083038186803b158015610c4457600080fd5b505afa158015610c58573d6000803e3d6000fd5b505050505050565b60008082604051602001610c7491906110ea565b60408051808303601f190181529082905280516020909101206001625e79b760e01b03198252600482018190529150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ffa1864990602401602060405180830381865afa158015610cdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d039190611106565b6040516318caf8e360e31b8152909250737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c657c71890610d3f9085908790600401611123565b600060405180830381600087803b158015610d5957600080fd5b505af1158015610d6d573d6000803e3d6000fd5b50505050915091565b611ef88061115083390190565b6020808252825182820181905260009190848201906040850190845b81811015610dc45783516001600160a01b031683529284019291840191600101610d9f565b50909695505050505050565b60005b83811015610deb578181015183820152602001610dd3565b50506000910152565b60008151808452610e0c816020860160208601610dd0565b601f01601f19169290920160200192915050565b602080825282518282018190526000919060409081850190600581811b8701840188860187805b85811015610ed057603f198b8503018752825180516001600160a01b031685528901518985018990528051898601819052908a0190606081881b870181019190870190855b81811015610eba57605f19898503018352610ea8848651610df4565b948e01949350918d0191600101610e8c565b505050978a019794505091880191600101610e47565b50919a9950505050505050505050565b600060208083018184528085518083526040925060408601915060408160051b8701018488016000805b84811015610f8657898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b80831015610f715783516001600160e01b0319168252928b019260019290920191908b0190610f47565b50978a01979550505091870191600101610f0a565b50919998505050505050505050565b600060208083016020845280855180835260408601915060408160051b87010192506020870160005b82811015610fec57603f19888603018452610fda858351610df4565b94509285019290850190600101610fbe565b5092979650505050505050565b6001600160a01b038116811461070d57600080fd5b60008060006060848603121561102357600080fd5b835161102e81610ff9565b602085015190935061103f81610ff9565b604085015190925061105081610ff9565b809150509250925092565b600181811c9082168061106f57607f821691505b60208210810361108f57634e487b7160e01b600052602260045260246000fd5b50919050565b6020815260006110a86020830184610df4565b9392505050565b6000602082840312156110c157600080fd5b815180151581146110a857600080fd5b6000602082840312156110e357600080fd5b5051919050565b600082516110fc818460208701610dd0565b9190910192915050565b60006020828403121561111857600080fd5b81516110a881610ff9565b6001600160a01b038316815260406020820181905260009061114790830184610df4565b94935050505056fe6080604052600c805462ff00ff191662010001179055348015602057600080fd5b50611ec8806100306000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c04062261461003b578063f8ccbf4714610072575b600080fd5b610043610095565b604080516001600160a01b03948516815292841660208401529216918101919091526060015b60405180910390f35b600c546100859062010000900460ff1681565b6040519015158152602001610069565b6000806000806040516100a790610301565b604051809103906000f0801580156100c3573d6000803e3d6000fd5b5090506000816001600160a01b031663d1170edf6040518163ffffffff1660e01b81526004016040805180830381865afa158015610105573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101299190610328565b6040516001625e79b760e01b0319815260048101829052909250737109709ecfa91a80626ff3989d68f67f5b1dd12d915063ffa1864990602401602060405180830381865afa158015610180573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a4919061034c565b60405163ce817d4760e01b815260048101839052909350737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156101f457600080fd5b505af1158015610208573d6000803e3d6000fd5b5050505061138860405161021b9061030e565b908152602001604051809103906000f08015801561023d573d6000803e3d6000fd5b509450848360405161024e9061031b565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610281573d6000803e3d6000fd5b5093507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c6001600160a01b03166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156102e257600080fd5b505af11580156102f6573d6000803e3d6000fd5b505050505050909192565b6104048061037d83390190565b610c258061078183390190565b610aed806113a683390190565b6000806040838503121561033b57600080fd5b505080516020909101519092909150565b60006020828403121561035e57600080fd5b81516001600160a01b038116811461037557600080fd5b939250505056fe6080604052600c805462ff00ff19166201000117905534801561002157600080fd5b5062aa36a7460361004557610034610090565b8051600d5560200151600e55610166565b60408051808201825260008082526020918201528151808301909252617a6982527fac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff8090820152610034565b604080518082019091526000808252602082015260408051808201825262aa36a78152905163c1978d1f60e01b8152602060048201819052600b60248301526a505249564154455f4b455960a81b6044830152820190737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f90606401602060405180830381865afa158015610122573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610146919061014d565b9052919050565b60006020828403121561015f57600080fd5b5051919050565b61028f806101756000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063989e6fd91161005b578063989e6fd9146100e85780639db1e60514610133578063d1170edf1461013d578063f8ccbf471461016057600080fd5b8063158a3f7c146100825780634b534bdf146100bc57806393c6b990146100c5575b600080fd5b6100a97fac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff8081565b6040519081526020015b60405180910390f35b6100a9617a6981565b6100cd610183565b604080518251815260209283015192810192909252016100b3565b60408051808201825260008082526020918201528151808301909252617a6982527fac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80908201526100cd565b6100a962aa36a781565b600d54600e5461014b919082565b604080519283526020830191909152016100b3565b600c546101739062010000900460ff1681565b60405190151581526020016100b3565b604080518082019091526000808252602082015260408051808201825262aa36a78152905163c1978d1f60e01b8152602060048201819052600b60248301526a505249564154455f4b455960a81b6044830152820190737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f90606401602060405180830381865afa158015610215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102399190610240565b9052919050565b60006020828403121561025257600080fd5b505191905056fea264697066735822122043a705acc9cf086725b749f9ea667ca642461f92e532a822c48a70c846d1b19b64736f6c63430008190033608060405234801561001057600080fd5b50604051610c25380380610c2583398101604081905261002f91610240565b6040518060400160405280601381526020017f42756c6c20616e64204265617220546f6b656e000000000000000000000000008152506040518060400160405280600381526020016210909560ea1b815250816003908161009091906102fa565b50600461009d82826102fa565b5050506100cc336100b26100d260201b60201c565b6100bd90600a6104b5565b6100c790846104cb565b6100d7565b506104f5565b601290565b6001600160a01b0382166101065760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b61011260008383610116565b5050565b6001600160a01b03831661014157806002600082825461013691906104e2565b909155506101b39050565b6001600160a01b038316600090815260208190526040902054818110156101945760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016100fd565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166101cf576002805482900390556101ee565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161023391815260200190565b60405180910390a3505050565b60006020828403121561025257600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061028357607f821691505b6020821081036102a357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102f5576000816000526020600020601f850160051c810160208610156102d25750805b601f850160051c820191505b818110156102f1578281556001016102de565b5050505b505050565b81516001600160401b0381111561031357610313610259565b61032781610321845461026f565b846102a9565b602080601f83116001811461035c57600084156103445750858301515b600019600386901b1c1916600185901b1785556102f1565b600085815260208120601f198616915b8281101561038b5788860151825594840194600190910190840161036c565b50858210156103a95787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111561040a5781600019048211156103f0576103f06103b9565b808516156103fd57918102915b93841c93908002906103d4565b509250929050565b600082610421575060016104af565b8161042e575060006104af565b8160018114610444576002811461044e5761046a565b60019150506104af565b60ff84111561045f5761045f6103b9565b50506001821b6104af565b5060208310610133831016604e8410600b841016171561048d575081810a6104af565b61049783836103cf565b80600019048211156104ab576104ab6103b9565b0290505b92915050565b60006104c460ff841683610412565b9392505050565b80820281158282048414176104af576104af6103b9565b808201808211156104af576104af6103b9565b610721806105046000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce567146100fe57806370a082311461010d57806395d89b4114610136578063a9059cbb1461013e578063dd62ed3e1461015157600080fd5b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100d957806323b872dd146100eb575b600080fd5b6100a061018a565b6040516100ad919061056a565b60405180910390f35b6100c96100c43660046105d5565b61021c565b60405190151581526020016100ad565b6002545b6040519081526020016100ad565b6100c96100f93660046105ff565b610236565b604051601281526020016100ad565b6100dd61011b36600461063b565b6001600160a01b031660009081526020819052604090205490565b6100a061025a565b6100c961014c3660046105d5565b610269565b6100dd61015f36600461065d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461019990610690565b80601f01602080910402602001604051908101604052809291908181526020018280546101c590610690565b80156102125780601f106101e757610100808354040283529160200191610212565b820191906000526020600020905b8154815290600101906020018083116101f557829003601f168201915b5050505050905090565b60003361022a818585610277565b60019150505b92915050565b600033610244858285610289565b61024f85858561030c565b506001949350505050565b60606004805461019990610690565b60003361022a81858561030c565b610284838383600161036b565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461030657818110156102f757604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6103068484848403600061036b565b50505050565b6001600160a01b03831661033657604051634b637e8f60e11b8152600060048201526024016102ee565b6001600160a01b0382166103605760405163ec442f0560e01b8152600060048201526024016102ee565b610284838383610440565b6001600160a01b0384166103955760405163e602df0560e01b8152600060048201526024016102ee565b6001600160a01b0383166103bf57604051634a1406b160e11b8152600060048201526024016102ee565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561030657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161043291815260200190565b60405180910390a350505050565b6001600160a01b03831661046b57806002600082825461046091906106ca565b909155506104dd9050565b6001600160a01b038316600090815260208190526040902054818110156104be5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016102ee565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166104f957600280548290039055610518565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161055d91815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156105985785810183015185820160400152820161057c565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146105d057600080fd5b919050565b600080604083850312156105e857600080fd5b6105f1836105b9565b946020939093013593505050565b60008060006060848603121561061457600080fd5b61061d846105b9565b925061062b602085016105b9565b9150604084013590509250925092565b60006020828403121561064d57600080fd5b610656826105b9565b9392505050565b6000806040838503121561067057600080fd5b610679836105b9565b9150610687602084016105b9565b90509250929050565b600181811c908216806106a457607f821691505b6020821081036106c457634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561023057634e487b7160e01b600052601160045260246000fdfea26469706673582212202eb3c24e5b4cd582813cba82b6fec96e0bdc6e0246fc24cff5ef3ce244ae851864736f6c6343000819003360c0604052601660809081527f42756c6c20616e6420426561722045786368616e67650000000000000000000060a05260019061003c90826101cc565b50600060035560006004556003600755606460085534801561005d57600080fd5b50604051610aed380380610aed83398101604081905261007c916102a7565b806001600160a01b0381166100ab57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6100b4816100db565b5050600280546001600160a01b0319166001600160a01b03929092169190911790556102da565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061015557607f821691505b60208210810361017557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156101c7576000816000526020600020601f850160051c810160208610156101a45750805b601f850160051c820191505b818110156101c3578281556001016101b0565b5050505b505050565b81516001600160401b038111156101e5576101e561012b565b6101f9816101f38454610141565b8461017b565b602080601f83116001811461022e57600084156102165750858301515b600019600386901b1c1916600185901b1785556101c3565b600085815260208120601f198616915b8281101561025d5788860151825594840194600190910190840161023e565b508582101561027b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80516001600160a01b03811681146102a257600080fd5b919050565b600080604083850312156102ba57600080fd5b6102c38361028b565b91506102d16020840161028b565b90509250929050565b610804806102e96000396000f3fe6080604052600436106100a75760003560e01c80639cd441da116100645780639cd441da146100bf578063a22280a6146100bf578063d4cadf6814610143578063f2fde38b1461016b578063f694f7d11461018b578063fc0c546a146101ad57600080fd5b80632eab2841146100ac57806358ad6de4146100bf578063715018a6146100d15780638259e6a0146100e6578063857620e1146100f95780638da5cb5b1461010c575b600080fd5b6100bd6100ba366004610648565b50565b005b6100bd6100cd366004610661565b5050565b3480156100dd57600080fd5b506100bd6101cd565b6100bd6100f4366004610648565b6101e1565b6100bd610107366004610683565b505050565b34801561011857600080fd5b506000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b34801561014f57600080fd5b506007546008546040805192835260208301919091520161013a565b34801561017757600080fd5b506100bd6101863660046106af565b610502565b34801561019757600080fd5b506101a061053d565b60405161013a91906106df565b3480156101b957600080fd5b50600254610126906001600160a01b031681565b6101d56105cb565b6101df60006105f8565b565b6101e96105cb565b6003541561023e5760405162461bcd60e51b815260206004820152601860248201527f546f6b656e20726573657276657320776173206e6f742030000000000000000060448201526064015b60405180910390fd5b6004541561028e5760405162461bcd60e51b815260206004820152601760248201527f45544820726573657276657320776173206e6f7420302e0000000000000000006044820152606401610235565b600034116102de5760405162461bcd60e51b815260206004820152601860248201527f4e6565642065746820746f2063726561746520706f6f6c2e00000000000000006044820152606401610235565b6002546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034b919061072e565b9050808211156103af5760405162461bcd60e51b815260206004820152602960248201527f4e6f74206861766520656e6f75676820746f6b656e7320746f20637265617465604482015268081d1a19481c1bdbdb60ba1b6064820152608401610235565b600082116103ff5760405162461bcd60e51b815260206004820152601b60248201527f4e65656420746f6b656e7320746f2063726561746520706f6f6c2e00000000006044820152606401610235565b6002546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610456573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047a9190610747565b506002546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156104c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e7919061072e565b60038190553460048190556104fb91610769565b6009555050565b61050a6105cb565b6001600160a01b03811661053457604051631e4fbdf760e01b815260006004820152602401610235565b6100ba816105f8565b6001805461054a90610794565b80601f016020809104026020016040519081016040528092919081815260200182805461057690610794565b80156105c35780601f10610598576101008083540402835291602001916105c3565b820191906000526020600020905b8154815290600101906020018083116105a657829003601f168201915b505050505081565b6000546001600160a01b031633146101df5760405163118cdaa760e01b8152336004820152602401610235565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561065a57600080fd5b5035919050565b6000806040838503121561067457600080fd5b50508035926020909101359150565b60008060006060848603121561069857600080fd5b505081359360208301359350604090920135919050565b6000602082840312156106c157600080fd5b81356001600160a01b03811681146106d857600080fd5b9392505050565b60006020808352835180602085015260005b8181101561070d578581018301518582016040015282016106f1565b506000604082860101526040601f19601f8301168501019250505092915050565b60006020828403121561074057600080fd5b5051919050565b60006020828403121561075957600080fd5b815180151581146106d857600080fd5b808202811582820484141761078e57634e487b7160e01b600052601160045260246000fd5b92915050565b600181811c908216806107a857607f821691505b6020821081036107c857634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220db9393bac5b5b625c926ef160925236f9f46be53050b2a624c505ccd7ca5967b64736f6c63430008190033a264697066735822122059c484e60a2b2b67093a1de7c634be9e6c6125f3ec606b671dd9ecebf5bbca0264736f6c63430008190033a26469706673582212208cab7e0968a99554513896fc7311e97eb84131d1be2d9a95c87b35c8986f2b3664736f6c63430008190033";

type BBExchangeTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BBExchangeTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BBExchangeTest__factory extends ContractFactory {
  constructor(...args: BBExchangeTestConstructorParams) {
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
      BBExchangeTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BBExchangeTest__factory {
    return super.connect(runner) as BBExchangeTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BBExchangeTestInterface {
    return new Interface(_abi) as BBExchangeTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BBExchangeTest {
    return new Contract(address, _abi, runner) as unknown as BBExchangeTest;
  }
}
