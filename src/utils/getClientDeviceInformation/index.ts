export function navegatorInformation() {
  const nAgt = navigator.userAgent;
  let browserName = navigator.appName;
  let fullVersion = "" + parseFloat(navigator.appVersion);
  let majorVersion = parseInt(navigator.appVersion, 10);
  let nameOffset, verOffset, ix;

  // In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf("Version")) != -1) fullVersion = nAgt.substring(verOffset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf("Version")) != -1) fullVersion = nAgt.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if ((nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(";")) != -1) fullVersion = fullVersion.substring(0, ix);
  if ((ix = fullVersion.indexOf(" ")) != -1) fullVersion = fullVersion.substring(0, ix);

  majorVersion = parseInt("" + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = "" + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }
  /* 
  console.log(
    "" +
      "Browser name  = " +
      browserName +
      "<br>" +
      "Full version  = " +
      fullVersion +
      "<br>" +
      "Major version = " +
      majorVersion +
      "<br>" +
      "navigator.appName = " +
      navigator.appName +
      "<br>" +
      "navigator.userAgent = " +
      navigator.userAgent +
      "<br>"
  ); */

  console.log({
    browserName,
    fullVersion,
    majorVersion,
    navigatorAppName: navigator.appName,
    navigatorUserAgent: navigator.userAgent,
  });
}

export function getDeviceInfo() {
  // Get operating system information
  const operatingSystem = getOperatingSystem();

  // Get browser information
  const browser = getBrowser();

  // Get device type
  const deviceType = getDeviceType();

  navegatorInformation();

  return { operatingSystem, browser, deviceType };
}

function getOperatingSystem() {
  const platform = navigator.platform.toLowerCase();

  if (platform.includes("win")) {
    return "Windows";
  } else if (platform.includes("mac")) {
    return "MacOS";
  } else if (platform.includes("linux")) {
    return "Linux";
  } else {
    return "Unknown";
  }
}

function getBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/chrome/.test(userAgent)) {
    return "Google Chrome";
  } else if (/firefox/.test(userAgent)) {
    return "Mozilla Firefox";
  } else if (/safari/.test(userAgent)) {
    return "Safari";
  } else if (/edge/.test(userAgent)) {
    return "Microsoft Edge";
  } else if (/opera|opr/.test(userAgent)) {
    return "Opera";
  } else if (/msie|trident/.test(userAgent)) {
    return "Internet Explorer";
  } else {
    return "Unknown Browser";
  }
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
