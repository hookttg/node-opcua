var hexy = require("hexy");
var should = require("should");

var crypto_utils = require("../../lib/misc/crypto_utils");

describe("Crypto utils", function () {
    it("should read a PEM file",function(){

        var certificate = crypto_utils.readCertificate('certificates/cert.pem');

        if (false) {
            console.log(certificate.toString("hex"));
            console.log(certificate.toString("base64"));
            console.log(hexy.hexy(certificate,{width: 32}));
        }

        certificate.toString("base64").should.equal(
        "MIIDJTCCAo6gAwIBAgIJAKM/ZiaPpHuNMA0GCSqGSIb3DQEBBQUAMHoxCzAJBgNV" +
        "BAYTAkZSMQwwCgYDVQQIEwNJREYxDjAMBgNVBAcTBVBhcmlzMRIwEAYDVQQLEwlB" +
        "Q01FL0xBQk8xGzAZBgNVBAMTEk5vZGVPUENVQS9VQVNlcnZlcjEcMBoGCSqGSIb3"+
        "DQEJARYNaW5mb0BhY21lLmNvbTAeFw0xNDExMDUyMDI3NTlaFw0xNTExMDUyMDI3"+
        "NTlaMHoxCzAJBgNVBAYTAkZSMQwwCgYDVQQIEwNJREYxDjAMBgNVBAcTBVBhcmlz"+
        "MRIwEAYDVQQLEwlBQ01FL0xBQk8xGzAZBgNVBAMTEk5vZGVPUENVQS9VQVNlcnZl"+
        "cjEcMBoGCSqGSIb3DQEJARYNaW5mb0BhY21lLmNvbTCBnzANBgkqhkiG9w0BAQEF"+
        "AAOBjQAwgYkCgYEA1U1fm62pomj2XNuEYZqBXS987Yl0u0BKFt6rwnw6seLQCSkm"+
        "Vray31p5fdkYVFBVwYTYUrk3HDM4qFnsPvJbEAC95TlAAjEb5cW0Xnx9T1nMesIv"+
        "ebBS3u+Dy4CHCOYff2uUY/Dem5wHI//BqbDFtlcJ2uJTfMZBIAytxllubXECAwEA"+
        "AaOBsjCBrzAMBgNVHRMBAf8EAjAAMA4GA1UdDwEB/wQEAwIC9DAgBgNVHSUBAf8E"+
        "FjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwTwYDVR0RBEgwRocEfwAAAYYUdXJuOk5v"+
        "ZGVPUENVQS1TZXJ2ZXKCCWxvY2FsaG9zdIIJMTI3LjAuMC4xghJ3d3cueW91cmRv"+
        "bWFpbi50bGQwDAYDVR0OBAUEA/4CETAOBgNVHSMEBzAFgAP+AhEwDQYJKoZIhvcN"+
        "AQEFBQADgYEAtbQnMTrxpAxOo8cYfuIbpjCFPKcEfsxUf55DtX5eWjR98W9eeQxh"+
        "3RhbrU9y9iAqLbTtDLbhpCSKcfKjU8l/maCVKl9VhOW8t8gVaLEwYGAq1BXNrj8f"+
        "Clf72F/neh0haqvQ7BB8hEtiwUQQULxdLbTFEaXGLgA12U2rGadIRv0=");

    });


    it("makeSHA1Thumbprint should produce a 20-byte thumbprint ",function() {


        var make_lorem_ipsum_buffer = require("../helpers/make_lorem_ipsum_buffer").make_lorem_ipsum_buffer;

        var buf= make_lorem_ipsum_buffer();

        var digest = crypto_utils.makeSHA1Thumbprint(buf);

        digest.should.be.instanceOf(Buffer);

        digest.length.should.eql(20); // SHA1 should condensed to 160 bits

    });
});
