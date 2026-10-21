// Textos de la página en español (el HTML) e inglés. Igual que la app: español si el
// navegador está en español; si no, inglés.
(function () {
  var EN = {
    lead: 'Play against the AI, with a friend on the same phone, or online.',
    invite: 'Once you have it, open the app → "Play online" → "Join a room" and type:',
    download: 'Download for Android',
    size: 'APK file for Android phones',
    howTitle: 'How to install it',
    step1: 'Tap "Download for Android".',
    step2: 'Open the downloaded file (mancala.apk).',
    step3: 'If Android asks, allow "install apps from this source".',
    step4: "Tap \"Install\". Updates arrive on their own; you won't need to download it again.",
    inviteTitle: "You've been invited to play!",
    roomCode: 'Room code',
    open: 'Open in Mancala',
    noApp: "I don't have the app: download it",
    manual: 'Not opening? Open the app → "Play online" → "Join a room" and type the code.',
    invalid: "This link doesn't have a valid room code.",
  };

  // Mismo formato que ROOM_CODE_ALPHABET / ROOM_CODE_LENGTH en src/game/online.ts.
  window.mancalaRoomCode = function (raw) {
    var code = (raw || '').trim().toUpperCase();
    return /^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/.test(code) ? code : null;
  };

  window.mancalaTranslate = function () {
    if (/^es\b/i.test(navigator.language || '')) return;
    document.documentElement.lang = 'en';
    document.querySelectorAll('[data-t]').forEach(function (node) {
      var text = EN[node.getAttribute('data-t')];
      if (text) node.textContent = text;
    });
  };
})();
