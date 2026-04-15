const clientData = {
  groom: "Dilip",
  bride: "Name",
  date: "December 20, 2026",
  location: "Gadag",
  venue: "SBS Garden",
  phone: "917204683500",
  rsvp: "#",
  maps: "https://www.google.com/maps?q=SBS+Garden+Gadag&output=embed",
  dir: "https://www.google.com/maps/dir/?api=1&destination=SBS+Garden+Gadag",
  story: "Our journey begins ❤️",
  video: "video.mp4",
  events: "Haldi-10AM,Sangeet-6PM,Wedding-11AM",
  gallery: ""
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
  const rsvp = getValue("rsvp");
  const maps = getValue("maps");
  const directions = getValue("dir");
  const story = getValue("story");
  const video = getValue("video");
  const events = getValue("events");
  const gallery = getValue("gallery");

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
  document.getElementById("contactBtn").href = `https://wa.me/${phone}`;
  document.getElementById("rsvpBtn").href = rsvp;
  document.getElementById("storyText").innerText = story;
  document.getElementById("storyVideo").src = video;

  if (gallery) {
    const images = gallery.split(",");
    let html = "";
    images.forEach(img => {
      html += `<img src="${img}" loading="lazy">`;
    });
    document.getElementById("gallery").innerHTML = html;
  }
}

applyClientData();