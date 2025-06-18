import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}

// Define a type for your cached object to improve type safety
interface CachedMongoose {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

// Declare a global variable to store the cached connection
// This ensures the connection is reused across hot reloads in development
declare global {
    var mongoose: CachedMongoose;
}


let cached = global.mongoose;

if (!cached) {
    // Initialize the cached object if it doesn't exist
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<typeof mongoose> {
    if (cached.conn) {
        // If a connection is already established, return it
        return cached.conn;
    }
    if (!cached.promise) {
        // If there's no pending connection promise, create one
        const opts = {
            bufferCommands: false, // Disables Mongoose's buffering of commands
            // useNewUrlParser: true, // Deprecated in recent Mongoose versions, usually not needed
            // useUnifiedTopology: true, // Deprecated in recent Mongoose versions, usually not needed
        };
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log('MongoDB Connected!');
            return mongoose;
        });
    }
    // Await the promise and store the resolved mongoose instance
    cached.conn = await cached.promise;
    return cached.conn;
}


export default dbConnect;