# 🏋️ Fit-Inn Zeiterfassungs-App - Anleitung für Philipp

## 🚀 App starten

Die App läuft auf **http://localhost:3000**

Um die App zu starten:
```bash
cd /data/.openclaw/workspace/fit-inn-app
npm start
```

Die App erstellt automatisch eine SQLite-Datenbank und initialisiert mit 4 Test-Mitarbeitern.

---

## 👥 Mitarbeiter-Links zum Weitergeben

Die App wurde mit folgenden Mitarbeitern initialisiert. Jeder bekommt einen **persönlichen Link**, den er über WhatsApp, Mail oder SMS bekommen kann:

### Links für Deine Mitarbeiter:

| Mitarbeiter | Link |
|------------|------|
| **Anna** | http://localhost:3000/time/316d559e-8524-4751-8211-077d8d4fc084 |
| **Marco** | http://localhost:3000/time/a356c758-952b-459d-8721-14b2fa69b63b |
| **Lisa** | http://localhost:3000/time/01930f9f-4c9b-4d67-9274-8ee2de7f5e9d |
| **Tom** | http://localhost:3000/time/44314fd6-64a1-43d1-9e58-ee59fdf05f35 |

---

## 📱 So nutzen die Mitarbeiter die App

1. **Mitarbeiter öffnen ihren Link** (z.B. auf dem Smartphone über WhatsApp)
2. **"Start"-Button drücken** → aktuelle Uhrzeit wird übernommen (oder manuel eingeben)
3. **"Ende"-Button drücken** → aktuelle Uhrzeit wird übernommen (oder manuel eingeben)
4. **"Speichern"-Button klicken** → Eintrag wird gespeichert ✓

Das Interface ist:
- ✅ **Mobile-optimiert** (per WhatsApp voll funktionsfähig)
- ✅ **Einfach** (nur 2 Buttons + Speichern)
- ✅ **Responsiv** (funktioniert auf allen Geräten)

---

## 📊 Admin-Dashboard für Dich

### Login ins Admin-Dashboard:
- **URL:** http://localhost:3000/admin
- **Passwort:** `fitinn2024`

### Im Dashboard siehst du:

1. **Monatliche Übersicht** (aktueller Monat als Standard)
2. **Tabelle mit:**
   - Mitarbeitername
   - Anzahl Arbeitstage im Monat
   - Stunden pro Tag (mit Datum)
   - Gesamtstunden pro Mitarbeiter
   - **Gesamtstunden aller Mitarbeiter** (am unteren Rand)

3. **Funktionen:**
   - ◀ / ▶ **Monats-Navigation** (vor/zurück browsen)
   - 📥 **Export-Button** (CSV zum Download → Excel/Google Sheets öffnen)
   - **Mitarbeiter-Links** (zum Weitergeben an deine Kollegen)

---

## 🔧 Links hinzufügen / ändern

Wenn du neue Mitarbeiter hinzufügst:

1. Öffne `/data/.openclaw/workspace/fit-inn-app/src/server.js`
2. Suche die `initializeTestData()` Funktion
3. Füge neue Mitarbeiter hinzu:
```javascript
const employees = [
  { name: 'Anna', uuid: uuidv4() },
  { name: 'Marco', uuid: uuidv4() },
  { name: 'Lisa', uuid: uuidv4() },
  { name: 'Tom', uuid: uuidv4() },
  { name: 'Neuer Mitarbeiter', uuid: uuidv4() }  // ← Neue Zeile
];
```
4. **App neustarten** → neue Links werden im Admin-Dashboard angezeigt

Alternativ: Im Admin-Dashboard unter "Mitarbeiter Links" siehst du alle Links und kannst sie per Knopfdruck kopieren!

---

## 📥 Wie du Links an Mitarbeiter weitergibst

### Option 1: Direkt aus dem Admin-Dashboard
1. Login ins Dashboard (http://localhost:3000/admin)
2. Scrolle zu "Mitarbeiter Links"
3. Klick auf "📋 In Zwischenablage kopieren"
4. Sende den Link via WhatsApp, Mail oder SMS

### Option 2: Manuell kopieren
Kopiere den Link aus der Tabelle oben und teile ihn über:
- 📱 WhatsApp
- 📧 E-Mail
- 💬 SMS

**Pro-Tipp:** Die Links sind eindeutig und geheim – nur der jeweilige Mitarbeiter kann auf seinen Link zugreifen!

---

## 🔐 Sicherheit

- ✅ Jeder Mitarbeiter hat einen **eigenen, eindeutigen Link**
- ✅ Daten werden lokal in **SQLite** gespeichert
- ✅ **Einfaches Passwort** (fitinn2024) für Admin
- ✅ Keine Cloud, alles auf deinem Rechner

---

## 📊 CSV/Excel Export

1. Im Admin-Dashboard → 📥 **Exportieren**
2. CSV-Datei wird heruntergeladen
3. Öffne mit Excel oder Google Sheets
4. Alle Stunden + Gesamtsumme werden automatisch berechnet

**Format:**
```
Mitarbeitername,Arbeitstage,Stunden pro Tag,Gesamtstunden
Anna,5,"01.02.2024: 8.00h; 02.02.2024: 8.50h",16.50
Marco,4,"01.02.2024: 7.50h; 02.02.2024: 8.00h",15.50
...
Gesamtstunden aller Mitarbeiter,,,125.00
```

---

## 🆘 Troubleshooting

### App läuft nicht?
```bash
# Stelle sicher, dass Node.js installiert ist
node --version

# Installiere Dependencies neu
cd /data/.openclaw/workspace/fit-inn-app
npm install

# Starte App
npm start
```

### Datenbank-Fehler?
```bash
# Lösche alte Datenbank und starte neu
rm /data/.openclaw/workspace/fit-inn-app/data/timetracking.db
npm start
```

### Passwort vergessen?
In der Datei `/data/.openclaw/workspace/fit-inn-app/src/server.js` Zeile ~170:
```javascript
const ADMIN_PASSWORD = 'fitinn2024';
```
Hier kannst du das Passwort ändern.

---

## 📝 Weitere Anpassungen

### Port ändern
In `src/server.js` Zeile ~162:
```javascript
const PORT = 3000;  // ← Hier ändern (z.B. 8080)
```

### Admin-Passwort ändern
In `src/server.js` Zeile ~170:
```javascript
const ADMIN_PASSWORD = 'fitinn2024';  // ← Hier ändern
```

---

## ✨ Das ist alles enthalten:

- ✅ **Mitarbeiter-View** - Einfaches Interface (Start/Ende + Speichern)
- ✅ **Admin-Dashboard** - Monatliche Übersicht + Export
- ✅ **Responsive Design** - Funktioniert auf Mobile/WhatsApp
- ✅ **Datenverwaltung** - Automatische Berechnung der Stunden
- ✅ **Export** - CSV/Excel zum Download
- ✅ **4 Test-Mitarbeiter** - Anna, Marco, Lisa, Tom

Viel Erfolg! 🚀
