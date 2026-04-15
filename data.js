const clientData = {
  groom: "Name",
  bride: "Name",
  date: "December 20, 2026",
  location: "Gadag",
  venue: "SBS Garden",
  phone: "917204683500",
  maps: "https://www.google.com/maps?q=SBS+Garden+Gadag&output=embed",
  dir: "https://www.google.com/maps/dir/?api=1&destination=SBS+Garden+Gadag",
  story: "Our journey begins ❤️",
  video: "video.mp4",
  events: "Haldi-10AM,Sangeet-6PM,Wedding-11AM",
  gallery: "",
  entrySubtitle: "Together with our families",
  entryBtnText: "💌 Open Invitation"
};

const params = new URLSearchParams(window.location.search);

// ================= UI UPDATE =================

// HERO
function getValue(key) {
  return params.get(key) || clientData[key];
}

function applyClientData() {
  const groom = getValue("groom");
  const bride = getValue("bride");
  const date = getValue("date");
  const location = getValue("location");
  const venue = getValue("venue");
  const phone = getValue("phone");
  const maps = getValue("maps");
  const directions = getValue("dir");
  const story = getValue("story");
  const video = getValue("video");
  const events = getValue("events");
  const gallery = getValue("gallery");

  document.title = `${groom} ❤️ ${bride}`;
  document.getElementById("title").innerText = `💍 ${groom} Weds ${bride}`;
  document.getElementById("dateLoc").innerText = `${date} • ${location}`;
  document.getElementById("venueText").innerText = venue;
  document.getElementById("detailsDate").innerText = date;

  let eventsHTML = "";
  events.split(",").forEach(e => {
    eventsHTML += `<p>🎊 ${e.replace("-", " – ")}</p>`;
  });
  document.getElementById("eventsList").innerHTML = eventsHTML;

  document.getElementById("mapFrame").src = maps;
  document.getElementById("dirBtn").href = directions;
  const navigateBtn = document.getElementById("navigateBtn");
  if (navigateBtn) {
    navigateBtn.href = directions;
  }
  document.getElementById("contactBtn").href = `https://wa.me/${phone}`;
  document.getElementById("storyText").innerText = story;
  document.getElementById("storyVideo").src = video;

  const entryTitle = getValue("entryTitle") || `💍 ${groom} Weds ${bride}`;
  const entrySubtitle = getValue("entrySubtitle") || clientData.entrySubtitle;
  const entryBtnText = getValue("entryBtnText") || clientData.entryBtnText;
  document.getElementById("entryTitle").innerText = entryTitle;
  document.getElementById("entrySubtitle").innerText = entrySubtitle;
  document.getElementById("entryBtn").innerText = entryBtnText;

  const shareUrl = window.location.href;
  const whatsappShare = document.getElementById("whatsappShare");
  if (whatsappShare) {
    whatsappShare.href = `https://wa.me/?text=${encodeURIComponent("Join our wedding " + shareUrl)}`;
  }

  if (typeof window.setCountdownTarget === 'function') {
    window.setCountdownTarget(date);
  }

  if (gallery) {
    const images = gallery.split(",");
    let html = "";
    images.forEach(img => {
      const cleanImg = img.trim();
      if (!cleanImg) return;
      html += `<a href="${cleanImg}" target="_blank" rel="noreferrer noopener"><img src="${cleanImg}" loading="lazy"></a>`;
    });
    document.getElementById("gallery").innerHTML = html;
  }
}

function initClientData() {
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", applyClientData);
  } else {
    applyClientData();
  }
}

initClientData();