const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
  try {
    const emosiIXX = await promiseTheaterIXX();
    const emosiVGC = await promiseTheaterVGC();
    const data = emosiIXX.concat(emosiVGC);

    let total= 0
    data.map(item => item.hasil === emosi && (total += 1))
    return total;
  } catch (err) {
    return err
  }
    
};

module.exports = {
  promiseOutput,
};
