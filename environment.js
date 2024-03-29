const environment = {
  AIRDROP_CONTRACT: {
    5: "0x9D533D1d0a200F9377Bff4E28f332E2358eA0BF2",
    "eip155:5": "0x9D533D1d0a200F9377Bff4E28f332E2358eA0BF2",
    1: "0xED815337cd7A12AAcCbaA3C10e283cf39bA5e08d",
    "eip155:1": "0xED815337cd7A12AAcCbaA3C10e283cf39bA5e08d",
    43114: "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    "eip155:43114": "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    1088: "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    "eip155:1088": "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
  },
  PAIR_CONTRACT: {
    5: "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    "eip155:5": "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    1: "0xED815337cd7A12AAcCbaA3C10e283cf39bA5e08d",
    "eip155:1": "0xED815337cd7A12AAcCbaA3C10e283cf39bA5e08d",
    43114: "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    "eip155:43114": "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    1088: "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    "eip155:1088": "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
  },
  AMP_CONTRACT: {
    5: "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    "eip155:5": "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    1: "0x1Bf91b7fbD9C00321060cB461774D6874F7cE600",
    "eip155:1": "0x1Bf91b7fbD9C00321060cB461774D6874F7cE600",
    43114: "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    "eip155:43114": "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    1088: "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
    "eip155:1088": "0xbC0cE5e27A1e923595fDE0AF7706e6B5B291A09C",
  },
  UNISWAP_FACTORY: {
    5: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "eip155:5": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    1: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "eip155:1": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    43114: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "eip155:43114": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    1088: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "eip155:1088": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  },
  UNISWAP_ROUTER: {
    5: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "eip155:5": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    1: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "eip155:1": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    43114: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "eip155:43114": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    1088: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "eip155:1088": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  },

  RPC: {
    5: "https://ethereum-goerli.publicnode.com",
    1: "https://mainnet.infura.io/v3/63718e1cbddc42caa56b95756b4d88da",
    1088: "https://metis-mainnet.public.blastapi.io",
    43114: "https://avalanche.public-rpc.com",
  },
  ZERO_ADDRESS: "0x0000000000000000000000000000000000000000",
  DENOMINATOR: 10000,
  AMP_DECIMALS: 9,
  AMP_DECIMALS_UNIT: "gwei",
  AIRDROP_ADDRESS_TIME_LIMT: 604800,
  EOA_ST_TIME_LIMT: 604800,
  EOA_LT_TIME_LIMT: 1209600,
  CONTRACT_ST_TIME_LIMT: 604800,
  CONTRACT_LT_TIME_LIMT: 1209600,
  DEFAULT_CHAIN: 5,
  DEFAULT_HEX_CHAIN: "0x5",
  METIS_CHAIN: 5, // for production make it 1088
};
export default environment;
