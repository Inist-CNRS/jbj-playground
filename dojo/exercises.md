# Input

# numéro 1
```json
{
  "age": 26,
  "name": "Yannick",
  "nick": "nojhamster",
  "job": "développeur",
  "projects": [
    {
      "name": "ezpaarse",
      "label": "ezPAARSE",
      "role": "developer",
      "repository": "https://github.com/ezpaarse-project/ezpaarse/"
    },
    {
      "name": "castor-load",
      "role": "contributor",
      "repository": "https://github.com/castorjs/castor-load/"
    },
    {
      "name": "termith",
      "role": "contributor"
    },
    {
      "name": "ezmesure",
      "label": "ezMESURE"
    }
  ],
  "colleagues": {
    "abder": {
      "name": "Abderrazzak",
      "birth": 1950
    },
    "dom": {
      "name": "Dominique",
      "birth": 1988
    }
  }
}
```

# Exercices

## Récupérer la valeur d'un champ

Avec l'`input` numéro 1, récupérer l'`age`.

Astuce: `get`

```json
{
  "get": "age"
}
```

## Récupérer plusieurs champs

Avec l'`input` numéro 1, récupérer à la fois l'`age` et le `name`.

Astuce: `get` aussi, mais avec un tableau en paramètres

```json
{
  "get": ["age", "name"]
}
```

## Concaténer deux champs

Avec l'`input` numéro 1, concaténer les deux champs `name` et `age`.

Astuce: `join`

```json
{
  "get": ["name","age"],
  "join": ", "
}
```

> Note: on peut déjà modifier l'ordre des champs

## Faire une phrase avec plusieurs champs

Avec l'`input` numéro 1, faire une phrase qui dit que la personne `name` a `age` années.

Astuce: `template`

```json
{
  "template": "{{name}} est un {{job}} de {{age}} ans."
}
```

## Récupérer le premier projet de Yannick

Récupérer le `name` du premier projet.

Astuce: `select`

```json
{
  "select": ".projects :first-child .name"
}
```

## Récupérer le dernier projet de Yannick

Récupérer le `name` du dernier projet.

Astuce: `select`, sélecteur CSS3

```json
{
  "select": ".projects :last-child .name"
}
```

## Sélection complexe

Récupérer le `name` des projets qui ont un `label`.

```json
{
  "select": ".projects .label ~ .name"
}
```
