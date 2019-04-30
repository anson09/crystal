# ARDAN

> rqsite dashboard and other services entry

## Commands

```bash
npm run mock : start with mock data

npm run start : start develop mode, see `nginx.conf.sample`

npm run build : generate release bundles

npm run lint : audit code style

npm run clean : clear cache

npm run deploy : sync dist, overwrite `.env.sample` to `.env`
```

## Release

there exists jobs in jenkins for deploying different env

https://www.ricequant.com/dashboard sync with master branch
https://anka.ricequant.com/dashboard sync with dev branch

## Contributions

1. Checkout an **commit_type/xxx** branch from dev
   Or checkout an **hotfix/xxx** branch from master

2. `API.md` contains all communication protocol

3. Keep with lint rules during coding and committing
