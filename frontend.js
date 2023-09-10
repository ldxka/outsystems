<!DOCTYPE html>
<html>
<head>
    <title>Suchleiste Beispiel</title>
</head>
<body>
    <input type="text" id="suchbegriff" placeholder="Suche...">
    <button id="suchButton">Suchen</button>
    <ul id="ergebnisListe"></ul>

    <script>
        document.getElementById('suchButton').addEventListener('click', function () {
            const suchbegriff = document.getElementById('suchbegriff').value;

            fetch(`/api/suche?suchbegriff=${suchbegriff}`)
            .then(response => response.json())
            .then(data => {
                const ergebnisListe = document.getElementById('ergebnisListe');
                ergebnisListe.innerHTML = '';

                data.results.forEach(result => {
                    const listItem = document.createElement('li');
                    listItem.textContent = result;
                    ergebnisListe.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Fehler:', error);
            });
        });
    </script>
</body>
</html>
