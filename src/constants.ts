import { ContractInterface } from "ethers";

export const ADDRESSES = {
	LOOPSO_LUKSO_CONTRACT_ADDRESS: "0x9Ef9dDaf6A02f2Ec5813c8746751D07E0c3CBe6c",
	LOOPSO_MUMBAI_CONTRACT_ADDRESS: "0x882ced5f17c5616eb242c263fefdf4c29b610bc5",

	LAJOS_TOKEN_ADDRESS_MUMBAI: "0x8cBF42B6590614AbE7AB5ffc89aF153F5d620fC3",
	LAJOS_NFT_ADDRESS_MUMBAI: "0xdc1C3734165aB9f0336eb6d10feCFD62c9CF28cc",
	WRAPPED_MATIC_ADDRESS_MUMBAI: "0xBAABeA853DD0BE32Df73083129070c65314cF0Ea",

	LAJOS_TOKEN_ADDRESS_WRAPPED_LUKSO:
		"0x4EFCc784eA3E259bdA3c6311D448416959B9bB9C",
	LAJOS_NFT_ADDRESS_WRAPPED_LUKSO: "0xf60b63DbA61F14647D9a146113548fB341A87d12",
	WRAPPED_LYX_ADDRESS_LUKSO: "0x5119A7Af90339D645ccdf9332d7813d4940DA19B",
};

export const LOOPSO_ABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [],
		name: "AccessControlBadConfirmation",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "neededRole",
				type: "bytes32",
			},
		],
		name: "AccessControlUnauthorizedAccount",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "NativeTokensReleased",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "attestationID",
				type: "bytes32",
			},
		],
		name: "NonFungibleTokensBridgedBack",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
		],
		name: "NonFungibleTokensReleased",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "previousAdminRole",
				type: "bytes32",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "newAdminRole",
				type: "bytes32",
			},
		],
		name: "RoleAdminChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address",
			},
		],
		name: "RoleGranted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address",
			},
		],
		name: "RoleRevoked",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "attestationID",
				type: "bytes32",
			},
		],
		name: "TokenAttested",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "transferID",
				type: "bytes32",
			},
			{
				indexed: true,
				internalType: "enum ILoopso.TokenType",
				name: "tokenType",
				type: "uint8",
			},
		],
		name: "TokensBridged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "attestationID",
				type: "bytes32",
			},
		],
		name: "TokensBridgedBack",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
		],
		name: "TokensReleased",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "attestationID",
				type: "bytes32",
			},
		],
		name: "WrappedNonFungibleTokensReleased",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "attestationID",
				type: "bytes32",
			},
		],
		name: "WrappedTokensReleased",
		type: "event",
	},
	{
		inputs: [],
		name: "DEFAULT_ADMIN_ROLE",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "FEE_FUNGIBLE",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "FEE_NON_FUNGIBLE",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "RELAYER_ROLE",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "tokenAddress",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "tokenChain",
						type: "uint256",
					},
					{
						internalType: "enum ILoopso.TokenType",
						name: "tokenType",
						type: "uint8",
					},
					{
						internalType: "uint8",
						name: "decimals",
						type: "uint8",
					},
					{
						internalType: "string",
						name: "symbol",
						type: "string",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "address",
						name: "wrappedTokenAddress",
						type: "address",
					},
				],
				internalType: "struct ILoopso.TokenAttestation",
				name: "attestation",
				type: "tuple",
			},
		],
		name: "attestToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "attestationIds",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		name: "attestedTokens",
		outputs: [
			{
				internalType: "address",
				name: "tokenAddress",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenChain",
				type: "uint256",
			},
			{
				internalType: "enum ILoopso.TokenType",
				name: "tokenType",
				type: "uint8",
			},
			{
				internalType: "uint8",
				name: "decimals",
				type: "uint8",
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string",
			},
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "address",
				name: "wrappedTokenAddress",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_dstChain",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_dstAddress",
				type: "address",
			},
		],
		name: "bridgeNativeTokens",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_tokenID",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "tokenURI",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "_dstChain",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_dstAddress",
				type: "address",
			},
		],
		name: "bridgeNonFungibleTokens",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenId",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_to",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "_attestationID",
				type: "bytes32",
			},
		],
		name: "bridgeNonFungibleTokensBack",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_dstChain",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_dstAddress",
				type: "address",
			},
		],
		name: "bridgeTokens",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_to",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "_attestationID",
				type: "bytes32",
			},
		],
		name: "bridgeTokensBack",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "discountNft",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "feeReceiver",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getAllSupportedTokens",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "tokenAddress",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "tokenChain",
						type: "uint256",
					},
					{
						internalType: "enum ILoopso.TokenType",
						name: "tokenType",
						type: "uint8",
					},
					{
						internalType: "uint8",
						name: "decimals",
						type: "uint8",
					},
					{
						internalType: "string",
						name: "symbol",
						type: "string",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "address",
						name: "wrappedTokenAddress",
						type: "address",
					},
				],
				internalType: "struct ILoopso.TokenAttestation[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
		],
		name: "getRoleAdmin",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getSupportedTokensLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "grantRole",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "hasRole",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_tokenAddress",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_tokenChain",
				type: "uint256",
			},
		],
		name: "isTokenSupported",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address",
			},
		],
		name: "isWrappedToken",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		name: "onERC721Received",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_to",
				type: "address",
			},
		],
		name: "releaseNativeTokens",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenId",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_to",
				type: "address",
			},
			{
				internalType: "address",
				name: "_token",
				type: "address",
			},
		],
		name: "releaseNonFungibleTokens",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_to",
				type: "address",
			},
			{
				internalType: "address",
				name: "_token",
				type: "address",
			},
		],
		name: "releaseTokens",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenId",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "_tokenURI",
				type: "string",
			},
			{
				internalType: "address",
				name: "_to",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "_attestationID",
				type: "bytes32",
			},
		],
		name: "releaseWrappedNonFungibleTokens",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_to",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "_attestationID",
				type: "bytes32",
			},
		],
		name: "releaseWrappedTokens",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				internalType: "address",
				name: "callerConfirmation",
				type: "address",
			},
		],
		name: "renounceRole",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "revokeRole",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_discountNft",
				type: "address",
			},
		],
		name: "setDiscountNft",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_feeReceiver",
				type: "address",
			},
		],
		name: "setFeeReceiver",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_fee",
				type: "uint256",
			},
		],
		name: "setFungibleFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_fee",
				type: "uint256",
			},
		],
		name: "setNonFungibleFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "contract ITokenFactory",
				name: "_tokenFactory",
				type: "address",
			},
		],
		name: "setTokenFactory",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "tokenFactory",
		outputs: [
			{
				internalType: "contract ITokenFactory",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		name: "tokenTransfers",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "timestamp",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "srcChain",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "srcAddress",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "dstChain",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "dstAddress",
						type: "address",
					},
					{
						internalType: "address",
						name: "tokenAddress",
						type: "address",
					},
				],
				internalType: "struct ILoopso.TokenTransferBase",
				name: "tokenTransfer",
				type: "tuple",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		name: "tokenTransfersNonFungible",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "timestamp",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "srcChain",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "srcAddress",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "dstChain",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "dstAddress",
						type: "address",
					},
					{
						internalType: "address",
						name: "tokenAddress",
						type: "address",
					},
				],
				internalType: "struct ILoopso.TokenTransferBase",
				name: "tokenTransfer",
				type: "tuple",
			},
			{
				internalType: "uint256",
				name: "tokenID",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "tokenURI",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_wrappedToken",
				type: "address",
			},
		],
		name: "wrappedTokenInfo",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "tokenAddress",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "tokenChain",
						type: "uint256",
					},
					{
						internalType: "enum ILoopso.TokenType",
						name: "tokenType",
						type: "uint8",
					},
					{
						internalType: "uint8",
						name: "decimals",
						type: "uint8",
					},
					{
						internalType: "string",
						name: "symbol",
						type: "string",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "address",
						name: "wrappedTokenAddress",
						type: "address",
					},
				],
				internalType: "struct ILoopso.TokenAttestation",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

