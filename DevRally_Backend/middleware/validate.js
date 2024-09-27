const yup = require("yup");


const validate = async (req, res, next) => {
    try {
        const Schema = yup.object().shape({
            fullname: yup.string()
                .required('required')
                .matches(/^[A-Za-z\s]+$/, 'must contain only letters and spaces')
                .min(3, ' must be at least 3 characters long')
                .matches(/^[^\d!@#$%^&*(),.?":{}|<>\/]+(\s[^\d!@#$%^&*(),.?":{}|<>\/]+)*$/, ' cannot contain special characters or digits'),
                email: yup.string().email()
                .required('Email is required')
                .matches(/^[A-Za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address'),
            password: yup.string()
                .required('Password is required')
                .min(8, 'Password should be at least 8 characters long')
                .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
                .matches(/[a-z]/, 'Password should contain at least one lowercase letter')
                .matches(/\d/, 'Password should contain at least one number'),
            retypePassword: yup.string()
                .required('Retype password is required')
                .oneOf([yup.ref('password'), null], 'Passwords do not match')
        });
        await Schema.validate(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

module.exports = validate;