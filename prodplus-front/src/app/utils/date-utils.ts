export function toDateApi(d: Date): string {
  let m = '' + (d.getUTCMonth() + 1);
  let y = '' + (d.getUTCFullYear());
  let x = '' + d.getUTCDate();

  if (m.length < 2) m = '0' + m;
  if (x.length < 2) x = '0' + x;

  return [y, m, x].join('-');
}

export function toDateTimeApiUTC(d: Date): string {
  let m = '' + (d.getUTCMonth() + 1);
  let y = '' + (d.getUTCFullYear());
  let x = '' + d.getUTCDate();
  let h = '' + d.getUTCHours();
  let i = '' + d.getUTCMinutes();

  if (m.length < 2) m = '0' + m;
  if (x.length < 2) x = '0' + x;
  if (h.length < 2) h = '0' + h;
  if (i.length < 2) i = '0' + i;

  return [y, m, x].join('-') + 'T' + [h, i].join(':');
}

export function toDateTimeString(d: Date): string {
  let m = '' + (d.getUTCMonth() + 1);
  let y = '' + (d.getUTCFullYear());
  let x = '' + d.getUTCDate();
  let h = '' + d.getUTCHours();
  let i = '' + d.getUTCMinutes();

  if (m.length < 2) m = '0' + m;
  if (x.length < 2) x = '0' + x;
  if (h.length < 2) h = '0' + h;
  if (i.length < 2) i = '0' + i;

  return [y, m, x].join('-') + ' ' + [h, i].join(':');
}

export function toDateTimeApi(d: Date): string {
  let m = '' + (d.getMonth() + 1);
  let y = '' + (d.getFullYear());
  let x = '' + d.getDate();
  let h = '' + d.getHours();
  let i = '' + d.getMinutes();

  if (m.length < 2) m = '0' + m;
  if (x.length < 2) x = '0' + x;
  if (h.length < 2) h = '0' + h;
  if (i.length < 2) i = '0' + i;

  return [y, m, x].join('-') + 'T' + [h, i].join(':');
}