export const ERC20_ABI = [
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address",
			},
			{
				name: "_value",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address",
			},
			{
				name: "_to",
				type: "address",
			},
			{
				name: "_value",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address",
			},
			{
				name: "_value",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address",
			},
			{
				name: "_spender",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
				name: "value",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
];

export const ERC721_ABI = [
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "approve",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "mint",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "safeTransferFrom",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
			{ internalType: "bytes", name: "_data", type: "bytes" },
		],
		name: "safeTransferFrom",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "bool", name: "approved", type: "bool" },
		],
		name: "setApprovalForAll",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "from", type: "address" },
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{ indexed: false, internalType: "bool", name: "approved", type: "bool" },
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		constant: true,
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "getApproved",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
		],
		name: "isApprovedForAll",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "ownerOf",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
		name: "supportsInterface",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
];

export const WRAPPED_ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_name",
				type: "string",
			},
			{
				internalType: "string",
				name: "_symbol",
				type: "string",
			},
			{
				internalType: "uint8",
				name: "_decimals",
				type: "uint8",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "src",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "guy",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "wad",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "dst",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "wad",
				type: "uint256",
			},
		],
		name: "Deposit",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "src",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "dst",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "wad",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "src",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "wad",
				type: "uint256",
			},
		],
		name: "Withdrawal",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "guy",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "wad",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "deposit",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "dst",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "wad",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "src",
				type: "address",
			},
			{
				internalType: "address",
				name: "dst",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "wad",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "wad",
				type: "uint256",
			},
		],
		name: "withdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		stateMutability: "payable",
		type: "receive",
	},
];

export const FEE_ABI = [
	"function FEE_NON_FUNGIBLE() external view returns (uint256 memory)",
	"function FEE_FUNGIBLE() external view returns (uint256 memory)",
];
