const path = require('path')
const envPath = path.resolve(process.cwd(), '.env.local')

console.log({ envPath })

require('dotenv').config({ path: envPath })

const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
  },
})

async function query(q) {
  try {
    const results = await db.query(q)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}

// Create "entries" table if doesn't exist
async function migrate() {
  try {
    await query(`
    INSERT INTO bookings.rooms (username, room, time, created_at, updated_at)
    VALUES (null, 'p01', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p01', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p01', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p01', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p01', '05:00:00', DEFAULT, DEFAULT),
           (null, 'p02', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p02', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p02', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p02', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p02', '05:00:00', DEFAULT, DEFAULT),
           (null, 'p03', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p03', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p03', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p03', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p03', '05:00:00', DEFAULT, DEFAULT),
           (null, 'p04', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p04', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p04', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p04', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p04', '05:00:00', DEFAULT, DEFAULT),
           (null, 'p05', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p05', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p05', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p05', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p05', '05:00:00', DEFAULT, DEFAULT),
           (null, 'p06', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p06', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p06', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p06', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p06', '05:00:00', DEFAULT, DEFAULT),
           (null, 'p07', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p07', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p07', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p07', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p07', '05:00:00', DEFAULT, DEFAULT),
           (null, 'p08', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p08', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p08', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p08', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p08', '05:00:00', DEFAULT, DEFAULT),
           (null, 'p09', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p09', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p09', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p09', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p09', '05:00:00', DEFAULT, DEFAULT),
           (null, 'p10', '01:00:00', DEFAULT, DEFAULT),
           (null, 'p10', '02:00:00', DEFAULT, DEFAULT),
           (null, 'p10', '03:00:00', DEFAULT, DEFAULT),
           (null, 'p10', '04:00:00', DEFAULT, DEFAULT),
           (null, 'p10', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c01', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c01', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c01', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c01', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c01', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c02', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c02', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c02', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c02', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c02', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c03', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c03', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c03', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c03', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c03', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c04', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c04', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c04', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c04', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c04', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c05', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c05', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c05', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c05', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c05', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c06', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c06', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c06', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c06', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c06', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c07', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c07', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c07', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c07', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c07', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c08', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c08', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c08', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c08', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c08', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c09', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c09', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c09', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c09', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c09', '05:00:00', DEFAULT, DEFAULT),
           (null, 'c10', '01:00:00', DEFAULT, DEFAULT),
           (null, 'c10', '02:00:00', DEFAULT, DEFAULT),
           (null, 'c10', '03:00:00', DEFAULT, DEFAULT),
           (null, 'c10', '04:00:00', DEFAULT, DEFAULT),
           (null, 'c10', '05:00:00', DEFAULT, DEFAULT);
    `)
    console.log('migration ran successfully')
  } catch (e) {
    console.log(e);
    console.error('could not run migration, double check your credentials.')
    process.exit(1)
  }
}

migrate().then(() => process.exit())
