import ChainId from './chainId'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://bsc-dataseed1.defibit.io',
  '336': 'https://data-seed-prebsc-1-s1.binance.org:8545',
}

export default NETWORK_URLS
