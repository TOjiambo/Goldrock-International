(function() {
    var preconnectOrigins = ["https://cdn.shopify.com"];
    var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BTl4RMTS.js", "/cdn/shopifycloud/checkout-web/assets/c1/app.zBGvnggQ.js", "/cdn/shopifycloud/checkout-web/assets/c1/630ba094.BwF_yRmq.js", "/cdn/shopifycloud/checkout-web/assets/c1/4509beb0.CCkTTgvg.js", "/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.DSaMi-6_.js", "/cdn/shopifycloud/checkout-web/assets/c1/f025431a.BlsbPO0-.js", "/cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa.DOOKxIl4.js", "/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.C45WNbat.js", "/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.CXyT1AlU.js", "/cdn/shopifycloud/checkout-web/assets/c1/7d6bf786.uOWhuPbI.js", "/cdn/shopifycloud/checkout-web/assets/c1/0f5b1987.BfvBF3yX.js", "/cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8.LM7m9FaB.js", "/cdn/shopifycloud/checkout-web/assets/c1/a45fed45.Bt3CVL8b.js", "/cdn/shopifycloud/checkout-web/assets/c1/c328865d.Bj11LM-n.js", "/cdn/shopifycloud/checkout-web/assets/c1/f1384cc2.BX1JbjgR.js", "/cdn/shopifycloud/checkout-web/assets/c1/4618373b.Cc0oVCKO.js", "/cdn/shopifycloud/checkout-web/assets/c1/486c3fda.BklOkzUZ.js", "/cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8.BWJ18b1x.js", "/cdn/shopifycloud/checkout-web/assets/c1/19286c78.4oPQEgvp.js", "/cdn/shopifycloud/checkout-web/assets/c1/c7b92b97.68XW8D6-.js", "/cdn/shopifycloud/checkout-web/assets/c1/faece749.s13tjvQj.js", "/cdn/shopifycloud/checkout-web/assets/c1/77d9e668.Ukv9z7aP.js", "/cdn/shopifycloud/checkout-web/assets/c1/e7cc4629.CFkhONHQ.js", "/cdn/shopifycloud/checkout-web/assets/c1/2c7267bc.B8oi9ouB.js", "/cdn/shopifycloud/checkout-web/assets/c1/4661cd61.DFiTEllE.js", "/cdn/shopifycloud/checkout-web/assets/c1/928dbd30.DN3xiRBH.js", "/cdn/shopifycloud/checkout-web/assets/c1/77821758.CIHBOvKY.js", "/cdn/shopifycloud/checkout-web/assets/c1/82d59f8f.6Mmy6SGy.js", "/cdn/shopifycloud/checkout-web/assets/c1/08e2c58d.hHP_2Voc.js", "/cdn/shopifycloud/checkout-web/assets/c1/a8202753.2f28fR4S.js", "/cdn/shopifycloud/checkout-web/assets/c1/dfb65aab.C_iWwDm0.js", "/cdn/shopifycloud/checkout-web/assets/c1/e1177f6f.B_L3b1C3.js", "/cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5.OdDqFFR3.js", "/cdn/shopifycloud/checkout-web/assets/c1/c0466e46.BNCpBULP.js", "/cdn/shopifycloud/checkout-web/assets/c1/8d7e1337.D1SAQfdV.js", "/cdn/shopifycloud/checkout-web/assets/c1/5bf177e7.C1J86a1a.js", "/cdn/shopifycloud/checkout-web/assets/c1/f3089cd3.DyZUEvqS.js", "/cdn/shopifycloud/checkout-web/assets/c1/8da28279.CQOVvOpg.js", "/cdn/shopifycloud/checkout-web/assets/c1/a541bc81.iZFmtHCL.js", "/cdn/shopifycloud/checkout-web/assets/c1/6b0dea54.DWkKThs9.js", "/cdn/shopifycloud/checkout-web/assets/c1/9c33421f.D0zngM3k.js", "/cdn/shopifycloud/checkout-web/assets/c1/37c3ef79.BFV1ZaXe.js", "/cdn/shopifycloud/checkout-web/assets/c1/651bb548.DtwlG5UT.js", "/cdn/shopifycloud/checkout-web/assets/c1/83f74304.r7LOgXLk.js", "/cdn/shopifycloud/checkout-web/assets/c1/7edfee1d.CCjH-hnQ.js", "/cdn/shopifycloud/checkout-web/assets/c1/ce604576.DRj3vMAG.js", "/cdn/shopifycloud/checkout-web/assets/c1/b01c110b.CV-SN2-m.js", "/cdn/shopifycloud/checkout-web/assets/c1/4e32eceb.Brd5q1On.js", "/cdn/shopifycloud/checkout-web/assets/c1/f00fed33.DWRNfyM6.js", "/cdn/shopifycloud/checkout-web/assets/c1/94493b3a.FsKbR-oV.js", "/cdn/shopifycloud/checkout-web/assets/c1/99cd9b25.DChk8HM1.js", "/cdn/shopifycloud/checkout-web/assets/c1/890c145f.rKVYR3Xq.js", "/cdn/shopifycloud/checkout-web/assets/c1/a9ee22a0.DyM9UfnL.js", "/cdn/shopifycloud/checkout-web/assets/c1/56132226.CTq2F3Yc.js", "/cdn/shopifycloud/checkout-web/assets/c1/676eb8e9.DEmxnRMA.js", "/cdn/shopifycloud/checkout-web/assets/c1/0e3247a0.BMo_HEmW.js", "/cdn/shopifycloud/checkout-web/assets/c1/1dbf806c.B_CBYNNE.js", "/cdn/shopifycloud/checkout-web/assets/c1/a56386a6.pgjIFzGB.js", "/cdn/shopifycloud/checkout-web/assets/c1/674595ba.CqZ7__-N.js", "/cdn/shopifycloud/checkout-web/assets/c1/173d1fdf.BGWuS9dh.js", "/cdn/shopifycloud/checkout-web/assets/c1/0d85278a.BTCokTvy.js", "/cdn/shopifycloud/checkout-web/assets/c1/16138b9e.DnYHhhHl.js", "/cdn/shopifycloud/checkout-web/assets/c1/29cc4709.Dmzku3oQ.js", "/cdn/shopifycloud/checkout-web/assets/c1/d84045bf.DFLvAKw3.js", "/cdn/shopifycloud/checkout-web/assets/c1/55432860.CCkXsrAO.js", "/cdn/shopifycloud/checkout-web/assets/c1/0be192b6.Ai4zZHX3.js", "/cdn/shopifycloud/checkout-web/assets/c1/2bce9289.DLKaeH28.js", "/cdn/shopifycloud/checkout-web/assets/c1/62a11d3e.Chek7amW.js", "/cdn/shopifycloud/checkout-web/assets/c1/9a493f3d.JILDtkQM.js", "/cdn/shopifycloud/checkout-web/assets/c1/402b40d8.CS4XAXvh.js", "/cdn/shopifycloud/checkout-web/assets/c1/17db3e71.IOopDS9G.js", "/cdn/shopifycloud/checkout-web/assets/c1/b4f06cd6.CwW_AIzI.js", "/cdn/shopifycloud/checkout-web/assets/c1/2b0d1656.RNKZGKow.js", "/cdn/shopifycloud/checkout-web/assets/c1/64c3067d.Chv-25Ic.js", "/cdn/shopifycloud/checkout-web/assets/c1/bbe16958.DqeHNC8e.js", "/cdn/shopifycloud/checkout-web/assets/c1/6a8181a5.CRl7jAc5.js", "/cdn/shopifycloud/checkout-web/assets/c1/4205169c.AG6UWB1j.js", "/cdn/shopifycloud/checkout-web/assets/c1/1befea5c.AUldRUz7.js", "/cdn/shopifycloud/checkout-web/assets/c1/ff52cf6d.C-_S3LI1.js", "/cdn/shopifycloud/checkout-web/assets/c1/74e5a557.lG5CivoI.js", "/cdn/shopifycloud/checkout-web/assets/c1/f4d0afee.CBQgxqHw.js", "/cdn/shopifycloud/checkout-web/assets/c1/0b704646.C41dbynO.js", "/cdn/shopifycloud/checkout-web/assets/c1/a7ef2c81.Ct-zlrDZ.js", "/cdn/shopifycloud/checkout-web/assets/c1/f0b3b291.BdnUBWQI.js", "/cdn/shopifycloud/checkout-web/assets/c1/114cc9d1.C_JEseqR.js", "/cdn/shopifycloud/checkout-web/assets/c1/e7ae9e74.Bu-syBRv.js", "/cdn/shopifycloud/checkout-web/assets/c1/91e796b6.CaaqgVEd.js", "/cdn/shopifycloud/checkout-web/assets/c1/a222330e.CnBNIt4K.js", "/cdn/shopifycloud/checkout-web/assets/c1/c380a132.ulUjLqGB.js", "/cdn/shopifycloud/checkout-web/assets/c1/3839d836.1Y8QBsLp.js", "/cdn/shopifycloud/checkout-web/assets/c1/72fde58e.qO8U9Ihr.js", "/cdn/shopifycloud/checkout-web/assets/c1/8cad6ded.c2FNIoHB.js", "/cdn/shopifycloud/checkout-web/assets/c1/9e556116.CRsUds7F.js", "/cdn/shopifycloud/checkout-web/assets/c1/abf134e3.CasKGFAp.js", "/cdn/shopifycloud/checkout-web/assets/c1/e6a05f36.3e2i5BgB.js", "/cdn/shopifycloud/checkout-web/assets/c1/8e6bd8e5.DdS3bA_j.js", "/cdn/shopifycloud/checkout-web/assets/c1/a012ee00.Cn2lxNnl.js", "/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.SJDftYyY.js", "/cdn/shopifycloud/checkout-web/assets/c1/05f561d4.D2VGfuXW.js", "/cdn/shopifycloud/checkout-web/assets/c1/89318bee.CXm5PmEa.js", "/cdn/shopifycloud/checkout-web/assets/c1/0ee3e0d5.Dk2mYKhP.js", "/cdn/shopifycloud/checkout-web/assets/c1/38cb0284.sE4vrX3G.js", "/cdn/shopifycloud/checkout-web/assets/c1/bdb60128.Bd4iufBE.js", "/cdn/shopifycloud/checkout-web/assets/c1/a0df1226.llJxPnOY.js", "/cdn/shopifycloud/checkout-web/assets/c1/8efef14b.DyOdR0xl.js", "/cdn/shopifycloud/checkout-web/assets/c1/c1adaf81.Cx57sSL5.js", "/cdn/shopifycloud/checkout-web/assets/c1/21162507.ZBi71-Xy.js", "/cdn/shopifycloud/checkout-web/assets/c1/139f607b.BNZEKkUG.js", "/cdn/shopifycloud/checkout-web/assets/c1/5f1fce8b.e4QsuNYD.js", "/cdn/shopifycloud/checkout-web/assets/c1/bace9a08.17T_m5_T.js", "/cdn/shopifycloud/checkout-web/assets/c1/8e2be3f2.BpF8IDKA.js", "/cdn/shopifycloud/checkout-web/assets/c1/2d034bf2.zkV7XcW3.js", "/cdn/shopifycloud/checkout-web/assets/c1/c302da96.-_ROJcaR.js", "/cdn/shopifycloud/checkout-web/assets/c1/5ebef1a7.ClK4BS8r.js", "/cdn/shopifycloud/checkout-web/assets/c1/972590c9.dSfN0fWj.js", "/cdn/shopifycloud/checkout-web/assets/c1/9961965b.DDeysuQF.js", "/cdn/shopifycloud/checkout-web/assets/c1/bc751930.Dh3XXtum.js", "/cdn/shopifycloud/checkout-web/assets/c1/842452fd.C82yNvVW.js", "/cdn/shopifycloud/checkout-web/assets/c1/a70a5b74.B8nfHneT.js", "/cdn/shopifycloud/checkout-web/assets/c1/b068efe0.DbdNY4GB.js", "/cdn/shopifycloud/checkout-web/assets/c1/2692118b.Ckn17arf.js", "/cdn/shopifycloud/checkout-web/assets/c1/c4303b96.Coukgi7K.js", "/cdn/shopifycloud/checkout-web/assets/c1/7ee3a05c.DUe09rNA.js", "/cdn/shopifycloud/checkout-web/assets/c1/0d8691fc.uwkJQkY0.js", "/cdn/shopifycloud/checkout-web/assets/c1/b0923a20.913inT6-.js", "/cdn/shopifycloud/checkout-web/assets/c1/7e9c6d7c.CcM8rPn3.js", "/cdn/shopifycloud/checkout-web/assets/c1/ea392d18.BLmCmIxp.js", "/cdn/shopifycloud/checkout-web/assets/c1/b2ef26e8.CrwRmdri.js", "/cdn/shopifycloud/checkout-web/assets/c1/99bfe9cf.CYNBQV87.js", "/cdn/shopifycloud/checkout-web/assets/c1/1493337c.CiqgmcVV.js", "/cdn/shopifycloud/checkout-web/assets/c1/3c46c6f5.Dxc0a2ax.js", "/cdn/shopifycloud/checkout-web/assets/c1/e29daa9a.Da-XHt2j.js", "/cdn/shopifycloud/checkout-web/assets/c1/b2371320.DbJnjICa.js", "/cdn/shopifycloud/checkout-web/assets/c1/a735741f.DBKKhQIy.js", "/cdn/shopifycloud/checkout-web/assets/c1/5a1effbb.C-dTTZu7.js", "/cdn/shopifycloud/checkout-web/assets/c1/67e8c664.BWd7Lfof.js", "/cdn/shopifycloud/checkout-web/assets/c1/4bb32466.D3fP86Mk.js", "/cdn/shopifycloud/checkout-web/assets/c1/e32a8416.D-Pk3kzu.js", "/cdn/shopifycloud/checkout-web/assets/c1/eb0f242a.DWYM7CpL.js", "/cdn/shopifycloud/checkout-web/assets/c1/35fb5eb6.BsyT_a2z.js", "/cdn/shopifycloud/checkout-web/assets/c1/69f8f26d.p3Ne-43W.js"];
    var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CGRs8DQS.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/deferred-boot.BNIJ4_x8.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.1nMCMpIm.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/256cc32287.B1YSPUDc.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/a50c8864f4.BMdzfW_y.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/7188aae948xccd7bc85.Bi1nHaU-.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/90ea855f49.uZEuHncj.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/69c8bed031.BEvzDDvy.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/fed0657f2bxc9b4d095.CuRoM9zv.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1.Du9dByaI.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1x0e0212c9.ct4xfivv.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/c0d88fcb7bxbaeb52f9.BAjucZ-8.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/f409e9cd1fx9f0ef4a6.B0RErzdh.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/621ec27e44.BQzWZtyb.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/5caf6ce603.87JMHPUK.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/de4d443464.DPEapfiO.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/966e3f4d79.gzvCNwz_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/d4951797f3.CtjKurIY.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/df684aa9a8.B0R7Gq-A.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/f2a87b867b.CepnMqbE.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/4d60858badxb036935a.xO_7ctnq.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/65db0eadda.qa_ACxP4.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/5a34f22f1a.FOMlDqkM.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/e8404cbaefx27591707.BS8yVgoP.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/7aa3c6599b.C5b9n-0_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760d.DU0m5rdF.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760dxbaeb52f9.B0hio2RO.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/6559bc5a39x1573b800.vTcdVGq4.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/89f3b0bff6.D7Ujmshx.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/500596e378.CyQZvZOO.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/bde15ff106x11e90a44.t4ylkATc.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax11e90a44.KhTiKgPS.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax6d8a6990.DpLOWYa8.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/d34ebf45edx11e90a44.btyKOfco.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/81ca749d51x11e90a44.DrWvAMMF.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x11e90a44.wM_XNdAI.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x670d76d4.BbxB_6wt.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x03fe6ed3.CVKcAbIN.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96xd17a0c7b.BULdn7yC.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/343ea67e0bx11e90a44.s-Kd_X2E.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/401ac968b4x11e90a44.JBO5WNhc.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/81ca749d51.DRJckcGa.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0756/3181/files/Logo_Small_dbe74d5e-107b-4c39-8b3f-4586aa5e8f31_x320.jpg?v=1630518512"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();