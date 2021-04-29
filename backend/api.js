module.export = { 
    api: {
        
        users: {
        // @next: require: ["Models/User", "Middleware/auth", "_O/Validator"],
            get: `async (req, res) => {
                try {
                    const getAllUsers = await User.find();
                    res.status(200).json(getAllusers);
                } catch {
                    res.status(500).json({msg: "Server Error."})
                }
            }`,
            post: `async (req, res) => {
                try {
                    const getAllUsers = await User.find();
                    res.status(200).json(getAllusers);
                } catch {
                    res.status(500).json({msg: "Server Error."})
                }
            }`,
            
        },

        profiles: {
        // @next require: ["Models/User", "Middleware/auth", "_O/Validator"],
            get: `async (req, res) => {
                        try {
                            const getAllUsers = await User.find();
                            res.status(200).json(getAllusers);
                        } catch {
                            res.status(500).json({msg: "Server Error."})
                        }
                    }`,
            post: `async (req, res) => {
                        try {
                            const getAllUsers = await User.find();
                            res.status(200).json(getAllusers);
                        } catch {
                            res.status(500).json({msg: "Server Error."})
                        }
                    }`,

        user: {
            get: `async (req, res) => {
                    try {
                        const getUserById = await User.findById();
                        res.status(200).json(getAllusers);
                    } catch {
                        res.status(500).json({msg: "Server Error."})
                    }
                }`,
            
            }
        },
    }
}