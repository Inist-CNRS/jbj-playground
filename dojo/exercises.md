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

## Tri simple

Récupérer les `name` des projets dans un tableau.

Astuce: `select` plus simplement qu'avant.

```json
{
  "select": ".projects .name"
}
```

Puis, trier le tableau obtenu.

Astuce: `sort`

```json
{
  "select": ".projects .name",
  "sort": true
}
```

> Note: quand une action (comme `sort`) ne prend pas de paramètre, on lui donne
> par convention `true`, mais toute autre valeur fonctionnerait aussi.

## Tri sur des objets

Récupérer la liste des projets dans un tableau d'objets.

Astuce 1: `select` très simple

Astuce 2: `select` renvoie systématiquement un tableau, et comme `projects` est un tableau, on a un tableau de tableau. Pour supprimer un niveau, récupérer le premier (et seul) élément de ce tableau, en utilisant `"get": 0`.

```json
{
  "select": ".projects",
  "get": 0
}
```

Puis, trier les projets selon leur `name`.

Astuce: `sortBy`

```json
{
  "select": ".projects",
  "get": 0,
  "sortBy": "name"
}
```

## Opérations sur un tableau

Récupérer le tableau des `name` de chaque projet, et capitaliser chacun d'entre eux.

Astuce 1: `capitalize`
Astuce 2: `foreach`

```json
{
  "select": ".projects .name",
  "foreach": {
    "capitalize": true
  }
}
```

> Note: chaque itération à l'intérieur de `foreach` travaille avec un élément
> du tableau d'origine comme `input`.

## Remplacer l'input

Remplacer tout l'`input` par la chaîne de caractères `nouveau`.

Astuce: `set`

```json
{
  "set": "nouveau"
}
```

## Ajouter un champ

Ajouter un champ à `input`, dont le nom est `dirty`, et le contenu ` Rrogntudjû ` (avec les espaces en début et fin).

![Rogntudjû de Gaston](gaston_rogntudju.jpg)

Astuce 1: `$`, ajouter une variable

```json
{
  "$dirty": { "set" : " Rrogntudjû " }
}
```

## Utiliser un champ pour sortir une valeur propre

Ajouter un champ à `input`, dont le nom est `clean`, et qui prend la valeur du champ `dirt` auquel on enlève les espaces au début et à la fin.

Astuce 1: n'oubliez pas `get` (et `dirty` non plus)
Astuce 2: `trim`

```json
{
  "$dirty": { "set": " Rrogntudjû " },
  "get": "dirty",
  "trim": true
}
```

## Remplacer du texte

À la suite de la solution de l'exercice précédent, remplacer `Rrogn` par `Nom `.

Astuce: `replace` avec deux paramètres

```json
{
  "$dirty": { "set": " Rrogntudjû " },
  "get": "dirty",
  "trim": true,
  "replace": ["Rrogn","Nom "]
}
```

## Répéter une action

À la suite encore, remplacer `tudjû` par `de Dieu` (si si!).

Astuce 1: `replace`, évidemment!
Astuce 2: numéroter l'action par `#2`

```json
{
  "$dirty": { "set": " Rrogntudjû " },
  "get": "dirty",
  "trim": true,
  "replace": ["Rrogn","Nom "],
  "replace#2": ["tudjû","de Dieu"]
}
```

## Verbaliser un tableau de code

Récupérer la liste des `name` des `projects` (voir un des exercices précédents), puis remplacer dans `ezpaarse` par `ezPAARSE`, `castor-load` par `Castor-LOAD`, `termith` par `Termith`, et `ezmesure` par `ezMESURE`.

Astuce: `mapping`

```json
{
  "select": ".projects .name",
  "mapping": {
    "ezpaarse": "ezPAARSE",
    "castor-load": "Castor-LOAD",
    "termith": "Termith",
    "ezmesure": "ezMESURE"
  }
}
```

## Cerise sur le gâteau (d'anniversaire?)

Calculer l'âge du collègue `abder`.

Astuce 1: `compute`
Astuce 2: `get` accepte les notations pointées `colleagues.abder.birth`
Astuce 3: `this` contient l'`input` (dans `compute`)
Astuce 4: nous sommes en `2016` :P

```json
{
  "get": "colleagues.abder.birth",
  "compute": "2016 - this"
}
```

## Série d'âges

Calculer l'âge des collègues de Yannick.

Astuce: `compute`, `foreach`, `select`

```json
{
  "select": ".birth",
  "foreach": {
    "compute": "2016 - this"
  }
}
```
