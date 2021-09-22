const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minLength: 3,
            maxLength: 55,
            unique: true,
            trim: true,
            required: true
        },
        surname: {
            type: String,
            minLength: 3,
            maxLength: 55,
            trim: true,
            required: true
        },
        dateBirthday: {
            type: Date,
            required: true
        },
        picture: {
            type: String,
            default: "../uploads/guest/pictures/random-user.png"
        },
        adminName: {
            type: String,
        },
        educRef: {
            type: String,
        },
        medicalRef: {
            type: String
        },
        files: {
            type: [
                {
                    Contacts: String,
                    Picto: String,
                    Planning: String,
                    MaterialMedical: String,
                    Treatment: String,
                    Toilet: String,
                    Toilet: String,
                    GeneralInfo: String,
                }
            ],
            required: true,
        }
    },
    {
        timestamps: true,
    },
);
const GuestModel = mongoose.model('guest', GuestSchema);
module.exports = GuestModel;