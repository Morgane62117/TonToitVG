const mongoose = require('mongoose');

const RoofSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: false,
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
    photo: {
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
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Roof', RoofSchema);