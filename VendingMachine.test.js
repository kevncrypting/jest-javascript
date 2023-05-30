const VendingMachine = require('./VendingMachine')

describe("The Vending Machine", () => {
    let machine;

    const newInventory = [
        { item: "Just", quantity: 8 },
        { item: "React 5 Gum", quantity: 20 },
        { item: "Red Onion", quantity: 20 },
        { item: "Fun Onion", quantity: 0 }
    ]

    beforeEach(() => {
        machine = new VendingMachine();
    })
    
    test("should be able to list its contents", () => {
        expect(machine.displayContents()).toEqual([]);
    });
    
    test("should be able to be stocked with one type of item", () => {
        machine.stock([ { item: "Just", quantity: 8 } ])

        expect(machine.contents).toEqual([ { item: "Just", quantity: 8 } ])
    })

    test("should be able to be stocked with multiple items", () => {
        machine.stock(newInventory)

        expect(machine.contents).toEqual(newInventory)
    })

    test("should be able to vend an item", () => {
        machine.stock(newInventory);
        machine.purchase("Red Onion");

        expect(machine.contents).toEqual([
            { item: "Just", quantity: 8 },
            { item: "React 5 Gum", quantity: 20 },
            { item: "Red Onion", quantity: 19 },
            { item: "Fun Onion", quantity: 0 }
        ]);
    });

    test("should display an out of stock message when a user tries to buy an out of stock item", () => {
        machine.stock(newInventory)

        expect(machine.purchase("Fun Onion")).toBe('Out of Stock')
    })

    test("should display an item not found message when a user tries to buy an item that is not offered", () => {
        machine.stock(newInventory)

        expect(machine.purchase("Funion")).toBe('Item Not Found')
    })
});