import "./style.css"

// https://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WindowsBestFit/bestfit1252.txt
const CHARS_AND_NAMES =
  "0;Null,1;Start Of Heading,2;Start Of Text,3;End Of Text,4;End Of Transmission,5;Enquiry,6;Acknowledge,7;Bell,8;Backspace,9;Horizontal Tabulation,a;Line Feed,b;Vertical Tabulation,c;Form Feed,d;Carriage Return,e;Shift Out,f;Shift In,10;Data Link Escape,11;Device Control One,12;Device Control Two,13;Device Control Three,14;Device Control Four,15;Negative Acknowledge,16;Synchronous Idle,17;End Of Transmission Block,18;Cancel,19;End Of Medium,1a;Substitute,1b;Escape,1c;File Separator,1d;Group Separator,1e;Record Separator,1f;Unit Separator,20;Space,21;Exclamation Mark,22;Quotation Mark,23;Number Sign,24;Dollar Sign,25;Percent Sign,26;Ampersand,27;Apostrophe,28;Left Parenthesis,29;Right Parenthesis,2a;Asterisk,2b;Plus Sign,2c;Comma,2d;Hyphen-Minus,2e;Full Stop,2f;Solidus,30;Digit Zero,31;Digit One,32;Digit Two,33;Digit Three,34;Digit Four,35;Digit Five,36;Digit Six,37;Digit Seven,38;Digit Eight,39;Digit Nine,3a;Colon,3b;Semicolon,3c;Less-Than Sign,3d;Equals Sign,3e;Greater-Than Sign,3f;Question Mark,40;Commercial At,41;Latin Capital Letter A,42;Latin Capital Letter B,43;Latin Capital Letter C,44;Latin Capital Letter D,45;Latin Capital Letter E,46;Latin Capital Letter F,47;Latin Capital Letter G,48;Latin Capital Letter H,49;Latin Capital Letter I,4a;Latin Capital Letter J,4b;Latin Capital Letter K,4c;Latin Capital Letter L,4d;Latin Capital Letter M,4e;Latin Capital Letter N,4f;Latin Capital Letter O,50;Latin Capital Letter P,51;Latin Capital Letter Q,52;Latin Capital Letter R,53;Latin Capital Letter S,54;Latin Capital Letter T,55;Latin Capital Letter U,56;Latin Capital Letter V,57;Latin Capital Letter W,58;Latin Capital Letter X,59;Latin Capital Letter Y,5a;Latin Capital Letter Z,5b;Left Square Bracket,5c;Reverse Solidus,5d;Right Square Bracket,5e;Circumflex Accent,5f;Low Line,60;Grave Accent,61;Latin Small Letter A,62;Latin Small Letter B,63;Latin Small Letter C,64;Latin Small Letter D,65;Latin Small Letter E,66;Latin Small Letter F,67;Latin Small Letter G,68;Latin Small Letter H,69;Latin Small Letter I,6a;Latin Small Letter J,6b;Latin Small Letter K,6c;Latin Small Letter L,6d;Latin Small Letter M,6e;Latin Small Letter N,6f;Latin Small Letter O,70;Latin Small Letter P,71;Latin Small Letter Q,72;Latin Small Letter R,73;Latin Small Letter S,74;Latin Small Letter T,75;Latin Small Letter U,76;Latin Small Letter V,77;Latin Small Letter W,78;Latin Small Letter X,79;Latin Small Letter Y,7a;Latin Small Letter Z,7b;Left Curly Bracket,7c;Vertical Line,7d;Right Curly Bracket,7e;Tilde,7f;Delete,20ac;Euro Sign,81;High Octet Preset,201a;Single Low-9 Quotation Mark,192;Latin Small Letter F With Hook,201e;Double Low-9 Quotation Mark,2026;Horizontal Ellipsis,2020;Dagger,2021;Double Dagger,2c6;Modifier Letter Circumflex Accent,2030;Per Mille Sign,160;Latin Capital Letter S With Caron,2039;Single Left-Pointing Angle Quotation Mark,152;Latin Capital Ligature Oe,8d;Reverse Index,17d;Latin Capital Letter Z With Caron,8f;Single Shift Three,90;Device Control String,2018;Left Single Quotation Mark,2019;Right Single Quotation Mark,201c;Left Double Quotation Mark,201d;Right Double Quotation Mark,2022;Bullet,2013;En Dash,2014;Em Dash,2dc;Small Tilde,2122;Trade Mark Sign,161;Latin Small Letter S With Caron,203a;Single Right-Pointing Angle Quotation Mark,153;Latin Small Ligature Oe,9d;Operating System Command,17e;Latin Small Letter Z With Caron,178;Latin Capital Letter Y With Diaeresis,a0;No-Break Space,a1;Inverted Exclamation Mark,a2;Cent Sign,a3;Pound Sign,a4;Currency Sign,a5;Yen Sign,a6;Broken Bar,a7;Section Sign,a8;Diaeresis,a9;Copyright Sign,aa;Feminine Ordinal Indicator,ab;Left-Pointing Double Angle Quotation Mark,ac;Not Sign,ad;Soft Hyphen,ae;Registered Sign,af;Macron,b0;Degree Sign,b1;Plus-Minus Sign,b2;Superscript Two,b3;Superscript Three,b4;Acute Accent,b5;Micro Sign,b6;Pilcrow Sign,b7;Middle Dot,b8;Cedilla,b9;Superscript One,ba;Masculine Ordinal Indicator,bb;Right-Pointing Double Angle Quotation Mark,bc;Vulgar Fraction One Quarter,bd;Vulgar Fraction One Half,be;Vulgar Fraction Three Quarters,bf;Inverted Question Mark,c0;Latin Capital Letter A With Grave,c1;Latin Capital Letter A With Acute,c2;Latin Capital Letter A With Circumflex,c3;Latin Capital Letter A With Tilde,c4;Latin Capital Letter A With Diaeresis,c5;Latin Capital Letter A With Ring Above,c6;Latin Capital Ligature Ae,c7;Latin Capital Letter C With Cedilla,c8;Latin Capital Letter E With Grave,c9;Latin Capital Letter E With Acute,ca;Latin Capital Letter E With Circumflex,cb;Latin Capital Letter E With Diaeresis,cc;Latin Capital Letter I With Grave,cd;Latin Capital Letter I With Acute,ce;Latin Capital Letter I With Circumflex,cf;Latin Capital Letter I With Diaeresis,d0;Latin Capital Letter Eth,d1;Latin Capital Letter N With Tilde,d2;Latin Capital Letter O With Grave,d3;Latin Capital Letter O With Acute,d4;Latin Capital Letter O With Circumflex,d5;Latin Capital Letter O With Tilde,d6;Latin Capital Letter O With Diaeresis,d7;Multiplication Sign,d8;Latin Capital Letter O With Stroke,d9;Latin Capital Letter U With Grave,da;Latin Capital Letter U With Acute,db;Latin Capital Letter U With Circumflex,dc;Latin Capital Letter U With Diaeresis,dd;Latin Capital Letter Y With Acute,de;Latin Capital Letter Thorn,df;Latin Small Letter Sharp S,e0;Latin Small Letter A With Grave,e1;Latin Small Letter A With Acute,e2;Latin Small Letter A With Circumflex,e3;Latin Small Letter A With Tilde,e4;Latin Small Letter A With Diaeresis,e5;Latin Small Letter A With Ring Above,e6;Latin Small Ligature Ae,e7;Latin Small Letter C With Cedilla,e8;Latin Small Letter E With Grave,e9;Latin Small Letter E With Acute,ea;Latin Small Letter E With Circumflex,eb;Latin Small Letter E With Diaeresis,ec;Latin Small Letter I With Grave,ed;Latin Small Letter I With Acute,ee;Latin Small Letter I With Circumflex,ef;Latin Small Letter I With Diaeresis,f0;Latin Small Letter Eth,f1;Latin Small Letter N With Tilde,f2;Latin Small Letter O With Grave,f3;Latin Small Letter O With Acute,f4;Latin Small Letter O With Circumflex,f5;Latin Small Letter O With Tilde,f6;Latin Small Letter O With Diaeresis,f7;Division Sign,f8;Latin Small Letter O With Stroke,f9;Latin Small Letter U With Grave,fa;Latin Small Letter U With Acute,fb;Latin Small Letter U With Circumflex,fc;Latin Small Letter U With Diaeresis,fd;Latin Small Letter Y With Acute,fe;Latin Small Letter Thorn,ff;Latin Small Letter Y With Diaeresis"
    .split(",")
    .map((str) => {
      const [char, name] = str.split(";")
      return {
        char: String.fromCodePoint(parseInt(char, 16)),
        name,
      }
    })

