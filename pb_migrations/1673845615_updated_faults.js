migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05z5ssykn0utw0v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eju8vaoq",
    "name": "estimated",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05z5ssykn0utw0v")

  // remove
  collection.schema.removeField("eju8vaoq")

  return dao.saveCollection(collection)
})
