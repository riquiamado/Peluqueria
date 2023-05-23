const { Router } = require("express");
const router = Router();

//Home
// router.get("/", async (req, res) => {
//   try {
//     res.status(200).send("Hola mundo");
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

//services

const get_services= require("./services/getServices")
const get_services_id =require("./services/getServicesId")
const put_services = require("./services/putServices")
const delete_services= require("./services/deleteServices")
const post_services = require("./services/postServices")

router.use(get_services)
router.use(get_services_id)
router.use(put_services)
router.use(delete_services)
router.use(post_services)

//clients

const get_users = require("./users/getUsers")
const get_Users_Id = require("./users/getUsersById")
const post_Users = require("./users/postUsers")
const update_Users = require("./users/putUsers")
const delete_Users = require("./users/deleteUsers")

router.use(get_users)
router.use(get_Users_Id)
router.use(post_Users)
router.use(update_Users)
router.use(delete_Users)

//turnos

const get_turnos = require("./turnos/getTurnos")
const get_turnos_id = require("./turnos/getTurnosId")
const post_turnos = require("./turnos/postTurnos")
const put_turnos = require("./turnos/putTurnos")
const delete_turnos = require("./turnos/deleteTurnos")

router.use(get_turnos)
router.use(get_turnos_id)
router.use(post_turnos)
router.use(put_turnos)
router.use(delete_turnos)

//login

const get_login= require("./login/login")

router.use(get_login)

module.exports = router;