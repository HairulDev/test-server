/**
 * Serialize object data
 *
 * @param {object} obj - Object data
 */

const isEmpty = (obj) => {
  try {
    let json = {};
    let arr = [];
    if (
      obj === null ||
      obj === "" ||
      obj === {} ||
      obj === undefined ||
      ((json.constructor === obj.constructor ||
        arr.constructor === obj.constructor) &&
        Object.keys(obj).length === 0) ||
      (obj && obj.length === 0)
    ) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return true;
  }
  // (
  // value === undefined ||
  // value === null ||
  // (typeof value === 'object' && Object.keys(value).length === 0) ||
  // (typeof value === 'string' && value.trim().length === 0)
  // )
};
module.exports = {
  isEmpty,
};
