import { Entity } from './Entity';

const browsers = [
  new Entity('Firefox', /Firefox\/([0-9.]+)/),
  new Entity('Edge', /Edge\/([0-9.]+)/),
  new Entity('Opera', /OPR\/([0-9.]+)/),
  new Entity('SamsungInternet', /SamsungBrowser\/([0-9.]+)/),
  new Entity('Maxthon', /Maxthon\/([0-9.]+)/),
  new Entity('Chrome', /Chrome\/([0-9.]+)/),
  new Entity('Safari', /Version\/([0-9.]+) Safari\//),
  new Entity('InternetExplorer', /MSIE ([0-9.]+)/)
];

export { browsers };
