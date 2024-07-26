const prisma = require('../config/prisma')

const getAccounts = async (req, res) => {
    try {
        const users = await prisma.bank_account.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const getAccountById = async (req, res) => {
    const { id } = req.params
    try {
        const Account = await prisma.bank_account.findUnique({
            where: { id: parseInt(id) },
            
        })
        if (!Account) {
            return res.status(400).json({ error: 'Account not found' })
        }
        res.status(200).json(Account)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const createAccount = async (req, res) => {
    try {
        const { userId } = req.body
        const finder = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
            
        })
        if (!finder) {
            return res.status(404).json({ error: 'User not found' })
        }

        const user = await prisma.bank_account.create({
            data: {
                bank_name: req.body.bank_name,
                bank_account_number: req.body.bank_account_number,
                balance: 0,
                userId:userId
            },
            
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getAccounts, getAccountById, createAccount }