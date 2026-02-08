# 🏋️ Fit-Inn Zeiterfassung

Eine einfache, mobile-optimierte Web-App zur Zeiterfassung für Fitnessstudio-Mitarbeiter.

## ✨ Features

### 👤 Mitarbeiter-View
- **Einfaches Interface** mit Start- und Ende-Button
- **Manuelle Zeit-Eingabe** möglich
- **Responsive Design** (Mobile-first, per WhatsApp nutzbar)
- **Heute-Übersicht** mit berechneten Stunden
- Persönliche Links pro Mitarbeiter (eindeutig & geheim)

### 📊 Admin-Dashboard
- **Monatliche Übersicht** (mit Navigation vor/zurück)
- **Detaillierte Tabelle** mit:
  - Mitarbeitername
  - Anzahl Arbeitstage
  - Stunden pro Tag (mit Datum)
  - Gesamtstunden pro Mitarbeiter
  - Summe aller Mitarbeiter
- **CSV/Excel Export** aller Daten
- **Login-Schutz** mit einfachem Passwort

## 🛠 Tech-Stack

- **Backend:** Node.js + Express.js
- **Datenbank:** SQLite (lokal)
- **Frontend:** HTML5 + CSS3 + Vanilla JavaScript
- **APIs:** RESTful Endpoints für alle Funktionen

## 📦 Installation & Start

### Voraussetzungen
- Node.js 14+ installiert
- Terminal/CMD Zugriff

### Installation
```bash
cd /data/.openclaw/workspace/fit-inn-app
npm install
```

### App starten
```bash
npm start
```

App läuft dann auf **http://localhost:3000**

## 📱 Erste Schritte

### Für Mitarbeiter
1. Persönlichen Link öffnen (von Philipp erhalten)
2. "Start"-Button klicken → Startzeit wird gesetzt
3. "Ende"-Button klicken → Endzeit wird gesetzt
4. "Speichern" klicken → fertig!

### Für Admin (Philipp)
1. Zu http://localhost:3000/admin gehen
2. Mit Passwort `fitinn2024` anmelden
3. Monatliche Übersicht sehen
4. Daten exportieren (CSV)

## 🔗 Mitarbeiter-Links

Die App wird mit 4 Test-Mitarbeitern initialisiert:

- **Anna:** http://localhost:3000/time/316d559e-8524-4751-8211-077d8d4fc084
- **Marco:** http://localhost:3000/time/a356c758-952b-459d-8721-14b2fa69b63b
- **Lisa:** http://localhost:3000/time/01930f9f-4c9b-4d67-9274-8ee2de7f5e9d
- **Tom:** http://localhost:3000/time/44314fd6-64a1-43d1-9e58-ee59fdf05f35

Diese Links können:
- 💬 Via WhatsApp gesendet werden
- 📧 Per E-Mail verschickt werden
- 📱 Per SMS mitgeteilt werden

## 🗂 Projektstruktur

```
fit-inn-app/
├── src/
│   └── server.js          # Express Server + API
├── public/
│   ├── index.html         # Startseite
│   ├── employee.html      # Mitarbeiter-View
│   ├── admin-login.html   # Admin-Login
│   └── admin-dashboard.html # Admin-Dashboard
├── data/
│   └── timetracking.db    # SQLite Datenbank (auto-erstellt)
├── package.json
├── README.md
└── ANLEITUNG_PHILIPP.md   # Deutsche Anleitung
```

## 🔧 Konfiguration

### Admin-Passwort ändern
In `src/server.js` (Zeile ~170):
```javascript
const ADMIN_PASSWORD = 'fitinn2024';
```

### Port ändern
In `src/server.js` (Zeile ~162):
```javascript
const PORT = 3000;
```

### Mitarbeiter hinzufügen
In `src/server.js` in der `initializeTestData()` Funktion neue Einträge hinzufügen.

## 📊 API Endpoints

### Public
- `GET /` - Startseite
- `GET /time/:uuid` - Mitarbeiter-View
- `POST /api/timesheet` - Eintrag speichern
- `GET /api/timesheet/today/:employee_id` - Heute's Eintrag
- `GET /api/employee/:uuid` - Mitarbeiter-Daten

### Admin
- `GET /admin` - Admin-Login
- `GET /admin/dashboard` - Admin-Dashboard
- `POST /api/admin/login` - Login authentifizieren
- `GET /api/admin/report/:year/:month` - Monatsbericht
- `GET /api/admin/export/:year/:month` - CSV Export
- `GET /api/admin/employees` - Alle Mitarbeiter mit Links

## 🔐 Sicherheit

- Jeder Mitarbeiter hat einen **eindeutigen UUID-Link**
- Nur dieser Link ermöglicht den Zugriff
- Admin-Dashboard mit Passwort geschützt
- Datenbank lokal auf dem Rechner
- Keine Cloud-Services nötig

## 💾 Datenbank

SQLite Datenbank mit 2 Tabellen:

### `employees`
- id (UUID)
- name (TEXT)
- uuid (TEXT, unique)
- created_at (DATETIME)

### `timesheets`
- id (INTEGER, primary key)
- employee_id (FK)
- date (TEXT, YYYY-MM-DD)
- start_time (TEXT, HH:MM)
- end_time (TEXT, HH:MM)
- created_at (DATETIME)

## 📝 Daten exportieren

1. Im Admin-Dashboard auf "📥 Exportieren" klicken
2. CSV-Datei wird heruntergeladen
3. Mit Excel/Google Sheets öffnen

CSV Format:
```
Mitarbeitername,Arbeitstage,Stunden pro Tag,Gesamtstunden
Anna,5,"01.02.2024: 8.00h; ...",40.50
```

## 🐛 Fehlerbehandlung

### App startet nicht?
```bash
# Dependencies neu installieren
npm install

# Alte Datenbank löschen
rm data/timetracking.db

# App starten
npm start
```

### Datenbank beschädigt?
```bash
# Alte DB löschen und neustarten
rm /data/.openclaw/workspace/fit-inn-app/data/timetracking.db
npm start
```

## 📞 Support

Siehe `ANLEITUNG_PHILIPP.md` für detaillierte deutsche Anleitung und Troubleshooting.

## 📄 Lizenz

Erstellt für Fit-Inn Heldenbergen

---

**Version:** 1.0.0  
**Erstellt:** 2024  
**Status:** ✅ Produktionsreif
