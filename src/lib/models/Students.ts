import mongoose, { Schema } from 'mongoose';

const StudentSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    handle: String,
    currentRating: Number,
    maxRating: Number,
});

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);
