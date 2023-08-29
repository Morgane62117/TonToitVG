const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const RoofSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [100, 'Name can not be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [1500, 'Descritption can not be more than 1500 characters']
    },
    available: {
        //Array of strings
        type: [String],
        required: true,
        enum: [
            'Immédiatement',
            'Dans 1 à 3 mois', 
            'Au-delà de 3 mois'
        ]
    },
    type: {
        //Array of strings
        type: [String],
        required: true,
        enum: [
            'Immeuble',
            'Parking', 
            'Ecole',
            'Maison',
            'Entrepôt'
        ]
    },
    owner: {
        //Array of strings
        type: [String],
        required: true,
        enum: [
            'Particulier',
            'Collectivité', 
            'Entreprise'
        ]
    },
    area: {
        //Array of strings
        type: [String],
        required: true,
        enum: [
            'De 10 à 50m²',
            'De 50 à 100m²', 
            'De 100 à 500m²',
            'Plus de 500m²'
        ]
    },
    exposition: {
        //Array of strings
        type: [String],
        required: true,
        enum: [
            'Nord',
            'Sud',
            'Est',
            'Ouest'
        ]
    },
    photos: {
        type: [String],
        required: true
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        //GeoJSON Point
        type: {
            type: String, 
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        zipCode: String,
        state: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//Geocode & create location field
RoofSchema.pre('save', async function(next) {
        const loc = await geocoder.geocode(this.address);
        console.log(loc);
        this.location = {
            type: 'Point',
            coordinates: [loc[0].longitude, loc[0].latitude],
            formattedAddress: loc[0].formattedAddress,
            street: loc[0].streetName,
            city: loc[0].city,
            zipCode: loc[0].zipcode
        }
        //Do not save address in DB
        this.address = undefined;
        next();
})

module.exports = mongoose.model('Roof', RoofSchema);