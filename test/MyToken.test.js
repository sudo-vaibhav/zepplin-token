const BigNumber = web3.BigNumber;
const MyToken = artifacts.require("MyToken");
require("chai").use(require("chai-bignumber")(BigNumber)).should();

contract("MyToken", (accounts) => {
  const _name = "My Token";
  const _symbol = "MYT";
  const _decimals = 18;

  beforeEach(async () => {
    this.token = await MyToken.new(_name, _symbol);
  });

  describe("token attributes", () => {
    it("has the correct name", async () => {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it("has the correct symbol", async () => {
      (await this.token.symbol()).should.equal(_symbol);
    });

    it("has the correct decimals", async () => {
      (await this.token.decimals()).toNumber().should.equal(_decimals);
    });
  });
});
