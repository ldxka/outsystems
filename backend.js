const express = require('express');
const app = express();
const port = 3000;

const datenbank = [
    'Ergebnis 1',
    'Ergebnis 2',
    'Ergebnis 3',
];

app.use(express.json());

app.get('/api/suche', (req, res) => {
    const suchbegriff = req.query.suchbegriff;
    const ergebnisse = datenbank.filter(ergebnis =>
        ergebnis.toLowerCase().includes(suchbegriff.toLowerCase())
    );

    res.json({ results: ergebnisse });
});

app.listen(port, () => {
    console.log(`Der Server läuft auf http://localhost:${port}`);
});
