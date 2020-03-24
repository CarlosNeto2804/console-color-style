const colors_options = {
    black: 0,
    red: 1,
    green: 2,
    yellow: 3,
    blue: 4,
    magneta: 5,
    cyan: 6,
    white: 7,
    default: 9
};
/**
 * 
 * @param {string} color 
 * @param {string} informations 
 */
const printf = (color = 'default', informations = "") => {
    if(!colors_options[color]){
        console.log(`\x1b[31m`, "[ERROR] ---->  CONSOLE STYLE");
        console.log(`\x1b[31m`, "[ERROR] ---->  COLOR OPTION NOT FOUND");
        console.log(`\x1b[31m`, `[ERROR] ---->  THE '${color}' COLOR NOT FOUND`);
        console.log(`\x1b[34m`, `[INFO]  ---->  SUPPORTED COLORS: 'black', 'red', 'green', 'yellow', 'blue', 'magneta', 'cyan','white'`);
    }else{
        console.log(`\x1b[3${colors_options[color]}m`,informations)
    }
}
module.exports = printf