
const prisma = require('../config/prisma')

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: { profile: true }
    })
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        profile: {
          create: {
            identity_type:req.body.identity_type,
            identity_number:req.body.identity_number,
            // address:address,
            // phone:phone
          }
        }
      },
      include: {
        profile: true
      }
    })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { getUsers, getUserById, createUser }