import JSEncrypt from 'jsencrypt/bin/jsencrypt.min';

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh6HkK+rCM37FAzCHVythTc6pxvr551K07CRhdX/NjCddHAuQMOd/57R5fiIwgVNEfCsD1cIyS6A8IWj4DtJLR2t29JehPpqiFSJ4hNtDcLNxNJiYRcCQvyMQeyQIPE5Ljc35c72YwDtQAsIJChsauyLrc+E6HC3gn1JDm18HNXwIDAQAB';
const privateKey = 'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAKHoeQr6sIzfsUDMIdXK2FNzqnG+vnnUrTsJGF1f82MJ10cC5Aw53/ntHl+IjCBU0R8KwPVwjJLoDwhaPgO0ktHa3b0l6E+mqIVIniE20Nws3E0mJhFwJC/IxB7JAg8TkuNzflzvZjAO1ACwgkKGxq7Iutz4TocLeCfUkObXwc1fAgMBAAECgYAWwCzqDwnp8bDdkxGaEhPNvi4QJ6ZqRilFZ2TGEiqIGyTl9JEI6sT/QIOJFw3hqSltfDxbAMKwDe221b9rE9+hZhE2rrpwcTKuehob9Z8CObYeUHR9HG7Qb2tYRElvSCWo74iz2zajXAvJLjIE4MPuPYqXC5zOabH+EJ/eaOzVwQJBANmRkMlb+qzp1GWuqFMHP+5MeYhFwUHVX7fxKNA24oHldX8zjPIZ6d3vaRfliTvxOaz1T80acvJkkb7zHBmaW38CQQC+gfF8Lg+nvBY/S3wfOPL8FcntP16jdFhNNZmbOxq72ZmCfl5Zk5cYNBc4rDSrd9Sj4TkLLug+wrK6Wr117P4hAkBOVxnZR2NVy8SM8HzvmJauiZ7hMKzLtbcHlrBpeLnKqALM0JUZv7b0EPa4ghAOI2fvHU2kvrdRDGFmbkdZ+LilAkBnX8eT5MKl+A/yZJmDr7laRNB/poVKGNXZf55Md3P4Pwlnn/6+iLHSdmGrZPZnnOyLyKjVgqyPccLeEGMCXIlBAkAt2OMwss16OH2x79OcfBrabU5iCVbDHg56JYGbWP8KcPfvspxtL/4TdACRsa+yCMcI6L29Q4wn791SEEnE834a';

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // 设置公钥
  return encryptor.encrypt(txt); // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPrivateKey(privateKey); // 设置私钥
  return encryptor.decrypt(txt); // 对数据进行解密
}
