export interface Student {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    codeforcesHandle: string;
    currentRating?: number;
    maxRating?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

// For the create form, we omit the _id field
export type CreateStudent = Omit<Student, '_id'>;