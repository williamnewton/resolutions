class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :text
      t.integer :list_id
      t.references :user

      t.timestamps null: false
    end
  end
end
