chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const video = document.querySelector("video");
      if (!video) return;

      const t = Math.floor(video.currentTime);
      if (!Number.isFinite(t) || t <= 0) return;

      const url = new URL(window.location.href);
      const host = location.hostname;

      const PLATFORM_CONFIG = [
        {
          id: "youtube",
          host: "youtube.com",
          mode: "query",
          param: "t",
          format: "seconds",
        },
        {
          id: "vimeo",
          host: "vimeo.com",
          mode: "hash",
          param: "t",
          format: "seconds-suffix",
        },
      ];

      const platform = PLATFORM_CONFIG.find(
        (p) => host === p.host || host.endsWith(`.${p.host}`),
      );

      if (!platform) return;

      if (platform.mode === "query") {
        url.searchParams.set(platform.param, String(t));
      }

      if (platform.mode === "hash") {
        const value =
          platform.format === "seconds-suffix" ? `${t}s` : String(t);

        url.hash = `${platform.param}=${value}`;
      }

      history.replaceState(null, "", url.toString());
    },
  });
});
