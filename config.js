// Agent Wall — deployment config.
// Edit these two values after each deploy. The frontend reads nothing else
// from this file, so it stays a plain static site (GitHub Pages ready).
//
// TESTNET (BSC testnet, chainId 97) — fill in after the testnet deploy:
//   CONTRACT_ADDRESS: "0x..."  (from deployments/testnet.json)
//   CHAIN_ID: 97
//   RPC_URL: "https://bsc-testnet.publicnode.com"
//   EXPLORER: "https://testnet.bscscan.com"
//
// MAINNET (BNB Smart Chain, chainId 56) — fill in after the mainnet deploy:
//   CONTRACT_ADDRESS: "0x..."  (from deployments/mainnet.json)
//   CHAIN_ID: 56
//   RPC_URL: "https://bsc-dataseed1.binance.org"
//   EXPLORER: "https://bscscan.com"
const CONFIG = {
  CONTRACT_ADDRESS: "0xF570fFE8401551cf1160999491EFC29caCCC6d91", // mainnet deploy 20 Nov 2026 ~23:56 WIB
  CHAIN_ID: 56,
  CHAIN_NAME: "BNB Smart Chain",
  RPC_URL: "https://bsc-dataseed1.binance.org",
  EXPLORER: "https://bscscan.com",
  // SPACE ID Agent ID contract (same address on mainnet and testnet).
  AGENT_ID: "0x60B9262456dE011F7d15a54CdD8c48bAaa8B022F",
};
