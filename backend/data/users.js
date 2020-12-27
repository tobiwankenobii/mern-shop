import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@admin.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane',
        email: 'jane@admin.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;
