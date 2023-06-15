const express = require('express')
const router = express.Router()

const users = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' }
]

router.get('/users', (req,res) => {
   res.status(200).json(users)
})
router.get('/users/:id', (req,res) => {
    let param = req.params.id
    users.forEach( user => {
        if(param == user.id){
           res.status(200).json('Se encontro el usuario')
        }
    })
    res.status(404).send('no se encontro el usuario')

})
router.post('/create', (req,res) => {
    users.push(req.body)
    res.redirect('users')
})
router.put('/update', (req,res) => {

})
router.delete('/delete', (req,res) => {

})

module.exports = router