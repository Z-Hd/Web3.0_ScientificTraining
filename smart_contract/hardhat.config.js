//https://eth-rinkeby.alchemyapi.io/v2/CxgO22DtxieXl2HPDA9pRZ0aE1R8G05X

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/CxgO22DtxieXl2HPDA9pRZ0aE1R8G05X',
      accounts: ['6839cf8101318a8ba721d29a0efd2b70635d1a7ad72ee01443bf884e7509444b'],
    },
  },
};
