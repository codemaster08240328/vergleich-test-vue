# vergleich-component

> Node Version: 15.6.0

## What is done?
1. Task Requirements
- `type` props passing
- `rating` props passing
- `color` props passing

2. 100% Test Coverage integrated using `JEST`

3. Technical requirements:
- Grading system provided.
- Used `VUE`, `HTML5`, `SCSS`, `TYPESCRIPT`, `JEST`

## What could be done better?

## Task description

Build a new Vue-Component 'AttributeBadge.vue'.

Look at layout-blue.png, layout-red.png, layout-number.png
how the component should look like or look here to see the component in action:

https://widget.vergleich.org/comparison/?comparisonId=26


The Attribute Badge component should get three values as Vue-Properties.

- type (type of rating in the badge, text or number)
- rating (rating between 1 (bad) and 100 (very good))
- color (the color of the badge, see layouts)

the rating value should converted in the new component to german school grades!

rating       school grades
100 - 90     1 = sehr gut
 89 - 70     2 = gut
 69 - 50     3 = befriedigend
 49 - 30     4 = ausreichend
 29 - 20     5 = mangelhaft
  19 - 1     6 = ungenügend

translations: 
1 = very good, 2 = good, 3 = satisfactory, 4 = sufficient, 5 = poor, 6 = deficient


## Testing

The finish component and its methods should be tested with jest.

Build unit-test and test-snapshot.


## Technology

Use minimum following technologies to build the component and the component-test:

VUE, HTML5, SCSS, TYPESCRIPT, JEST



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
