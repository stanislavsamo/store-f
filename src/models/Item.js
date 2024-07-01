export class Item {
  constructor(entity) {
    Object.assign(
      this,
      {
        brand: "Brand",
        title: "Title",
        description: "description",
        descriptionFull: "full description",
        price: 100,
        currency: "£",
      },
      entity
    );
  }
}