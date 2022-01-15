import fs from 'fs'
import path from 'path'

const model = (req, res, next) => {
    req.readData = function (folder, fileName) {
        return fs.readFileSync(path.join(process.cwd(), 'src', 'database', folder, fileName), 'utf-8')
    }

    req.writeData = function (folder, fileName, data) {
        fs.writeFileSync(path.join(process.cwd(), 'src', 'database', folder, fileName), JSON.stringify(data, null, 4))
        return 'Data added'
    }
    next()
}

export default model