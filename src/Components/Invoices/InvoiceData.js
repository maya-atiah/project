    export const invoiceData = [
        {
            CustomerName: "Customer 1",
            CustomerId: "0001",
            Status: "Invoiced",
            PaymentStatus: [
                { PayedThrough: "MasterCard", CardNumber: "xxxx-xxxx-xxx-xx55" },
            ],
            Address: [{ City: "Beirut", Country: "Lebanon", Street: "Hamra" }],
            InvoiceDetails: [
                {
                    ItemId: "0001",
                    ItemName: "Item 1",
                    Price: 20,
                    Quantity: 2,
                    Tax: 2,
                    Total: 44,
                },
                {
                    ItemId: "0002",
                    ItemName: "Item 2",
                    Price: 10,
                    Quantity: 1,
                    Tax: 3,
                    Total: 13,
                },
                {
                    ItemId: "0003",
                    ItemName: "Item 3",
                    Price: 50,
                    Quantity: 1,
                    Tax: 0,
                    Total: 50,
                },
            ],
        },
        {
            CustomerName: "Customer 2",
            CustomerId: "0002",
            Status: "Invoiced",
            PaymentStatus: [
                { PayedThrough: "MasterCard", CardNumber: "xxxx-xxxx-xxx-xx55" },
            ],
            Address: [{ City: "Beirut", Country: "Lebanon", Street: "Hamra" }],
            InvoiceDetails: [
                {
                    ItemId: "1001",
                    ItemName: "Item 11",
                    Price: 20,
                    Quantity: 2,
                    Tax: 2,
                    Total: 44,
                },
                {
                    ItemId: "1002",
                    ItemName: "Item 12",
                    Price: 10,
                    Quantity: 1,
                    Tax: 3,
                    Total: 13,
                },
                {
                    ItemId: "1003",
                    ItemName: "Item 33",
                    Price: 50,
                    Quantity: 1,
                    Tax: 0,
                    Total: 50,
                },
            ],
        },
        {
            CustomerName: "Customer 3",
            CustomerId: "0003",
            Status: "Pending",
            PaymentStatus: [
                { PayedThrough: "MasterCard", CardNumber: "xxxx-xxxx-xxx-xx55" },
            ],
            Address: [{ City: "Beirut", Country: "Lebanon", Street: "Hamra" }],
            InvoiceDetails: [
                {
                    ItemId: "1001",
                    ItemName: "Item 11",
                    Price: 20,
                    Quantity: 2,
                    Tax: 2,
                    Total: 44,
                },
                {
                    ItemId: "1002",
                    ItemName: "Item 12",
                    Price: 10,
                    Quantity: 1,
                    Tax: 3,
                    Total: 13,
                },
                {
                    ItemId: "1003",
                    ItemName: "Item 33",
                    Price: 50,
                    Quantity: 1,
                    Tax: 0,
                    Total: 50,
                },
            ],
        },
    ];