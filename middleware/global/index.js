import mysql from 'mysql2/promise';

const useDataBase = async (ctx, next) => {
    try {
        const pool = mysql.createPool({
            host: 'localhost',
            database: 'world',
            user: 'root',
            password: 'guoshuai',
        });
        ctx.dbExecute = async (sql, values,options={}) => {
            let connection
            try {
                connection = await pool.getConnection()
                connection.config.namedPlaceholders = true
                const res = await connection.query({
                    sql,
                    values,
                    ...options
                })
                pool.releaseConnection()
                return res
            } catch (e) {
                connection && pool.releaseConnection()
                throw e
            }
        }
    } catch (err) {
        console.log('eeee',err)
    }
    await next()
}
export {useDataBase}
