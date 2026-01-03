import { Presence, PresenceData } from "@preact/presence";

const presence = new Presence({
  clientId: "DEINE_DISCORD_CLIENT_ID"
});

presence.on("UpdateData", async () => {
  const url = window.location.pathname;
  const data: PresenceData = {
    largeImageKey: "logo",
    startTimestamp: Date.now()
  };

  // Dashboard / Fallback
  data.details = "Im ILG-Portal unterwegs";
  data.state = document.title || url || "Im Portal";

  presence.setActivity(data);
});
