var api = require('etherscan-api').init('SDY8I2PWMXQEAMCR31Q9D7DRUYMIQFDZIZ');
var balance = api.contract
 .getabi('0x5a75A093747b72a0e14056352751eDF03518031d')
 .then(console.log)