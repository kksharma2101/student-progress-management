export const convertToCSV = (students: any[]) => {
    const headers = ['Name', 'Email', 'Phone', 'Handle', 'Current Rating', 'Max Rating'];
    const rows = students.map(s => [s.name, s.email, s.phone, s.handle, s.currentRating, s.maxRating]);

    return [headers, ...rows].map(row => row.join(',')).join('\n');
};
