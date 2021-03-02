const User = require('../../models/UserModel');
const Yup = require('yup');
const { Op } = require('sequelize');

module.exports = {
    exists: async (req, res, next) => {
        const user = await User.findByPk(req.params.user_id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return next();
    },
    store: async (req, res, next) => {
        try{
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().required().min(6),
                phone: Yup.string().min(11).max(11).required(),
                birth: Yup.date().required(),
            });

            await schema.validate(req.body);

            const email = await User.findOne({ where: { email: req.body.email }});

            if(email){
                return res.status(409).json({ error: 'This email is already registered.' });
            }

            const phone = await User.findOne({ where: { phone: req.body.phone }});

            if(phone){
                return res.status(409).json({ error: 'This phone is already registered.' });
            }
      
            return next();
        }catch(e){
            return res.status(400).json({ error: e.message });
        }
    },
    update: async (req, res, next) => {
        try{
            const schema = Yup.object().shape({
                name: Yup.string(),
                email: Yup.string().email(),
                password: Yup.string().min(6),
                phone: Yup.string().min(11).max(11),
                birth: Yup.date(),
            });

            await schema.validate(req.body);

            if(req.body.email){
                const email = await User.findOne({ where: { 
                    id: { [Op.not]: req.params.userId },
                    email: req.body.email,
                }});

                if(email){
                    return res.status(409).json({ error: 'This email is already registered.' });
                }
            }

            if(req.body.phone){
                const phone = await User.findOne({ where: { 
                    id: { [Op.not]: req.params.userId },
                    phone: req.body.phone, 
                }});

                if(phone){
                    return res.status(409).json({ error: 'This phone is already registered.' });
                }
            }

            return next();
        }catch(e){
            return res.status(400).json({ error: e.message });
        }
    },
    updatePassword: async (req, res, next) => {
        try{
            const schema = Yup.object().shape({
                old_password: Yup.string().min(6).required(),
                password: Yup.string().min(6).required(),
            });

            await schema.validate(req.body);
      
            return next();
        }catch(e){
            return res.status(400).json({ error: e.message });
        }
    }
}
