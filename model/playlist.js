const Playlist= {
    create: function(name, description) {
      console.log('Creating new playlist');
      const item = {
        name: name,
        id: uuid.v4(),
        description: description
      };
      this.items[item.id] = item;
      return item;
    },
    get: function() {
      console.log('Retrieving shopping list items');
      return Object.keys(this.items).map(key => this.items[key]);
    },
    delete: function(id) {
      console.log(`Deleting shopping list item \`${id}\``);
      delete this.items[id];
    },
    update: function(updatedItem) {
      console.log(`Deleting shopping list item \`${updatedItem.id}\``);
      const {id} = updatedItem;
      if (!(id in this.items)) {
        throw StorageException(
          `Can't update item \`${id}\` because doesn't exist.`)
      }
      this.items[updatedItem.id] = updatedItem;
      return updatedItem;
    }
  };