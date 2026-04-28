export type Contact = {
    id: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    address: string;
    initials: string;
    department: string;
};

export const contacts: Contact[] = [
    {
        id: "max-harding",
        name: "Max Harding",
        role: "Technical Consultant",
        email: "max.harding@example.com",
        phone: "+44 20 7946 0573",
        address: "3 Queen Square, Bristol BS1 4JQ",
        initials: "MH",
        department: "Technical",
    },
    {
        id: "maya-singh",
        name: "Maya Singh",
        role: "Client Services Director",
        email: "maya.singh@example.com",
        phone: "+44 20 7946 0184",
        address: "14 Bedford Square, London WC1B 3JA",
        initials: "MS",
        department: "Client Care",
    },
    {
        id: "oscar-bennett",
        name: "Oscar Bennett",
        role: "Senior Project Manager",
        email: "oscar.bennett@example.com",
        phone: "+44 20 7946 0328",
        address: "721 Queensway, Newcastle upon Tyne NE88 5MX",
        initials: "OB",
        department: "Delivery",
    },
    {
        id: "amelia-wright",
        name: "Amelia Wright",
        role: "Finance Lead",
        email: "amelia.wright@example.com",
        phone: "+44 20 7946 0441",
        address: "22 King Street, Manchester M2 6AG",
        initials: "AW",
        department: "Accounts",
    },
    {
        id: "nick-richards",
        name: "Nick Richards",
        role: "Operations Coordinator",
        email: "nick.richards@example.com",
        phone: "+44 20 7946 0699",
        address: "8 Castle Terrace, Edinburgh EH1 2DP",
        initials: "NR",
        department: "Operations",
    },
    {
        id: "hannah-clark",
        name: "Hannah Clark",
        role: "People Partner",
        email: "hannah.clark@example.com",
        phone: "+44 20 7946 0712",
        address: "11 Park Row, Leeds LS1 5HD",
        initials: "HC",
        department: "People",
    },
    {
        id: "henry-smith",
        name: "Henry Smith",
        role: "Support Specialist",
        email: "henry.smith@example.com",
        phone: "+44 20 7946 0836",
        address: "5 Temple Street, Birmingham B2 5BN",
        initials: "HS",
        department: "Support",
    },
    {
        id: "zara-hughes",
        name: "Zara Hughes",
        role: "Marketing Manager",
        email: "zara.hughes@example.com",
        phone: "+44 20 7946 0964",
        address: "19 George Street, Oxford OX1 2AU",
        initials: "ZH",
        department: "Marketing",
    },
];
