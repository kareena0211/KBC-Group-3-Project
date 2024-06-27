import Joi from 'joi';

const signup_Validation = (req, res, next) => {
    const { name, email, password, mobile_number, role, adminToken } = req.body;
    if (!name || !email || !password || !mobile_number || !role) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (!['user', 'admin'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
    }

    if (role === 'admin' && !adminToken) {
        return res.status(400).json({ message: 'Admin token is required for admin role' });
    }

    next();
};


// login vailidation here
const login_Validation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'org', 'edu'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+]{3,16}$'))
            .message('Invalid Password. Must be 3-16 characters and may include special characters like !@#$%^&*()_+')
            .required(),
    });

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        // Extract error messages from Joi validation
        const errorMessage = error.details.map(err => err.message);
        return res.status(400).json({ error: errorMessage });
    } else {
        next();
    }
};

export { signup_Validation, login_Validation };
