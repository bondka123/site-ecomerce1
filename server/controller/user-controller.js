import User from '../model/userSchema.js';
import bcrypt from 'bcrypt';

// 🔐 LOGIN
export const userLogIn = async (request, response) => {
    try {
        const { email, password } = request.body;

        const user = await User.findOne({ email });
        if (!user) {
            return response.status(401).json({ message: 'Invalid Login' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return response.status(401).json({ message: 'Invalid Login' });
        }

        return response.status(200).json({
            message: `${user.username} login successful`,
            user: {
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// 📝 SIGNUP
export const userSignUp = async (request, response) => {
    try {
        const { firstname, lastname, username, email, password } = request.body;

        const exist = await User.findOne({ username });
        if (exist) {
            return response.status(401).json({ message: 'User already exist' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        response.status(200).json({
            message: 'User registered successfully',
            user: {
                firstname,
                lastname,
                username,
                email
            }
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
