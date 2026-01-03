const presence = new Presence({
    clientId: "DEINE_CLIENT_ID_HIER"
});

presence.on("UpdateData", async () => {
    const url = document.location.href;

    let details = "Auf der ILG‑Seite";
    let state = "";

    // --- Hauptseiten ---
    if (url.includes("/Home") || url.endsWith("/portal.ilg-spedition.de/")) {
        details = "Im Portal";
    }
    if (url.includes("/Home/Einstellungen")) {
        details = "In den Einstellungen";
    }
    if (url.includes("/Home/Fahrtenbuch")) {
        details = "Im Fahrtenbuch";
    }
    if (url.includes("/Home/Bewerbungen")) {
        details = "Im Bewerbungsbereich";
    }
    if (url.includes("/Home/Ruhmeshalle")) {
        details = "In der Ruhmeshalle";
    }
    if (url.includes("/Home/Team")) {
        details = "Im Teambereich";
    }
    if (url.includes("/Home/Karte")) {
        details = "Auf der Karte";
    }
    if (url.includes("/Home/Level")) {
        details = "Im Level‑System";
    }

    // --- Fuhrpark & Banking ---
    if (url.includes("/Fuhrpark")) {
        details = "Im Fuhrpark";
    }
    if (url.includes("/Onlinebanking")) {
        details = "Im Onlinebanking";
    }

    // --- Profil ---
    if (url.includes("/Profil/")) {
        details = "Im Benutzerprofil";
    }

    // --- Firmenlackierungen ---
    if (url.includes("/Wiki/Firmenlackierung/ETS2")) {
        details = "Wiki: ETS2 Firmenlackierung";
    }
    if (url.includes("/Wiki/Firmenlackierung/ATS")) {
        details = "Wiki: ATS Firmenlackierung";
    }

    // --- Wiki ETS/ATS Tutorials ---
    if (url.includes("Spiel+auf+Fehler+überprüfen")) {
        details = "Wiki: Spiel auf Fehler überprüfen";
    }
    if (url.includes("Profil+kopieren")) {
        details = "Wiki: Profil kopieren";
    }
    if (url.includes("Flycam+und+Console+aktivieren")) {
        details = "Wiki: Flycam & Konsole aktivieren";
    }
    if (url.includes("Flycam+und+Console+verwenden")) {
        details = "Wiki: Flycam & Konsole verwenden";
    }
    if (url.includes("Physik+(realistisch)")) {
        details = "Wiki: Realistische Physik";
    }
    if (url.includes("Force+Feedback")) {
        details = "Wiki: Force Feedback passend zur Physik";
    }
    if (url.includes("Trucky+Dispatcher")) {
        details = "Wiki: Auftrag mit Trucky Dispatcher erstellen";
    }
    if (url.includes("Kamerabewegung")) {
        details = "Wiki: Realistische Kamerabewegung";
    }
    if (url.includes("Hochauflösende+Screenshots")) {
        details = "Wiki: Hochauflösende Screenshots";
    }

    // --- Wiki Tools ---
    if (url.includes("Anti+AFK+Tool")) {
        details = "Wiki: Anti‑AFK Tool";
    }
    if (url.includes("Truck+and+Trailer+Changer")) {
        details = "Wiki: Truck & Trailer Changer";
    }
    if (url.includes("Eigens+Spiel")) {
        details = "Wiki: Eigenes Spiel im Discord hinzufügen";
    }
    if (url.includes("Konsolen+Befehle")) {
        details = "Wiki: Konsolenbefehle";
    }

    // --- Mods & Server ---
    if (url.includes("Dedicated+ETS2+ILG+Server")) {
        details = "Wiki: ILG Dedicated Server (ohne ProMods)";
    }
    if (url.includes("Mods+Reihenfolge")) {
        details = "Wiki: Modmanager Reihenfolge";
    }
    if (url.includes("Frachtenübersicht")) {
        details = "Wiki: ILG Frachtenübersicht (Trucky)";
    }
    if (url.includes("ProMods+Ladereihenfolge")) {
        details = "Wiki: ProMods Ladereihenfolge";
    }
    if (url.includes("Optionale+Mods")) {
        details = "Wiki: Optionale Mods";
    }

    // --- TruckersMP ---
    if (url.includes("Bann+Verlauf")) {
        details = "Wiki: TruckersMP Bannverlauf aktivieren";
    }
    if (url.includes("Namen+ändern")) {
        details = "Wiki: TruckersMP Namen ändern";
    }
    if (url.includes("Dispatcher")) {
        details = "Wiki: TruckersMP Dispatcher Aufträge";
    }

    // --- Allgemeines ---
    if (url.includes("Speditionsziel")) {
        details = "Wiki: Speditionsziel";
    }
    if (url.includes("ILG+Telemetrie")) {
        details = "Wiki: ILG Telemetrie";
    }
    if (url.includes("Wartungssystem")) {
        details = "Wiki: Wartungssystem";
    }
    if (url.includes("Unfallversicherung")) {
        details = "Wiki: Unfallversicherung";
    }
    if (url.includes("spenden")) {
        details = "Wiki: Spenden";
    }
    if (url.includes("Fuhrparksystem")) {
        details = "Wiki: Fuhrparksystem";
    }
    if (url.includes("Personalisierte+Lackierungen")) {
        details = "Wiki: Personalisierte Lackierungen";
    }

    // --- Farming Simulator ---
    if (url.includes("Farming+Simulator+25")) {
        details = "Wiki: Farming Simulator 25";
    }

    // --- Wiki Sonstiges ---
    if (url.includes("/Wiki/Hinzufügen")) {
        details = "Wiki: Seite hinzufügen";
    }
    if (url.includes("/Wiki/Erweiterungen")) {
        details = "Wiki: Erweiterungen";
    }
    if (url.includes("/Wiki/Frachtliste")) {
        details = "Wiki: Frachtliste";
    }
    if (url.includes("/Wiki")) {
        details = "Im Wiki";
    }

    // --- Events ---
    if (url.includes("/Events/Screenshot-des-Monats")) {
        details = "Event: Screenshot des Monats";
    }
    if (url.includes("/Events/Speditionsziel")) {
        details = "Event: Speditionsziel";
    }
    if (url.includes("/Events")) {
        details = "Im Eventbereich";
    }

    // --- Speditreffen ---
    if (url.includes("/Speditreffen")) {
        details = "Im Speditreffen‑Archiv";
    }

    // --- Umfrage ---
    if (url.includes("/Umfrage")) {
        details = "In einer Umfrage";
    }

    // --- Regeln ---
    if (url.includes("ilg-spedition.de/Regeln")) {
        details = "Regelwerk";
    }

    // --- Cloud ---
    if (url.includes("ELazgqebx33TgKj")) {
        details = "Cloud: ILG Medienpaket";
    }
    if (url.includes("qtg4CrnHaHrTQpg")) {
        details = "Cloud: Speditreffen 2022 Fotos";
    }
    if (url.includes("XKttsK4KorfBHne")) {
        details = "Cloud: Speditreffen 2023 Fotos";
    }
    if (url.includes("mjeL2cJR8CqgRbT")) {
        details = "Cloud: Speditreffen 2024 Fotos";
    }
    if (url.includes("3t6zGSN5JCqAyKZ")) {
        details = "Cloud: Speditreffen 2025 Fotos";
    }

    // --- Presence senden ---
    presence.setActivity({
        details,
        state,
        largeImageKey: "ilg_logo",
        largeImageText: "ILG Spedition Portal"
    });
});