const remapped: Record<number, string> = {
  0: "2400",
  1: "2401",
  2: "2402",
  3: "2403",
  4: "2404",
  5: "2405",
  6: "2406",
  7: "2407",
  8: "2408",
  9: "2409",
  10: "240a",
  11: "240b",
  12: "240c",
  13: "240d",
  14: "240e",
  15: "240f",
  16: "2410",
  17: "2411",
  18: "2412",
  19: "2413",
  20: "2414",
  21: "2415",
  22: "2416",
  23: "2417",
  24: "2418",
  25: "2419",
  26: "241a",
  27: "241b",
  28: "241c",
  29: "241d",
  30: "241e",
  31: "241f",
  127: "2421",
  // https://www.nerdfonts.com/cheat-sheet
  129: "f1513",
  141: "f033c",
  143: "f0b3c",
  144: "f0379",
  157: "f489",
  173: "2508",
}

const byteElem = document.getElementById("byte")!
const numElem = document.getElementById("num")!
const charElem = document.getElementById("char")!
const charDescElem = document.getElementById("char-desc")!
const hexElem = document.getElementById("hex")!
const encodingElem = document.getElementById("encoding")!
const asteriskElem = document.getElementById("asterisk")!

function getNameForByteChar(byte: number) {
  return CHARS_AND_NAMES[byte].name
}

