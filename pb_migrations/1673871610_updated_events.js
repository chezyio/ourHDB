migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m4uidqyed0fv7s4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxyfcwk4",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("m4uidqyed0fv7s4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxyfcwk4",
    "name": "desscription",
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
