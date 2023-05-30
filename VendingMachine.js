class VendingMachine {
    constructor() {
        this.contents = [];
    }

    displayContents() {
        return this.contents;
    }

    stock(inventory) {
        this.contents.push(...inventory);
    }

    purchase(itemName) {
        let soughtItem = this.contents.find((item) => item.item === itemName);

        if (soughtItem == null) {
            return "Item Not Found";
        } 

        if (soughtItem.quantity === 0) {
            return "Out of Stock";
        }

        if (soughtItem) soughtItem.quantity--
    }
}

module.exports = VendingMachine;
