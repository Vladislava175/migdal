export const Process = {
    superClaim: {
        superClaimNum: 0,
        superClaimStatus:  [
            { code: 1, value: "התביעה אושרה" },
            { code: 2, value: "התביעה נדחתה" },
            { code: 4, value: "טרם התקבלה החלטה" }
        ],
    },
    insured: {
        address: {
            cityName: '',
            streetName: '',
        },
        identityType:0,
        age: 0,
        lastName: '',
        identity: 0,
        firstName: ''
    },
    contactPersons: [{
        id: 0,
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