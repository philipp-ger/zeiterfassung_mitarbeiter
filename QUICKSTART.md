# ⚡ Quick Start - Fit-Inn Zeiterfassung

## 🚀 30 Sekunden Start

```bash
cd /data/.openclaw/workspace/fit-inn-app
npm start
```

Öffne dann: **http://localhost:3000**

✅ App läuft! Die Datenbank wird automatisch erstellt.

---

## 📱 Test-Links für Mitarbeiter (kopieren & testen!)

**Anna:**
```
http://localhost:3000/time/316d559e-8524-4751-8211-077d8d4fc084
```

**Marco:**
```
http://localhost:3000/time/a356c758-952b-459d-8721-14b2fa69b63b
```

**Lisa:**
```
http://localhost:3000/time/01930f9f-4c9b-4d67-9274-8ee2de7f5e9d
```

**Tom:**
```
http://localhost:3000/time/44314fd6-64a1-43d1-9e58-ee59fdf05f35
```

---

## 🔐 Admin-Dashboard

**URL:** http://localhost:3000/admin  
**Passwort:** `fitinn2024`

Das Dashboard zeigt:
- 📊 Monatliche Übersicht
- 👥 Alle Mitarbeiter mit Stunden
- 💾 Export zu CSV/Excel
- 🔗 Links zum Weitergeben

---

## 🧪 Quick Test

### 1. Mitarbeiter-Link testen
```
http://localhost:3000/time/316d559e-8524-4751-8211-077d8d4fc084
```
- Klick "Start" (aktuelle Uhrzeit)
- Klick "Ende" (aktuelle Uhrzeit)
- Speichern ✓

### 2. Admin-Dashboard testen
```
http://localhost:3000/admin
Passwort: fitinn2024
```
- Login
- Sehe neue Einträge
- Klick "Exportieren" → CSV heruntergeladen

---

## 📡 API Test (für Entwickler)

```bash
# Alle Mitarbeiter abrufen
curl http://localhost:3000/api/admin/employees

# Monats-Report (Februar 2026)
curl http://localhost:3000/api/admin/report/2026/02

# CSV Export (Februar 2026)
curl http://localhost:3000/api/admin/export/2026/02 > export.csv
```

---

## 🔧 Häufige Änderungen

### Port ändern (z.B. 8080)
Datei: `src/server.js`, Zeile ~162
```javascript
const PORT = 8080;
```

### Admin-Passwort ändern
Datei: `src/server.js`, Zeile ~170
```javascript
const ADMIN_PASSWORD = 'dein-neues-passwort';
```

### Neuen Mitarbeiter hinzufügen
Datei: `src/server.js`, Funktion `initializeTestData()`:
```javascript
{ name: 'Neuer Name', uuid: uuidv4() }
```
Dann: App neustarten → neue Links im Admin-Dashboard

---

## 🐛 Hilfe! Fehler!

### "Address already in use"
```bash
# Port 3000 ist belegt. Entweder:
# A) Kill den Process
lsof -ti:3000 | xargs kill -9

# B) Oder anderen Port nutzen (siehe Änderungen oben)
```

### "Database error"
```bash
# Alte Datenbank löschen und neustarten
rm data/timetracking.db
npm start
```

### "npm install failed"
```bash
# Dependencies löschen und neu installieren
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## 📂 Dateien übersicht

```
fit-inn-app/
├── src/server.js              ← Hauptserver (Backend)
├── public/
│   ├── index.html             ← Startseite
│   ├── employee.html          ← Mitarbeiter-View
│   ├── admin-login.html       ← Admin-Login
│   └── admin-dashboard.html   ← Admin-Übersicht
├── data/
│   └── timetracking.db        ← Datenbank (auto-erstellt)
├── package.json               ← Dependencies
├── README.md                  ← Technische Docs
├── ANLEITUNG_PHILIPP.md       ← Deutsche Anleitung (ausführlich)
└── QUICKSTART.md              ← Diese Datei
```

---

## ✅ Features Checklist

- ✅ Mitarbeiter können Zeit erfassen (Start/Ende)
- ✅ Manuelle Zeit-Eingabe möglich
- ✅ Responsive Design (Mobile-ready)
- ✅ Admin-Dashboard mit Login
- ✅ Monatliche Übersicht
- ✅ CSV-Export
- ✅ Eindeutige Links pro Mitarbeiter
- ✅ Automatische Stunden-Berechnung
- ✅ Test-Daten vorkonfiguriert

---

## 🎯 Deployment/Weitergabe

### Dateien an Philipp weitergeben:
1. **ANLEITUNG_PHILIPP.md** → Deutsche Anleitung
2. **Dieser Ordner:** `/data/.openclaw/workspace/fit-inn-app/`

Dann kann Philipp einfach:
```bash
cd fit-inn-app
npm install  # Falls noch nicht gemacht
npm start
```

Und die Links an seine Mitarbeiter verteilen:
```
http://localhost:3000/time/[UUID-des-Mitarbeiters]
```

---

**Viel Erfolg! 🚀**

Für Fragen siehe: `ANLEITUNG_PHILIPP.md`
