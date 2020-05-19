# Streaming Guide ![CI](https://github.com/df1/streaming-guide/workflows/CI/badge.svg) ![License](https://img.shields.io/github/license/df1/streaming-guide)

This project is to provide a guide to video watchers where can they watch a specific show / movie.

# Tech Spec
## Stacks
- Firebase (or Heroku + Auth0) (or Repl.it + Repl Auth)
- GraphQL / Appolo
- Angular

## Development Environment Setup
```bash
ng serve -c=dev
```
With `-c=dev` configuration on, it will add the files of /src/test-util/ to local testing server.
If the local host name is `127.0.0.1`, it will use Firebase Auth's anonymous login by default. Otherwise, you may use `localhost` to use OAuth sign in methods.

# Supported Streaming Platforms
## Taiwan
- Apple TV+
- Amazon Prime Video
- CATCHPLAY+
- friDay影音
- Google Play電影
- GagaOOLala
- Hami Video
- HBO GO
- iTunes
- KKTV
- LINE TV
- LiTV立視線上影視
- myVideo
- Netflix
- Vidol影音
- WeTV
- YouTube
- 四季線上影視
- 公視+
- 愛奇藝台灣站
- 酷瞧
### To be added
- Yahoo! TV




