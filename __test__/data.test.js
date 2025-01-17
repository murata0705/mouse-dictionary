import data from "../src/options/logic/data";
import defaultsettings from "../src/settings/defaultsettings";

test("", () => {
  expect(true).toEqual(data.byteArrayMayBeShiftJis([]));

  expect(true).toEqual(data.byteArrayMayBeShiftJis([0x81, 0x40]));
  expect(true).toEqual(data.byteArrayMayBeShiftJis([0x9f, 0x7e]));
  expect(true).toEqual(data.byteArrayMayBeShiftJis([0xe0, 0xef]));
  expect(true).toEqual(data.byteArrayMayBeShiftJis([0xef, 0xfc]));
  expect(true).toEqual(data.byteArrayMayBeShiftJis([0x00, 0x1f, 0x7f, 0x20, 0x7e, 0xa1, 0xdf]));
  expect(true).toEqual(data.byteArrayMayBeShiftJis([0x40, 0x7e]));

  expect(false).toEqual(data.byteArrayMayBeShiftJis([0x80]));
  expect(false).toEqual(data.byteArrayMayBeShiftJis([0x81, 0x3f]));
  expect(false).toEqual(data.byteArrayMayBeShiftJis([0x9f, 0x7f]));
  expect(false).toEqual(data.byteArrayMayBeShiftJis([0xe0, 0x7f]));
  expect(false).toEqual(data.byteArrayMayBeShiftJis([0xef, 0xfd]));
});

test("", () => {
  const d1 = defaultsettings;
  const d2 = data.preProcessSettings(d1);
  const d3 = data.postProcessSettings(d1);
  expect(false).toEqual(d1 === d2);
  expect(false).toEqual(d2 === d3);

  expect(0).toEqual(d1.replaceRules.filter(r => r.key).length);
  expect(d1.replaceRules.length).toEqual(d1.replaceRules.length);
  expect(d2.replaceRules.length).toEqual(d2.replaceRules.filter(r => r.key).length);
  expect(0).toEqual(d3.replaceRules.filter(r => r.key).length);

  expect(JSON.stringify(d1)).toEqual(JSON.stringify(d3));
});
