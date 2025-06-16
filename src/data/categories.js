export const categories = [
    { id: 1, name: "Home", url: "/" },
    {
        id: 2, name: "Clothes", subcategories: [
            { id: 21, name: "Men", url: "/men" },
            { id: 22, name: "Women", url: "/women" },
        ]
    },
    { id: 3, name: "Jewellery", url: "/jewellery" },
    { id: 4, name: "Electronics", url: "/electronics" }
];
