# Squad page - Team AKC
Voor dit project hebben we als team een squadpagina ontworpen en gerealiseerd. Op deze pagina geven we een overzicht van alle mugshots, visitekaartjes en interessante plekken op de Amstelcampus die relevant zijn voor onze squad. We hebben samen gewerkt aan het ontwerp, de inhoud en de technische uitwerking van de pagina. 

## De teamleden
Kurollos  
Ayoub  
Chama

## Live demo
[Live demo](edu.nl/vdfr7)

![QR code live demo](https://edu.nl/vdfr7~?format=png)

## Roadmap
De afgelopen 3 weken zijn wij stapsgewijs te werk gegaan om de squadpage te maken.  

- **De stappen**
  - ✍️ **Schetsen** - Wij hebben inspiratie opgezocht en besproken en een breakdown schets gemaakt van ons concept.
  - 🔨 **Bouwen** - Wij hebben op basis van de schetsen ieder een HTML en CSS website gebouwd.
  - 📋 **Feedback** - De feedback die wij hebben gekregen hebben wij verwerkt op onze website.

## Mockups

<img src="https://i.ibb.co/kTRCShf/tablet-black.png" width="150" alt="Tablet">
<img src="https://i.ibb.co/whxDrhFp/laptop.png" width="150" alt="Laptop">

## Code

```
/* Alle afbeeldingen dezelfde grootte met blur */
.grid img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, filter 0.3s ease;
  filter: blur(4px);
}
```

```
/* Responsive */
@media (min-width: 481px) {
  nav {
    flex-direction: row;
    gap: 0.5rem;
  }

  nav button {
    width: auto;
  }
}

@media (min-width: 769px) {
  section ul li img {
    width: 70%;
  }
}
```
##


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
