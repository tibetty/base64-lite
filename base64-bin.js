'use strict';

(() => {
    if (window && window.atob && window.btoa) {
        if (!window.base64) {
            window.base64 = {};
        }

        Object.assign(window.base64, {
            decode: (base64) => {
                const s = window.atob(base64);
                const rs = new Uint8Array(s.length);
                rs.map((_, i) => rs[i] = s.charCodeAt(i));
                return rs;
            },

            encode: (byteArray) => {
                if (byteArray instanceof ArrayBuffer) {
                    byteArray = new Uint8Array(byteArray);
                }

                if (byteArray instanceof Uint8Array) {
                    return window.btoa(byteArray.reduce((s, b) => s + String.fromCharCode(b), ''));
                }
            }
        });
    }
})();
