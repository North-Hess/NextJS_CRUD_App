migrate((db) => {
  const collection = new Collection({
    "id": "bkc6tp77262j4ts",
    "created": "2023-04-16 15:53:24.329Z",
    "updated": "2023-04-16 15:53:24.329Z",
    "name": "crud_app",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tj3rabtb",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lk2lqjkx",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bkc6tp77262j4ts");

  return dao.deleteCollection(collection);
})
