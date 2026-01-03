import { Presence, PresenceData } from "@preact/presence";

const presence = new Presence({
  clientId: "DEINE_DISCORD_CLIENT_ID"
});

// Kleiner Helper, damit wir nicht überall startsWith tippen müssen
function pathStartsWith(path: string): boolean {
  return window.location.pathname.toLowerCase().startsWith(path.toLowerCase());
}

presence.on("UpdateData", async () => {
  const { hostname, pathname, href } = window.location;
  const url = pathname || "/";
  const isPortal = hostname.includes("portal.ilg-spedition.de");
  const isCloud = hostname.includes("cloud.ilg-spedition.de");

  const data: PresenceData = {
    largeImageKey: "logo",       // Standard-Logo vom Portal
    startTimestamp: Date.now()
  };

  //
  // ILG CLOUD (Nextcloud-Links, Medienpaket, Speditreffen-Fotos etc.)
  //
  if (isCloud) {
    data.details = "In der ILG-Cloud";
    if (href.includes("Medienpaket")) {
      data.state = "Medienpaket ansehen";
    } else if (href.includes("Speditreffen")) {
      data.state = "Speditreffen-Fotos ansehen";
    } else {
      data.state = "Dateien durchstöbern";
    }

    data.smallImageKey = "cloud";
    presence.setActivity(data);
    return;
  }

  //
  // ILG HAUPTSEITE (Regeln etc.)
  //
  if (!isPortal && hostname.includes("ilg-spedition.de")) {
    if (url.toLowerCase().startsWith("/regeln")) {
      data.details = "Auf der ILG-Webseite";
      data.state = "Regeln lesen";
      data.smallImageKey = "rules";
    } else {
      data.details = "Auf der ILG-Webseite";
      data.state = "Informationen ansehen";
    }

    presence.setActivity(data);
    return;
  }

  //
  // Ab hier: PORTAL (portal.ilg-spedition.de)
  //
  if (!isPortal) {
    // Falls doch irgendein anderer Host – generischer Fallback
    data.details = "Bei ILG unterwegs";
    data.state = hostname;
    presence.setActivity(data);
    return;
  }

  // HOME / DASHBOARD
  if (url === "/" || pathStartsWith("/Home")) {
    // Unterseiten von /Home
    if (pathStartsWith("/Home/Fahrtenbuch")) {
      data.details = "Im ILG-Portal";
      data.state = "Fahrtenbuch ansehen";
      data.smallImageKey = "logbook";
    } else if (pathStartsWith("/Home/Bewerbungen")) {
      data.details = "Im ILG-Portal";
      data.state = "Bewerbungen ansehen";
      data.smallImageKey = "applications";
    } else if (pathStartsWith("/Home/Ruhmeshalle")) {
      data.details = "Im ILG-Portal";
      data.state = "Ruhmeshalle ansehen";
      data.smallImageKey = "hall-of-fame";
    } else if (pathStartsWith("/Home/Team")) {
      data.details = "Im ILG-Portal";
      data.state = "Teamübersicht ansehen";
      data.smallImageKey = "team";
    } else if (pathStartsWith("/Home/Karte")) {
      data.details = "Im ILG-Portal";
      data.state = "Karte ansehen";
      data.smallImageKey = "map";
    } else if (pathStartsWith("/Home/Level")) {
      data.details = "Im ILG-Portal";
      data.state = "Levelsystem ansehen";
      data.smallImageKey = "level";
    } else if (pathStartsWith("/Home/Einstellungen")) {
      data.details = "Im ILG-Portal";
      data.state = "Einstellungen öffnen";
      data.smallImageKey = "settings";
    } else {
      data.details = "Im ILG-Portal";
      data.state = "Dashboard";
      data.smallImageKey = "home";
    }

    presence.setActivity(data);
    return;
  }

  // PROFIL
  if (pathStartsWith("/Profil")) {
    data.details = "Im ILG-Portal";
    data.state = "Profil ansehen";
    data.smallImageKey = "profile";
    presence.setActivity(data);
    return;
  }

  // FUHRPARK
  if (pathStartsWith("/Fuhrpark")) {
    data.details = "Im ILG-Portal";
    data.state = "Fuhrpark verwalten";
    data.smallImageKey = "fleet";
    presence.setActivity(data);
    return;
  }

  // ONLINEBANKING
  if (pathStartsWith("/Onlinebanking")) {
    data.details = "Im ILG-Portal";
    data.state = "Onlinebanking";
    data.smallImageKey = "banking";
    presence.setActivity(data);
    return;
  }

  // EVENTS
  if (pathStartsWith("/Events")) {
    data.details = "Im ILG-Portal";

    if (url === "/Events" || url === "/Events/") {
      data.state = "Events ansehen";
    } else if (url.includes("/Screenshot-des-Monats")) {
      data.state = "Event „Screenshot des Monats“";
    } else if (url.includes("/Speditionsziel")) {
      data.state = "Event „Speditionsziel“";
    } else {
      data.state = "Eventdetails ansehen";
    }

    data.smallImageKey = "events";
    presence.setActivity(data);
    return;
  }

  // SPEDITREFFEN
  if (pathStartsWith("/Speditreffen")) {
    data.details = "Im ILG-Portal";
    data.state = "Speditreffen ansehen";
    data.smallImageKey = "meetup";
    presence.setActivity(data);
    return;
  }

  // UMFRAGE
  if (pathStartsWith("/Umfrage")) {
    data.details = "Im ILG-Portal";
    data.state = "An einer Umfrage teilnehmen";
    data.smallImageKey = "survey";
    presence.setActivity(data);
    return;
  }

  // WIKI – Oberkategorien + Detailseiten
  if (pathStartsWith("/Wiki")) {
    data.details = "ILG-Wiki";

    // Firmenlackierung
    if (url.includes("/Firmenlackierung/ETS2")) {
      data.state = "ETS2-Firmenlackierung lesen";
      data.smallImageKey = "wiki-paintjob-ets2";
    } else if (url.includes("/Firmenlackierung/ATS")) {
      data.state = "ATS-Firmenlackierung lesen";
      data.smallImageKey = "wiki-paintjob-ats";
    }

    // ETS/ATS–Guides
    else if (url.includes("/ETS-ATS/Spiel+auf+Fehler+überprüfen")) {
      data.state = "Guide: Spiel auf Fehler überprüfen";
      data.smallImageKey = "wiki-guide";
    } else if (url.includes("/ETS-ATS/Profil+kopieren")) {
      data.state = "Guide: Profil kopieren";
      data.smallImageKey = "wiki-guide";
    } else if (url.includes("/ETS-ATS/Flycam+und+Console+aktivieren")) {
      data.state = "Guide: Flycam & Konsole aktivieren";
      data.smallImageKey = "wiki-guide";
    } else if (url.includes("/ETS-ATS/Flycam+und+Console+verwenden")) {
      data.state = "Guide: Flycam & Konsole verwenden";
      data.smallImageKey = "wiki-guide";
    } else if (url.includes("/ETS-ATS/Physik+(realistisch)")) {
      data.state = "Guide: Realistische Physik";
      data.smallImageKey = "wiki-physics";
    } else if (url.includes("/ETS-ATS/Zur+Physik+passendes+Force+Feedback")) {
      data.state = "Guide: Force Feedback";
      data.smallImageKey = "wiki-ffb";
    } else if (url.includes("/ETS-ATS/Eigenen+Auftrag+mit+Trucky+Dispatcher+erstellen")) {
      data.state = "Guide: Trucky Dispatcher";
      data.smallImageKey = "wiki-dispatcher";
    } else if (url.includes("/ETS-ATS/Realistische+Kamerabewegung+im+Innenraum")) {
      data.state = "Guide: Kamerabewegung";
      data.smallImageKey = "wiki-camera";
    } else if (url.includes("/ETS-ATS/Hochauflösende+Screenshots")) {
      data.state = "Guide: Hochauflösende Screenshots";
      data.smallImageKey = "wiki-screenshot";
    }

    // Nützliche Tools
    else if (url.includes("/Nützliche+Tools/Anti+AFK+Tool")) {
      data.state = "Guide: Anti-AFK-Tool";
      data.smallImageKey = "wiki-tools";
    } else if (url.includes("/Nützliche+Tools/Truck+and+Trailer+Changer")) {
      data.state = "Guide: Truck & Trailer Changer";
      data.smallImageKey = "wiki-tools";
    } else if (url.includes("/Nützliche+Tools/Eigens+Spiel+(DRP)+im+Discord+hinzufügen")) {
      data.state = "Guide: Eigenes Spiel im Discord";
      data.smallImageKey = "wiki-tools";
    } else if (url.includes("/Nützliche+Tools/Konsolen+Befehle")) {
      data.state = "Guide: Konsolenbefehle";
      data.smallImageKey = "wiki-tools";
    }

    // Mods & Server
    else if (url.includes("/Mods+und+Server/Dedicated+ETS2+ILG+Server+ohne+Promods")) {
      data.state = "Guide: ILG ETS2-Server";
      data.smallImageKey = "wiki-mods";
    } else if (url.includes("/Mods+und+Server/Mods+Reihenfolge+Modmanager")) {
      data.state = "Guide: Mod-Reihenfolge";
      data.smallImageKey = "wiki-mods";
    } else if (url.includes("/Mods+und+Server/ILG+Frachtenübersicht+Trucky")) {
      data.state = "Guide: ILG Frachtenübersicht";
      data.smallImageKey = "wiki-mods";
    } else if (url.includes("/Mods+und+Server/ProMods+Ladereihenfolge")) {
      data.state = "Guide: ProMods-Ladereihenfolge";
      data.smallImageKey = "wiki-mods";
    } else if (url.includes("/Mods+und+Server/Optionale+Mods")) {
      data.state = "Guide: Optionale Mods";
      data.smallImageKey = "wiki-mods";
    }

    // TruckersMP
    else if (url.includes("/TruckersMP/TruckersMP+Bann+Verlauf+aktivieren")) {
      data.state = "Guide: TruckersMP Bannverlauf";
      data.smallImageKey = "wiki-tmp";
    } else if (url.includes("/TruckersMP/TruckersMP+Namen+ändern")) {
      data.state = "Guide: TruckersMP Namen ändern";
      data.smallImageKey = "wiki-tmp";
    } else if (url.includes("/TruckersMP/Eigene+Aufträge+erstellen")) {
      data.state = "Guide: TruckersMP Aufträge erstellen";
      data.smallImageKey = "wiki-tmp";
    }

    // Allgemeines
    else if (url.includes("/Allgemeines/Speditionsziel")) {
      data.state = "Wiki: Speditionsziel";
      data.smallImageKey = "wiki-general";
    } else if (url.includes("/Allgemeines/ILG+Telemetrie")) {
      data.state = "Wiki: ILG Telemetrie";
      data.smallImageKey = "wiki-general";
    } else if (url.includes("/Allgemeines/Das+Wartungssystem")) {
      data.state = "Wiki: Wartungssystem";
      data.smallImageKey = "wiki-general";
    } else if (url.includes("/Allgemeines/Die+Unfallversicherung")) {
      data.state = "Wiki: Unfallversicherung";
      data.smallImageKey = "wiki-general";
    } else if (url.includes("/Allgemeines/Wie+kann+ich+spenden")) {
      data.state = "Wiki: Spenden";
      data.smallImageKey = "wiki-general";
    } else if (url.includes("/Allgemeines/Fuhrparksystem")) {
      data.state = "Wiki: Fuhrparksystem";
      data.smallImageKey = "wiki-general";
    } else if (url.includes("/Allgemeines/Personalisierte+Lackierungen")) {
      data.state = "Wiki: Personalisierte Lackierungen";
      data.smallImageKey = "wiki-general";
    }

    // Farming Simulator 25
    else if (url.includes("/Farming+Simulator+25+Server/Grundlegende+Informationen")) {
      data.state = "Wiki: LS25-Server Grundlagen";
      data.smallImageKey = "wiki-fs";
    } else if (url.includes("/Farming+Simulator+25+Server/Hinweise+zu+den+im+ETS2+disponierten+Frachten")) {
      data.state = "Wiki: LS25/ETS2-Frachten";
      data.smallImageKey = "wiki-fs";
    }

    // Erweiterungen, Frachtliste, Hinzufügen, Wiki-Übersicht
    else if (url.includes("/Wiki/Erweiterungen")) {
      data.state = "Wiki: Erweiterungen";
      data.smallImageKey = "wiki";
    } else if (url.includes("/Wiki/Frachtliste")) {
      data.state = "Wiki: Frachtliste";
      data.smallImageKey = "wiki";
    } else if (url.includes("/Wiki/Hinzufügen")) {
      data.state = "Wiki: Beitrag hinzufügen";
      data.smallImageKey = "wiki-add";
    } else if (url === "/Wiki" || url === "/Wiki/") {
      data.state = "Wiki-Übersicht";
      data.smallImageKey = "wiki";
    } else {
      // Generischer Wiki-Fallback
      data.state = "Wiki-Beitrag lesen";
      data.smallImageKey = "wiki";
    }

    presence.setActivity(data);
    return;
  }

  // Fallback für alles, was wir nicht explizit abdecken
  data.details = "Im ILG-Portal";
  data.state = document.title || url || "Unterwegs";
  presence.setActivity(data);
});
