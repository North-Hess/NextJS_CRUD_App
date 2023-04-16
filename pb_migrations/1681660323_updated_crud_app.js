migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdvecxvabdmcw31")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "driju9rj",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdvecxvabdmcw31")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
