const masterTools = [
  {
    "title": "Arkose Labs",
    "url": "https://portal.arkoselabs.com/"
  },
  {
    "title": "SPYDR WEB",
    "url": "https://dataexplorer.azure.com/dashboards/2cf15127-110e-4665-9564-1948075054c1"
  },
  {
    "title": "Virus Total Upload",
    "url": "https://www.virustotal.com/gui/home/upload"
  },
  {
    "title": "SpamCon",
    "url": "https://spamurai-next.githubapp.com/queues/possible_spammer_queue?spamcon=1"
  }
];

function buildContextMenu(selectedTools) {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "one-ring",
      title: "Otto-Matic",
      contexts: ["all"]
    });
    selectedTools.forEach(tool => {
      chrome.contextMenus.create({
        id: tool.title,
        parentId: "one-ring",
        title: tool.title,
        contexts: ["all"]
      });
    });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get({ selectedTools: masterTools }, (result) => {
    buildContextMenu(result.selectedTools);
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  const clicked = masterTools.find(t => t.title === info.menuItemId);
  if (clicked) {
    chrome.tabs.create({ url: clicked.url });
  }
});
