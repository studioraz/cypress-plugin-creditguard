// TODO: use this file to make requests to the server

const axios = require('axios');

const data = {
    user: "cgdemo",
    password: "C!kd2nc3a",
    int_in: `<ashrait>
                    <request>
                        <version>2000</version>
                        <language>HEB</language>
                        <dateTime/>
                        <requestId/>
                        <command>doDeal</command>
                        <doDeal>
                            <terminalNumber>0882810010</terminalNumber>
                            <cardNo>CGMPI</cardNo>
                            <total>100000</total>
                            <transactionType>Debit</transactionType>
                            <creditType>RegularCredit</creditType>
                            <currency>ILS</currency>
                            <transactionCode>Phone</transactionCode>
                            <validation>TxnSetup</validation>
                            <mid>13092</mid>
                            <uniqueid>0.22462572454608765</uniqueid>
                            <mpiValidation>Token</mpiValidation>
                            <keepCD>1</keepCD>
                            <successUrl>https://postman-echo.com/get</successUrl>
                            <errorUrl>https://postman-echo.com/get</errorUrl>
                            <cancelUrl>https://postman-echo.com/get</cancelUrl>
                            <paymentPageData>
                                <ppsJSONConfig>{"frameAncestorURLs":"http://localhost","uiCustomData":{"uiLang":"heb", "keepCCDetails": "true"}}</ppsJSONConfig>
                            </paymentPageData>
                        </doDeal>
                    </request>
                </ashrait>`
};


function getCGIframe() {
    return axios.post("https://cguat2.creditguard.co.il/xpo/Relay",
        data,{
        headers: {
            // 'application/json' is the modern content-type for JSON, but some
            // older servers may use 'text/json'.
            // See: http://bit.ly/text-json
            'content-type': 'text/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    });
}

module.exports = getCGIframe;


