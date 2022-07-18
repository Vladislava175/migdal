export const Process = {
    superClaim: {
        // superClaimNum: 0,
        // superClaimStatus:  [
        //     { code: 1, value: "התביעה אושרה" },
        //     { code: 2, value: "התביעה נדחתה" },
        //     { code: 4, value: "טרם התקבלה החלטה" }
        // ],
        superClaimType: [
            { code: 1, value: "התביעה אושרה" },
            { code: 2, value: "התביעה נדחתה" },
            { code: 4, value: "טרם התקבלה החלטה" }
        ],
        eventDate: 1658143795,
        claimCause: [
            { code: 1, value: "תאונה" },
            { code: 2, value: "מחלה" },
            { code: 5, value: "תאונת עבודה" },
            { code: 6, value: "אחר" },
        ],
        injuryType: [
            { code: 1, value: "אגן" },
            { code: 2, value: "גפיים" },
            { code: 5, value: "ראש" },
            { code: 6, value: "גב" },
            { code: 7, value: "לב" },
            { code: 9, value: "נפש" },
        ],
        submitedBy: [

        ],
        submitionMethod: [
            { code: 1, value: 'דואר' },
            { code: 2, value: 'דיגיטל' },
            { code: 3, value: 'פקס' },
        ]

    },
    insured: {
        // address: {
        //     cityName: '',
        //     streetName: '',
        // },
        // identityType:0,
        // age: 0,
        // lastName: '',
        // identity: 0,
        // firstName: ''
    },
    contactPersons: [{
        deliveryFlag: false,
        type:  [
            { code: 1, value: 'מבוטח' },
            { code: 2, value: 'סוכן' },
            { code: 3, value: 'בן/בת זוג' },
        ],
        name: '',
        phoneNumber:0,
        email: '',
        address: ''
    }]
}