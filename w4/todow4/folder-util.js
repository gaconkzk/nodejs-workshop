const fs = require("fs"); 

module.exports = {
    checkFile: (path) => {
        if (!fs.existsSync(path)) {
            return 0;
        }
        const stat = fs.lstatSync(path);
        return stat.isFile();
    },
}