function roll(val?: number) {
  const byte = val ?? Math.floor(Math.random() * 256)

  const binary = byte.toString(2).padStart(8, "0")
  byteElem.textContent = binary

  if (remapped[byte] !== undefined) {
    charElem.textContent = String.fromCodePoint(parseInt(remapped[byte], 16))
    asteriskElem.classList.remove("hidden")
  } else {
    charElem.textContent = CHARS_AND_NAMES[byte].char
    asteriskElem.classList.add("hidden")
  }

  if (byte <= 127) {
    encodingElem.textContent = "ASCII"
  } else {
    encodingElem.textContent = "Windows-1252"
  }

  charDescElem.textContent = getNameForByteChar(byte)
  hexElem.textContent = byte.toString(16).padStart(2, "0").toUpperCase()

  const canvasElem = document.createElement("canvas")
  canvasElem.width = 288
  canvasElem.height = 36
  const ctx = canvasElem.getContext("2d")!

  const imageColor = "#ffffff11"

  ctx.strokeStyle = imageColor
  ctx.fillStyle = imageColor
  binary.split("").forEach((char, index) => {
    ctx.beginPath()
    if (char === "1") {
      ctx.ellipse(20 + index * 36, 20, 16, 16, 0, 0, Math.PI * 2)
      ctx.fill()
    } else {
      ctx.ellipse(20 + index * 36, 20, 13.5, 13.5, 0, 0, Math.PI * 2)
      ctx.lineWidth = 5
      ctx.stroke()
    }
    ctx.closePath()
  })

  canvasElem.toBlob((blob) => {
    if (blob !== null) {
      const url = URL.createObjectURL(blob)
      document.body.style.background = `url(${url}) var(--background)`
    }
  })

  const degree = 360 * (byte / 255)
  document.body.style.setProperty("--background", `hsl(${degree}deg 80% 20%)`)
  document.body.style.setProperty(
    "--background-dark",
    `hsl(${degree}deg 80% 10%)`
  )

  numElem.textContent = String(byte)
}

const now = new Date()
const time = `${String(now.getHours()).padStart(2, "0")}:${String(
  now.getMinutes()
).padStart(2, "0")}`
if (time === "02:56" || time === "14:56") {
  roll()

  const containerElem = document.getElementById("container")!
  containerElem.classList.remove("hide-data")
} else {
  document.getElementById(
    "not-yet"
  )!.textContent = `it's ${time}, come back at 2:56`
}
