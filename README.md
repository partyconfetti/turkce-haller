# Türkçe Haller

[![npm package](https://nodei.co/npm/turkce-haller.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/turkce-haller/)

## Kurulum
`npm install turkce-haller --save`

## Nasıl kullanırım
```javascript
const haller = require('turkce-haller');

haller('Ankara', 'den') // Ankara’dan
haller('Ankara', 'den', '\' ') // Ankara' dan
```

## API
haller(isim, hal, *kesmeIsareti*)

```kesmeIsareti``` İsteğe bağlı, default: ```’```

## Ekler

| Durum                            | Ekler  | Kullanım  | Örnek      |
|----------------------------------|--------|-----------|------------|
| Yönelme Hali                     | -e     | e         | Sercan’a   |
| Belirtme Hali                    | -i     | i         | Sercan’ı   |
| Bulunma Hali                     | -de    | de        | Sercan’da  |
| Ayrılma Hali                     | -den   | den       | Sercan’dan |
| İyelik Eki                       | -m -n  | iyelik    | Sercan’ın  |

## Lisans
MIT

## Thanks
Based on [haller.js](https://github.com/sercaneraslan/haller.js)

✨ – [Try pollme!](https://pollme.co)