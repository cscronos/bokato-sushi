import {createPool} from 'mysql2/promise'

const pool = createPool({
    host: "db.inf.uct.cl",
    user: "A2022_csandoval",
    password: "A2022_csandoval",
    database: "A2022_csandoval",
})

export { pool } 