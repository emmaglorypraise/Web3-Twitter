require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/1PdVr8Hq7KYm4T0uZaWH1e1vfxA-R0_G',
      accounts:[
        'e550d9f280f76bbd7438cbeaf03453f899fd83588cf3f2312143c22b7dc025c0',
      ], 

    }
  }
};
