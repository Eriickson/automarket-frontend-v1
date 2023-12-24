export function getDeviceInfo() {
  const operatingSystem = detectOS();

  const browser = getBrowser();

  const deviceType = getDeviceType();

  return { operatingSystem, browser, device: deviceType };
}

function detectOS() {
  const userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];

  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "MacOS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "IOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}

const isBraveBrowser = () => {
  const navigator = window.navigator as any;
  if (navigator.brave != undefined) {
    if (navigator.brave.isBrave.name == "isBrave") {
      return true;
    } else {
      return false;
    }
  } else return false;
};

const isOperaBrowser = () =>
  navigator.userAgent.toLowerCase().includes("opr") || navigator.userAgent.toLowerCase().includes("opt");
const isMicrosoftEdge = () => navigator.userAgent.toLowerCase().includes("edg");
const isMozillaFirefox = () =>
  navigator.userAgent.toLowerCase().includes("firefox") || navigator.userAgent.toLowerCase().includes("fxios");
const isSafariBrowser = () => navigator.userAgent.toLowerCase().includes("safari");
const isGoogleChrome = () =>
  navigator.userAgent.toLowerCase().includes("chrome") || navigator.userAgent.toLowerCase().includes("crios");
const isInternetExplorer = () => navigator.userAgent.toLowerCase().includes("msie");
const isSamsungBrowser = () => navigator.userAgent.toLowerCase().includes("samsungbrowser");

type BrowserName =
  | "Google Chrome"
  | "Safari"
  | "Brave"
  | "Opera"
  | "Microsoft Edge"
  | "Mozilla Firefox"
  | "Internet Explorer"
  | "Samsung Browser"
  | "Unknown Browser";

function getBrowser() {
  let browserName: BrowserName = "Unknown Browser";

  if (isSafariBrowser()) browserName = "Safari";

  if (isGoogleChrome()) browserName = "Google Chrome";

  if (isBraveBrowser()) browserName = "Brave";

  if (isOperaBrowser()) browserName = "Opera";

  if (isMicrosoftEdge()) browserName = "Microsoft Edge";

  if (isMozillaFirefox()) browserName = "Mozilla Firefox";

  if (isInternetExplorer()) browserName = "Internet Explorer";
  if (isSamsungBrowser()) browserName = "Samsung Browser";

  return browserName;
}

function getDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/mobile|android|iphone|ipod|blackberry|windows phone/.test(userAgent)) {
    return "Mobile Device";
  } else if (/ipad/.test(userAgent)) {
    return "Tablet Device";
  } else if (/mac|macintosh|mac os x/.test(userAgent)) {
    return "Macintosh";
  } else if (/windows/.test(userAgent)) {
    return "Windows PC";
  } else if (/linux/.test(userAgent)) {
    return "Linux PC";
  } else {
    return "Unknown Device Type";
  }
}
