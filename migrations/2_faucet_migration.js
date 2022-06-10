const HephaestusContract = artifacts.require("Faucet")

module.exports = function (deployer) {
    deployer.deploy(HephaestusContract)
}