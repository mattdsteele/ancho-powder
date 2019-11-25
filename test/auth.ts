import process from 'process';
const userid = process.env.PAPRIKA_USER!;
const password = process.env.PAPRIKA_PW!;

export { userid, password };
