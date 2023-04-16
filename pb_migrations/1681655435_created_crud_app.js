migrate((db) => {
  const collection = new Collection({
    "id": "wdvecxvabdmcw31",
    "created": "2023-04-16 14:30:35.677Z",
    "updated": "2023-04-16 14:30:35.677Z",
    "name": "crud_app",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ffgtkxv1",
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
        "id": "driju9rj",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("wdvecxvabdmcw31");

  return dao.deleteCollection(collection);
})
