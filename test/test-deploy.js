const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("SimpleStorage", function () {
    let simpleStorageFactory;
    let simpleStorage;
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });
    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";
        expect(currentValue.toString()).to.equal(expectedValue);
    });
    it("Should update when we call store", async function () {
        const expectedValue = "7";
        await simpleStorage.store(expectedValue);
        const currentValue = await simpleStorage.retrieve();
        expect(currentValue.toString()).to.equal(expectedValue);
    });
    it("Should add a person", async function () {
        const expectedValue = "0";
        await simpleStorage.addPerson("John", expectedValue);
        const currentValue = await simpleStorage.retrieve();
        expect(currentValue.toString()).to.equal(expectedValue);
    });
});